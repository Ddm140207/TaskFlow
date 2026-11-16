/**
 * 61-74: comparativas. Cada una elige un criterio y dice cuándo gana cada
 * opción, sin declarar un ganador universal.
 */
export default [
  {
    slug: 'kora-vs-chatbot-tradicional',
    category: 'Comparativas',
    type: 'articulo',
    date: '2026-09-17',
    keyword: 'Kora vs chatbot tradicional',
    h1: 'Kora y un chatbot tradicional: cuándo cada uno tiene sentido',
    description:
      'Comparación entre un agente como Kora y un chatbot de menús: capacidad de entender, herramientas, mantenimiento y costo real por conversación.',
    intro:
      'Un chatbot de menús no es una versión vieja de un agente: es otra herramienta. Sirve para procesos fijos y fracasa con lenguaje libre. Comparar ambos con el mismo criterio es lo que hace que la elección salga mal.',
    sections: [
      {
        h2: 'La diferencia que se nota el primer día',
        html: '<p>Un cliente escribe \"hola, ¿tienen algo para el sábado por la tarde?\". El chatbot ofrece cuatro botones. El agente consulta la agenda, ve que quedan dos espacios y ofrece uno. La conversación sigue; con el menú, empieza de nuevo.</p>',
      },
      {
        h2: 'Cuándo el chatbot es la respuesta correcta',
        html: '<p>Procesos de cinco opciones, sin variación y con volumen alto: pedir una clave, consultar un saldo, confirmar una suscripción. Ahí el menú es más rápido y no puede inventar nada.</p>',
      },
      {
        h2: 'Cuándo un agente gana',
        html: '<p>Atención comercial o de soporte donde la gente escribe como habla, donde hay agenda o catálogo que consultar y donde el cliente espera una respuesta concreta, no un menú.</p>',
      },
      {
        h2: 'El costo que decide',
        html: '<p>El chatbot es barato por conversación y caro cada vez que el negocio cambia. El agente cuesta más por turno y menos en mantenimiento, porque se ajusta con instrucciones y no dibujando ramas.</p>',
      },
    ],
    table: {
      head: ['Criterio', 'Chatbot de menús', 'Kora'],
      rows: [
        ['Lenguaje libre', 'Limitado', 'Sí'],
        ['Consulta agenda o catálogo', 'Integración puntual', 'Herramientas conectadas'],
        ['Cambiar una respuesta', 'Editar ramas', 'Editar el manual'],
        ['Costo por conversación', 'Muy bajo', 'Bajo o medio'],
        ['Riesgo principal', 'Abandono por fricción', 'Requiere reglas y revisión'],
      ],
    },
    faq: [
      {
        q: '¿Kora puede usar botones?',
        a: 'Sí, para confirmar acciones. La diferencia es que no depende de ellos para entender el mensaje.',
      },
      {
        q: '¿Se puede empezar con chatbot y migrar después?',
        a: 'Se puede, pero el manual que se escribe para el agente es la misma base del chatbot. Escribirlo primero ahorra el doble trabajo.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/chatbot-whatsapp-negocios', anchor: 'chatbot o agente para WhatsApp' },
      { url: 'https://kora-agent.com', anchor: 'Kora' },
    ],
    related: ['chatbot-vs-agente-de-ia', 'flujos-deterministas-vs-ia', 'plataforma-vs-desarrollo-propio'],
  },
  {
    slug: 'proveedores-de-api-de-whatsapp',
    category: 'Comparativas',
    type: 'guia',
    date: '2026-09-16',
    keyword: 'comparar proveedores de API de WhatsApp',
    h1: 'Cómo comparar proveedores de la API de WhatsApp sin mirar solo el precio',
    description:
      'Criterios reales para comparar proveedores de WhatsApp: tarifa por conversación, soporte, plantillas, exportación de datos y salida.',
    intro:
      'Casi todos los proveedores cobran parecido. La diferencia aparece el día que una plantilla se rechaza, el número se marca o hay que migrar. Esos tres momentos definen el costo real.',
    sections: [
      {
        h2: 'Criterio 1: qué pasa cuando algo se rompe',
        html: '<p>Un proveedor con soporte por correo que responde en dos días es insuficiente para un canal que atiende clientes. Pregunte si hay soporte con personas y en qué horario.</p>',
      },
      {
        h2: 'Criterio 2: las plantillas',
        html: '<p>¿Se administran desde el panel con estado visible? ¿Hay historial de rechazos con motivo? Sin eso, cada plantilla es una caja negra.</p>',
      },
      {
        h2: 'Criterio 3: tus datos',
        html: '<p>¿Se puede exportar el historial de conversaciones y contactos? ¿En qué formato? Un proveedor que retiene el historial hace que migrar cueste años de información.</p>',
      },
      {
        h2: 'Criterio 4: la salida',
        html: '<p>Si el número está registrado en un proveedor, moverlo implica desvincular y volver a verificar. Pregunte el procedimiento antes de firmar, no después.</p>',
      },
    ],
    faq: [
      {
        q: '¿El precio por conversación es lo más importante?',
        a: 'Importa, pero rara vez es la diferencia decisiva. Dos proveedores con cinco centavos de diferencia se separan por soporte y datos.',
      },
      {
        q: '¿Conviene usar la API directamente, sin proveedor?',
        a: 'Solo con equipo técnico y tiempo para mantener la integración. Para la mayoría, el proveedor ahorra meses.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/automatizacion-whatsapp', anchor: 'empezar con la API de WhatsApp' },
    ],
    related: ['api-de-whatsapp-para-empresas', 'como-elegir-un-proveedor-de-whatsapp', 'verificacion-negocio-meta'],
  },
  {
    slug: 'crm-vs-hoja-de-calculo',
    metaTitle: 'CRM o hoja de cálculo: cuándo conviene cambiar',
    category: 'Comparativas',
    type: 'articulo',
    date: '2026-09-15',
    keyword: 'CRM o hoja de cálculo',
    h1: 'CRM o hoja de cálculo: el punto exacto en el que conviene cambiar',
    description:
      'Cuándo una hoja de cálculo deja de servir para clientes: señales de volumen, trabajo en equipo y errores que cuestan ventas.',
    intro:
      'Una hoja de cálculo no es un CRM, pero durante los primeros meses hace el trabajo. Cambiar demasiado pronto es caro y cambiar demasiado tarde cuesta clientes. Hay señales claras de cada momento.',
    sections: [
      {
        h2: 'Lo que la hoja hace bien',
        html: '<p>Es gratis, flexible y la entiende todo el mundo. Para veinte clientes y una persona, es más rápida que cualquier sistema.</p>',
      },
      {
        h2: 'Las cinco señales de cambio',
        html: '<ol><li>Dos personas editan el mismo archivo y se pisan.</li><li>Alguien copia datos de un lado a otro a diario.</li><li>No se sabe cuál es el último contacto de un cliente.</li><li>Se duplican clientes con nombres distintos.</li><li>Hay que buscar dentro de notas escritas a mano.</li></ol>',
      },
      {
        h2: 'Lo que un CRM no arregla',
        html: '<p>Un equipo que no registra nada va a tener el mismo problema en un CRM. La disciplina de anotar es anterior a la herramienta.</p>',
      },
      {
        h2: 'La migración mínima',
        html: '<p>Nombre, contacto, canal de origen, último tema y próximo paso. No migre años de notas: migre lo que se va a usar el mes que viene.</p>',
      },
    ],
    table: {
      head: ['Situación', 'Hoja de cálculo', 'CRM'],
      rows: [
        ['Una persona, pocos clientes', 'Suficiente', 'Exceso'],
        ['Dos o más personas', 'Riesgo de pisarse', 'Necesario'],
        ['Historial por cliente', 'Manual', 'Automático'],
        ['Seguimiento por fecha', 'Frágil', 'Confiables'],
        ['Costo', 'Cero', 'Mensual'],
      ],
    },
    faq: [
      {
        q: '¿Se puede empezar con una hoja y pasar a un CRM después?',
        a: 'Sí, y es lo más común. Solo cuide no acumular columnas inventadas que después no significan nada.',
      },
      {
        q: '¿Un CRM barato es peor?',
        a: 'No necesariamente. Para una pyme, un CRM simple que el equipo usa vale más que uno completo que nadie abre.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/ia-atencion-cliente', anchor: 'historial de cliente ordenado' },
    ],
    related: ['etiquetas-y-crm-whatsapp', 'medir-sin-crm', 'crm-ligero-vs-erp'],
  },
  {
    slug: 'agente-ia-vs-call-center',
    category: 'Comparativas',
    type: 'articulo',
    date: '2026-09-14',
    keyword: 'agente de IA vs call center',
    h1: 'Agente de IA o centro de llamadas: cuándo cada uno resuelve',
    description:
      'Comparación entre atención con agente de IA y centro de llamadas: cobertura, costo, complejidad de los casos y calidad percibida.',
    intro:
      'Un centro de llamadas resuelve lo complejo y cuesta por minuto. Un agente resuelve lo repetido y cuesta por conversación. La pregunta no es cuál es mejor, es qué porcentaje del volumen es cada cosa.',
    sections: [
      {
        h2: 'Lo que el agente hace mejor',
        html: '<p>Cobertura total del horario, respuesta inmediata, costo predecible y registro completo de la conversación. Ninguna de esas cosas la hace un centro de llamadas barato.</p>',
      },
      {
        h2: 'Lo que el centro de llamadas hace mejor',
        html: '<p>Casos con matices emocionales, negociación, clientes que necesitan hablar y situaciones donde la voz es parte de la confianza.</p>',
      },
      {
        h2: 'El cálculo que importa',
        html: '<p>Si el 70% del volumen son preguntas repetidas, un agente absorbe esa parte y el equipo humano atiende el 30% con más tiempo. Ese es el escenario donde ambos ganan.</p>',
      },
      {
        h2: 'El error de reemplazar todo',
        html: '<p>Apagar la atención humana para ahorrar el costo completo suele terminar en clientes perdidos por casos mal manejados. La mezcla es la estrategia, no la concesión.</p>',
      },
    ],
    faq: [
      {
        q: '¿Un agente puede atender por voz?',
        a: 'Puede, con más complejidad técnica y latencia. Para la mayoría de las pymes, el texto resuelve el volumen y la voz queda para lo delicado.',
      },
      {
        q: '¿Cómo se mide la calidad percibida?',
        a: 'Con una pregunta simple al cierre y con la tasa de reapertura del mismo tema. Ambas son más honestas que una encuesta larga.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/ia-atencion-cliente', anchor: 'atención sin turnos' },
      { url: 'https://kora-agent.com/ia-agentica-negocios', anchor: 'IA y equipo humano juntos' },
    ],
    related: ['modelos-grandes-vs-pequenos', 'cuanto-cuesta-un-cliente-perdido', 'handoff-humano-ia'],
  },
  {
    slug: 'plataforma-vs-desarrollo-propio',
    category: 'Comparativas',
    type: 'articulo',
    date: '2026-09-13',
    keyword: 'plataforma o desarrollo propio',
    h1: 'Plataforma o desarrollo propio: el cálculo que casi nadie hace completo',
    description:
      'Comparación honesta entre usar una plataforma de atención con IA y construir la propia: tiempo, mantenimiento, control y costo a tres años.',
    intro:
      'Construir da control total y una factura de mantenimiento permanente. Usar plataforma da velocidad y una dependencia. La decisión depende de si el canal es el negocio o una herramienta para el negocio.',
    sections: [
      {
        h2: 'Lo que cuesta construir de verdad',
        html: '<p>Integración de canales, manejo de webhooks, base de datos de conversaciones, permisos, panel, despliegue y monitoreo. Un equipo de dos personas tarda meses, y después hay que mantenerlo.</p>',
      },
      {
        h2: 'Lo que cuesta usar una plataforma',
        html: '<p>Una tarifa mensual, menos control sobre detalles y una dependencia del proveedor. A cambio, el equipo se dedica al contenido y a la operación.</p>',
      },
      {
        h2: 'Cuándo construir tiene sentido',
        html: '<p>Cuando la atención es el producto (software de soporte, agencia, plataforma) o cuando hay requisitos de datos que ninguna plataforma acepta.</p>',
      },
      {
        h2: 'La comparación a tres años',
        html: '<p>Un año de desarrollo más dos de mantenimiento suele superar tres años de plataforma, y el resultado tiene menos funciones. El control se paga, y conviene saber cuánto.</p>',
      },
    ],
    table: {
      head: ['Criterio', 'Plataforma', 'Desarrollo propio'],
      rows: [
        ['Tiempo a producción', 'Días', 'Meses'],
        ['Costo inicial', 'Bajo', 'Alto'],
        ['Costo de mantenimiento', 'Incluido', 'Permanente'],
        ['Control del detalle', 'Limitado', 'Total'],
        ['Riesgo de dependencia', 'Sí', 'Bajo'],
      ],
    },
    faq: [
      {
        q: '¿Se puede empezar con plataforma y construir después?',
        a: 'Sí, y es lo recomendable: primero se aprende qué se necesita de verdad, y después se decide si vale construirlo.',
      },
      {
        q: '¿Qué datos debería poder exportar siempre?',
        a: 'Conversaciones, contactos y configuración. Sin exportación, la salida es una pérdida total.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/ia-agentica-negocios', anchor: 'plataforma o desarrollo propio' },
      { url: 'https://kora-agent.com', anchor: 'Kora' },
    ],
    related: ['prompts-no-son-producto', 'kora-vs-chatbot-tradicional', 'costos-ocultos-de-automatizar'],
  },
  {
    slug: 'ayuda-escrita-vs-telefono',
    category: 'Comparativas',
    type: 'articulo',
    date: '2026-09-12',
    keyword: 'atención escrita vs telefónica',
    h1: 'Escribir o llamar: qué canal conviene para cada tipo de consulta',
    description:
      'Cuándo la atención escrita es superior al teléfono y cuándo el teléfono sigue siendo necesario, con criterios por tipo de caso.',
    intro:
      'El teléfono fue el único canal durante décadas y hoy es el más caro por caso resuelto. Aun así, hay conversaciones donde escribir es peor. La clasificación importa más que la preferencia.',
    sections: [
      {
        h2: 'Donde escribir gana',
        html: '<ul><li>Datos que la persona necesita guardar: direcciones, precios, horarios.</li><li>Consultas simples que no requieren explicación.</li><li>Personas que trabajan y no pueden hablar.</li><li>Casos que necesitan registro para después.</li></ul>',
      },
      {
        h2: 'Donde llamar gana',
        html: '<ul><li>Un problema urgente que requiere resolver ya.</li><li>Un cliente frustrado que necesita hablar con alguien.</li><li>Temas con matices, donde el tono cambia la interpretación.</li><li>Personas mayores o con dificultad para escribir.</li></ul>',
      },
      {
        h2: 'El híbrido que funciona',
        html: '<p>Escribir primero para clasificar, llamar cuando el caso lo pide. El agente recibe, ordena y ofrece llamada en los casos que lo necesitan. Se evita llamar a quien solo quería el horario.</p>',
      },
      {
        h2: 'El costo de no ofrecer voz',
        html: '<p>Algunos clientes no escriben. Si el único canal es escrito, ese segmento simplemente no compra y no aparece en ninguna métrica.</p>',
      },
    ],
    faq: [
      {
        q: '¿La gente joven prefiere escribir?',
        a: 'En general sí, pero la preferencia depende más del tipo de caso que de la edad. Un problema urgente se resuelve por teléfono a cualquier edad.',
      },
      {
        q: '¿Se puede ofrecer llamada desde un agente?',
        a: 'Sí: el agente registra el caso y solicita la llamada con contexto, para que la persona que llama no empiece de cero.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/ia-atencion-cliente', anchor: 'canal según el caso' },
    ],
    related: ['correo-vs-whatsapp-para-ventas', 'handoff-humano-ia', 'tasa-de-respuesta'],
  },
  {
    slug: 'correo-vs-whatsapp-para-ventas',
    category: 'Comparativas',
    type: 'articulo',
    date: '2026-09-11',
    keyword: 'correo o WhatsApp para vender',
    h1: 'Correo o WhatsApp: dónde se cierra una venta pequeña',
    description:
      'Comparación entre correo y WhatsApp para ventas de ticket bajo y medio: velocidad, registro, formalidad y seguimiento.',
    intro:
      'El correo es un archivo; WhatsApp es una conversación. Para vender algo de cien dólares, la conversación gana casi siempre. Para vender algo de diez mil, el correo vuelve a importar.',
    sections: [
      {
        h2: 'Velocidad y fricción',
        html: '<p>En WhatsApp la respuesta llega en segundos y la decisión se toma en el mismo hilo. El correo compite con cincuenta mensajes y suele leerse horas después.</p>',
      },
      {
        h2: 'Formalidad y evidencia',
        html: '<p>Una cotización formal, un contrato o una propuesta necesitan un documento. Ahí el correo gana: queda el archivo, la fecha y el destinatario.</p>',
      },
      {
        h2: 'El seguimiento',
        html: '<p>En WhatsApp, fuera de la ventana de 24 horas, solo se puede escribir con plantillas aprobadas. En correo se puede insistir con más libertad, y por eso se abusa más. La disciplina importa más que el canal.</p>',
      },
      {
        h2: 'La combinación práctica',
        html: '<p>WhatsApp para conversar, correo para documentar. El agente conversa, y cuando hay que formalizar, envía la propuesta por correo y avisa por WhatsApp que la envió.</p>',
      },
    ],
    table: {
      head: ['Criterio', 'Correo', 'WhatsApp'],
      rows: [
        ['Velocidad de respuesta', 'Horas', 'Segundos'],
        ['Documento formal', 'Natural', 'Incómodo'],
        ['Registro de la conversación', 'Ordenado', 'En el sistema'],
        ['Seguimiento', 'Libre pero abusable', 'Limitado a plantillas'],
        ['Ticket alto', 'Frecuente', 'Complementario'],
      ],
    },
    faq: [
      {
        q: '¿Se puede vender sin WhatsApp?',
        a: 'Sí, pero se pierde el segmento que pregunta por ahí. Si el negocio atiende por WhatsApp, el canal existe aunque no se mida.',
      },
      {
        q: '¿El agente debe usar los dos?',
        a: 'Sí, con la misma información y el mismo historial. Cambiar de canal no debe obligar al cliente a repetir.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/automatizacion-whatsapp', anchor: 'conversar y documentar' },
      { url: 'https://kora-agent.com/ia-atencion-cliente', anchor: 'los dos canales juntos' },
    ],
    related: ['ia-para-cotizaciones', 'automatizacion-de-correo', 'conversion-de-consulta-a-cita'],
  },
  {
    slug: 'helpdesk-vs-bandeja-compartida',
    category: 'Comparativas',
    type: 'articulo',
    date: '2026-09-10',
    keyword: 'helpdesk o bandeja compartida',
    h1: 'Helpdesk o bandeja compartida: cuál necesita tu equipo de atención',
    description:
      'Diferencias entre un helpdesk con tickets y una bandeja compartida de conversaciones: trazabilidad, velocidad, métricas y cuándo migrar.',
    intro:
      'Un ticket es un caso con número. Una conversación es un hilo con una persona. Muchos equipos adoptan tickets porque suena profesional y descubren que el cliente solo quería una respuesta rápida.',
    sections: [
      {
        h2: 'Lo que el ticket aporta',
        html: '<p>Trazabilidad, prioridad, asignación, histórico y métricas por caso. Para soporte técnico con problemas que se resuelven en varios días, es la herramienta correcta.</p>',
      },
      {
        h2: 'Lo que la conversación aporta',
        html: '<p>Velocidad y naturalidad. El cliente escribe, recibe respuesta, cierra. Sin número de caso, sin formulario, sin esperar un correo con el estado.</p>',
      },
      {
        h2: 'El punto medio',
        html: '<p>Bandeja compartida con estados y un identificador interno para los casos largos. El cliente no ve un ticket; el equipo sí tiene trazabilidad.</p>',
      },
      {
        h2: 'Cuándo migrar a tickets',
        html: '<p>Cuando un caso pasa por tres personas o más, cuando hay compromisos de tiempo formales o cuando se necesita reportar cumplimiento a un cliente.</p>',
      },
    ],
    faq: [
      {
        q: '¿Se pueden tener los dos?',
        a: 'Sí, y muchas operaciones funcionan así: conversación para lo simple, ticket para lo que se extiende.',
      },
      {
        q: '¿El cliente debe conocer el número de caso?',
        a: 'Solo si lo va a necesitar para consultar. Para una conversación de diez minutos, un número de caso agrega fricción sin valor.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/ia-atencion-cliente', anchor: 'conversación con trazabilidad' },
    ],
    related: ['bandeja-de-entrada-unificada', 'whatsapp-multiagente', 'crm-vs-hoja-de-calculo'],
  },
  {
    slug: 'plantillas-vs-respuesta-libre',
    metaTitle: 'Plantillas o respuesta libre: qué conviene',
    category: 'Comparativas',
    type: 'articulo',
    date: '2026-09-09',
    keyword: 'plantillas o respuesta libre',
    h1: 'Plantillas o respuesta libre: lo que cada formato cuesta en calidad',
    description:
      'Cuándo una plantilla mejora la respuesta y cuándo la convierte en un formulario, con criterios por tipo de mensaje y por canal.',
    intro:
      'La plantilla garantiza consistencia y mata la naturalidad. La respuesta libre gana en calidez y pierde en exactitud. La respuesta correcta casi siempre es una plantilla con un espacio libre.',
    sections: [
      {
        h2: 'Donde la plantilla es mejor',
        html: '<p>Información verificable: precios, horarios, políticas, direcciones. Ahí la creatividad es un riesgo y la consistencia es una virtud.</p>',
      },
      {
        h2: 'Donde la respuesta libre es mejor',
        html: '<p>Disculpas, malas noticias, casos con carga emocional y respuestas a preguntas nuevas. Un texto de plantilla ante un reclamo suena a falta de interés.</p>',
      },
      {
        h2: 'El formato híbrido',
        html: '<p>Un cuerpo fijo aprobado más una frase específica del caso. Se mantiene la exactitud y el cliente siente que alguien leyó su mensaje.</p>',
      },
      {
        h2: 'Cómo se nota en la práctica',
        html: '<p>El cliente rara vez distingue una plantilla bien personalizada. Distingue inmediatamente una plantilla que responde algo que él no preguntó.</p>',
      },
    ],
    faq: [
      {
        q: '¿Un agente de IA necesita plantillas?',
        a: 'Necesita información exacta. Puede redactar libremente si los datos vienen de una fuente confiable y las reglas están claras.',
      },
      {
        q: '¿Las plantillas de WhatsApp aprobadas son lo mismo?',
        a: 'No. La plantilla de Meta es un mensaje preaprobado para iniciar o reabrir conversación; la plantilla interna es un texto reutilizable.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/agente-ia-whatsapp', anchor: 'respuestas exactas sin sonar a formulario' },
    ],
    related: ['plantillas-de-respuesta-reutilizables', 'tono-de-voz-marca-ia', 'plantillas-whatsapp-aprobadas'],
  },
  {
    slug: 'chatbot-instagram-vs-whatsapp',
    category: 'Comparativas',
    type: 'articulo',
    date: '2026-09-08',
    keyword: 'automatizar Instagram o WhatsApp',
    h1: 'Automatizar Instagram o WhatsApp: dónde rinde más el mismo esfuerzo',
    description:
      'Comparación práctica entre automatizar mensajes de Instagram y WhatsApp: volumen, intención, formatos y qué se puede esperar de cada uno.',
    intro:
      'El mismo manual sirve para los dos canales, pero el resultado no es igual. Instagram trae curiosidad; WhatsApp trae intención. Automatizar sin distinguir produce respuestas correctas en el momento equivocado.',
    sections: [
      {
        h2: 'La diferencia de intención',
        html: '<p>Quien escribe por Instagram muchas veces vio una publicación. Quien escribe por WhatsApp ya decidió preguntar algo concreto. El mismo mensaje automático cae distinto en cada caso.</p>',
      },
      {
        h2: 'Volumen y formato',
        html: '<p>Instagram recibe más mensajes cortos y reacciones; WhatsApp recibe consultas más largas y audios. Un texto de seis líneas funciona en WhatsApp y se lee mal en Instagram.</p>',
      },
      {
        h2: 'Dónde rinde primero',
        html: '<p>Si el negocio vende por conversación, WhatsApp primero. Si el negocio crece por contenido, Instagram primero. Automatizar el canal que no trae clientes es un ejercicio de estilo.</p>',
      },
      {
        h2: 'Lo que no se automatiza en ninguno',
        html: '<p>Reacciones a historias y comentarios con carga emocional. Ahí el reconocimiento humano vale más que cualquier respuesta rápida.</p>',
      },
    ],
    faq: [
      {
        q: '¿Se puede usar el mismo agente en los dos?',
        a: 'Sí, con el mismo conocimiento y distinto formato de respuesta. Mezclar los hilos sin distinguir el canal genera errores.',
      },
      {
        q: '¿Instagram permite automatización completa?',
        a: 'Permite mensajería mediante su API, con reglas propias. Las historias y comentarios públicos tienen límites claros.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/ia-atencion-cliente', anchor: 'varios canales con el mismo manual' },
    ],
    related: ['ia-en-instagram-y-facebook', 'whatsapp-business-vs-api', 'tasa-de-respuesta'],
  },
  {
    slug: 'automatizacion-no-code-vs-codigo',
    category: 'Comparativas',
    type: 'articulo',
    date: '2026-09-07',
    keyword: 'automatización no-code o con código',
    h1: 'No-code o código: cuándo cada uno deja de ser una buena idea',
    description:
      'Ventajas y límites de automatizar con herramientas visuales frente a escribir código, con criterios de volumen, mantenimiento y equipo.',
    intro:
      'No-code resuelve el 80% de las automatizaciones de un negocio pequeño en una tarde. El problema aparece en el 20% restante, que suele ser justo el que más valor tiene.',
    sections: [
      {
        h2: 'Donde no-code gana',
        html: '<p>Conectar formularios, hojas de cálculo, avisos y correos. Procesos simples, cambios frecuentes y equipos sin desarrolladores.</p>',
      },
      {
        h2: 'Donde no-code se rompe',
        html: '<p>Lógica con muchas condiciones, manejo de errores fino, volumen alto y datos sensibles. Ahí el flujo visual se vuelve un diagrama imposible de auditar.</p>',
      },
      {
        h2: 'El costo de cambiar después',
        html: '<p>Una automatización no-code que crece termina reemplazada. Si se sabe desde el principio, conviene diseñar la parte crítica con código desde el inicio.</p>',
      },
      {
        h2: 'La regla práctica',
        html: '<p>No-code para lo que cambia seguido y no tiene consecuencias graves. Código para lo que toca dinero, datos personales o compromisos con clientes.</p>',
      },
      {
        h2: 'El mismo caso por los dos caminos',
        html: '<p>Un formulario de contacto que debe crear la ficha del cliente, avisar al responsable y agendar una llamada. En no-code son tres conectores y una tarde: sirve, y si el negocio cambia de herramienta de agenda se rehace en otra tarde. Con código son dos días y una función que hay que mantener, pero el cambio de agenda se resuelve en una línea.</p>',
      },
      {
        h2: 'La deuda que nadie escribe',
        html: '<p>En no-code la deuda es de configuración: veinte flujos con nombres que nadie entiende y un dueño original que ya no trabaja ahí. En código la deuda es de mantenimiento: dependencias que hay que actualizar y errores que solo entiende quien lo escribió. Las dos existen; conviene saber cuál se puede pagar.</p>',
      },
      {
        h2: 'Cómo se decide sin discutir de tecnología',
        html: '<p>Escriba el flujo en una hoja con sus pasos y sus excepciones. Si son menos de diez pasos y dos excepciones, cualquier herramienta visual sirve. Si hay más, o si alguno mueve dinero, la parte crítica se escribe con código y el resto puede seguir visual.</p>',
      },
    ],
    steps: [
      {
        title: 'Cuente los pasos y las excepciones',
        text: 'Menos de diez pasos y dos excepciones es territorio de no-code. Más, o una excepción que toca dinero, pide código.',
      },
      {
        title: 'Pregunte quién va a mantenerlo',
        text: 'Si la persona que lo mantiene no programa, el flujo tiene que caber en una herramienta visual y estar documentado en una página.',
      },
      {
        title: 'Escriba con código solo el núcleo',
        text: 'La validación, el cálculo y el registro crítico. El aviso, el correo de confirmación y el panel pueden quedarse en no-code.',
      },
      {
        title: 'Deje una salida documentada',
        text: 'Qué hace el flujo, de dónde toma los datos y cómo se apaga. Sin eso, el equipo no se atreve a tocarlo y termina rodeándolo.',
      },
    ],
    table: {
      head: ['Criterio', 'No-code', 'Código'],
      rows: [
        ['Tiempo al primer resultado', 'Una tarde', 'Días o semanas'],
        ['Lógica compleja', 'Se vuelve un diagrama ilegible', 'Se maneja'],
        ['Cambios frecuentes', 'Rápidos', 'Requieren desarrollador'],
        ['Quién lo mantiene', 'El equipo operativo', 'Alguien que programa'],
        ['Riesgo de deuda', 'Configuración que nadie entiende', 'Dependencias y conocimiento concentrado'],
      ],
    },
    faq: [
      {
        q: '¿No-code escala?',
        a: 'Escala en volumen si la herramienta lo soporta, pero no en complejidad. Los flujos de cien pasos no se mantienen.',
      },
      {
        q: '¿Se puede mezclar?',
        a: 'Es lo más común: no-code para el pegamento, código para el núcleo del proceso.',
      },
      {
        q: '¿Cuándo conviene reescribir un flujo no-code?',
        a: 'Cuando hay que revisarlo antes de cada cambio por miedo a romper otra cosa, o cuando dos personas distintas ya no pueden explicar qué hace. Ahí la reescritura es mantenimiento, no capricho.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/ia-agentica-negocios', anchor: 'automatizar sin ahogarse' },
    ],
    related: ['plataforma-vs-desarrollo-propio', 'integraciones-que-si-sirven', 'webhooks-explicados-negocio'],
  },
  {
    slug: 'ia-local-vs-ia-en-la-nube',
    metaTitle: 'IA local o en la nube: qué gana en un negocio',
    category: 'Comparativas',
    type: 'articulo',
    date: '2026-09-06',
    keyword: 'IA local o en la nube',
    h1: 'IA local o en la nube: qué gana cada opción en un negocio real',
    description:
      'Comparación entre modelos locales y en la nube: privacidad, costo, calidad, latencia y el mantenimiento que nadie menciona.',
    intro:
      'La promesa de la IA local es atractiva: los datos no salen. La letra pequeña es que alguien tiene que mantener el servidor, actualizar el modelo y aceptar una calidad menor por el mismo precio.',
    sections: [
      {
        h2: 'Privacidad',
        html: '<p>Local gana sin discusión: el dato no sale de la infraestructura. En la nube depende del contrato con el proveedor y de si entrena con los datos enviados.</p>',
      },
      {
        h2: 'Calidad',
        html: '<p>Los mejores modelos siguen estando en la nube. Un modelo local razonable requiere hardware que cuesta más que años de API para un negocio pequeño.</p>',
      },
      {
        h2: 'Costo real',
        html: '<p>La API se paga por uso. Lo local se paga en hardware, electricidad y horas de alguien que lo mantenga. Con poco volumen, la API es más barata.</p>',
      },
      {
        h2: 'Cuándo lo local tiene sentido',
        html: '<p>Datos clínicos o legales con requisitos estrictos, operación con conectividad limitada, o volumen tan alto que el costo por token domina.</p>',
      },
    ],
    table: {
      head: ['Criterio', 'Local', 'Nube'],
      rows: [
        ['Privacidad', 'Total', 'Depende del contrato'],
        ['Calidad del modelo', 'Media', 'Alta'],
        ['Costo inicial', 'Hardware', 'Casi nulo'],
        ['Mantenimiento', 'Alto', 'Nulo'],
        ['Latencia', 'Baja si hay hardware', 'Variable'],
      ],
    },
    faq: [
      {
        q: '¿Un modelo local puede atender clientes?',
        a: 'Puede, con más errores en casos ambiguos. Para lo repetido funciona; para lo delicado conviene un modelo mayor.',
      },
      {
        q: '¿Se puede empezar en la nube y pasar a local?',
        a: 'Sí, si la arquitectura está separada del proveedor. Ese es un argumento fuerte para no casarse con una sola API.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/ia-agentica-negocios', anchor: 'IA con criterio de privacidad' },
    ],
    related: ['ia-y-privacidad-datos-clientes', 'modelos-grandes-vs-pequenos', 'plataforma-vs-desarrollo-propio'],
  },
  {
    slug: 'crm-ligero-vs-erp',
    category: 'Comparativas',
    type: 'articulo',
    date: '2026-09-05',
    keyword: 'CRM ligero o ERP',
    h1: 'CRM ligero o ERP completo: el error de comprar una suite para un problema',
    description:
      'Cuándo un negocio necesita un CRM ligero y cuándo un ERP, con las señales de sobrecompra que dejan proyectos a medio implementar.',
    intro:
      'Un ERP promete resolver todo y exige que el negocio se adapte a él. Un CRM ligero resuelve una cosa y se usa al día siguiente. Elegir el grande demasiado pronto es la forma más común de no tener ninguno.',
    sections: [
      {
        h2: 'Lo que un CRM ligero resuelve',
        html: '<p>Saber quién es cada cliente, qué se habló, cuándo se le contactó y qué sigue. Para la mayoría de las pymes de servicios, eso es el 90% del problema comercial.</p>',
      },
      {
        h2: 'Cuándo el ERP es inevitable',
        html: '<p>Inventario con costos, facturación electrónica integrada, compras, producción y contabilidad en un solo flujo. Ahí el CRM ligero no alcanza y no debería intentarlo.</p>',
      },
      {
        h2: 'El costo de la sobrecompra',
        html: '<p>Implementación de meses, capacitación que nadie termina y un equipo que vuelve a la hoja de cálculo porque el sistema es más lento que su memoria.</p>',
      },
      {
        h2: 'La secuencia que funciona',
        html: '<p>Primero el canal y el registro de conversaciones, después el CRM comercial, y solo entonces el sistema de gestión completo. Cada paso se justifica con un problema real.</p>',
      },
    ],
    faq: [
      {
        q: '¿Un ERP incluye CRM?',
        a: 'Casi siempre, y casi siempre peor que uno dedicado. Para el equipo que atiende, la parte de conversación suele ser la más débil.',
      },
      {
        q: '¿Se puede vivir sin ninguno de los dos?',
        a: 'Con muy poco volumen, sí. Con dos personas y cien clientes, ya hay información que se pierde.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/ia-atencion-cliente', anchor: 'empezar por la conversación' },
    ],
    related: ['crm-vs-hoja-de-calculo', 'etiquetas-y-crm-whatsapp', 'como-presentar-resultados-a-la-gerencia'],
  },
];
