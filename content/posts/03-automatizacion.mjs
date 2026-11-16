/**
 * 26-37: automatización de procesos. Qué mirar antes, qué romper después y
 * cuánto cuesta mantener un flujo que nadie revisa.
 */
export default [
  {
    slug: 'auditoria-de-procesos',
    category: 'Automatización',
    type: 'guia',
    date: '2026-10-22',
    keyword: 'auditoría de procesos antes de automatizar',
    h1: 'Auditoría de procesos: una semana de observación que ahorra tres meses de trabajo',
    description:
      'Cómo auditar un proceso antes de automatizarlo: mapa real, excepciones, responsables y los datos que revelan si vale la pena.',
    intro:
      'Nadie automatiza lo que cree que hace, sino lo que cree que debería hacer. La auditoría existe para encontrar la diferencia entre el proceso escrito y el proceso que ocurre todos los días en el teléfono de alguien.',
    sections: [
      {
        h2: 'Observe, no pregunte',
        html: '<p>Preguntar cómo funciona un proceso produce la versión oficial. Sentarse al lado de la persona que lo hace produce la versión real: los atajos, los archivos paralelos, la llamada que resuelve lo que el sistema no puede. Esa versión es la que se automatiza.</p>',
      },
      {
        h2: 'Cuente las excepciones',
        html: '<p>Un proceso con diez casos por semana y tres excepciones es un candidato malo. Uno con cien casos y una excepción es un candidato excelente. La automatización rinde donde la regla se repite.</p>',
      },
      {
        h2: 'Mida tres cosas por paso',
        html: '<p>Tiempo, frecuencia y quién lo hace. Con eso se ve dónde está el costo real. Casi siempre el paso más caro no es el más visible: suele ser \"esperar respuesta\" o \"copiar datos de un lado a otro\".</p>',
      },
      {
        h2: 'El resultado de la auditoría no es un documento',
        html: '<p>Es una decisión: qué paso se automatiza primero, qué paso se elimina y qué paso se queda manual para siempre. Un tercio de los hallazgos de una auditoría se resuelven borrando, no programando.</p>',
      },
    ],
    steps: [
      {
        title: 'Elija un proceso, no un departamento',
        text: 'Un proceso con principio y fin. \"Ventas\" no es un proceso; \"agendar la primera visita\" sí.',
      },
      {
        title: 'Mapa el recorrido real en una hoja',
        text: 'Un rectángulo por paso, una flecha por traspaso. Si necesita más de doce pasos, el proceso está mal diseñado.',
      },
      {
        title: 'Marque los pasos donde alguien espera',
        text: 'Donde hay espera hay oportunidad. La automatización no acelera el trabajo, elimina la espera.',
      },
      {
        title: 'Decida qué se elimina antes de qué se automatiza',
        text: 'El paso que nadie usa se borra. Automatizarlo solo hace que ocurra más rápido y sin sentido.',
      },
    ],
    faq: [
      {
        q: '¿Cuánto dura una auditoría razonable?',
        a: 'Una semana para un proceso pequeño. Más tiempo suele significar que se está auditando toda la empresa en lugar de un flujo.',
      },
      {
        q: '¿Hay que involucrar al equipo que hace el proceso?',
        a: 'Sí, y no solo para observar. Las personas que hacen el trabajo conocen las excepciones y son quienes van a usar la automatización.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/ia-agentica-negocios', anchor: 'automatización con criterio' },
      { url: 'https://kora-agent.com', anchor: 'Kora' },
    ],
    related: ['que-automatizar-primero', 'automatizacion-vs-digitalizacion', 'mantenimiento-de-automatizaciones'],
  },
  {
    slug: 'automatizacion-vs-digitalizacion',
    category: 'Automatización',
    type: 'articulo',
    date: '2026-10-21',
    keyword: 'automatización vs digitalización',
    h1: 'Digitalizar no es automatizar: el error que cuesta años',
    description:
      'Diferencia entre digitalizar un proceso y automatizarlo, con ejemplos concretos de negocios que cambiaron el papel por un formulario y siguen trabajando igual.',
    intro:
      'Digitalizar es mover el papel a una pantalla. Automatizar es que la pantalla haga el trabajo. Muchos proyectos se anuncian como transformación digital y en realidad solo cambiaron el lugar donde alguien copia los mismos datos.',
    sections: [
      {
        h2: 'Un ejemplo de cada cosa',
        html: '<p>Digitalizar: el cliente llena un formulario en línea y alguien lo lee para pasarlo a una hoja de cálculo. Automatizar: el formulario crea el registro, avisa al responsable, agenda la cita y confirma al cliente sin que nadie copie nada.</p>',
      },
      {
        h2: 'Por qué la digitalización se siente como progreso',
        html: '<p>Porque elimina una fricción visible (el papel) y deja intacta la fricción real (la transferencia manual de información). El equipo celebra el formulario y sigue perdiendo las mismas dos horas diarias.</p>',
      },
      {
        h2: 'La prueba de las tres preguntas',
        html: '<ol><li>¿Alguien copia este dato de un lugar a otro? Si sí, falta automatizar.</li><li>¿Alguien avisa a mano que algo pasó? Si sí, falta automatizar.</li><li>¿El proceso se detiene porque una persona no está? Si sí, falta automatizar.</li></ol>',
      },
      {
        h2: 'El orden correcto',
        html: '<p>Primero se ordena el proceso, después se digitaliza y por último se automatiza. Saltarse el primer paso produce un formulario que captura datos que nadie necesita en un orden que nadie entiende.</p>',
      },
    ],
    table: {
      head: ['Nivel', 'Qué cambia', 'Qué sigue igual'],
      rows: [
        ['Papel', 'Nada', 'Todo'],
        ['Digitalizado', 'El soporte', 'El trabajo manual'],
        ['Automatizado', 'Quién hace el trabajo', 'El objetivo del proceso'],
        ['Agéntico', 'Quién decide lo repetido', 'El criterio humano en lo importante'],
      ],
    },
    faq: [
      {
        q: '¿Automatizar siempre requiere integraciones?',
        a: 'Casi siempre al menos una. Si el agente no puede leer ni escribir en el sistema donde vive la información, solo puede conversar.',
      },
      {
        q: '¿Es válido quedarse en digitalizar?',
        a: 'Sí, si el proceso es poco frecuente. Automatizar algo que pasa una vez al mes no se paga.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/ia-agentica-negocios', anchor: 'de digitalizar a automatizar' },
      { url: 'https://kora-agent.com/automatizacion-whatsapp', anchor: 'automatización de conversaciones' },
    ],
    related: ['auditoria-de-procesos', 'que-automatizar-primero', 'costos-ocultos-de-automatizar'],
  },
  {
    slug: 'flujos-deterministas-vs-ia',
    category: 'Comparativas',
    type: 'articulo',
    date: '2026-10-20',
    keyword: 'flujos deterministas vs IA',
    h1: 'Flujo determinista o IA: por qué la respuesta correcta es las dos',
    description:
      'Cuándo conviene un flujo fijo, cuándo conviene un modelo y cómo combinarlos para que la automatización sea predecible sin volverse rígida.',
    intro:
      'Un flujo determinista hace siempre lo mismo. Un modelo decide. Elegir uno solo deja el sistema cojo: el flujo no entiende variaciones y el modelo no garantiza cumplimiento. La arquitectura honesta los combina.',
    sections: [
      {
        h2: 'El flujo manda en lo que no se negocia',
        html: '<p>Registrar un pedido, calcular un total, enviar un recordatorio, cancelar una cita. Ahí no se quiere creatividad: se quiere que ocurra exactamente igual mil veces. Un modelo en ese punto es un riesgo sin beneficio.</p>',
      },
      {
        h2: 'El modelo manda en lo que se escribe distinto cada vez',
        html: '<p>Entender qué quiere la persona, resumir un caso largo, detectar el tono, redactar una respuesta con contexto. Ahí un flujo rígido fracasa porque la gente no habla en opciones.</p>',
      },
      {
        h2: 'El patrón que funciona',
        html: '<p>Un flujo decide el camino y el modelo aporta la conversación dentro de ese camino. El modelo nunca inventa un dato: consulta una herramienta. El flujo nunca improvisa: ejecuta lo que corresponde.</p>',
      },
      {
        h2: 'Cómo se ve en un caso real',
        html: '<p>Agendar una cita: el flujo define los pasos (identificar, consultar, ofrecer, confirmar, registrar), y el modelo conversa en cada paso. Si la persona cambia de idea a mitad, el modelo lo entiende y el flujo vuelve al paso anterior sin perder lo ya capturado.</p>',
      },
    ],
    faq: [
      {
        q: '¿Un flujo con IA es más caro de mantener?',
        a: 'Cuesta más diseñarlo y menos ajustarlo. Un flujo con veinte ramas se vuelve imposible de mantener; uno con un modelo en el centro se ajusta cambiando instrucciones.',
      },
      {
        q: '¿Cómo se evita que el modelo se salga del flujo?',
        a: 'Con reglas explícitas, herramientas acotadas y validación del lado del servidor. El modelo propone; el sistema verifica.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/ia-agentica-negocios', anchor: 'flujos con IA dentro' },
      { url: 'https://kora-agent.com/agente-ia-whatsapp', anchor: 'un agente con reglas' },
    ],
    related: ['chatbot-vs-agente-de-ia', 'agentes-vs-flujos-operativa', 'cuando-la-ia-no-debe-responder'],
  },
  {
    slug: 'agentes-vs-flujos-operativa',
    category: 'Comparativas',
    type: 'articulo',
    date: '2026-10-19',
    keyword: 'agentes de IA vs flujos de trabajo',
    h1: 'Agentes y flujos: quién debería decidir en tu operación',
    description:
      'Comparación operativa entre delegar decisiones a un agente de IA y ejecutar flujos fijos, con criterios de riesgo, auditoría y costo.',
    intro:
      'La pregunta no es qué tecnología es más moderna, sino cuánta decisión se puede delegar sin perder control. En una operación con dinero, citas y clientes, la respuesta suele ser: más de la que se cree y menos de la que se teme.',
    sections: [
      {
        h2: 'Qué se delega sin riesgo',
        html: '<p>Clasificar mensajes, pedir datos faltantes, ordenar prioridades, redactar, resumir, buscar en la información del negocio. Si el error se corrige con una frase, se puede delegar.</p>',
      },
      {
        h2: 'Qué se delega con verificación',
        html: '<p>Agendar, cotizar con precios de lista, aplicar una política escrita. Se delega, pero el servidor valida contra la fuente real antes de confirmar. El agente no es la autoridad, es el ejecutor.</p>',
      },
      {
        h2: 'Qué no se delega',
        html: '<p>Descuentos fuera de lista, excepciones, reembolsos, decisiones legales o clínicas, y cualquier cosa que comprometa dinero sin un límite escrito.</p>',
      },
      {
        h2: 'La auditoría como condición',
        html: '<p>Si no queda registro de qué hizo el agente y por qué, no se puede delegar. Cada ejecución debe dejar rastro: mensaje, herramienta usada, resultado y quién lo autorizó.</p>',
      },
    ],
    faq: [
      {
        q: '¿Un agente puede trabajar sin flujo?',
        a: 'Puede, pero no conviene para procesos con consecuencias. El flujo da el marco y el agente la flexibilidad.',
      },
      {
        q: '¿Cómo se mide si el agente decide bien?',
        a: 'Revise una muestra de conversaciones por semana y compare la decisión del agente con la que habría tomado una persona.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/ia-agentica-negocios', anchor: 'delegar decisiones con control' },
      { url: 'https://kora-agent.com/ia-atencion-cliente', anchor: 'atención con agentes' },
    ],
    related: ['flujos-deterministas-vs-ia', 'chatbot-vs-agente-de-ia', 'costos-ocultos-de-automatizar'],
  },
  {
    slug: 'automatizar-cobranza-sin-perder-clientes',
    metaTitle: 'Automatizar cobranza sin perder clientes',
    category: 'Automatización',
    type: 'guia',
    date: '2026-10-18',
    keyword: 'automatizar cobranza',
    h1: 'Automatizar cobranza sin perder al cliente que paga tarde',
    description:
      'Cómo diseñar recordatorios de pago por WhatsApp y correo que respeten la relación comercial: tono, frecuencia, escalamiento y qué nunca automatizar.',
    intro:
      'La cobranza automática mal diseñada convierte a un buen cliente en un ex cliente. La diferencia está en el tono del primer recordatorio y en el momento en que el sistema deja de escribir y empieza a hablar una persona.',
    sections: [
      {
        h2: 'El primer recordatorio no es un reclamo',
        html: '<p>Es un aviso: monto, fecha, cómo pagar y a quién preguntar. Si el primer mensaje ya tiene tono de deuda, la relación se tensa antes de que exista un problema real.</p>',
      },
      {
        h2: 'Escalamiento con criterio',
        html: '<p>Primero un recordatorio cordial. Segundo, uno con el detalle y una opción de arreglo de pago. Tercero, una llamada de una persona. Si la automatización sigue después del tercer paso, el cliente siente que habla con una máquina que lo persigue.</p>',
      },
      {
        h2: 'Lo que nunca se automatiza',
        html: '<p>Negociar un plan de pago fuera de política, condonar intereses y cualquier conversación donde el cliente explique una dificultad económica. Ahí hace falta criterio y empatía, que no se programan.</p>',
      },
      {
        h2: 'El detalle que evita conflictos',
        html: '<p>Confirmar que el mensaje llegó a la persona correcta y que el monto es el que la persona espera. Un recordatorio con un monto mal calculado genera una discusión que cuesta más que la deuda.</p>',
      },
    ],
    table: {
      head: ['Etapa', 'Quién escribe', 'Qué dice', 'Riesgo'],
      rows: [
        ['Antes del vencimiento', 'Automático', 'Aviso con monto y forma de pago', 'Bajo'],
        ['Vencido 1 a 7 días', 'Automático', 'Recordatorio cordial', 'Bajo'],
        ['Vencido 8 a 21 días', 'Automático con revisión', 'Opciones de pago', 'Medio'],
        ['Vencido 21 días o más', 'Persona', 'Acuerdo real', 'Alto si se automatiza'],
      ],
    },
    faq: [
      {
        q: '¿WhatsApp o correo para cobrar?',
        a: 'El canal por donde llegó el cliente. Y si la factura se envía por correo, el recordatorio por correo es más coherente.',
      },
      {
        q: '¿Se puede incluir un enlace de pago?',
        a: 'Sí, uno solo y con el monto ya establecido. Los enlaces genéricos a un portal que pide elegir la factura generan más abandono.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/automatizacion-whatsapp', anchor: 'recordatorios de pago automatizados' },
    ],
    related: ['seguimiento-automatico-clientes', 'cuando-la-ia-no-debe-responder', 'metricas-de-ventas-por-canal'],
  },
  {
    slug: 'integraciones-que-si-sirven',
    category: 'Automatización',
    type: 'articulo',
    date: '2026-10-17',
    keyword: 'integraciones útiles para automatizar',
    h1: 'Integraciones: las tres que de verdad cambian la operación',
    description:
      'Por qué la mayoría de las integraciones no se usan, y las tres categorías que sí transforman un negocio: agenda, cobro y registro de clientes.',
    intro:
      'Un marketplace de integraciones promete conexión con todo. En la práctica, un negocio típico necesita tres: la agenda, el cobro y el lugar donde vive la información del cliente. El resto es ruido útil para una demo.',
    sections: [
      {
        h2: 'Agenda',
        html: '<p>Si el agente no puede leer ni escribir en la agenda real, todo lo demás es decorativo: puede conversar pero no puede resolver. Es la integración que más valor entrega por hora invertida.</p>',
      },
      {
        h2: 'Cobro',
        html: '<p>Un enlace de pago con el monto correcto y confirmación automática elimina el paso más lento de cualquier venta pequeña: perseguir el comprobante.</p>',
      },
      {
        h2: 'Registro de clientes',
        html: '<p>Saber que esta persona ya escribió tres veces, que tiene una cita el jueves y que prefiere que le hablen por la tarde evita repetir preguntas y mejora cualquier respuesta.</p>',
      },
      {
        h2: 'Cómo se elige el resto',
        html: '<p>Con una pregunta: ¿esta integración elimina un paso manual que ocurre todas las semanas? Si la respuesta es no, se deja para después. Cada integración extra es una cosa más que se puede romper.</p>',
      },
    ],
    faq: [
      {
        q: '¿Cuántas integraciones conviene tener activas?',
        a: 'Tres o cuatro bien mantenidas. Con diez, nadie sabe cuál falla cuando algo falla.',
      },
      {
        q: '¿Qué pasa cuando una integración deja de funcionar?',
        a: 'Debe fallar de forma visible y con un mensaje claro, nunca inventando el dato. Un agente que no puede leer la agenda debe decirlo.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/ia-agentica-negocios', anchor: 'herramientas conectadas' },
      { url: 'https://kora-agent.com/automatizacion-whatsapp', anchor: 'agenda y cobro en WhatsApp' },
    ],
    related: ['auditoria-de-procesos', 'costos-ocultos-de-automatizar', 'automatizacion-de-correo'],
  },
  {
    slug: 'cuando-automatizar-deja-de-servir',
    category: 'Automatización',
    type: 'articulo',
    date: '2026-10-16',
    keyword: 'cuándo una automatización deja de funcionar',
    h1: 'Señales de que tu automatización ya no sirve (y cómo apagarla bien)',
    description:
      'Cómo detectar una automatización obsoleta: clientes que la evitan, respuestas desactualizadas y equipos que la rodean por costumbre.',
    intro:
      'Toda automatización envejece. El negocio cambia, los precios cambian, el equipo cambia y el flujo sigue haciendo lo mismo con datos viejos. Detectarlo a tiempo es más barato que descubrirlo por un cliente enojado.',
    sections: [
      {
        h2: 'Los clientes empiezan a esquivarla',
        html: '<p>Escriben \"quiero hablar con una persona\" en el primer mensaje, o llaman directamente al teléfono. Es la señal más honesta: el sistema ya no resuelve y la gente aprendió a saltarlo.</p>',
      },
      {
        h2: 'El equipo la rodea',
        html: '<p>Cuando la persona que atiende tiene una hoja aparte con los precios correctos porque el sistema muestra otros, la automatización dejó de ser la fuente de verdad. En ese momento informa mal más rápido.</p>',
      },
      {
        h2: 'Nadie la revisa',
        html: '<p>Si hace tres meses que no se mira una conversación, no hay forma de saber si funciona. La falta de revisión no es ahorro de tiempo, es deuda acumulada.</p>',
      },
      {
        h2: 'Cómo se apaga',
        html: '<p>Sin drama y con aviso: se desvía el flujo a una respuesta simple con salida a humano, se conserva el historial y se deja documentado qué hacía y por qué se retiró. Apagar mal es tan costoso como mantener encendido algo que ya no sirve.</p>',
      },
    ],
    stats: [
      { value: '3 meses', label: 'sin revisar es demasiado' },
      { value: '1', label: 'fuente de verdad por dato' },
      { value: '10', label: 'conversaciones por semana para calibrar' },
      { value: '0', label: 'flujos eternos' },
    ],
    faq: [
      {
        q: '¿Cada cuánto se revisa una automatización?',
        a: 'Una muestra semanal el primer mes, mensual después. Y siempre después de un cambio de precio, horario o política.',
      },
      {
        q: '¿Conviene apagar o reescribir?',
        a: 'Si el proceso sigue existiendo y solo cambió la información, se actualiza. Si el proceso ya no existe, se apaga.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/ia-agentica-negocios', anchor: 'automatizaciones que se mantienen' },
    ],
    related: ['mantenimiento-de-automatizaciones', 'errores-al-automatizar-atencion', 'auditoria-de-procesos'],
  },
  {
    slug: 'webhooks-explicados-negocio',
    category: 'Automatización',
    type: 'guia',
    date: '2026-10-15',
    keyword: 'qué es un webhook',
    h1: 'Qué es un webhook, explicado para quien no programa',
    description:
      'Un webhook explicado sin tecnicismos: qué es, en qué se diferencia de consultar, por qué falla y qué debería exigirle a un proveedor.',
    intro:
      'Un webhook es un aviso: en lugar de que su sistema pregunte cada cinco minutos si pasó algo, el otro sistema le avisa en el instante en que pasa. Es la diferencia entre recibir un mensaje y revisar el buzón todo el día.',
    sections: [
      {
        h2: 'La analogía del timbre',
        html: '<p>Consultar es ir a la puerta cada cinco minutos. Un webhook es un timbre. Suena cuando alguien llega y usted sabe en el momento. La desventaja del timbre: si está desconectado, el aviso se pierde.</p>',
      },
      {
        h2: 'Por qué falla',
        html: '<p>Porque el destino estaba caído, porque tardó demasiado, porque el aviso llegó dos veces o porque llegó sin firma y nadie lo pudo verificar. Un webhook serio se reintenta, se puede identificar y no se procesa dos veces.</p>',
      },
      {
        h2: 'Qué exigirle a un proveedor',
        html: '<ul><li>Reintentos automáticos con espera creciente.</li><li>Firma o secreto compartido para comprobar el origen.</li><li>Identificador único del evento, para no duplicar.</li><li>Registro consultable de los últimos envíos.</li></ul>',
      },
      {
        h2: 'Qué significa para su negocio',
        html: '<p>Que un mensaje de WhatsApp llegue a su sistema en segundos, no en minutos. Eso es lo que hace posible responder dentro de la ventana de 24 horas sin depender de que alguien esté mirando la pantalla.</p>',
      },
    ],
    faq: [
      {
        q: '¿Un webhook reemplaza a una integración?',
        a: 'No. El webhook avisa que algo pasó; la integración permite leer y escribir los datos completos.',
      },
      {
        q: '¿Qué pasa si mi sistema está caído cuando llega?',
        a: 'Un buen proveedor reintenta durante horas o días. Si no reintenta, el evento se pierde y hay que reconstruir la información de otra forma.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/automatizacion-whatsapp', anchor: 'mensajes que llegan al instante' },
    ],
    related: ['api-de-whatsapp-para-empresas', 'integraciones-que-si-sirven', 'automatizacion-de-correo'],
  },
  {
    slug: 'automatizacion-de-correo',
    category: 'Automatización',
    type: 'guia',
    date: '2026-10-14',
    keyword: 'automatizar correo de clientes',
    h1: 'El correo que nadie contesta: automatizar la bandeja que sí importa',
    description:
      'Cómo automatizar la atención por correo sin caer en respuestas frías: triage de mensajes, respuestas verificables y cuándo contestar y cuándo no.',
    intro:
      'La bandeja de entrada de un negocio mezcla clientes, proveedores, notificaciones y promociones. Contestar todo con el mismo tono es un error; contestar solo a los clientes exige distinguir quién es quién, y eso se puede resolver en el servidor.',
    sections: [
      {
        h2: 'Primero separar, después responder',
        html: '<p>Un mensaje de un cliente con una pregunta no se parece a un aviso de la plataforma de pagos. Clasificar antes de responder evita el error más visible de todos: contestarle a una notificación automática.</p>',
      },
      {
        h2: 'Responder solo lo que se puede verificar',
        html: '<p>Precios, horarios, políticas y estado de un pedido salen de un sistema. Si el dato no está disponible, la respuesta correcta es decir que se confirma, no improvisar.</p>',
      },
      {
        h2: 'El asunto es parte de la respuesta',
        html: '<p>Responder dentro del mismo hilo, sin cambiar el asunto y con el contexto citado, hace que el cliente encuentre la respuesta en su bandeja meses después. Cambiar el asunto rompe la conversación.</p>',
      },
      {
        h2: 'Cuándo no responder',
        html: '<p>Boletines, alertas de empleo, notificaciones de plataformas y correos masivos se archivan y no se contestan. Responderlos genera ruido en la bandeja de otra persona y desgasta la reputación del dominio.</p>',
      },
    ],
    faq: [
      {
        q: '¿Un agente puede responder correo con la misma calidad que WhatsApp?',
        a: 'Sí, con más estructura. El correo tolera y espera un texto más largo; el tono se mantiene, el formato cambia.',
      },
      {
        q: '¿Conviene una dirección separada para clientes?',
        a: 'Ayuda a clasificar, pero multiplica bandejas. Una dirección con buen triage suele ser mejor que tres direcciones a medio atender.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/ia-atencion-cliente', anchor: 'atención por correo y WhatsApp' },
      { url: 'https://kora-agent.com', anchor: 'Kora' },
    ],
    related: ['integraciones-que-si-sirven', 'boletines-y-notificaciones-en-la-bandeja', 'handoff-humano-ia'],
  },
  {
    slug: 'mantenimiento-de-automatizaciones',
    category: 'Automatización',
    type: 'guia',
    date: '2026-10-13',
    keyword: 'mantenimiento de automatizaciones',
    h1: 'El mantenimiento que nadie planea: cuánto cuesta tener un flujo vivo',
    description:
      'Qué revisar cada semana, cada mes y cada trimestre en una automatización, y cómo repartir esa carga sin depender de una sola persona.',
    intro:
      'Automatizar es el 30% del trabajo. El otro 70% es mantener: precios que cambian, integraciones que se rompen, clientes que empiezan a preguntar algo nuevo. Un flujo sin dueño es un flujo que se degrada en silencio.',
    sections: [
      {
        h2: 'Cada semana: diez conversaciones',
        html: '<p>Leer diez conversaciones al azar detecta el 80% de los problemas: respuestas repetidas, información vencida, transferencias innecesarias. Diez minutos, no más.</p>',
      },
      {
        h2: 'Cada mes: coherencia de datos',
        html: '<p>Comparar precios, horarios y políticas del sistema con los del flujo. Este es el chequeo que evita el error más caro y más frecuente: automatizar con información vieja.</p>',
      },
      {
        h2: 'Cada trimestre: ¿el proceso sigue existiendo?',
        html: '<p>Los procesos desaparecen. Un flujo que automatiza algo que ya no se hace no está fallando: está sobrando. Se apaga.</p>',
      },
      {
        h2: 'Un dueño con nombre',
        html: '<p>Si la pregunta \"¿quién mantiene esto?\" no tiene una persona, tiene un problema. El dueño no necesita programar: necesita saber qué hace el flujo y cómo cambiarlo.</p>',
      },
    ],
    steps: [
      {
        title: 'Escriba la ficha del flujo',
        text: 'Qué hace, qué datos usa, de dónde salen, quién lo revisa y cómo se apaga. Una página.',
      },
      {
        title: 'Reserve diez minutos semanales',
        text: 'En el calendario, con la misma seriedad que una reunión. Sin eso, no ocurre.',
      },
      {
        title: 'Registre cada cambio',
        text: 'Fecha, qué se cambió y por qué. Cuando algo falla semanas después, ese registro es lo que permite encontrar la causa.',
      },
      {
        title: 'Revise después de cada cambio del negocio',
        text: 'Nuevo precio, nuevo horario, nuevo servicio: el flujo se revisa el mismo día.',
      },
    ],
    faq: [
      {
        q: '¿Quién debería mantener la automatización?',
        a: 'Alguien del negocio, no solo un proveedor. El conocimiento operativo vive adentro, y el mantenimiento depende de ese conocimiento.',
      },
      {
        q: '¿Cuánto tiempo al mes es razonable?',
        a: 'Una a dos horas para una automatización de atención. Más tiempo significa que el diseño tiene demasiadas piezas.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/ia-agentica-negocios', anchor: 'automatizaciones mantenibles' },
    ],
    related: ['cuando-automatizar-deja-de-servir', 'costos-ocultos-de-automatizar', 'auditoria-de-procesos'],
  },
  {
    slug: 'costos-ocultos-de-automatizar',
    category: 'Datos y métricas',
    type: 'articulo',
    date: '2026-10-12',
    keyword: 'costos ocultos de automatizar',
    h1: 'Los costos que no aparecen en la cotización de una automatización',
    description:
      'Los costos reales de automatizar: tiempo del equipo, contenido, mantenimiento, integraciones y el precio de una falla silenciosa.',
    intro:
      'La cotización de una herramienta es la parte pequeña. Lo que decide si el proyecto se paga es el tiempo de las personas que lo alimentan, lo revisan y lo corrigen, y eso casi nunca aparece en la propuesta.',
    sections: [
      {
        h2: 'Contenido: el costo que siempre se subestima',
        html: '<p>Escribir las respuestas correctas de un negocio toma más tiempo que configurar la herramienta. Si nadie lo hace, el sistema funciona con información aproximada y el ahorro se convierte en correcciones.</p>',
      },
      {
        h2: 'Mantenimiento: dos horas al mes, para siempre',
        html: '<p>Pequeño en apariencia, pero es un compromiso indefinido. En tres años son más de setenta horas, y ninguna aparece en el cálculo inicial.</p>',
      },
      {
        h2: 'Integraciones: cada una es una dependencia',
        html: '<p>Un cambio en la API de un proveedor puede detener un flujo. Contar con un plan para cuando eso ocurre es parte del costo, aunque no se vea.</p>',
      },
      {
        h2: 'La falla silenciosa',
        html: '<p>El costo más alto no es el error visible, es el que pasa desapercibido: una conversación que nunca se contestó y que nadie notó. Por eso el panel debe mostrar lo que quedó pendiente, no solo lo que salió bien.</p>',
      },
    ],
    table: {
      head: ['Costo', 'Cuándo aparece', 'Magnitud típica'],
      rows: [
        ['Herramienta', 'Mensual', 'Fijo y predecible'],
        ['Contenido inicial', 'Semana 1', '20 a 40 horas'],
        ['Mantenimiento', 'Mensual', '1 a 2 horas'],
        ['Integraciones', 'Al conectar', 'Variable'],
        ['Fallas no detectadas', 'Cuando un cliente reclama', 'Alto'],
      ],
    },
    faq: [
      {
        q: '¿Vale la pena automatizar un negocio pequeño?',
        a: 'Sí, si el volumen es suficiente para que el tiempo ahorrado supere el mantenimiento. Con diez mensajes al día, todavía rinde.',
      },
      {
        q: '¿Cómo se reduce el costo de contenido?',
        a: 'Reutilizando lo que ya existe: correos enviados, respuestas de WhatsApp, el manual del equipo. La información suele estar, solo que dispersa.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/ia-atencion-cliente', anchor: 'el costo real de atender' },
      { url: 'https://kora-agent.com/ia-agentica-negocios', anchor: 'IA con retorno medible' },
    ],
    related: ['roi-de-la-automatizacion', 'mantenimiento-de-automatizaciones', 'integraciones-que-si-sirven'],
  },
  {
    slug: 'automatizar-sin-perder-el-tono',
    category: 'Automatización',
    type: 'articulo',
    date: '2026-10-11',
    keyword: 'automatizar sin perder el tono humano',
    h1: 'Automatizar sin que el cliente sienta que habla con un formulario',
    description:
      'Cómo mantener el tono humano en una atención automatizada: variación, contexto, tiempos y las tres frases que delatan a un robot.',
    intro:
      'El problema no es que el cliente sepa que hay automatización: es que sienta que nadie pensó en él. Hay tres frases que delatan a un sistema mal diseñado, y ninguna tiene que ver con la tecnología.',
    sections: [
      {
        h2: 'Las tres frases que delatan',
        html: '<ul><li>\"Su consulta ha sido registrada.\"</li><li>\"¿En qué más puedo ayudarle?\" después de cada mensaje.</li><li>\"No entendí, por favor reformule.\" sin ofrecer una alternativa.</li></ul><p>Las tres comparten lo mismo: hablan del sistema, no del problema del cliente.</p>',
      },
      {
        h2: 'El contexto es lo que suena humano',
        html: '<p>Recordar el nombre, el producto y lo que se dijo antes hace más por el tono que cualquier adjetivo. Una respuesta simple con contexto se siente más humana que una elaborada sin él.</p>',
      },
      {
        h2: 'Los tiempos también comunican',
        html: '<p>Responder en cero coma dos segundos a un mensaje largo se siente raro. Responder rápido a una pregunta simple se siente bien. Ajustar la inmediatez al tamaño del mensaje es un detalle que se nota.</p>',
      },
      {
        h2: 'Saber cuándo callarse',
        html: '<p>Un sistema que responde a todo, incluso a un \"gracias\", cansa. A veces la respuesta correcta es una confirmación breve o ninguna respuesta, y el silencio bien usado también es parte del tono.</p>',
      },
    ],
    faq: [
      {
        q: '¿Conviene que el agente tenga nombre?',
        a: 'Ayuda si el nombre es del negocio y se usa con naturalidad. Un nombre inventado que cambia según el turno confunde.',
      },
      {
        q: '¿Se puede pedir disculpas automáticamente?',
        a: 'Sí, una vez y por algo concreto. Las disculpas repetidas sin corrección se leen como guion.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/agente-ia-whatsapp', anchor: 'un agente con tono propio' },
      { url: 'https://kora-agent.com/ia-atencion-cliente', anchor: 'atención que suena humana' },
    ],
    related: ['tono-de-voz-marca-ia', 'errores-al-automatizar-atencion', 'cuando-automatizar-deja-de-servir'],
  },
];
