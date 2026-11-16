/**
 * 1-12: atención al cliente con IA y los primeros cimientos de WhatsApp.
 * Cada entrada es contenido propio: sin plantillas repetidas entre artículos.
 */
export default [
  {
    slug: 'ia-atencion-cliente-pymes-guia',
    category: 'Atención al cliente',
    type: 'articulo',
    date: '2026-11-16',
    keyword: 'IA atención al cliente pymes',
    h1: 'IA para atención al cliente en pymes: qué funciona y qué no',
    description:
      'Guía honesta para pymes que quieren usar IA en atención al cliente: qué automatizar primero, qué dejar en manos humanas y cómo medir si funcionó.',
    intro:
      'La IA no arregla una atención al cliente desordenada: la acelera. Si las respuestas ya eran inconsistentes, el resultado es más inconsistencias por minuto. Esta guía ordena el trabajo real de una pyme que atiende por WhatsApp y correo, sin promesas de magia.',
    sections: [
      {
        h2: 'Primero el proceso, después la herramienta',
        html: '<p>Antes de elegir cualquier plataforma, escriba las diez preguntas que más recibe y la respuesta correcta de cada una. Ese documento es el activo, no el software. Una IA alimentada con respuestas claras resuelve entre el 40% y el 60% de los mensajes repetidos; una IA alimentada con suposiciones crea problemas nuevos.</p><p>Si su equipo no puede contestar esas diez preguntas por escrito, el problema es de información, no de tecnología.</p>',
      },
      {
        h2: 'Lo que la IA hace bien hoy',
        html: '<ul><li><strong>Responder lo repetido:</strong> horarios, ubicación, precios de lista, cómo pagar, qué incluye un servicio.</li><li><strong>Calificar:</strong> distinguir una consulta de un reclamo y de una venta.</li><li><strong>Agendar:</strong> consultar disponibilidad real y confirmar una cita.</li><li><strong>Recordar:</strong> retomar un carrito o una cotización sin que nadie lo persiga.</li><li><strong>Transcribir:</strong> convertir una nota de voz en texto para el equipo.</li></ul>',
      },
      {
        h2: 'Lo que todavía rompe la experiencia',
        html: '<p>Prometer resultados, negociar precios que nadie autorizó, resolver casos emocionales delicados y decidir excepciones. En esos puntos la IA debe callarse y abrir el caso.</p><blockquote><p>Regla práctica: la IA administra información y agenda; la persona administra el criterio y el conflicto.</p></blockquote>',
      },
      {
        h2: 'Cómo se mide en el primer mes',
        html: '<p>Elija tres números antes de empezar: tiempo de primera respuesta, porcentaje de consultas resueltas sin intervención y porcentaje de conversaciones que terminan en una acción (cita, compra, cotización). Si los tres no mejoran, la automatización está decorando un problema.</p>',
      },
    ],
    faq: [
      {
        q: '¿Necesito contratar a alguien para mantener la IA?',
        a: 'No con un agente bien implementado. Usted actualiza precios y horarios en un panel, y el agente los usa. Si necesita un ingeniero para cambiar un horario, la herramienta está mal diseñada.',
      },
      {
        q: '¿La IA reemplaza a mi equipo?',
        a: 'Reemplaza el trabajo repetido. En la práctica el equipo deja de responder "¿a qué hora abren?" y empieza a atender los casos que sí necesitan criterio.',
      },
      {
        q: '¿Cuánto tarda una implementación razonable?',
        a: 'Una pyme con un canal y diez preguntas frecuentes puede estar operando en una semana. Lo que tarda es la revisión de respuestas, no la configuración.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/ia-atencion-cliente', anchor: 'atención al cliente con IA' },
      { url: 'https://kora-agent.com/agente-ia-whatsapp', anchor: 'un agente que atiende WhatsApp' },
    ],
    related: ['tiempo-de-primera-respuesta', 'cuando-la-ia-no-debe-responder', 'errores-al-automatizar-atencion'],
  },
  {
    slug: 'tiempo-de-primera-respuesta',
    metaTitle: 'Tiempo de primera respuesta: cuánto es aceptable',
    category: 'Datos y métricas',
    type: 'articulo',
    date: '2026-11-15',
    keyword: 'tiempo de primera respuesta',
    h1: 'Tiempo de primera respuesta: el número que decide si le escriben de nuevo',
    description:
      'Qué es el tiempo de primera respuesta, cómo se calcula por canal y por qué cinco minutos cambian la conversión en WhatsApp.',
    intro:
      'Un cliente escribe a tres negocios a la vez y compra al que contesta primero. No es una intuición: es la forma en que se comporta una persona con el teléfono en la mano. El tiempo de primera respuesta es la métrica más barata de mejorar y la que más rápido se nota en ventas.',
    sections: [
      {
        h2: 'Qué cuenta y qué no',
        html: '<p>Cuenta desde que el mensaje entra hasta que sale la primera respuesta humana o automática con contenido útil. No cuenta un acuse de "recibido, en breve le atendemos": eso solo confirma que el mensaje llegó.</p><p>El error más común es promediar todo junto. Un promedio de 20 minutos puede esconder que el 70% de los mensajes se responde en dos minutos y el 30% queda abandonado dos horas.</p>',
      },
      {
        h2: 'Cómo se ve en la práctica',
        html: '<ul><li><strong>Menos de 5 minutos:</strong> la conversación sigue viva y el cliente pregunta lo que falta.</li><li><strong>5 a 30 minutos:</strong> se responde, pero muchas veces ya compró en otro lado.</li><li><strong>Más de una hora:</strong> se responde a alguien que ya no recuerda su propia pregunta.</li><li><strong>Nunca:</strong> el mensaje quedó enterrado entre notificaciones.</li></ul>',
      },
      {
        h2: 'El horario es parte del problema',
        html: '<p>La mayoría de los mensajes no llegan en horario de oficina. Un negocio que atiende de 9 a 6 recibe consultas a las 8 de la noche y a las 11 del domingo. La respuesta automática no necesita vender: necesita contestar la pregunta de fondo y dejar la conversación ordenada para la mañana.</p>',
      },
      {
        h2: 'Qué automatizar para bajarlo',
        html: '<p>Primero, una respuesta inmediata con la información que ya existe. Segundo, una pregunta de calificación para que el equipo llegue con contexto. Tercero, una transferencia limpia cuando el caso lo requiere, con el historial completo en pantalla.</p><p>Un agente bien implementado deja ese primer mensaje en segundos, incluso a medianoche, y no deja al cliente esperando una persona para saber el precio de lista.</p>',
      },
    ],
    faq: [
      {
        q: '¿Responder muy rápido no hace que el cliente se sienta atendido por un robot?',
        a: 'Lo que molesta no es la velocidad, es la incoherencia. Un robot que repite "no entiendo" en un segundo es peor que una persona en diez minutos. La velocidad solo suma cuando la respuesta sirve.',
      },
      {
        q: '¿Cuál es un objetivo realista para una pyme?',
        a: 'Primer mensaje en menos de un minuto, respuesta con contenido en menos de cinco minutos durante horario, y menos de una hora fuera de horario con un mensaje automático que resuelva lo básico.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/automatizacion-whatsapp', anchor: 'automatizar la primera respuesta' },
    ],
    related: ['ia-atencion-cliente-pymes-guia', 'metricas-atencion-cliente-ia', 'ventana-24-horas-whatsapp'],
  },
  {
    slug: 'cuando-la-ia-no-debe-responder',
    category: 'Atención al cliente',
    type: 'articulo',
    date: '2026-11-14',
    keyword: 'cuándo no usar IA en atención al cliente',
    h1: 'Cuándo la IA no debe responder: cinco casos que debe frenar',
    description:
      'Los límites de la IA en atención al cliente: reclamos, salud, precios especiales, datos sensibles y crisis. Qué hacer en cada caso.',
    intro:
      'La confianza en un agente automático se pierde una sola vez. Un mensaje fuera de lugar pesa más que cincuenta aciertos, porque el cliente lo cuenta. Estos son los casos donde la respuesta correcta es no responder.',
    sections: [
      {
        h2: 'Reclamos con emoción alta',
        html: '<p>Cuando alguien escribe enojado por un cobro, una entrega o una promesa incumplida, no quiere información: quiere ser escuchado. Un párrafo generado con tono amable se lee como burla. La IA debe reconocer el reclamo, no discutirlo, y pasarlo con una nota de contexto.</p><p>Un mensaje honesto tipo "esto lo tiene que ver una persona del equipo, ya le paso el caso" funciona mejor que cualquier intento de explicación automática.</p>',
      },
      {
        h2: 'Salud, legal y dinero comprometido',
        html: '<p>Diagnósticos, interpretaciones legales y decisiones de crédito son terreno de profesionales. La IA puede dar información general, nunca una recomendación personalizada.</p><blockquote><p>Si una respuesta equivocada puede costarle dinero, salud o un derecho a la persona, la IA no la da sola.</p></blockquote>',
      },
      {
        h2: 'Precios especiales y excepciones',
        html: '<p>Descuentos, plazos y condiciones fuera de lista los autoriza una persona. Un agente que improvisa un descuento crea un compromiso que el negocio no puede sostener.</p>',
      },
      {
        h2: 'Datos sensibles y verificación de identidad',
        html: '<p>La IA no pide cédula, tarjeta ni contraseñas por chat. Cuando el caso requiere verificar identidad, se transfiere a un canal seguro y a una persona.</p>',
      },
      {
        h2: 'Crisis públicas y rumores',
        html: '<p>Un accidente, una acusación o una falla masiva no se manejan con respuestas automáticas individuales. Se detiene la automatización y se responde con una voz oficial.</p>',
      },
    ],
    faq: [
      {
        q: '¿Cómo le digo a la IA que frene?',
        a: 'Con reglas explícitas y palabras clave: reclamo, cobro indebido, abogado, alergia, reacción, urgencia, cancelación. Al detectarlas, transfiere con el historial y no intenta resolver.',
      },
      {
        q: '¿Eso no baja el porcentaje de automatización?',
        a: 'Lo baja y está bien. Automatizar el 60% que corresponde es mejor que automatizar el 90% y perder clientes en el 10% restante.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/ia-atencion-cliente', anchor: 'IA que sabe cuándo pasar el caso' },
      { url: 'https://kora-agent.com', anchor: 'Kora' },
    ],
    related: ['handoff-humano-ia', 'ia-atencion-cliente-pymes-guia', 'alucinaciones-como-controlarlas'],
  },
  {
    slug: 'handoff-humano-ia',
    metaTitle: 'Traspaso de IA a humano: cuándo y cómo',
    category: 'Atención al cliente',
    type: 'guia',
    date: '2026-11-13',
    keyword: 'handoff humano IA',
    h1: 'Traspaso de IA a humano: cómo hacerlo sin que el cliente repita todo',
    description:
      'Diseño del handoff entre IA y persona: cuándo transferir, qué contexto entregar y cómo evitar que el cliente cuente su caso dos veces.',
    intro:
      'El momento más frágil de una atención automatizada es el traspaso. Si el cliente tiene que explicar de nuevo lo que ya escribió, el ahorro de tiempo se convierte en irritación. Un buen traspaso es invisible: la persona continua la conversación, no la reinicia.',
    sections: [
      {
        h2: 'Cuándo transferir',
        html: '<ul><li>El cliente pide hablar con una persona.</li><li>El caso entra en una de las reglas de freno (reclamo, salud, precio especial).</li><li>La IA no tiene el dato y no puede verificarlo.</li><li>Hay dos intentos fallidos seguidos sobre la misma pregunta.</li><li>El cliente escribe en un idioma que el agente no domina.</li></ul>',
      },
      {
        h2: 'Qué contexto debe viajar',
        html: '<p>Nombre, canal, resumen de una línea, productos o servicios mencionados, fecha y hora de la cita si existe, y el último mensaje textual. Con eso, la persona saluda por su nombre y retoma. Sin eso, empieza de cero.</p>',
      },
      {
        h2: 'Cómo se dice',
        html: '<p>Un mensaje corto, sin disculpas excesivas: "Le paso con Ana, del equipo, que puede resolverle el cambio. Ya le conté lo que me explicó." Esa última frase es la que marca la diferencia: le dice al cliente que su tiempo se respetó.</p>',
      },
      {
        h2: 'Qué pasa si nadie está disponible',
        html: '<p>No se promete una hora que no se puede cumplir. Se ofrece una alternativa concreta: dejar el caso registrado con un número de referencia, o un horario real de respuesta. Y se cumple.</p>',
      },
    ],
    faq: [
      {
        q: '¿Quién decide el traspaso, la IA o una regla?',
        a: 'Las dos. Las reglas duras (reclamo, salud, cancelación) transfieren siempre, y la IA puede pedir ayuda cuando no tiene una respuesta verificable.',
      },
      {
        q: '¿El cliente debe saber que habló con IA?',
        a: 'No necesita un aviso solemne, pero tampoco debe ser engañado. Lo natural es que la IA se identifique por su nombre y que el traspaso a una persona sea explícito.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/ia-agentica-negocios', anchor: 'IA agentica con traspaso a personas' },
      { url: 'https://kora-agent.com/ia-atencion-cliente', anchor: 'atención híbrida' },
    ],
    related: ['cuando-la-ia-no-debe-responder', 'ia-atencion-cliente-pymes-guia', 'errores-al-automatizar-atencion'],
  },
  {
    slug: 'errores-al-automatizar-atencion',
    category: 'Automatización',
    type: 'articulo',
    date: '2026-11-12',
    keyword: 'errores al automatizar atención al cliente',
    h1: 'Siete errores que arruinan una automatización de atención al cliente',
    description:
      'Los errores más comunes al automatizar WhatsApp y correo: respuestas rígidas, sin salida a humano, sin contexto y sin mantenimiento.',
    intro:
      'Casi todas las automatizaciones fallidas fallan por las mismas razones. Ninguna es técnica. Si va a invertir tiempo o dinero en atender mejor, evite estos siete errores antes de elegir herramienta.',
    sections: [
      {
        h2: '1. Automatizar antes de tener las respuestas',
        html: '<p>Si el equipo responde distinto cada vez, la IA aprende el desorden. El documento de preguntas frecuentes va primero, siempre.</p>',
      },
      {
        h2: '2. Un laberinto de menús',
        html: '<p>"Marque 1 para ventas, 2 para soporte" funcionaba en el teléfono de 2005. En WhatsApp, la gente escribe. Un menú de botones como primera respuesta desperdicia el único mensaje que el cliente iba a escribir con ganas.</p>',
      },
      {
        h2: '3. No dejar salida a una persona',
        html: '<p>Si no hay forma de hablar con alguien, el cliente lo intenta por otro canal y la conversación se duplica. La salida a humano debe estar siempre disponible, incluso si nadie la usa.</p>',
      },
      {
        h2: '4. Responder sin contexto',
        html: '<p>Un agente que saluda de nuevo a las tres horas, o que pregunta el nombre que el cliente ya dio, demuestra que no estaba escuchando. El contexto de la conversación es parte del producto.</p>',
      },
      {
        h2: '5. Prometer lo que no puede cumplir',
        html: '<p>"En breve un asesor le contacta" sin nadie asignado es una promesa rota por diseño. Si no hay responsable, no se promete.</p>',
      },
      {
        h2: '6. Nunca revisar las conversaciones',
        html: '<p>Las primeras dos semanas son de calibración. Diez conversaciones al día revisadas a mano detectan más errores que cualquier panel de métricas.</p>',
      },
      {
        h2: '7. No medir nada',
        html: '<p>Sin números no hay forma de saber si la automatización ayuda o solo entretiene. Tiempo de respuesta, resolución sin intervención y conversión son el mínimo.</p>',
      },
    ],
    faq: [
      {
        q: '¿Puedo corregir estos errores después de lanzar?',
        a: 'Todos menos el primero. La base de conocimiento se puede mejorar siempre, pero sin respuestas claras no hay nada que mejorar.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/automatizacion-whatsapp', anchor: 'automatización de WhatsApp bien hecha' },
      { url: 'https://kora-agent.com/chatbot-whatsapp-negocios', anchor: 'chatbot para negocios' },
    ],
    related: ['ia-atencion-cliente-pymes-guia', 'handoff-humano-ia', 'que-automatizar-primero'],
  },
  {
    slug: 'metricas-atencion-cliente-ia',
    category: 'Datos y métricas',
    type: 'infografia',
    date: '2026-11-11',
    keyword: 'métricas de atención al cliente con IA',
    h1: 'Las seis métricas de atención al cliente que sí importan con IA',
    description:
      'Infografía con las seis métricas de soporte que cambian cuando se automatiza: primera respuesta, resolución, reapertura, satisfacción, costo y conversión.',
    intro:
      'Un panel lleno de gráficos no es medición. Estas seis métricas se pueden calcular con los datos que cualquier negocio ya tiene, y cada una responde una pregunta distinta sobre si la automatización está sirviendo.',
    stats: [
      { value: '< 1 min', label: 'objetivo de primera respuesta automática' },
      { value: '40-60%', label: 'consultas repetidas que se pueden resolver solas' },
      { value: '3', label: 'métricas mínimas para el primer mes' },
      { value: '24/7', label: 'cobertura real sin turnos nocturnos' },
    ],
    sections: [
      {
        h2: 'Las seis métricas',
        html: '<ol><li><strong>Tiempo de primera respuesta:</strong> desde que entra el mensaje hasta la primera respuesta útil.</li><li><strong>Tasa de resolución sin intervención:</strong> conversaciones que terminan sin una persona.</li><li><strong>Reapertura:</strong> el mismo cliente vuelve por el mismo tema en siete días. Mide si la respuesta fue completa.</li><li><strong>Satisfacción:</strong> una pregunta de una sola escala al cerrar, no un formulario.</li><li><strong>Costo por conversación:</strong> horas de equipo más costo de la herramienta, dividido entre conversaciones atendidas.</li><li><strong>Conversión:</strong> conversaciones que terminan en cita, compra o cotización aceptada.</li></ol>',
      },
      {
        h2: 'Cómo leerlas juntas',
        html: '<p>Una resolución alta con reapertura alta significa que la IA cierra la conversación sin resolver el problema. Un costo bajo con conversión baja significa que se está atendiendo mucho y vendiendo poco. La lectura correcta siempre es en pares.</p>',
      },
      {
        h2: 'Qué no vale la pena medir',
        html: '<p>La cantidad de mensajes enviados, la cantidad de plantillas creadas y el tiempo que la herramienta estuvo encendida no dicen nada sobre el cliente. Son métricas de actividad, no de resultado.</p>',
      },
    ],
    table: {
      head: ['Métrica', 'Antes típico', 'Objetivo con IA', 'Qué revela'],
      rows: [
        ['Primera respuesta', '20-120 min', '< 1 min', 'Disponibilidad real'],
        ['Resolución sin humano', '0%', '40-60%', 'Calidad del contenido'],
        ['Reapertura en 7 días', 'Sin dato', '< 15%', 'Si la respuesta fue completa'],
        ['Satisfacción', 'Sin dato', '> 4/5', 'Tono y utilidad'],
        ['Costo por conversación', 'Alto y variable', 'Predecible', 'Eficiencia'],
        ['Conversión', 'Baja', 'Medible por canal', 'Impacto en ventas'],
      ],
    },
    faq: [
      {
        q: '¿Cómo mido satisfacción sin molestar?',
        a: 'Una sola pregunta al final, opcional: "¿Le resolvimos?" con dos botones. Cualquier cosa más larga baja la respuesta al mínimo.',
      },
      {
        q: '¿Cada cuánto se revisan?',
        a: 'Semanal el primer mes, mensual después. Revisar a diario un número que se mueve lento genera decisiones nerviosas.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/ia-atencion-cliente', anchor: 'atención al cliente medida' },
    ],
    related: ['tiempo-de-primera-respuesta', 'roi-de-la-automatizacion', 'ia-atencion-cliente-pymes-guia'],
  },
  {
    slug: 'tono-de-voz-marca-ia',
    category: 'Atención al cliente',
    type: 'articulo',
    date: '2026-11-10',
    keyword: 'tono de voz de marca con IA',
    h1: 'Cómo enseñarle a una IA el tono de tu marca (sin escribir un manual de 40 páginas)',
    description:
      'Método práctico para definir el tono de voz de un agente de IA: tres ejemplos reales, cinco prohibiciones y una prueba de lectura en voz alta.',
    intro:
      'El tono no se describe, se muestra. Un agente aprende más de tres conversaciones de ejemplo que de una lista de adjetivos como "cercano pero profesional", que en la práctica no significa nada para nadie.',
    sections: [
      {
        h2: 'El ejercicio de los tres mensajes',
        html: '<p>Elija tres situaciones: un saludo a alguien nuevo, una mala noticia (no hay disponibilidad) y una disculpa por un error del negocio. Escriba cómo las diría su mejor empleado. Esos tres textos son el tono, y sirven como referencia para todo lo demás.</p>',
      },
      {
        h2: 'Cinco prohibiciones concretas',
        html: '<ul><li>No usar signos de exclamación en serie.</li><li>No empezar con "¡Hola! ¿En qué puedo ayudarte?" en cada mensaje.</li><li>No llamar "amigo" ni "estimado" a nadie.</li><li>No usar emojis si el cliente no los usa.</li><li>No prometer tiempos que el equipo no puede cumplir.</li></ul>',
      },
      {
        h2: 'La prueba de lectura en voz alta',
        html: '<p>Lea la respuesta en voz alta. Si suena a folleto, está mal. Si suena a una persona explicando algo en una mesa de café, está cerca. Esta prueba detecta más problemas que cualquier revisión gramatical.</p>',
      },
      {
        h2: 'Una sola cosa por mensaje',
        html: '<p>Los mensajes que intentan resolver todo en un párrafo no se leen. Un mensaje, una idea, una pregunta. El cliente puede pedir más; no puede des-pedir confusión.</p>',
      },
    ],
    faq: [
      {
        q: '¿Debo decirle al cliente que es un agente automático?',
        a: 'Si el agente tiene nombre propio y responde información del negocio, no hace falta un aviso en cada mensaje. Si el cliente pregunta directamente, la respuesta honesta es siempre la mejor política.',
      },
      {
        q: '¿El tono cambia por canal?',
        a: 'Sí. WhatsApp tolera más cercanía y mensajes cortos; el correo pide algo más estructurado. La personalidad es la misma, el formato no.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/agente-ia-whatsapp', anchor: 'un agente con la voz de tu negocio' },
    ],
    related: ['ia-atencion-cliente-pymes-guia', 'handoff-humano-ia', 'chatbot-vs-agente-de-ia'],
  },
  {
    slug: 'chatbot-vs-agente-de-ia',
    metaTitle: 'Chatbot o agente de IA: cuál necesita tu negocio',
    category: 'Comparativas',
    type: 'articulo',
    date: '2026-11-09',
    keyword: 'chatbot vs agente de IA',
    h1: 'Chatbot o agente de IA: la diferencia que sí cambia el resultado',
    description:
      'Comparación práctica entre chatbot de flujos y agente de IA: qué puede hacer cada uno, cuánto cuesta mantenerlos y cuándo conviene cada opción.',
    intro:
      'Se usan como sinónimos y no lo son. Un chatbot sigue un árbol de opciones; un agente entiende el mensaje, decide qué herramienta usar y ejecuta. La diferencia se nota el primer día que un cliente escribe algo que no estaba en el guion.',
    sections: [
      {
        h2: 'Qué hace un chatbot',
        html: '<p>Sigue caminos predefinidos. Si el cliente pregunta algo previsto, funciona perfecto y es rapidísimo. Si pregunta algo distinto, contesta "no entiendo" o reinicia el flujo. Mantenerlo significa dibujar cada rama: con veinte intenciones, el árbol se vuelve un laberinto.</p>',
      },
      {
        h2: 'Qué hace un agente',
        html: '<p>Interpreta la intención, consulta datos reales (calendario, catálogo, estado de un pedido) y responde en lenguaje natural. No necesita una rama para cada frase. A cambio, exige reglas claras: qué puede hacer, qué no, y cuándo pasa el caso a una persona.</p>',
      },
      {
        h2: 'La comparación honesta',
        html: '<p>Para un trámite fijo, con cinco opciones y cero variación, un chatbot es más barato y suficiente. Para atención real, donde la gente escribe como habla, un agente evita el 80% de los "no entiendo".</p>',
      },
      {
        h2: 'Lo que ninguno de los dos arregla',
        html: '<p>Si el negocio no sabe qué responder, ninguno responde bien. La calidad del contenido sigue siendo la variable principal, y es humana.</p>',
      },
    ],
    table: {
      head: ['Criterio', 'Chatbot de flujos', 'Agente de IA'],
      rows: [
        ['Entiende lenguaje libre', 'Limitado', 'Sí'],
        ['Mantener veinte temas', 'Un árbol por tema', 'Un documento de conocimiento'],
        ['Consulta datos reales', 'Con integraciones puntuales', 'Por herramientas conectadas'],
        ['Costo de cambiar una respuesta', 'Editar el flujo', 'Editar el texto'],
        ['Riesgo principal', 'Fricción y abandono', 'Respuesta inventada sin reglas'],
      ],
    },
    faq: [
      {
        q: '¿Un agente puede usar botones también?',
        a: 'Sí. Los botones son útiles para confirmar acciones (sí, no, elegir horario). La diferencia es que el agente no depende de ellos para entender.',
      },
      {
        q: '¿Cuál es más caro?',
        a: 'El agente cuesta más por conversación y menos en mantenimiento. El chatbot cuesta poco por conversación y mucho cada vez que cambia el negocio.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/chatbot-whatsapp-negocios', anchor: 'chatbot para WhatsApp' },
      { url: 'https://kora-agent.com/ia-agentica-negocios', anchor: 'IA agentica' },
    ],
    related: ['ia-atencion-cliente-pymes-guia', 'kora-vs-chatbot-tradicional', 'que-automatizar-primero'],
  },
  {
    slug: 'whatsapp-business-vs-api',
    category: 'WhatsApp',
    type: 'articulo',
    date: '2026-11-08',
    keyword: 'WhatsApp Business vs API',
    h1: 'WhatsApp Business y WhatsApp API: cuál necesita tu negocio',
    description:
      'Diferencias reales entre la app WhatsApp Business y la API de WhatsApp: automatización, varios agentes, plantillas, costos y límites.',
    intro:
      'La app gratuita resuelve el día uno. La API resuelve el día que el negocio crece y dos personas necesitan atender el mismo número sin pisarse. Elegir mal cuesta migraciones y conversaciones perdidas.',
    sections: [
      {
        h2: 'La app Business, en una frase',
        html: '<p>Es un teléfono con herramientas: catálogo, respuestas rápidas, etiquetas y mensajes automáticos simples. Funciona en un dispositivo (con hasta cuatro vinculados) y no permite que un sistema externo lea o escriba mensajes.</p>',
      },
      {
        h2: 'La API, en una frase',
        html: '<p>Es un canal para software: cualquier sistema autorizado puede enviar y recibir mensajes, con varios agentes, integraciones y automatización real. Requiere un proveedor, verificación del negocio y un número dedicado.</p>',
      },
      {
        h2: 'La decisión en tres preguntas',
        html: '<ol><li>¿Más de una persona atiende el mismo número a la vez? Si sí, API.</li><li>¿Necesita que un sistema agende, cobre o consulte pedidos automáticamente? Si sí, API.</li><li>¿Solo responde consultas básicas y una persona alcanza? La app puede ser suficiente.</li></ol>',
      },
      {
        h2: 'Lo que casi nadie advierte',
        html: '<p>En la API, el negocio no puede iniciar una conversación libre: fuera de la ventana de 24 horas desde el último mensaje del cliente, solo puede usar plantillas aprobadas. Ese detalle cambia por completo la estrategia de seguimiento.</p>',
      },
    ],
    table: {
      head: ['Necesidad', 'App Business', 'API'],
      rows: [
        ['Varios agentes en un número', 'Limitado', 'Sí'],
        ['Automatización con IA', 'Básica', 'Completa'],
        ['Integración con CRM o calendario', 'No', 'Sí'],
        ['Plantillas para iniciar conversación', 'No', 'Sí, con aprobación'],
        ['Costo', 'Gratis', 'Por conversación y proveedor'],
      ],
    },
    faq: [
      {
        q: '¿Puedo mover mi número actual a la API?',
        a: 'Sí, con un proceso de migración y verificación. Si el número está en la app Business, hay que desvincularlo antes. Conviene planear una ventana de mantenimiento.',
      },
      {
        q: '¿Pierdo el historial al migrar?',
        a: 'El historial de la app no se traslada a la API. Exporte lo importante antes de migrar.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/automatizacion-whatsapp', anchor: 'WhatsApp automatizado para empresas' },
    ],
    related: ['api-de-whatsapp-para-empresas', 'ventana-24-horas-whatsapp', 'plantillas-whatsapp-aprobadas'],
  },
  {
    slug: 'api-de-whatsapp-para-empresas',
    category: 'WhatsApp',
    type: 'guia',
    date: '2026-11-07',
    keyword: 'API de WhatsApp para empresas',
    h1: 'Cómo empezar con la API de WhatsApp sin morir en el intento',
    description:
      'Pasos reales para conectar la API de WhatsApp en una empresa: número, verificación, proveedor, plantillas y pruebas antes de atender clientes.',
    intro:
      'La API de WhatsApp no es difícil, es burocrática. La parte técnica se resuelve en una tarde; la verificación del negocio, la aprobación de plantillas y las pruebas son las que toman días. Este es el orden correcto.',
    steps: [
      {
        title: 'Separe un número que sea del negocio',
        text: 'Un número que nadie use en la app normal. Puede ser fijo o móvil, pero debe poder recibir un código. Si está registrado en la app Business, se desvincula antes.',
      },
      {
        title: 'Verifique el negocio en Meta',
        text: 'Nombre legal, sitio web, dirección y documentos. Sin verificación, los límites de mensajería son mínimos y las plantillas tardan más en aprobarse.',
      },
      {
        title: 'Elija cómo va a operar',
        text: 'Un proveedor que ya tenga la integración resuelta ahorra meses de desarrollo. La decisión real es si quiere construir la infraestructura o dedicarse a atender.',
      },
      {
        title: 'Prepare las plantillas antes del lanzamiento',
        text: 'Recordatorio de cita, confirmación de pedido y aviso de nueva conversación. Se aprueban por separado y una plantilla rechazada retrasa todo el plan.',
      },
      {
        title: 'Pruebe con su propio teléfono primero',
        text: 'Diez conversaciones reales antes de abrir el canal. Revise qué pasa cuando el cliente escribe un audio, un emoji, un número de pedido inexistente.',
      },
    ],
    sections: [
      {
        h2: 'Errores caros de la primera semana',
        html: '<ul><li>Escribir a contactos sin consentimiento y recibir bloqueos, que bajan la calidad del número.</li><li>Usar el número para pruebas internas masivas.</li><li>No definir quién atiende fuera de horario.</li><li>Prometer respuestas en menos de cinco minutos sin equipo para cumplirlo.</li></ul>',
      },
      {
        h2: 'Cuándo el canal ya está listo',
        html: '<p>Cuando un cliente nuevo puede escribir, recibir respuesta útil, agendar si hace falta, y terminar con una persona cuando el caso lo requiere. Si falta cualquiera de esas cuatro, todavía es una demo.</p>',
      },
    ],
    faq: [
      {
        q: '¿Necesito una cuenta de Facebook para esto?',
        a: 'Sí, el negocio se administra desde Meta Business. Es la misma cuenta que se usa para la página y para Instagram.',
      },
      {
        q: '¿Puedo tener dos números en la misma cuenta?',
        a: 'Sí. Cada número es una identidad propia con su verificación y sus límites.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/automatizacion-whatsapp', anchor: 'conectar WhatsApp con Kora' },
    ],
    related: ['whatsapp-business-vs-api', 'verificacion-negocio-meta', 'plantillas-whatsapp-aprobadas'],
  },
  {
    slug: 'ventana-24-horas-whatsapp',
    category: 'WhatsApp',
    type: 'articulo',
    date: '2026-11-06',
    keyword: 'ventana de 24 horas WhatsApp',
    h1: 'La ventana de 24 horas de WhatsApp: la regla que arruina seguimientos',
    description:
      'Cómo funciona la ventana de 24 horas de la API de WhatsApp, qué es una plantilla aprobada y cómo planear el seguimiento sin perder la conversación.',
    intro:
      'Casi todos los negocios aprenden esta regla con un error: escriben al cliente al día siguiente y el mensaje no sale. No es un bug. Es la política de Meta, y define cómo se diseña cualquier seguimiento.',
    sections: [
      {
        h2: 'La regla',
        html: '<p>Desde el último mensaje del cliente, el negocio tiene 24 horas para responder con mensajes libres. Pasado ese plazo, solo puede enviar plantillas aprobadas. Si no hay mensaje del cliente en las últimas 24 horas, la conversación está cerrada para texto libre.</p>',
      },
      {
        h2: 'Qué es una plantilla',
        html: '<p>Un mensaje preaprobado por Meta, con variables y una categoría: utilidad, marketing o autenticación. Se aprueba una vez y se reutiliza. Las de marketing requieren consentimiento y tienen reglas más estrictas.</p>',
      },
      {
        h2: 'Cómo se diseña el seguimiento alrededor de esto',
        html: '<ul><li>Responda rápido: cada minuto cuenta dentro de una ventana que no se renueva sola.</li><li>Deje la conversación en un punto que invite a responder, no en un cierre seco.</li><li>Para lo que llega tarde, tenga una plantilla de utilidad lista (recordatorio de cita, estado de pedido).</li><li>Nunca use una plantilla de marketing para disfrazar un seguimiento comercial insistente.</li></ul>',
      },
      {
        h2: 'Un ejemplo concreto',
        html: '<p>Un cliente pregunta por un servicio el lunes y no responde. El martes, un mensaje libre ya no entrega. El miércoles, una plantilla de utilidad con la cotización sigue siendo válida si el cliente la pidió; una plantilla de promoción, en cambio, se lee como spam y cuesta bloqueos.</p>',
      },
    ],
    faq: [
      {
        q: '¿La ventana se reinicia con cualquier mensaje del cliente?',
        a: 'Sí, con cualquier mensaje entrante. Un "gracias" también la reinicia, aunque no siempre justifique una respuesta larga.',
      },
      {
        q: '¿Esto aplica a WhatsApp Business app?',
        a: 'No igual. La ventana es una regla de la API. La app tiene otras limitaciones, pero no este reloj.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/automatizacion-whatsapp', anchor: 'seguimiento dentro de la ventana de 24 horas' },
    ],
    related: ['plantillas-whatsapp-aprobadas', 'seguimiento-automatico-clientes', 'whatsapp-business-vs-api'],
  },
  {
    slug: 'plantillas-whatsapp-aprobadas',
    category: 'WhatsApp',
    type: 'guia',
    date: '2026-11-05',
    keyword: 'plantillas de WhatsApp aprobadas',
    h1: 'Plantillas de WhatsApp que se aprueban a la primera',
    description:
      'Cómo escribir plantillas de WhatsApp que Meta apruebe: categorías, variables, ejemplos obligatorios y los motivos de rechazo más comunes.',
    intro:
      'Una plantilla rechazada no cuesta dinero, cuesta días. La mayoría de los rechazos no son por el contenido sino por la forma: variables sin ejemplo, categoría equivocada, o un tono que parece promoción disfrazada de aviso.',
    steps: [
      {
        title: 'Elija la categoría correcta',
        text: 'Utilidad para algo que el cliente espera (cita, pedido, pago). Marketing para promociones. Autenticación para códigos. Si duda, es marketing.',
      },
      {
        title: 'Escriba el mensaje como lo diría una persona',
        text: 'Sin mayúsculas gritadas, sin "¡¡OFERTA!!", sin promesas absolutas. Un mensaje de utilidad debe poder leerse como un aviso normal.',
      },
      {
        title: 'Ponga un ejemplo real en cada variable',
        text: 'Meta exige ejemplos de los valores. "Hola {{1}}, su cita es el {{2}}" necesita un nombre y una fecha de ejemplo plausibles.',
      },
      {
        title: 'Pruebe la plantilla en su propio teléfono',
        text: 'Antes de usarla con clientes, envíela a usted mismo y léala como la leería alguien ocupado. Si no se entiende en tres segundos, reescriba.',
      },
    ],
    sections: [
      {
        h2: 'Motivos de rechazo más comunes',
        html: '<ul><li>Categoría incorrecta: una promoción enviada como utilidad.</li><li>Variables sin contexto: "{{1}} {{2}}" sin saber qué son.</li><li>Contenido ambiguo o que promete resultados.</li><li>Enlaces acortados o dominios que Meta no puede verificar.</li><li>Texto que parece pedir datos sensibles.</li></ul>',
      },
      {
        h2: 'Las tres plantillas que casi todo negocio necesita',
        html: '<ol><li><strong>Recordatorio de cita:</strong> fecha, hora, lugar y una forma de reprogramar.</li><li><strong>Confirmación de pedido:</strong> qué se compró, cuándo llega y cómo consultar el estado.</li><li><strong>Reapertura de conversación:</strong> un mensaje corto que retoma algo concreto, nunca un "¿sigues interesado?".</li></ol>',
      },
      {
        h2: 'Después de aprobada',
        html: '<p>Una plantilla aprobada se puede editar, pero cada edición vuelve a revisión. Constrúyalas una vez, bien, y déjelas tranquilas.</p>',
      },
    ],
    faq: [
      {
        q: '¿Cuánto tarda la aprobación?',
        a: 'Minutos si todo está bien; días si hay revisión manual. Las plantillas de marketing tardan más que las de utilidad.',
      },
      {
        q: '¿Puedo usar emojis en una plantilla?',
        a: 'Sí, con moderación. Un mensaje lleno de emojis se lee como publicidad y tiene más probabilidad de rechazo o de bloqueo.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/automatizacion-whatsapp', anchor: 'plantillas y flujos en WhatsApp' },
    ],
    related: ['ventana-24-horas-whatsapp', 'api-de-whatsapp-para-empresas', 'seguimiento-automatico-clientes'],
  },
  {
    slug: 'que-automatizar-primero',
    category: 'Automatización',
    type: 'guia',
    date: '2026-11-04',
    keyword: 'qué automatizar primero en un negocio',
    h1: 'Qué automatizar primero: el orden que evita proyectos que nadie usa',
    description:
      'Cómo elegir el primer proceso a automatizar: frecuencia, reglas claras, dolor medible y bajo riesgo. Con una lista de candidatos por tipo de negocio.',
    intro:
      'El primer proyecto de automatización define si hay un segundo. Si elige un proceso raro, con excepciones en cada caso, el equipo lo abandona en dos semanas y la idea queda quemada. Elija aburrido y frecuente.',
    sections: [
      {
        h2: 'Los cuatro filtros',
        html: '<ol><li><strong>Frecuencia:</strong> pasa todos los días, no una vez al mes.</li><li><strong>Reglas claras:</strong> se puede escribir en cinco pasos sin "depende".</li><li><strong>Dolor medible:</strong> hay horas perdidas o clientes esperando.</li><li><strong>Riesgo bajo:</strong> si falla, no se pierde dinero ni se incumple una obligación legal.</li></ol>',
      },
      {
        h2: 'Buenos primeros candidatos',
        html: '<ul><li>Responder las diez preguntas repetidas por WhatsApp.</li><li>Agendar y recordar citas.</li><li>Enviar el estado de un pedido.</li><li>Pedir los datos que faltan antes de una cita.</li><li>Recolectar reseñas después de un servicio.</li></ul>',
      },
      {
        h2: 'Malos primeros candidatos',
        html: '<p>Cobranza con casos especiales, facturación con impuestos distintos por cliente, atención de reclamos legales y cualquier proceso que dependa del criterio de una sola persona que no lo ha documentado.</p>',
      },
      {
        h2: 'Cómo saber que salió bien',
        html: '<p>El equipo lo usa sin que nadie lo recuerde y el cliente nota una diferencia concreta. Si a las dos semanas alguien sigue haciendo la tarea a mano "por si acaso", el diseño está mal.</p>',
      },
    ],
    faq: [
      {
        q: '¿Cuánto debería durar el primer proyecto?',
        a: 'Dos a cuatro semanas entre definir, configurar y ajustar. Más tiempo suele significar que el alcance creció sin control.',
      },
      {
        q: '¿Necesito automatizar todo el proceso?',
        a: 'No. Automatice el paso que duele y deje el resto manual. Un proceso medio automatizado que funciona es mejor que uno completo que nadie entiende.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/ia-agentica-negocios', anchor: 'automatización con IA en la operación' },
      { url: 'https://kora-agent.com', anchor: 'Kora' },
    ],
    related: ['errores-al-automatizar-atencion', 'auditoria-de-procesos', 'automatizacion-vs-digitalizacion'],
  },
];
