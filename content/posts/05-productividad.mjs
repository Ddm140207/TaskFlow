/**
 * 50-61: productividad del equipo que atiende. Menos teoría motivacional y más
 * decisiones concretas sobre bandejas, reuniones, notas y plantillas.
 */
export default [
  {
    slug: 'bandeja-de-entrada-unificada',
    category: 'Productividad',
    type: 'guia',
    date: '2026-09-28',
    keyword: 'bandeja de entrada unificada',
    h1: 'Una sola bandeja: cómo dejar de revisar cinco lugares para atender clientes',
    description:
      'Cómo unificar WhatsApp, correo, Instagram y formularios en una sola bandeja sin perder contexto, y qué hacer con los canales que no se miran.',
    intro:
      'Cada canal extra es una pestaña que alguien olvida. El costo no es la pestaña: es el cliente que escribió por Instagram hace dos días y nunca recibió respuesta porque nadie miraba esa bandeja.',
    sections: [
      {
        h2: 'Cuente las bandejas que existen hoy',
        html: '<p>WhatsApp del negocio, WhatsApp personal del dueño, correo, Instagram, Facebook, el formulario del sitio y los mensajes que llegan por la ficha de Google. Son siete. Nadie revisa siete lugares todos los días.</p>',
      },
      {
        h2: 'Unificar no es mezclar',
        html: '<p>Los mensajes deben llegar al mismo lugar pero conservar su canal de origen, porque la respuesta cambia de formato. Lo que se unifica es la vista y el estado, no el tono.</p>',
      },
      {
        h2: 'El estado compartido es la clave',
        html: '<p>Nuevo, en atención, esperando al cliente, cerrado. Con eso, cualquiera sabe qué falta sin abrir cada conversación. Sin eso, la bandeja unificada es solo un desorden más grande en un solo lugar.</p>',
      },
      {
        h2: 'Qué hacer con el canal que nadie usa',
        html: '<p>Si un canal recibe tres mensajes al mes y nadie lo revisa, se cierra o se redirige con un mensaje claro. Mantener un canal abandonado es peor que no tenerlo: el cliente cree que puede escribir ahí.</p>',
      },
    ],
    steps: [
      {
        title: 'Liste todos los canales y su volumen real',
        text: 'Cuente los mensajes de la última semana por canal. Los que se ignoran aparecen en la lista.',
      },
      {
        title: 'Elija una herramienta que lea los canales que importan',
        text: 'No la que promete todos los canales: la que conecta los tres o cuatro que de verdad reciben clientes.',
      },
      {
        title: 'Defina los cuatro estados',
        text: 'Nuevo, en atención, esperando, cerrado. Sin estados, la bandeja no se puede operar en equipo.',
      },
      {
        title: 'Cierre o redirija los canales muertos',
        text: 'Un mensaje automático claro en el canal abandonado evita que el cliente espere.',
      },
    ],
    faq: [
      {
        q: '¿Unificar bandejas requiere API en todos los canales?',
        a: 'Para WhatsApp sí. Para correo se usa IMAP o una integración del proveedor. Instagram y Facebook pasan por sus APIs de mensajería.',
      },
      {
        q: '¿Es mejor una herramienta propia o una plataforma?',
        a: 'Para la mayoría, plataforma. Construir una bandeja multi-canal es un proyecto de meses que no diferencia al negocio.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/ia-atencion-cliente', anchor: 'una bandeja para todos los canales' },
      { url: 'https://kora-agent.com/agente-ia-whatsapp', anchor: 'atención unificada en Kora' },
    ],
    related: ['whatsapp-multiagente', 'manual-de-atencion-en-una-pagina', 'interrupciones-y-trabajo-profundo'],
  },
  {
    slug: 'reuniones-que-podrian-ser-un-mensaje',
    category: 'Productividad',
    type: 'articulo',
    date: '2026-09-27',
    keyword: 'reuniones que deberían ser un mensaje',
    h1: 'La reunión que podía ser un mensaje: cómo decidirlo en treinta segundos',
    description:
      'Criterio simple para decidir si una reunión es necesaria: tres preguntas, tres formatos alternativos y cómo documentar la decisión.',
    intro:
      'No todas las reuniones sobran, pero muchas existen por inercia. La prueba no es la duración, es si el resultado requiere que varias personas piensen al mismo tiempo o solo que se enteren.',
    sections: [
      {
        h2: 'Las tres preguntas',
        html: '<ol><li>¿Hay una decisión que necesita discusión? Si no, es un aviso.</li><li>¿Alguien necesita responder en vivo? Si no, es un mensaje.</li><li>¿El tema tiene más de una arista que se cruza? Si no, es un documento.</li></ol>',
      },
      {
        h2: 'El reemplazo por defecto',
        html: '<p>Un mensaje con contexto, la propuesta concreta y un plazo de respuesta. Si a las 48 horas nadie objetó, se ejecuta. Ese patrón elimina la mitad de las reuniones de coordinación sin perder decisiones.</p>',
      },
      {
        h2: 'Cuándo la reunión sí es la herramienta correcta',
        html: '<p>Conflicto entre áreas, negociación, una decisión con consecuencias emocionales, o un tema nuevo donde nadie sabe todavía qué preguntar. Ahí el intercambio en vivo ahorra semanas.</p>',
      },
      {
        h2: 'Si la reunión ocurre, que deje algo',
        html: '<p>Tres líneas al final: qué se decidió, quién hace qué y para cuándo. Sin eso, la reunión se repetirá la semana siguiente con las mismas personas.</p>',
      },
    ],
    faq: [
      {
        q: '¿Reemplazar reuniones por mensajes no aísla al equipo?',
        a: 'Aísla si no hay ningún espacio de conversación. La solución es tener un espacio real para lo importante y no usar reuniones como sustituto de documentación.',
      },
      {
        q: '¿Cómo se convence a quien convoca todas las reuniones?',
        a: 'Con la cuenta de horas. Diez personas en una hora semanal son diez horas. Puesto en números, la conversación cambia.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/ia-agentica-negocios', anchor: 'operación sin fricción' },
    ],
    related: ['documentar-procesos-sin-burocracia', 'interrupciones-y-trabajo-profundo', 'delegar-sin-microgestionar'],
  },
  {
    slug: 'documentar-procesos-sin-burocracia',
    category: 'Productividad',
    type: 'guia',
    date: '2026-09-26',
    keyword: 'documentar procesos sin burocracia',
    h1: 'Documentar un proceso en una página, sin manuales que nadie lee',
    description:
      'Formato de una página para documentar procesos operativos: cuándo aplica, pasos, excepciones y a quién preguntar. Con ejemplo completo.',
    intro:
      'Un manual de cuarenta páginas se escribe una vez y se consulta nunca. Una página con lo que ocurre el 90% de las veces se usa todos los días y se corrige cuando cambia.',
    sections: [
      {
        h2: 'La estructura de una página',
        html: '<ol><li><strong>Cuándo aplica:</strong> en una frase.</li><li><strong>Pasos:</strong> máximo siete, en imperativo.</li><li><strong>Excepciones:</strong> qué hacer cuando no aplica.</li><li><strong>A quién preguntar:</strong> una persona con nombre.</li><li><strong>Cuándo se revisó:</strong> una fecha.</li></ol>',
      },
      {
        h2: 'Por qué siete pasos',
        html: '<p>Porque un proceso de más de siete pasos suele ser dos procesos pegados. Separarlos hace cada uno documentable y automatizable.</p>',
      },
      {
        h2: 'La fecha es lo que lo mantiene vivo',
        html: '<p>Un documento sin fecha no se sabe si está vigente. Con fecha, cualquiera detecta que tiene ocho meses y pide revisión antes de seguirlo.</p>',
      },
      {
        h2: 'Escribir mientras se hace',
        html: '<p>El mejor momento para documentar es la primera vez que alguien hace el proceso con ayuda. Ahí aparecen los detalles que después se olvidan.</p>',
      },
    ],
    faq: [
      {
        q: '¿Dónde se guardan estas páginas?',
        a: 'Donde el equipo ya busca: la herramienta de notas o el drive que se usa a diario. Un repositorio nuevo que nadie abre no sirve.',
      },
      {
        q: '¿Quién escribe?',
        a: 'Quien hace el proceso, con ayuda de quien lo pidió. Un documento escrito por alguien que no ejecuta el trabajo suena correcto y falla en la práctica.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/ia-agentica-negocios', anchor: 'procesos claros para automatizar' },
      { url: 'https://kora-agent.com', anchor: 'Kora' },
    ],
    related: ['auditoria-de-procesos', 'manual-de-atencion-en-una-pagina', 'delegar-sin-microgestionar'],
  },
  {
    slug: 'sistema-de-notas-que-si-se-usa',
    category: 'Productividad',
    type: 'articulo',
    date: '2026-09-25',
    keyword: 'sistema de notas que se usa',
    h1: 'Por qué tu sistema de notas no se usa (y el que sí funciona en una pyme)',
    description:
      'Un sistema de notas mínimo para negocios pequeños: una bandeja, tres carpetas y una revisión semanal. Sin plugins ni métodos complicados.',
    intro:
      'La mayoría de los sistemas de notas mueren por exceso de estructura. Clasificar cada nota en el momento es una decisión que nadie quiere tomar con prisa, así que la nota se queda donde cayó, y después nada se encuentra.',
    sections: [
      {
        h2: 'Una bandeja y nada más',
        html: '<p>Todo entra en un solo lugar sin clasificar. Al final del día, cinco minutos para mover lo que importa. Ese paso único es lo que sostiene el sistema.</p>',
      },
      {
        h2: 'Tres carpetas, no treinta',
        html: '<p>Clientes, operación y decisiones. Si algo no cabe en esas tres, va a la bandeja hasta que se aclare. Las subcarpetas crecen hasta que nadie sabe dónde buscar.</p>',
      },
      {
        h2: 'La nota que no tiene acción no es una nota',
        html: '<p>Es información. Vive en el lugar del tema (la ficha del cliente, el documento del proceso), no en la bandeja personal. Mezclar los dos es lo que vuelve inútil la bandeja.</p>',
      },
      {
        h2: 'La revisión semanal',
        html: '<p>Quince minutos: vaciar la bandeja, revisar pendientes, cerrar lo que ya no aplica. Sin esta revisión, cualquier sistema se degrada en un mes.</p>',
      },
    ],
    faq: [
      {
        q: '¿Vale la pena una herramienta con enlaces entre notas?',
        a: 'Si el trabajo es de investigación, sí. En una pyme de servicios, una bandeja y tres carpetas resuelven más.',
      },
      {
        q: '¿Se puede usar papel?',
        a: 'Sí, con una condición: la revisión semanal pasa lo que importa al sistema digital donde el equipo busca.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/ia-atencion-cliente', anchor: 'contexto del cliente guardado' },
    ],
    related: ['documentar-procesos-sin-burocracia', 'cerrar-el-dia-en-diez-minutos', 'priorizar-con-dos-listas'],
  },
  {
    slug: 'priorizar-con-dos-listas',
    category: 'Productividad',
    type: 'guia',
    date: '2026-09-24',
    keyword: 'priorizar tareas con dos listas',
    h1: 'Priorizar con dos listas: la que hoy y la que algún día',
    description:
      'Método de priorización de dos listas para equipos pequeños: una lista de hoy con cinco cosas, una de algún día sin culpa y una regla de entrada.',
    intro:
      'Las listas de tareas fallan cuando mezclan lo urgente con lo importante y lo que alguien más quiere. Separar por horizonte es más efectivo que cualquier sistema de puntuación.',
    sections: [
      {
        h2: 'La lista de hoy tiene cinco lugares',
        html: '<p>No cinco prioridades: cinco espacios. Si entra una sexta, sale una. Ese límite obliga a elegir y evita la lista de veinte cosas que se reescribe cada mañana.</p>',
      },
      {
        h2: 'La lista de algún día no tiene fecha',
        html: '<p>Todo lo que importa y no es para hoy. Existe para no perderlo, no para generar culpa. Se revisa una vez por semana y se promueve lo que corresponde.</p>',
      },
      {
        h2: 'La regla de entrada',
        html: '<p>Lo que llega por un mensaje no entra directo a la lista de hoy. Primero se decide: ¿esto es para hoy, para algún día, o es de otra persona? Sin esa decisión, la agenda la escribe quien escribe más rápido.</p>',
      },
      {
        h2: 'Lo que se elimina sin drama',
        html: '<p>Una tarea que lleva tres semanas en la lista de algún día y nunca sube probablemente no se va a hacer. Eliminarla libera espacio mental y es una decisión, no un fracaso.</p>',
      },
    ],
    faq: [
      {
        q: '¿Sirve para un equipo o solo para una persona?',
        a: 'Para ambos, si la lista de hoy es visible. En equipo, la visibilidad evita que dos personas hagan lo mismo.',
      },
      {
        q: '¿Cómo se manejan las urgencias reales?',
        a: 'Entran y desplazan algo. La regla no es que nada interrumpa, es que toda interrupción tenga un costo visible.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/ia-agentica-negocios', anchor: 'prioridades en la operación' },
    ],
    related: ['cerrar-el-dia-en-diez-minutos', 'interrupciones-y-trabajo-profundo', 'sistema-de-notas-que-si-se-usa'],
  },
  {
    slug: 'automatizar-la-agenda-personal',
    category: 'Productividad',
    type: 'guia',
    date: '2026-09-23',
    keyword: 'automatizar la agenda personal',
    h1: 'Automatizar la agenda: los tres enlaces que eliminan el ida y vuelta',
    description:
      'Cómo automatizar la coordinación de reuniones y citas sin cadenas de correos: enlace de reserva, recordatorios y reglas de disponibilidad.',
    intro:
      'Coordinar una reunión de treinta minutos puede tomar seis mensajes. Un enlace de reserva con reglas claras reduce eso a uno, siempre que la agenda esté bien configurada.',
    sections: [
      {
        h2: 'El enlace de reserva con reglas',
        html: '<p>Disponibilidad real, duración fija, margen entre reuniones y un límite diario. Sin esos límites, la agenda se llena de huecos y la persona termina trabajando de noche.</p>',
      },
      {
        h2: 'Recordatorios que sí reducen ausencias',
        html: '<p>Uno al confirmar, uno el día anterior y uno una hora antes. Cada recordatorio debe incluir cómo reprogramar, o el cliente simplemente no aparece.</p>',
      },
      {
        h2: 'El campo que casi nadie pone',
        html: '<p>Un campo de \"tema\" obligatorio en el formulario de reserva. Con una línea, la reunión empieza con contexto; sin ella, los primeros cinco minutos se van en descubrir de qué se trata.</p>',
      },
      {
        h2: 'Cuándo no se automatiza',
        html: '<p>Cuando la conversación previa es parte de la venta. En servicios de alto valor, el ida y vuelta es una oportunidad de calificar. Ahí conviene un agente que conversa, no un enlace.</p>',
      },
    ],
    faq: [
      {
        q: '¿Un enlace de reserva reduce la conversión?',
        a: 'Puede reducir el número de solicitudes y aumentar la calidad. Para una agenda ocupada suele ser el intercambio correcto.',
      },
      {
        q: '¿Cómo se evita el doble agendamiento?',
        a: 'Sincronizando con una sola agenda maestra. Dos calendarios sin sincronía garantizan el choque.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/agente-ia-whatsapp', anchor: 'agendar sin ida y vuelta' },
    ],
    related: ['whatsapp-para-clinicas-citas', 'plantillas-recordatorio-de-cita', 'cerrar-el-dia-en-diez-minutos'],
  },
  {
    slug: 'interrupciones-y-trabajo-profundo',
    category: 'Productividad',
    type: 'articulo',
    date: '2026-09-22',
    keyword: 'interrupciones y trabajo profundo',
    h1: 'Interrupciones: cuánto cuesta de verdad cada notificación',
    description:
      'Por qué cada interrupción cuesta más que el minuto que dura, cómo se agrupan los mensajes y qué se puede delegar a un agente.',
    intro:
      'Volver a un problema después de una interrupción toma más tiempo del que duró la interrupción. En un negocio que atiende mensajes todo el día, ese costo se paga decenas de veces por jornada.',
    sections: [
      {
        h2: 'El costo real',
        html: '<p>No son dos minutos de respuesta: son dos minutos más el tiempo de reconstruir el contexto. En trabajo que requiere concentración, una interrupción puede costar quince minutos de rendimiento.</p>',
      },
      {
        h2: 'Agrupar en lugar de reaccionar',
        html: '<p>Revisar mensajes en bloques de veinte minutos, tres veces al día, cambia la sensación de la jornada. No todas las conversaciones necesitan respuesta inmediata.</p>',
      },
      {
        h2: 'Lo que un agente puede absorber',
        html: '<p>Las preguntas repetidas, la confirmación de datos y las consultas de horario. Ese bloque es exactamente el que rompe la concentración y el que menos criterio humano necesita.</p>',
      },
      {
        h2: 'Lo que necesita a una persona de inmediato',
        html: '<p>Un cliente enojado, una cancelación, un caso con consecuencias. Para eso sí vale interrumpir, y por eso conviene que el sistema lo marque distinto en lugar de avisar todo con el mismo ruido.</p>',
      },
    ],
    faq: [
      {
        q: '¿Responder lento no daña la atención?',
        a: 'Daña si el cliente no sabe que fue recibido. Un acuse inmediato con tiempo estimado real resuelve la espera sin interrumpir el trabajo.',
      },
      {
        q: '¿Cómo se convence al equipo de agrupar mensajes?',
        a: 'Midiendo una semana de ambos estilos. La diferencia de trabajo terminado suele ser evidente sin necesidad de discutir.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/ia-atencion-cliente', anchor: 'un agente que absorbe lo repetido' },
      { url: 'https://kora-agent.com', anchor: 'Kora' },
    ],
    related: ['bandeja-de-entrada-unificada', 'priorizar-con-dos-listas', 'cuando-la-ia-no-debe-responder'],
  },
  {
    slug: 'plantillas-de-respuesta-reutilizables',
    category: 'Productividad',
    type: 'guia',
    date: '2026-09-21',
    keyword: 'plantillas de respuesta para atención',
    h1: 'Plantillas de respuesta: las diez que ahorran más tiempo en un negocio',
    description:
      'Qué plantillas de respuesta conviene tener, cómo escribirlas para que no suenen a robot y cómo convertirlas en conocimiento para un agente.',
    intro:
      'Una plantilla mal escrita ahorra teclas y cuesta un cliente. La versión buena es la que se puede enviar tal cual a un desconocido sin que suene a copiar y pegar.',
    sections: [
      {
        h2: 'Las diez que casi todo negocio necesita',
        html: '<ol><li>Saludo con la información de contacto.</li><li>Horarios y ubicación.</li><li>Lista de precios y qué incluye.</li><li>Formas de pago.</li><li>Cómo agendar.</li><li>Política de cancelación.</li><li>Tiempo de entrega o de respuesta.</li><li>Pedido de datos faltantes.</li><li>Disculpa por un error propio.</li><li>Cierre y siguiente paso.</li></ol>',
      },
      {
        h2: 'La regla de la plantilla editable',
        html: '<p>Cada plantilla tiene un espacio para una frase específica del caso. Una plantilla sin ese espacio se lee genérica; con él, el cliente siente que fue escrita para él.</p>',
      },
      {
        h2: 'De plantilla a conocimiento',
        html: '<p>Las mismas diez plantillas son la base del manual de un agente. Si ya están escritas y aprobadas, cargar el agente es copiar y pegar, no inventar contenido nuevo.</p>',
      },
      {
        h2: 'Revisión cada trimestre',
        html: '<p>Precios, horarios y políticas cambian. Una plantilla con un precio viejo es peor que no tener plantilla, porque se envía rápido y sin pensar.</p>',
      },
    ],
    faq: [
      {
        q: '¿Se nota cuando se usa una plantilla?',
        a: 'Se nota cuando no se personaliza nada. Con el nombre y una referencia al caso concreto, la mayoría de los clientes no lo distingue.',
      },
      {
        q: '¿Cuántas plantillas conviene tener?',
        a: 'Entre diez y quince. Con cuarenta, nadie recuerda cuál usar y se termina escribiendo a mano.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/ia-atencion-cliente', anchor: 'respuestas listas para reutilizar' },
    ],
    related: ['manual-de-atencion-en-una-pagina', 'tono-de-voz-marca-ia', 'documentar-procesos-sin-burocracia'],
  },
  {
    slug: 'manual-de-atencion-en-una-pagina',
    category: 'Guías prácticas',
    type: 'guia',
    date: '2026-09-20',
    keyword: 'manual de atención al cliente en una página',
    h1: 'El manual de atención de una página que sí se lee',
    description:
      'Qué debe tener un manual de atención de una página: tono, tiempos, qué se delega, qué no, y las cinco frases prohibidas.',
    intro:
      'Un manual de atención no es un reglamento: es la respuesta a las preguntas que alguien tiene en el momento de contestar un mensaje. Si ocupa más de una página, nadie lo abre mientras atiende.',
    sections: [
      {
        h2: 'Bloque 1: cómo hablamos',
        html: '<p>Tres ejemplos de mensajes reales y cinco prohibiciones concretas (mayúsculas, apodos, emojis sin contexto, promesas de tiempo, disculpas vacías). Los ejemplos enseñan más que los adjetivos.</p>',
      },
      {
        h2: 'Bloque 2: cuánto tardamos',
        html: '<p>Un compromiso real: primera respuesta en horario, mensaje automático fuera de horario, tiempo máximo para resolver. Si no se puede cumplir, no se escribe.</p>',
      },
      {
        h2: 'Bloque 3: qué decidimos solos y qué no',
        html: '<p>Lista corta de lo que cualquier persona del equipo puede resolver sin consultar (precios de lista, horarios, cambios simples) y lista de lo que requiere autorización.</p>',
      },
      {
        h2: 'Bloque 4: cuándo se pasa a otra persona',
        html: '<p>Las cinco situaciones de transferencia obligatoria y qué contexto debe acompañarlas. Este bloque es el que evita el cliente que cuenta su caso tres veces.</p>',
      },
    ],
    faq: [
      {
        q: '¿Quién escribe el manual?',
        a: 'Quien atiende, con revisión de quien decide. El manual escrito solo por la gerencia describe un negocio que no existe.',
      },
      {
        q: '¿Se puede usar el mismo manual para un agente de IA?',
        a: 'Sí, y es la mejor base. El manual es el conocimiento; el agente lo aplica sin olvidarlo.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/ia-atencion-cliente', anchor: 'manual convertido en agente' },
      { url: 'https://kora-agent.com/agente-ia-whatsapp', anchor: 'atención con reglas claras' },
    ],
    related: ['plantillas-de-respuesta-reutilizables', 'handoff-humano-ia', 'documentar-procesos-sin-burocracia'],
  },
  {
    slug: 'metricas-personales-de-trabajo',
    category: 'Productividad',
    type: 'articulo',
    date: '2026-09-19',
    keyword: 'métricas personales de trabajo',
    h1: 'Métricas de trabajo que no se convierten en vigilancia',
    description:
      'Qué métricas personales sirven para mejorar sin vigilar: trabajo terminado, interrupciones y tiempo de contexto, medidas por la propia persona.',
    intro:
      'Medir el trabajo de una persona desde arriba produce números decorativos y desconfianza. Medir el propio trabajo para decidir mejor es otra cosa, y es la única versión que cambia algo.',
    sections: [
      {
        h2: 'Tres números, medidos por uno mismo',
        html: '<p>Cosas terminadas por semana, número de interrupciones por día y cuánto tarda retomar el hilo. Con tres semanas de datos aparece el patrón que explica por qué algunas semanas rinden y otras no.</p>',
      },
      {
        h2: 'Lo que no se mide',
        html: '<p>Horas conectado, cantidad de mensajes enviados y minutos de actividad. Son números que suben cuando el trabajo empeora.</p>',
      },
      {
        h2: 'El uso correcto',
        html: '<p>Cambiar una decisión concreta: agrupar mensajes en bloques, reservar dos horas sin notificaciones, delegar lo repetido. Si el número no cambia una decisión, no sirve medirlo.</p>',
      },
      {
        h2: 'Cuándo se convierte en vigilancia',
        html: '<p>Cuando el número se usa para evaluar a alguien sin contexto. El mismo dato que ayuda a decidir puede castigar una semana difícil.</p>',
      },
    ],
    faq: [
      {
        q: '¿Cuánto tiempo toma medir esto?',
        a: 'Dos minutos al final del día. Más tiempo del que toma anotar tres números significa que se está midiendo demasiado.',
      },
      {
        q: '¿Sirve para equipos?',
        a: 'Si cada persona mide lo suyo y comparte solo conclusiones. Compartir números crudos invita a comparar personas que hacen trabajos distintos.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/ia-agentica-negocios', anchor: 'medir para decidir' },
    ],
    related: ['interrupciones-y-trabajo-profundo', 'priorizar-con-dos-listas', 'cerrar-el-dia-en-diez-minutos'],
  },
  {
    slug: 'cerrar-el-dia-en-diez-minutos',
    category: 'Productividad',
    type: 'guia',
    date: '2026-09-18',
    keyword: 'rutina para cerrar el día de trabajo',
    h1: 'Cerrar el día en diez minutos: la rutina que evita empezar mañana perdido',
    description:
      'Rutina de cierre de jornada para negocios que atienden clientes: vaciar la bandeja, dejar el estado escrito y programar el primer paso del día siguiente.',
    intro:
      'La diferencia entre un día que empieza ordenado y uno que empieza apagando incendios no está en la mañana: está en los diez minutos anteriores a cerrar.',
    sections: [
      {
        h2: 'Minuto 0 a 3: vaciar la bandeja',
        html: '<p>Todo lo que entró va a un lugar con dueño: hoy, algún día, o la persona que corresponde. Nada queda sin decidir, porque lo que queda sin decidir se convierte en la primera urgencia de mañana.</p>',
      },
      {
        h2: 'Minuto 3 a 6: dejar el estado escrito',
        html: '<p>Dos líneas: qué quedó a medias y qué falta para terminarlo. Es el mensaje que la persona de mañana (usted) necesita para no reconstruir todo.</p>',
      },
      {
        h2: 'Minuto 6 a 9: revisar lo que espera por otros',
        html: '<p>Un recordatorio para quien debe responder algo. Sin ese paso, el trabajo se detiene sin que nadie lo note.</p>',
      },
      {
        h2: 'Minuto 9 a 10: elegir el primer paso de mañana',
        html: '<p>Una sola tarea concreta. Empezar el día con una decisión ya tomada elimina la media hora de calentamiento que nadie registra.</p>',
      },
    ],
    faq: [
      {
        q: '¿Sirve si atiendo mensajes hasta la noche?',
        a: 'Especialmente ahí. Un mensaje automático que avisa el horario real permite cerrar sin culpa y sin dejar al cliente esperando.',
      },
      {
        q: '¿Se puede hacer en equipo?',
        a: 'Sí, y rinde más: quien abre al día siguiente ve el estado de todo sin preguntar.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/ia-atencion-cliente', anchor: 'atención que no depende de la hora' },
    ],
    related: ['priorizar-con-dos-listas', 'interrupciones-y-trabajo-profundo', 'bandeja-de-entrada-unificada'],
  },
];
