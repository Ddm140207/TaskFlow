/**
 * Static blog generator for TaskFlow.
 *
 * The site is plain HTML served by Firebase Hosting, so there is no framework
 * and no database. Every page is written here, at build time, from the content
 * modules in `content/posts/`:
 *
 *   node scripts/build-blog.mjs
 *
 * Output:
 *   public/blog/<slug>.html   one article, with BlogPosting, BreadcrumbList and
 *                             FAQPage structured data
 *   public/blog.html          the index, grouped by category
 *   public/sitemap.xml        every page of the site
 *   public/robots.txt         crawler policy
 *
 * Rules the generator enforces so the site stays honest:
 *   - a duplicate slug is a build error, never a silent overwrite
 *   - every post must link to at least one Kora page, with a varied anchor
 *   - every related slug must exist, because a dead internal link is worse than
 *     no link at all
 */
import { mkdir, readdir, writeFile, unlink } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const HERE = fileURLToPath(new URL('.', import.meta.url));
const ROOT = resolve(HERE, '..');
const PUBLIC = join(ROOT, 'public');
const BLOG_DIR = join(PUBLIC, 'blog');
const CONTENT_DIR = join(ROOT, 'content', 'posts');

const SITE = 'https://taskflow-minimalist-manager.web.app';
const TODAY = '2026-11-16';

const KORA_HOST = 'https://kora-agent.com';

/* ------------------------------------------------------------------ content */

const files = (await readdir(CONTENT_DIR)).filter((file) => file.endsWith('.mjs')).sort();
const posts = [];
for (const file of files) {
  const module = await import(pathToFileURL(join(CONTENT_DIR, file)).href);
  for (const post of module.default ?? []) posts.push({ ...post, batch: file });
}

const slugs = new Set();
for (const post of posts) {
  if (!post.slug) throw new Error(`Post without slug in ${post.batch}: ${post.title}`);
  if (slugs.has(post.slug)) throw new Error(`Duplicate slug: ${post.slug} (${post.batch})`);
  slugs.add(post.slug);
}

for (const post of posts) {
  if (!post.koraLinks?.length) throw new Error(`Post without a Kora link: ${post.slug}`);
  // A related slug that does not exist yet is dropped instead of shipped as a
  // dead link. The generator fills the free slots with same category posts, so
  // the page always has somewhere to go and a typo never breaks the build.
  const known = (post.related ?? []).filter((slug) => slugs.has(slug));
  const unknown = (post.related ?? []).filter((slug) => !slugs.has(slug));
  if (unknown.length) {
    console.warn(`  note: ${post.slug} references unknown slug(s): ${unknown.join(', ')}`);
  }
  post.related = known;
}

console.log(`${posts.length} posts from ${files.length} content modules`);

/* ------------------------------------------------------------------ helpers */

const MONTHS = [
  'enero',
  'febrero',
  'marzo',
  'abril',
  'mayo',
  'junio',
  'julio',
  'agosto',
  'septiembre',
  'octubre',
  'noviembre',
  'diciembre',
];

