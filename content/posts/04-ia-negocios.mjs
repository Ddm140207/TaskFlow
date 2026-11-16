/**
 * 38-49: IA aplicada a un negocio real. Límites, costos, privacidad y las
 * preguntas que aparecen después de la demo.
 */
export default [
  {
    slug: 'alucinaciones-como-controlarlas',
    category: 'IA para negocios',
    type: 'guia',
    date: '2026-10-10',
    keyword: 'cómo controlar alucinaciones de la IA',
    h1: 'Alucinaciones: por qué la IA inventa precios y cómo se evita',
    description:
      'Qué causa que un modelo invente datos, por qué escribir \"no inventes\" no funciona y las cinco defensas que sí reducen el riesgo a casi cero.',
    intro:
      'Un modelo no miente: completa patrones. Si le pregunta un precio y no tiene el precio, completa con algo que suena a precio. La defensa no es pedirle honestidad, es no dejarle la decisión de dónde sale el dato.',
    sections: [
      {
        h2: 'Por qué \"no inventes\" no sirve',
        html: '<p>Es una instrucción de estilo, no un control. El modelo puede obedecerla la mitad de las veces y fallar en la otra mitad sin avisar. Cualquier garantía que dependa de que el modelo recuerde una instrucción es frágil.</p>',
      },
      {
        h2: 'Defensa 1: el dato sale de una herramienta',
        html: '<p>Precios, horarios, disponibilidad y estado de pedidos se consultan. Si la herramienta falla, la respuesta correcta es decir que no se pudo confirmar, nunca completar con lo que parece razonable.</p>',
      },
      {
        h2: 'Defensa 2: instrucciones con presupuesto',
        html: '<p>El contexto que se le entrega debe caber completo y estar ordenado por importancia. Un manual de cuarenta páginas que se corta a la mitad produce respuestas basadas en la parte que sí llegó.</p>',
      },
      {
        h2: 'Defensa 3: verificación del lado del servidor',
        html: '<p>Antes de confirmar una cita o un cobro, el sistema revisa contra la fuente real. Si el modelo dijo algo que no coincide, gana el sistema. El modelo propone, el servidor decide.</p>',
      },
      {
        h2: 'Defensa 4: revisión de una muestra',
        html: '<p>Diez conversaciones por semana revelan patrones de invención que ningún panel muestra: un horario viejo, una promoción vencida, un servicio que ya no se ofrece.</p>',
      },
      {
        h2: 'Defensa 5: la respuesta que admite no saber',
        html: '<p>Hay que enseñar explícitamente la salida honesta: \"eso lo confirmo y le aviso\". Si el modelo no tiene una forma elegante de no saber, va a elegir inventar.</p>',
      },
    ],
    stats: [
      { value: '0', label: 'datos de negocio que el modelo debe recordar de memoria' },
      { value: '5', label: 'defensas que se combinan' },
      { value: '10', label: 'conversaciones por semana para detectar patrones' },
      { value: '100%', label: 'de los datos críticos salen de una herramienta' },
    ],
    faq: [
      {
        q: '¿Un modelo más caro alucina menos?',
        a: 'Alucina distinto. Mejorar el modelo ayuda, pero no reemplaza la defensa estructural: si el dato no está disponible, ningún modelo lo tiene.',
      },
      {
        q: '¿Cómo se detecta una alucinación en producción?',
        a: 'Con el registro de qué herramienta se usó en cada respuesta. Una respuesta con precio y sin consulta previa es una alerta inmediata.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/ia-agentica-negocios', anchor: 'IA que consulta antes de responder' },
      { url: 'https://kora-agent.com/ia-atencion-cliente', anchor: 'atención sin datos inventados' },
    ],
    related: ['cuando-la-ia-no-debe-responder', 'ia-que-consulta-tus-datos', 'prompts-no-son-producto'],
  },
  {
    slug: 'que-es-un-agente-de-ia',
    metaTitle: 'Qué es un agente de IA y qué no lo es',
    category: 'IA para negocios',
    type: 'articulo',
    date: '2026-10-09',
    keyword: 'qué es un agente de IA',
    h1: 'Qué es un agente de IA, sin humo y con un ejemplo concreto',
    description:
      'Definición práctica de agente de IA: entiende, decide, usa herramientas y entrega un resultado. Con un ejemplo de agenda y los límites que necesita.',
    intro:
      'Se llama agente a cualquier cosa que responda texto. La diferencia real es si puede hacer algo: consultar un sistema, ejecutar una acción y verificar el resultado. Sin eso, es un chat con buena redacción.',
    sections: [
      {
        h2: 'Las cuatro piezas',
        html: '<ol><li><strong>Entiende:</strong> interpreta lo que la persona quiere, aunque lo escriba distinto cada vez.</li><li><strong>Decide:</strong> elige qué hacer, entre un conjunto de acciones permitidas.</li><li><strong>Actúa:</strong> usa una herramienta real, no simula el resultado.</li><li><strong>Verifica:</strong> comprueba que la acción ocurrió y responde con el dato confirmado.</li></ol>',
      },
      {
        h2: 'Un ejemplo, paso por paso',
        html: '<p>\"¿Tienen hueco el jueves?\": el agente interpreta la fecha, consulta la agenda real, encuentra dos espacios, ofrece uno y, cuando la persona confirma, crea la cita y la confirma con fecha y hora exactas. Si la agenda no responde, dice que no puede confirmar y ofrece avisar.</p>',
      },
      {
        h2: 'Lo que un agente necesita para no hacer daño',
        html: '<p>Un conjunto cerrado de herramientas, un límite de intentos, un registro de lo que hizo y una salida a humano. Sin esos cuatro, un agente es un riesgo con buena conversación.</p>',
      },
      {
        h2: 'Cómo se nota la diferencia en el cliente',
        html: '<p>El cliente no ve la arquitectura, ve el resultado: la cita existe, el pedido está registrado, la respuesta trae el dato correcto. Un chat que solo conversa se descubre en el segundo mensaje.</p>',
      },
    ],
    faq: [
      {
        q: '¿Un agente necesita IA para ser agente?',
        a: 'No estrictamente, pero la IA es lo que le permite entender lenguaje libre. Sin ella es un flujo con reglas, que también sirve para procesos fijos.',
      },
      {
        q: '¿Puede un agente trabajar solo?',
        a: 'Puede operar sin supervisión constante, pero necesita revisión y reglas. Sin revisión, los errores se acumulan hasta que un cliente los reporta.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/ia-agentica-negocios', anchor: 'qué hace un agente de verdad' },
      { url: 'https://kora-agent.com/agente-ia-whatsapp', anchor: 'un agente en WhatsApp' },
    ],
    related: ['chatbot-vs-agente-de-ia', 'flujos-deterministas-vs-ia', 'ia-para-pymes-sin-equipo-tecnico'],
  },
  {
    slug: 'ia-para-pymes-sin-equipo-tecnico',
    category: 'IA para negocios',
    type: 'guia',
    date: '2026-10-08',
    keyword: 'IA para pymes sin equipo técnico',
    h1: 'IA en una pyme sin equipo técnico: el camino que sí termina',
    description:
      'Plan realista para adoptar IA en una pyme sin desarrolladores: qué decidir antes, qué no construir y cómo validar en dos semanas.',
    intro:
      'Una pyme no necesita un departamento de datos: necesita resolver un problema concreto con información que ya tiene. El obstáculo casi nunca es técnico, es no haber definido qué se quiere dejar de hacer a mano.',
    sections: [
      {
        h2: 'Empiece por la tarea, no por la tecnología',
        html: '<p>\"Quiero usar IA\" no es un objetivo. \"Quiero contestar los mensajes de horario sin que nadie los lea\" sí lo es, y se puede verificar el viernes.</p>',
      },
      {
        h2: 'No construya, conecte',
        html: '<p>Construir un agente desde cero requiere ingeniería, mantenimiento y un equipo que entienda el código. Para una pyme, lo razonable es una plataforma que ya resuelva el canal y el panel, y dedicar el esfuerzo al contenido del negocio.</p>',
      },
      {
        h2: 'La información es el trabajo',
        html: '<p>Reúna en un solo lugar: servicios, precios, horarios, políticas y las preguntas frecuentes con su respuesta. Ese documento vale más que cualquier configuración.</p>',
      },
      {
        h2: 'Valide en dos semanas',
        html: '<p>Dos semanas con un canal real, diez conversaciones revisadas al día y una decisión al final: seguir, ajustar o apagar. Sin ese plazo, el proyecto entra en un limbo donde nadie sabe si funciona.</p>',
      },
    ],
    steps: [
      {
        title: 'Elija una tarea repetida y medible',
        text: 'Algo que ocurra todos los días y se pueda contar: mensajes respondidos, citas agendadas, cotizaciones enviadas.',
      },
      {
        title: 'Ordene la información en un documento',
        text: 'Servicios, precios, horarios, políticas, preguntas frecuentes. Con su respuesta real, no la ideal.',
      },
      {
        title: 'Conecte un solo canal',
        text: 'El más usado. Añadir canales antes de validar multiplica los problemas sin multiplicar el aprendizaje.',
      },
      {
        title: 'Revise diez conversaciones al día durante dos semanas',
        text: 'Anote cada respuesta incorrecta y corríjala en la fuente. Ese ciclo es la implementación.',
      },
    ],
    faq: [
      {
        q: '¿Cuánto cuesta empezar?',
        a: 'Menos que un sueldo parcial, si se usa una plataforma. Lo caro es el tiempo de ordenar la información, y ese trabajo queda en el negocio.',
      },
      {
        q: '¿Necesito cambiar mis sistemas?',
        a: 'Idealmente no. Si el agente puede leer la agenda y el catálogo que ya usa, no hay migración.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/ia-atencion-cliente', anchor: 'empezar con IA sin equipo técnico' },
      { url: 'https://kora-agent.com', anchor: 'Kora' },
    ],
    related: ['que-automatizar-primero', 'que-es-un-agente-de-ia', 'costo-por-conversacion-ia'],
  },
  {
    slug: 'ia-que-consulta-tus-datos',
    category: 'IA para negocios',
    type: 'articulo',
    date: '2026-10-07',
    keyword: 'IA conectada a los datos del negocio',
    h1: 'La diferencia entre una IA que opina y una que consulta tus datos',
    description:
      'Por qué conectar un modelo a las fuentes reales del negocio cambia la calidad de la respuesta, y cómo se hace sin exponer información sensible.',
    intro:
      'Un modelo entrenado con internet sabe mucho de todo y nada de su negocio. La calidad no viene del tamaño del modelo, viene de que pueda leer el calendario, el catálogo y el historial antes de contestar.',
    sections: [
      {
        h2: 'Lo que el modelo no puede saber',
        html: '<p>Cuántas mesas quedan el sábado, qué precio tiene el servicio este mes, si el pedido salió ayer, si esa persona ya llamó dos veces. Son datos que cambian y que solo existen en un sistema.</p>',
      },
      {
        h2: 'Cómo se conecta sin abrir la puerta',
        html: '<p>Cada herramienta expone una acción acotada: consultar disponibilidad, leer un pedido, buscar un cliente por teléfono. El modelo no tiene acceso a la base de datos; tiene permiso para ejecutar unas pocas operaciones concretas y auditadas.</p>',
      },
      {
        h2: 'El resultado que nota el cliente',
        html: '<p>Respuestas con la fecha correcta, sin preguntar dos veces lo mismo, sin prometer lo que no existe. La sensación es de un negocio ordenado, aunque el cliente no sepa por qué.</p>',
      },
      {
        h2: 'El costo de no hacerlo',
        html: '<p>Un agente sin datos es un folleto con conversación. Sirve para horarios y para orientar, y falla justo en el momento en que el cliente quiere resolver algo.</p>',
      },
    ],
    faq: [
      {
        q: '¿Hay que darle acceso total al modelo?',
        a: 'No, y no se debe. Acciones concretas, con permisos por caso de uso y registro de cada ejecución.',
      },
      {
        q: '¿Qué pasa si la consulta falla?',
        a: 'Se responde con honestidad y se ofrece un siguiente paso. Nunca se completa el dato con una suposición.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/ia-agentica-negocios', anchor: 'IA conectada a tus sistemas' },
      { url: 'https://kora-agent.com/agente-ia-whatsapp', anchor: 'agenda real por WhatsApp' },
    ],
    related: ['alucinaciones-como-controlarlas', 'integraciones-que-si-sirven', 'que-es-un-agente-de-ia'],
  },
  {
    slug: 'prompts-no-son-producto',
    category: 'IA para negocios',
    type: 'articulo',
    date: '2026-10-06',
    keyword: 'prompts no son un producto',
    h1: 'Un prompt no es un producto: por qué la demo funciona y el negocio no',
    description:
      'La diferencia entre una demo de prompt y un sistema en producción: datos, permisos, registro, manejo de errores y mantenimiento.',
    intro:
      'Un prompt de veinte líneas puede impresionar en una reunión. Lo que sostiene un negocio es todo lo que rodea al prompt: de dónde salen los datos, qué pasa cuando faltan, quién revisa y cómo se corrige.',
    sections: [
      {
        h2: 'La demo miente por omisión',
        html: '<p>En una demo, el modelo responde bien porque el caso está elegido. En producción llegan audios, errores de tipeo, mensajes a las 3 de la mañana, clientes enojados y preguntas que nadie previó.</p>',
      },
      {
        h2: 'Lo que falta alrededor del prompt',
        html: '<ul><li>Fuente de datos verificable.</li><li>Permisos por acción.</li><li>Registro de cada ejecución.</li><li>Manejo de errores con mensaje útil.</li><li>Revisión periódica y proceso de corrección.</li></ul>',
      },
      {
        h2: 'El prompt es el 20%',
        html: '<p>Y es la parte que se cambia más seguido, porque el negocio cambia. Si el resto no existe, cada cambio de precio obliga a tocar el prompt, y ahí empiezan los errores.</p>',
      },
      {
        h2: 'Cómo evaluar una propuesta',
        html: '<p>Pregunte qué pasa cuando la integración falla, dónde queda el registro de lo que hizo, cómo se cambia un precio sin tocar código y quién revisa las conversaciones. Las respuestas dicen más que cualquier demo.</p>',
      },
    ],
    faq: [
      {
        q: '¿Entonces los prompts no importan?',
        a: 'Importan, pero no son el sistema. Un buen prompt con datos malos produce respuestas malas con buena redacción.',
      },
      {
        q: '¿Cuánto debería cambiar un prompt con el tiempo?',
        a: 'Poco, si los datos viven afuera. Si cambia todas las semanas, el diseño está cargando información donde no corresponde.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/ia-agentica-negocios', anchor: 'de la demo a producción' },
    ],
    related: ['alucinaciones-como-controlarlas', 'cuando-contratar-consultor-ia', 'costo-por-conversacion-ia'],
  },
  {
    slug: 'modelos-grandes-vs-pequenos',
    category: 'IA para negocios',
    type: 'articulo',
    date: '2026-10-05',
    keyword: 'modelo grande o pequeño para atención',
    h1: 'Modelo grande o modelo pequeño: cómo elegir sin pagar de más',
    description:
      'Cuándo usar un modelo grande y cuándo uno pequeño en atención al cliente: calidad, latencia, costo por conversación y el truco de usar dos.',
    intro:
      'El modelo más caro no siempre da la mejor respuesta: da la respuesta más elaborada. Para \"¿a qué hora abren?\" eso es dinero tirado. Para una queja delicada, es la diferencia.',
    sections: [
      {
        h2: 'Lo que cambia entre modelos',
        html: '<p>Capacidad de razonar, calidad de redacción, idiomas, latencia y costo por token. Un modelo grande razona mejor y tarda más; uno pequeño responde rápido y barato, y se equivoca más en lo ambiguo.</p>',
      },
      {
        h2: 'El patrón de dos niveles',
        html: '<p>Un modelo pequeño atiende lo repetido y clasifica. Si detecta complejidad (reclamo, caso largo, idioma raro), escala a uno grande. En la práctica, el 70% de las conversaciones nunca llega al modelo caro.</p>',
      },
      {
        h2: 'La latencia también es calidad',
        html: '<p>Un modelo grande que tarda ocho segundos en contestar \"sí, abrimos a las 8\" se siente peor que uno pequeño que responde en dos. La velocidad es parte de la experiencia, no un detalle técnico.</p>',
      },
      {
        h2: 'Cómo se decide con datos',
        html: '<p>Tome cincuenta conversaciones reales, pase la misma pregunta por dos modelos y compare: corrección del dato, tono y tiempo. La decisión deja de ser opinión.</p>',
      },
    ],
    table: {
      head: ['Caso', 'Modelo pequeño', 'Modelo grande'],
      rows: [
        ['Horarios y precios de lista', 'Ideal', 'Sobrecosto'],
        ['Clasificar intención', 'Ideal', 'Sobrecosto'],
        ['Reclamo emocional', 'Riesgoso', 'Recomendado'],
        ['Idioma poco común', 'Irregular', 'Recomendado'],
        ['Resumen de caso largo', 'Aceptable', 'Mejor'],
      ],
    },
    faq: [
      {
        q: '¿El modelo pequeño alucina más?',
        a: 'En datos que no tiene, sí. Por eso el dato siempre viene de una herramienta, no del modelo.',
      },
      {
        q: '¿Se puede cambiar de modelo después?',
        a: 'Sí, y conviene probarlo. La arquitectura debe permitirlo sin reescribir el flujo.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/ia-atencion-cliente', anchor: 'el modelo correcto por caso' },
      { url: 'https://kora-agent.com/ia-agentica-negocios', anchor: 'IA con costo controlado' },
    ],
    related: ['costo-por-conversacion-ia', 'que-es-un-agente-de-ia', 'roi-de-la-automatizacion'],
  },
  {
    slug: 'costo-por-conversacion-ia',
    category: 'Datos y métricas',
    type: 'infografia',
    date: '2026-10-04',
    keyword: 'costo por conversación con IA',
    h1: 'Cuánto cuesta realmente una conversación atendida por IA',
    description:
      'Desglose del costo por conversación con IA: tokens, transcripción, herramientas, plataforma y el costo humano de supervisar.',
    intro:
      'El precio por millón de tokens es la parte visible y casi nunca la más grande. El costo real incluye transcripción de audios, consultas a herramientas, la plataforma y el tiempo de alguien revisando.',
    stats: [
      { value: '3-8', label: 'centavos por conversación corta con modelo pequeño' },
      { value: '15-40', label: 'centavos con modelo grande y herramientas' },
      { value: '2-5', label: 'centavos por audio transcrito' },
      { value: '1-2 h', label: 'de supervisión al mes por cada cien conversaciones' },
    ],
    sections: [
      {
        h2: 'Las cinco piezas del costo',
        html: '<ol><li><strong>Modelo:</strong> depende del largo del contexto y del modelo elegido.</li><li><strong>Transcripción:</strong> por minuto de audio, no por mensaje.</li><li><strong>Herramientas:</strong> cada consulta a un sistema externo puede tener costo propio.</li><li><strong>Plataforma:</strong> la tarifa fija mensual.</li><li><strong>Supervisión:</strong> el tiempo humano de revisar y corregir.</li></ol>',
      },
      {
        h2: 'Por qué el contexto pesa tanto',
        html: '<p>Cada mensaje arrastra el historial y el manual del negocio. Un manual de doce mil caracteres en cada turno multiplica el costo de una conversación de diez mensajes. Acortar el contexto donde se puede es la optimización más efectiva.</p>',
      },
      {
        h2: 'Comparación honesta con una persona',
        html: '<p>Una persona cuesta por hora y atiende varias conversaciones a la vez. La IA cuesta por conversación y no se cansa. La comparación justa no es sueldo contra tokens: es costo por conversación resuelta, incluyendo la supervisión.</p>',
      },
      {
        h2: 'Cómo bajarlo sin romper la calidad',
        html: '<ul><li>Modelo pequeño para lo repetido.</li><li>Contexto más corto y ordenado.</li><li>No transcribir audios que no necesitan respuesta automática.</li><li>Evitar consultas repetidas a la misma herramienta en un turno.</li></ul>',
      },
    ],
    faq: [
      {
        q: '¿Una conversación con IA es más barata que una persona?',
        a: 'En volumen alto, casi siempre. En volumen bajo, la plataforma fija puede pesar más que el ahorro.',
      },
      {
        q: '¿El costo por conversación baja con el tiempo?',
        a: 'Los precios de los modelos bajan, pero el consumo sube si el manual crece. Hay que revisar ambos.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/ia-atencion-cliente', anchor: 'costo por conversación resuelta' },
    ],
    related: ['roi-de-la-automatizacion', 'modelos-grandes-vs-pequenos', 'costos-ocultos-de-automatizar'],
  },
  {
    slug: 'ia-multilingue-atencion',
    category: 'IA para negocios',
    type: 'articulo',
    date: '2026-10-03',
    keyword: 'atención al cliente en varios idiomas con IA',
    h1: 'Atender en el idioma del cliente: lo que la IA hace bien y lo que confunde',
    description:
      'Cómo funciona la atención multilingüe con IA, por qué responder en otro idioma no siempre es correcto y cómo se elige el idioma.',
    intro:
      'Un negocio turístico recibe mensajes en cuatro idiomas el mismo día. Un modelo puede responder en todos, pero elegir mal el idioma molesta más que un error gramatical.',
    sections: [
      {
        h2: 'El idioma lo decide el cliente, no el sistema',
        html: '<p>Se responde en el idioma del último mensaje del cliente. Si escribe en inglés, se contesta en inglés, aunque el negocio esté en Costa Rica y el manual esté en español.</p>',
      },
      {
        h2: 'Un mensaje corto no siempre tiene señal',
        html: '<p>\"Ok\", \"gracias\" y un emoji no dicen nada. En esos casos se hereda el idioma de la conversación, no se adivina por la palabra.</p>',
      },
      {
        h2: 'Lo que se traduce y lo que no',
        html: '<p>Se traduce la conversación, no los datos. Un nombre, una dirección o el nombre de un platillo se quedan igual. Traducir la marca o el nombre de un servicio crea confusión.</p>',
      },
      {
        h2: 'El detalle que arruina la experiencia',
        html: '<p>Responder en inglés a un mensaje en español porque el sistema detectó una palabra en otro idioma. La detección tiene que mirar palabras completas y, si duda, seguir la conversación.</p>',
      },
    ],
    faq: [
      {
        q: '¿Vale la pena escribir el manual en varios idiomas?',
        a: 'No es necesario: el modelo traduce. Lo importante es que el manual esté completo en un idioma y que las reglas sean claras.',
      },
      {
        q: '¿Cómo se manejan los idiomas que el modelo domina poco?',
        a: 'Con la misma salida honesta: se responde en un idioma común y se ofrece una persona si la conversación es delicada.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/agente-ia-whatsapp', anchor: 'atención en el idioma del cliente' },
    ],
    related: ['tono-de-voz-marca-ia', 'ia-para-pymes-sin-equipo-tecnico', 'errores-al-automatizar-atencion'],
  },
  {
    slug: 'ia-y-privacidad-datos-clientes',
    category: 'IA para negocios',
    type: 'guia',
    date: '2026-10-02',
    keyword: 'privacidad de datos de clientes con IA',
    h1: 'Datos de clientes e IA: qué se puede enviar y qué nunca',
    description:
      'Reglas prácticas de privacidad para atención con IA: qué información no debe pasar por un modelo, cómo se guarda y qué decirle al cliente.',
    intro:
      'Cada mensaje que entra a un modelo es información que sale de su infraestructura. La pregunta no es si hay riesgo, es qué datos vale la pena procesar y cuáles deben quedarse donde están.',
    sections: [
      {
        h2: 'Lo que no va a un modelo',
        html: '<p>Números de tarjeta, contraseñas, documentos de identidad completos, resultados clínicos e información de menores. Si un mensaje los contiene, se debe enmascarar antes de procesarlo o atenderlo fuera del flujo automático.</p>',
      },
      {
        h2: 'Lo que sí puede pasar, con cuidado',
        html: '<p>Nombre, motivo de consulta, preferencia de horario y datos de contacto son razonables para atender. Aun así, conviene que el proveedor no entrene con esos datos y que exista un registro de qué se envió.</p>',
      },
      {
        h2: 'Dónde vive la información',
        html: '<p>En el sistema del negocio, no en el proveedor del modelo. El modelo procesa y olvida; el historial, el perfil del cliente y la cita se guardan en la base del negocio, con acceso controlado.</p>',
      },
      {
        h2: 'Qué decirle al cliente',
        html: '<p>Una línea clara en el sitio o en la política de privacidad: se usan herramientas automatizadas para atender y la información se guarda en el sistema del negocio. Sin letra pequeña ni tecnicismos.</p>',
      },
    ],
    faq: [
      {
        q: '¿Un mensaje de WhatsApp es privado por defecto?',
        a: 'El canal cifra el transporte, pero el negocio que recibe el mensaje lo procesa. La privacidad depende de cómo se almacena y con quién se comparte.',
      },
      {
        q: '¿Se puede usar IA sin enviar datos a un tercero?',
        a: 'Con modelos locales, sí, a costa de calidad y mantenimiento. Para la mayoría de las pymes el equilibrio razonable es un proveedor con contrato claro.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/ia-atencion-cliente', anchor: 'atención con datos protegidos' },
      { url: 'https://kora-agent.com', anchor: 'Kora' },
    ],
    related: ['ia-que-consulta-tus-datos', 'cuando-contratar-consultor-ia', 'prompts-no-son-producto'],
  },
  {
    slug: 'ia-para-cotizaciones',
    category: 'IA para negocios',
    type: 'guia',
    date: '2026-10-01',
    keyword: 'cotizaciones automáticas con IA',
    h1: 'Cotizar más rápido sin inventar precios: el flujo que funciona',
    description:
      'Cómo automatizar cotizaciones con IA manteniendo control de precios: catálogo como fuente, reglas de descuento y aprobación humana donde toca.',
    intro:
      'Una cotización es una promesa de precio. Automatizarla sin control es la forma más rápida de comprometer un margen. Con el catálogo como fuente y reglas claras, se puede responder en minutos y sin riesgo.',
    sections: [
      {
        h2: 'El catálogo manda',
        html: '<p>El agente lee los precios del sistema donde el negocio los administra. Si un ítem no está, no se cotiza: se consulta. Nunca se estima por parecido con otro producto.</p>',
      },
      {
        h2: 'Descuentos con regla escrita',
        html: '<p>Hasta cierto porcentaje, el agente puede aplicar la política. Por encima, se detiene y pide aprobación. Ese límite debe estar escrito y no depender del criterio del modelo.</p>',
      },
      {
        h2: 'Qué debe llevar una cotización',
        html: '<ul><li>Qué incluye y qué no.</li><li>Precio, impuestos y moneda.</li><li>Vigencia.</li><li>Cómo se acepta.</li><li>Condiciones de entrega o ejecución.</li></ul>',
      },
      {
        h2: 'El seguimiento es parte de la cotización',
        html: '<p>Una cotización sin seguimiento es un documento olvidado. Dos días después, un mensaje con una pregunta concreta (\"¿le queda alguna duda del alcance?\") convierte más que un recordatorio genérico.</p>',
      },
    ],
    steps: [
      {
        title: 'Conecte el catálogo real',
        text: 'El agente debe leer la misma lista de precios que usa el equipo de ventas.',
      },
      {
        title: 'Defina el límite de descuento',
        text: 'Un porcentaje automático y una aprobación por encima. Nunca al revés.',
      },
      {
        title: 'Armé la plantilla de cotización',
        text: 'Alcance, exclusiones, precio, vigencia y forma de aceptación. Una página.',
      },
      {
        title: 'Programe un seguimiento con pregunta',
        text: 'Dos días después, una duda concreta sobre el alcance, no un \"¿qué pasó?\"',
      },
    ],
    faq: [
      {
        q: '¿El agente puede negociar?',
        a: 'Puede aplicar la política escrita. Negociar fuera de política es una decisión comercial de una persona.',
      },
      {
        q: '¿Se puede cotizar un servicio personalizado?',
        a: 'Se pueden capturar los datos y preparar la propuesta, pero el precio lo define quien conoce el alcance.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/ia-agentica-negocios', anchor: 'cotizaciones con catálogo real' },
      { url: 'https://kora-agent.com/automatizacion-whatsapp', anchor: 'cotizar por WhatsApp' },
    ],
    related: ['seguimiento-automatico-clientes', 'integraciones-que-si-sirven', 'metricas-de-ventas-por-canal'],
  },
  {
    slug: 'cuando-contratar-consultor-ia',
    category: 'IA para negocios',
    type: 'articulo',
    date: '2026-09-30',
    keyword: 'contratar consultor de IA',
    h1: 'Cuándo tiene sentido pagar un consultor de IA (y cuándo no)',
    description:
      'Criterios para decidir si un negocio necesita un consultor de IA, qué debería entregar y las señales de una propuesta que no sirve.',
    intro:
      'Hay dos formas de perder dinero con IA: no hacer nada y pagar por una estrategia que nadie ejecuta. Un consultor sirve cuando el problema es de decisión, no de configuración.',
    sections: [
      {
        h2: 'Cuándo sí',
        html: '<p>Cuando hay varios procesos candidatos y no está claro cuál primero; cuando el equipo técnico existe pero no tiene experiencia con modelos; cuando hay que integrar sistemas propios y el riesgo de una mala decisión es alto.</p>',
      },
      {
        h2: 'Cuándo no',
        html: '<p>Cuando el problema es responder mensajes repetidos en un canal: eso lo resuelve una plataforma, no una consultoría. Pagar seis semanas de diagnóstico para conectar WhatsApp es caro y lento.</p>',
      },
      {
        h2: 'Qué debería entregar',
        html: '<p>Un proceso funcionando, no un documento. Con métricas antes y después, contenido cargado, equipo capacitado y una guía de mantenimiento. Si el entregable es un PDF, el trabajo no terminó.</p>',
      },
      {
        h2: 'Señales de alerta',
        html: '<ul><li>Promete resultados garantizados de ventas.</li><li>No pregunta por los datos disponibles.</li><li>Propone reemplazar todo el sistema.</li><li>Cobra por hora sin alcance definido.</li><li>No deja forma de apagar lo que construyó.</li></ul>',
      },
    ],
    faq: [
      {
        q: '¿Un consultor reemplaza a la plataforma?',
        a: 'No. La plataforma ejecuta; el consultor decide el orden y el alcance. Confundirlos es lo que produce proyectos sin resultado.',
      },
      {
        q: '¿Cómo se mide el retorno?',
        a: 'Con las métricas del proceso elegido, medidas antes de empezar. Sin línea base no hay forma de saber si sirvió.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/ia-agentica-negocios', anchor: 'implementación con criterio' },
      { url: 'https://kora-agent.com', anchor: 'Kora' },
    ],
    related: ['prompts-no-son-producto', 'auditoria-de-procesos', 'costos-ocultos-de-automatizar'],
  },
  {
    slug: 'ia-en-instagram-y-facebook',
    category: 'IA para negocios',
    type: 'guia',
    date: '2026-09-29',
    keyword: 'IA para mensajes de Instagram y Facebook',
    h1: 'Instagram y Facebook: los mensajes que se pierden por no estar en el mismo lugar',
    description:
      'Cómo unificar la atención de Instagram, Facebook y WhatsApp sin duplicar respuestas, y qué mensajes no deben contestarse automáticamente.',
    intro:
      'Un negocio recibe la misma pregunta por tres canales y contesta en uno. Unificar no significa mezclar: significa que una persona vea todo y que un agente responda lo repetido en cada canal.',
    sections: [
      {
        h2: 'El mismo cliente, tres identidades',
        html: '<p>Quien escribe por Instagram puede ser el mismo que escribió por WhatsApp ayer. Sin un identificador común (teléfono o correo), dos conversaciones se atienden como si fueran dos personas.</p>',
      },
      {
        h2: 'Qué se responde automáticamente',
        html: '<p>Información de servicios, horarios, precios de lista y cómo agendar. Lo mismo que en WhatsApp, con el formato del canal: en Instagram los mensajes largos se leen peor.</p>',
      },
      {
        h2: 'Qué no se responde',
        html: '<p>Reacciones a historias, comentarios públicos y mensajes con contexto emocional. Una reacción a una historia no es una consulta: contestarla con un discurso comercial es el error más común y más visible.</p>',
      },
      {
        h2: 'El detalle del canal',
        html: '<p>Los comentarios públicos no se contestan con el mismo texto que un mensaje privado. En público se responde breve y se invita a privado; en privado se resuelve.</p>',
      },
    ],
    faq: [
      {
        q: '¿Se puede automatizar Instagram con la misma herramienta que WhatsApp?',
        a: 'Sí, si la plataforma administra ambos canales. Lo importante es que una persona vea las dos conversaciones juntas.',
      },
      {
        q: '¿Responder historias genera problemas?',
        a: 'Responder una historia con texto comercial se percibe como intrusivo. Reconocer que es una historia y ofrecer escribir directo funciona mejor.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/agente-ia-whatsapp', anchor: 'varios canales en un solo lugar' },
      { url: 'https://kora-agent.com/ia-atencion-cliente', anchor: 'atención unificada' },
    ],
    related: ['whatsapp-multiagente', 'cuando-la-ia-no-debe-responder', 'boletines-y-notificaciones-en-la-bandeja'],
  },
];
