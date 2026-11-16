/**
 * Verificación del sitio generado. No es parte del build: se corre a mano para
 * revisar que 100 páginas sigan siendo 100 páginas honestas.
 *
 *   node scripts/verify-blog.mjs
 */
import { readdir, readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(fileURLToPath(new URL('.', import.meta.url)), '..');
const PUBLIC = join(ROOT, 'public');
const BLOG = join(PUBLIC, 'blog');

const files = (await readdir(BLOG)).filter((file) => file.endsWith('.html'));
const problems = [];
const titles = new Map();
const descriptions = new Map();
let koraLinks = 0;

const index = await readFile(join(PUBLIC, 'blog.html'), 'utf8');
const indexSlugs = new Set([...index.matchAll(/href="\/blog\/([a-z0-9-]+)"/g)].map((m) => m[1]));

for (const file of files) {
  const html = await readFile(join(BLOG, file), 'utf8');
  const slug = file.replace(/\.html$/, '');
  const at = `${slug}:`;

  if (!html.includes('<meta charset="UTF-8">')) problems.push(`${at} missing charset`);
  if (!html.includes(`<link rel="canonical" href="https://taskflow-minimalist-manager.web.app/blog/${slug}">`)) {
    problems.push(`${at} canonical wrong`);
  }
  if (!html.includes('"@type":"BlogPosting"')) problems.push(`${at} missing BlogPosting`);
  if (!html.includes('"@type":"BreadcrumbList"')) problems.push(`${at} missing BreadcrumbList`);

  const title = html.match(/<title>([^<]+)<\/title>/)?.[1] ?? '';
  const description = html.match(/<meta name="description" content="([^"]+)">/)?.[1] ?? '';
  if (!title) problems.push(`${at} no title`);
  if (!description) problems.push(`${at} no description`);
  if (title.length > 65) problems.push(`${at} title ${title.length} chars`);
  if (description.length > 165) problems.push(`${at} description ${description.length} chars`);
  if (titles.has(title)) problems.push(`${at} duplicate title with ${titles.get(title)}`);
  else titles.set(title, slug);
  if (descriptions.has(description)) problems.push(`${at} duplicate description with ${descriptions.get(description)}`);
  else descriptions.set(description, slug);

  const kora = html.match(/href="https:\/\/kora-agent\.com[^"]*"/g) ?? [];
  if (!kora.length) problems.push(`${at} no Kora link`);
  koraLinks += kora.length;

  for (const match of html.matchAll(/href="\/blog\/([a-z0-9-]+)"/g)) {
    const target = match[1];
    if (target === slug) continue;
    if (!existsSync(join(BLOG, `${target}.html`))) problems.push(`${at} dead internal link ${target}`);
  }

  if (html.includes('undefined') || html.includes('NaN')) problems.push(`${at} contains undefined/NaN`);
  if (/Ã|Â|â€/.test(html)) problems.push(`${at} mojibake`);

  const jsonLd = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  for (const [, raw] of jsonLd) {
    try {
      JSON.parse(raw);
    } catch {
      problems.push(`${at} invalid JSON-LD`);
    }
  }

  if (!indexSlugs.has(slug)) problems.push(`${at} not linked from the index`);

  const words = html
    .replace(/<script[\s\S]*?<\/script>/g, ' ')
    .replace(/<style[\s\S]*?<\/style>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length;
  if (words < 350) problems.push(`${at} thin page (${words} words)`);
}

const sitemap = await readFile(join(PUBLIC, 'sitemap.xml'), 'utf8');
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
for (const url of sitemapUrls) {
  if (url.endsWith('/') || url.endsWith('/blog')) continue;
  const slug = url.split('/').pop();
  if (!existsSync(join(BLOG, `${slug}.html`))) problems.push(`sitemap: ${url} does not exist`);
}

console.log(`pages: ${files.length}`);
console.log(`index links: ${indexSlugs.size}`);
console.log(`sitemap urls: ${sitemapUrls.length}`);
console.log(`kora links: ${koraLinks} (${(koraLinks / files.length).toFixed(1)} per page)`);

if (problems.length) {
  console.log(`\n${problems.length} problems:`);
  for (const problem of problems.slice(0, 40)) console.log(`  ${problem}`);
  process.exitCode = 1;
} else {
  console.log('\nall checks passed');
}