function formatDate(iso) {
  const [year, month, day] = iso.split('-').map(Number);
  return `${day} de ${MONTHS[month - 1]} de ${year}`;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * A search result shows roughly 60 characters of a title. The H1 is written for
 * the page and is often longer, so the <title> is built from the candidates that
 * fit: the promise of the headline (the part before the colon) and the target
 * keyword, which is the phrase the page wants to be found for. The longest
 * candidate that fits wins, because a 20 character title wastes the result. A
 * post can always pin its own `metaTitle` when the derived one reads badly.
 */
const TITLE_SUFFIX = ' | TaskFlow';
const TITLE_BUDGET = 65 - TITLE_SUFFIX.length;
const DERIVED_TITLES = [];
const TRAILING_STOPWORDS =
  /[\s,;:.·-]+\b(a|al|de|del|con|en|para|por|la|el|los|las|un|una|unos|unas|que|sin|y|o|su|tu|se|lo|más|como|desde|entre|sobre)$/i;

function tidyTitle(value) {
  let out = value.trim().replace(/[\s,;:.·-]+$/, '');
  // A title that ends in a preposition reads as a sentence that was cut.
  for (let i = 0; i < 3; i += 1) {
    const next = out.replace(TRAILING_STOPWORDS, '');
    if (next === out || !next) break;
    out = next;
  }
  return out;
}

function derivedTitle(post) {
  const h1 = post.h1.trim();
  if (h1.length <= TITLE_BUDGET) return h1;

  const candidates = [];

  // The lead phrase of the headline, before the explanation: "La ventana de 24
  // horas de WhatsApp" instead of the whole sentence.
  for (const mark of [': ', '? ', ' (', ', ']) {
    const at = h1.indexOf(mark);
    if (at >= 12 && at <= TITLE_BUDGET) {
      candidates.push(tidyTitle(h1.slice(0, at)));
      break;
    }
  }

  // The phrase the page actually wants to be found for.
  if (post.keyword && post.keyword.length <= TITLE_BUDGET) {
    candidates.push(tidyTitle(post.keyword.charAt(0).toUpperCase() + post.keyword.slice(1)));
  }

  const fitting = candidates.filter((value) => value.length >= 12);
  if (fitting.length) return fitting.sort((a, b) => b.length - a.length)[0];

  // Last resort, only when the headline has no lead phrase and no keyword fits.
  const words = h1.split(/\s+/);
  let trimmed = '';
  for (const word of words) {
    const next = trimmed ? `${trimmed} ${word}` : word;
    if (next.length > TITLE_BUDGET) break;
    trimmed = next;
  }
  return tidyTitle(trimmed) || h1;
}

function seoTitle(post) {
  if (post.metaTitle) return post.metaTitle;
  const title = `${derivedTitle(post)}${TITLE_SUFFIX}`;
  DERIVED_TITLES.push({ slug: post.slug, title });
  return title;
}

function escapeXml(value) {
  return escapeHtml(value).replace(/'/g, '&apos;');
}

function wordsIn(post) {
  const body = [
    post.intro ?? '',
    ...(post.sections ?? []).map((section) => section.html ?? ''),
    ...(post.steps ?? []).map((step) => `${step.title} ${step.text}`),
    ...(post.faq ?? []).map((item) => `${item.q} ${item.a}`),
  ].join(' ');
  const text = body
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z]+;/g, ' ');
  return text.split(/\s+/).filter(Boolean).length;
}

function readMinutes(post) {
  return Math.max(3, Math.round(wordsIn(post) / 220));
}

function pickRelated(post, candidates) {
  const explicit = (post.related ?? []).map((slug) => posts.find((p) => p.slug === slug)).filter(Boolean);
  const sameCategory = posts.filter(
    (candidate) => candidate.slug !== post.slug && candidate.category === post.category,
  );
  const pool = [...explicit];
  for (const candidate of sameCategory) {
    if (pool.length >= 3) break;
    if (!pool.some((item) => item.slug === candidate.slug)) pool.push(candidate);
  }
  for (const candidate of candidates ?? []) {
    if (pool.length >= 3) break;
    if (!pool.some((item) => item.slug === candidate.slug)) pool.push(candidate);
  }
  return pool.slice(0, 3);
}

/* ------------------------------------------------------------------- layout */

const CATEGORY_TONE = {
  'Atención al cliente': '#6366f1',
  Automatización: '#0ea5e9',
  Productividad: '#10b981',
  'IA para negocios': '#f59e0b',
  'WhatsApp': '#22c55e',
  Comparativas: '#8b5cf6',
  'Guías prácticas': '#ec4899',
  'Datos y métricas': '#0f766e',
};

function toneFor(category) {
  return CATEGORY_TONE[category] ?? '#6366f1';
}

const baseHead = ({ title, description, canonical, type = 'website', jsonLd = [] }) => `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}">
<link rel="canonical" href="${canonical}">
<meta property="og:type" content="${type}">
<meta property="og:title" content="${escapeHtml(title)}">
<meta property="og:description" content="${escapeHtml(description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:site_name" content="TaskFlow">
<meta property="og:locale" content="es_CR">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${escapeHtml(title)}">
<meta name="twitter:description" content="${escapeHtml(description)}">
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/blog.css">
${jsonLd.map((item) => `<script type="application/ld+json">${JSON.stringify(item)}</script>`).join('\n')}
</head>
<body>
<div class="glass-background"></div>
`;

const siteHeader = `<header class="site-header">
  <div class="site-header__inner">
    <a class="brand" href="/"><span class="brand__dot"></span><span>TaskFlow</span></a>
    <nav class="site-nav">
      <a href="/blog">Artículos</a>
      <a href="/blog#categorias">Categorías</a>
      <a class="site-nav__cta" href="${KORA_HOST}?utm_source=taskflow&amp;utm_medium=blog&amp;utm_campaign=nav" target="_blank" rel="noopener">Kora AI</a>
    </nav>
  </div>
</header>
`;

const siteFooter = `<footer class="site-footer">
  <div class="site-footer__inner">
    <p><strong>TaskFlow</strong> es un gestor de tareas con IA. Para atender clientes y automatizar conversaciones, <a href="${KORA_HOST}?utm_source=taskflow&amp;utm_medium=blog&amp;utm_campaign=footer" target="_blank" rel="noopener">Kora AI</a>.</p>
    <p class="site-footer__meta"><a href="/blog">Todos los artículos</a> · <a href="/">TaskFlow</a></p>
  </div>
</footer>
`;

/* --------------------------------------------------------------- post page */

function renderPost(post, related) {
  const canonical = `${SITE}/blog/${post.slug}`;
  const tone = toneFor(post.category);
  const minutes = readMinutes(post);

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.h1,
      description: post.description,
      datePublished: post.date,
      dateModified: post.date,
      inLanguage: 'es',
      mainEntityOfPage: canonical,
      author: { '@type': 'Organization', name: 'TaskFlow' },
      publisher: { '@type': 'Organization', name: 'TaskFlow' },
      keywords: post.keyword,
      articleSection: post.category,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'TaskFlow', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'Artículos', item: `${SITE}/blog` },
        { '@type': 'ListItem', position: 3, name: post.h1, item: canonical },
      ],
    },
  ];

  if (post.faq?.length) {
    jsonLd.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: post.faq.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    });
  }

  const sections = (post.sections ?? [])
    .map(
      (section, index) => `<section class="prose__section" id="s${index + 1}">
  <h2>${escapeHtml(section.h2)}</h2>
  ${section.html}
</section>`,
    )
    .join('\n');

  const toc = (post.sections ?? []).length >= 3
    ? `<nav class="toc" aria-label="Contenido">
  <p class="toc__title">En este artículo</p>
  <ol>
    ${post.sections.map((section, index) => `<li><a href="#s${index + 1}">${escapeHtml(section.h2)}</a></li>`).join('\n    ')}
  </ol>
</nav>`
    : '';

  const stats = post.stats?.length
    ? `<div class="stats-grid">
  ${post.stats
    .map(
      (stat) => `<div class="stat">
    <span class="stat__value">${escapeHtml(stat.value)}</span>
    <span class="stat__label">${escapeHtml(stat.label)}</span>
  </div>`,
    )
    .join('\n  ')}
</div>`
    : '';

  const steps = post.steps?.length
    ? `<ol class="steps">
  ${post.steps
    .map(
      (step, index) => `<li class="step">
    <span class="step__number">${index + 1}</span>
    <div><h3>${escapeHtml(step.title)}</h3><p>${step.text}</p></div>
  </li>`,
    )
    .join('\n  ')}
</ol>`
    : '';

  const table = post.table
    ? `<div class="table-wrap"><table>
  <thead><tr>${post.table.head.map((cell) => `<th>${escapeHtml(cell)}</th>`).join('')}</tr></thead>
  <tbody>${post.table.rows
    .map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join('')}</tr>`)
    .join('')}</tbody>
</table></div>`
    : '';

  const faq = post.faq?.length
    ? `<section class="faq" aria-label="Preguntas frecuentes">
  <h2>Preguntas frecuentes</h2>
  ${post.faq
    .map(
      (item) => `<details>
    <summary>${escapeHtml(item.q)}</summary>
    <p>${escapeHtml(item.a)}</p>
  </details>`,
    )
    .join('\n  ')}
</section>`
    : '';

  const koraLinks = post.koraLinks
    .map(
      (link) =>
        `<a class="kora-link" href="${link.url}${link.url.includes('?') ? '&' : '?'}utm_source=taskflow&amp;utm_medium=blog&amp;utm_campaign=${post.slug}" target="_blank" rel="noopener">${escapeHtml(link.anchor)}</a>`,
    )
    .join(' · ');

  const relatedCards = related
    .map(
      (item) => `<a class="card card--small" href="/blog/${item.slug}">
  <span class="card__category" style="--tone:${toneFor(item.category)}">${escapeHtml(item.category)}</span>
  <span class="card__title">${escapeHtml(item.h1)}</span>
  <span class="card__meta">${readMinutes(item)} min de lectura</span>
</a>`,
    )
    .join('\n');

  return `${baseHead({ title: seoTitle(post), description: post.description, canonical, type: 'article', jsonLd })}
${siteHeader}
<main class="page">
  <nav class="breadcrumb" aria-label="Ruta">
    <a href="/">TaskFlow</a> <span>/</span> <a href="/blog">Artículos</a> <span>/</span> <span>${escapeHtml(post.category)}</span>
  </nav>

  <article class="post">
    <header class="post__header">
      <span class="card__category" style="--tone:${tone}">${escapeHtml(post.category)}${post.type === 'infografia' ? ' · Infografía' : ''}</span>
      <h1>${escapeHtml(post.h1)}</h1>
      <p class="post__lead">${escapeHtml(post.intro)}</p>
      <p class="post__meta">Publicado el ${formatDate(post.date)} · ${minutes} min de lectura</p>
    </header>

    ${toc}
    ${stats}

    <div class="prose">
${sections}
${steps}
${table}
    </div>

    ${faq}

    <aside class="cta">
      <p class="cta__eyebrow">Del artículo a la operación</p>
      <h2>${escapeHtml(post.cta?.title ?? 'Si el cuello de botella es la conversación, hay un agente para eso')}</h2>
      <p>${escapeHtml(post.cta?.text ?? 'Kora AI atiende WhatsApp, correo e Instagram con flujos deterministas y herramientas conectadas, y deja el caso en manos de una persona cuando hace falta.')}</p>
      <p class="cta__links">${koraLinks}</p>
    </aside>

    <section class="related" aria-label="Sigue leyendo">
      <h2>Sigue leyendo</h2>
      <div class="cards cards--grid">
${relatedCards}
      </div>
    </section>
  </article>
</main>
${siteFooter}
</body>
</html>
`;
}

/* -------------------------------------------------------------------- index */

function renderIndex() {
  const categories = [...new Set(posts.map((post) => post.category))].sort((a, b) => a.localeCompare(b, 'es'));
  const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));

  const cards = sorted
    .map(
      (post) => `<a class="card" data-category="${escapeHtml(post.category)}" href="/blog/${post.slug}">
  <span class="card__category" style="--tone:${toneFor(post.category)}">${escapeHtml(post.category)}</span>
  <span class="card__title">${escapeHtml(post.h1)}</span>
  <span class="card__excerpt">${escapeHtml(post.description)}</span>
  <span class="card__meta">${readMinutes(post)} min de lectura</span>
</a>`,
    )
    .join('\n');

  const categoryLinks = categories
    .map((category) => {
      const count = posts.filter((post) => post.category === category).length;
      return `<a class="chip" href="#categorias" data-filter="${escapeHtml(category)}" style="--tone:${toneFor(category)}">${escapeHtml(category)} <span>${count}</span></a>`;
    })
    .join('\n');

  const canonical = `${SITE}/blog`;
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: 'TaskFlow: IA, automatización y productividad',
      description:
        'Artículos sobre inteligencia artificial, atención al cliente, automatización de WhatsApp y productividad para negocios hispanohablantes.',
      url: canonical,
      inLanguage: 'es',
      blogPost: sorted.slice(0, 20).map((post) => ({
        '@type': 'BlogPosting',
        headline: post.h1,
        url: `${SITE}/blog/${post.slug}`,
        datePublished: post.date,
      })),
    },
  ];

  return `${baseHead({
    title: `${posts.length} artículos de IA, automatización y productividad | TaskFlow`,
    description:
      'Guías, comparativas y datos sobre IA para negocios: atención al cliente, WhatsApp, automatización y productividad. Nuevos artículos cada semana.',
    canonical,
    jsonLd,
  })}
${siteHeader}
<main class="page">
  <header class="index-header">
    <h1>IA, automatización y productividad, sin humo</h1>
    <p>${posts.length} artículos para decidir con criterio: qué automatizar, qué medir y dónde la IA todavía no alcanza. Escritos para negocios hispanohablantes.</p>
    <div class="index-tools">
      <input id="search" type="search" placeholder="Buscar un tema (WhatsApp, citas, ROI…)" aria-label="Buscar artículos">
      <span id="count" class="index-count">${posts.length} artículos</span>
    </div>
  </header>

  <section id="categorias" class="chips" aria-label="Categorías">
    <button class="chip chip--active" data-filter="">Todos</button>
${categoryLinks}
  </section>

  <section class="cards cards--grid" id="cards">
${cards}
  </section>

  <aside class="cta">
    <p class="cta__eyebrow">El siguiente paso</p>
    <h2>Lee el artículo, automatiza la conversación</h2>
    <p>Kora AI responde en WhatsApp e Instagram, agenda con el calendario real del negocio y entrega el caso a una persona cuando la conversación lo pide.</p>
    <p class="cta__links"><a class="kora-link" href="${KORA_HOST}?utm_source=taskflow&amp;utm_medium=blog&amp;utm_campaign=index" target="_blank" rel="noopener">Ver cómo funciona Kora</a></p>
  </aside>
</main>
${siteFooter}
<script>
(function () {
  var search = document.getElementById('search');
  var cards = Array.prototype.slice.call(document.querySelectorAll('#cards .card'));
  var chips = Array.prototype.slice.call(document.querySelectorAll('.chip[data-filter]'));
  var count = document.getElementById('count');
  var active = '';
  function apply() {
    var term = (search.value || '').toLowerCase().trim();
    var shown = 0;
    cards.forEach(function (card) {
      var text = card.textContent.toLowerCase();
      var okCategory = !active || card.getAttribute('data-category') === active;
      var okTerm = !term || text.indexOf(term) !== -1;
      var visible = okCategory && okTerm;
      card.style.display = visible ? '' : 'none';
      if (visible) shown += 1;
    });
    count.textContent = shown + (shown === 1 ? ' artículo' : ' artículos');
  }
  search.addEventListener('input', apply);
  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      active = chip.getAttribute('data-filter') || '';
      chips.forEach(function (other) { other.classList.remove('chip--active'); });
      chip.classList.add('chip--active');
      apply();
      document.getElementById('cards').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
})();
</script>
</body>
</html>
`;
}

/* ----------------------------------------------------------------- sitemap */

function renderSitemap() {
  const urls = [
    { loc: `${SITE}/`, priority: '1.0', changefreq: 'monthly' },
    { loc: `${SITE}/blog`, priority: '0.9', changefreq: 'weekly' },
    ...posts.map((post) => ({
      loc: `${SITE}/blog/${post.slug}`,
      lastmod: post.date,
      priority: '0.7',
      changefreq: 'monthly',
    })),
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${escapeXml(url.loc)}</loc>${url.lastmod ? `\n    <lastmod>${url.lastmod}</lastmod>` : ''}
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`;
}

/* -------------------------------------------------------------------- write */

await mkdir(BLOG_DIR, { recursive: true });

const expected = new Set();
for (const post of posts) {
  const related = pickRelated(post, posts);
  const html = renderPost(post, related);
  const file = join(BLOG_DIR, `${post.slug}.html`);
  await writeFile(file, html, 'utf8');
  expected.add(`${post.slug}.html`);
}

if (existsSync(BLOG_DIR)) {
  for (const file of await readdir(BLOG_DIR)) {
    if (file.endsWith('.html') && !expected.has(file)) {
      await unlink(join(BLOG_DIR, file));
      console.log(`  removed stale page ${file}`);
    }
  }
}

await writeFile(join(PUBLIC, 'blog.html'), renderIndex(), 'utf8');
await writeFile(join(PUBLIC, 'sitemap.xml'), renderSitemap(), 'utf8');
await writeFile(
  join(PUBLIC, 'robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`,
  'utf8',
);

const totalWords = posts.reduce((sum, post) => sum + wordsIn(post), 0);
console.log(`built ${posts.length} pages, ${totalWords} words, sitemap and index`);
console.log(`newest date: ${posts.map((p) => p.date).sort().at(-1)} (today ${TODAY})`);

// Two pages that share a <title> compete against each other in a search result,
// so the derived titles are checked here instead of being discovered later.
const seenTitles = new Map();
for (const { slug, title } of DERIVED_TITLES) {
  if (seenTitles.has(title)) {
    console.warn(`  duplicate title: ${slug} and ${seenTitles.get(title)} share "${title}"`);
  } else {
    seenTitles.set(title, slug);
  }
}
console.log(`${DERIVED_TITLES.length} derived titles, ${posts.length - DERIVED_TITLES.length} pinned`);
