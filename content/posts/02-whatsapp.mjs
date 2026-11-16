/**
 * 14-25: WhatsApp por dentro. Verificación, plantillas operativas, oficios
 * concretos y medición sin caer en el spam.
 */
export default [
  {
    slug: 'verificacion-negocio-meta',
    category: 'WhatsApp',
    type: 'guia',
    date: '2026-11-03',
    keyword: 'verificación de negocio en Meta',
    h1: 'Verificación de negocio en Meta: qué piden de verdad y cuánto tarda',
    description:
      'Cómo funciona la verificación de negocio en Meta paso a paso: documentos, sitio web, coherencia de datos y los motivos de rechazo que nadie explica.',
    intro:
      'Sin verificación, la API de WhatsApp funciona en modo limitado: pocos mensajes al día, plantillas con revisión lenta y un número que no puede crecer. Es trámite, no tecnología, y casi todos los rechazos vienen de datos que no coinciden entre sí.',
    sections: [
      {
        h2: 'Qué compara Meta',
        html: '<p>Meta no evalúa si su negocio es bueno: evalúa si existe y si es quien dice ser. Cruza el nombre legal del documento, el nombre comercial de la página de Facebook, el dominio del sitio web, el número de teléfono publicado y la dirección. Cuando uno de esos no coincide, el expediente se cae sin explicación detallada.</p>',
      },
      {
        h2: 'El sitio web es la pieza que más falla',
        html: '<p>El dominio debe mostrar el nombre del negocio, una forma de contacto y algo que corresponda a la actividad declarada. Una página de una sola pantalla sin dirección ni teléfono es un rechazo casi garantizado. Si el negocio no tiene sitio, conviene crear una página simple y verificable antes de iniciar el trámite.</p>',
      },
      {
        h2: 'Documentos que suelen funcionar',
        html: '<ul><li>Registro o cédula jurídica del negocio.</li><li>Comprobante de servicios o extracto bancario con nombre y dirección.</li><li>Licencia municipal o permiso de operación.</li></ul><p>Todo debe estar vigente y a nombre de la misma entidad. Un documento a nombre del dueño cuando la cuenta está a nombre de la sociedad crea una discrepancia.</p>',
      },
      {
        h2: 'Qué hacer si lo rechazan',
        html: '<p>No reintente con los mismos datos y no abra otra cuenta: eso multiplica el problema. Lea el motivo, corrija la discrepancia exacta (nombre, dominio o dirección) y vuelva a enviar. El segundo intento con datos coherentes suele pasar.</p>',
      },
    ],
    steps: [
      {
        title: 'Reúna los cinco datos y escríbalos igual en todas partes',
        text: 'Nombre legal, nombre comercial, dominio, teléfono y dirección. Deben coincidir en el documento, el sitio y la página de Facebook.',
      },
      {
        title: 'Prepare el sitio antes de empezar',
        text: 'Una página con el nombre del negocio, de qué se trata y cómo contactar. Sin eso, cualquier revisión manual se detiene.',
      },
      {
        title: 'Inicie el trámite desde Business Manager',
        text: 'Centro de seguridad, verificación. Cargue los documentos en formato legible, sin recortes ni capturas de pantalla.',
      },
      {
        title: 'Responda rápido a la revisión manual',
        text: 'Si piden algo adicional, conteste el mismo día. Los expedientes abandonados se cierran y hay que esperar para reintentar.',
      },
    ],
    faq: [
      {
        q: '¿Cuánto tarda?',
        a: 'De dos días a dos semanas según el tipo de negocio y si hay revisión manual. Los negocios con sitio web coherente pasan más rápido.',
      },
      {
        q: '¿Necesito verificación para usar la API de WhatsApp?',
        a: 'Puede empezar con límites mínimos. Para volumen real, plantillas de marketing y un número estable, la verificación es el camino.',
      },
      {
        q: '¿Puedo verificar con el número personal del dueño?',
        a: 'La cuenta puede ser del dueño, pero el negocio debe ser la entidad verificada. Mezclar identidades es el atajo que más rechazos genera.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/automatizacion-whatsapp', anchor: 'conectar el número a Kora' },
      { url: 'https://kora-agent.com/agente-ia-whatsapp', anchor: 'un agente que atiende el número' },
    ],
    related: ['api-de-whatsapp-para-empresas', 'whatsapp-business-vs-api', 'plantillas-whatsapp-aprobadas'],
  },
  {
    slug: 'seguimiento-automatico-clientes',
    category: 'Automatización',
    type: 'guia',
    date: '2026-11-02',
    keyword: 'seguimiento automático de clientes',
    h1: 'Seguimiento automático de clientes sin convertirte en el número que nadie quiere',
    description:
      'Cómo diseñar seguimientos automáticos que se sientan útiles: cuándo escribir, qué decir, cuántos intentos y cuándo detenerse para siempre.',
    intro:
      'El seguimiento mal hecho no es un problema de herramienta, es un problema de permiso. Un mensaje que llega porque alguien mostró interés se lee como servicio; el mismo mensaje tres días después, sin contexto, se lee como insistencia.',
    sections: [
      {
        h2: 'Solo se sigue lo que tuvo interés',
        html: '<p>La regla que separa un seguimiento de un mensaje masivo es simple: hubo una conversación real o no la hubo. Cotización pedida, cita no concretada, carrito iniciado, pregunta sin respuesta. Si no existe ese punto de partida, no hay seguimiento, hay publicidad.</p>',
      },
      {
        h2: 'Tres intentos, cada uno con algo nuevo',
        html: '<p>Un intento que repite el anterior no aporta nada. El primero recuerda con un dato concreto; el segundo resuelve un obstáculo probable (precio, disponibilidad, tiempo); el tercero cierra el tema con elegancia y deja la puerta abierta. Después, silencio.</p>',
      },
      {
        h2: 'La ventana de WhatsApp manda',
        html: '<p>Fuera de las 24 horas desde el último mensaje del cliente, la API solo permite plantillas aprobadas. Eso obliga a planear el seguimiento dentro de la conversación, no después de que se enfríe. Si el caso necesita un recordatorio a la semana, ese recordatorio debe ser una plantilla de utilidad, no un texto libre.</p>',
      },
      {
        h2: 'Cómo se detiene',
        html: '<p>Un \"no gracias\", un bloqueo o tres intentos sin respuesta significan fin. Si el sistema sigue escribiendo después de un rechazo explícito, el daño ya no es molesto: es un problema de reputación del número, y Meta lo mide.</p>',
      },
    ],
    stats: [
      { value: '3', label: 'intentos máximos por conversación' },
      { value: '24 h', label: 'ventana para texto libre en WhatsApp' },
      { value: '1', label: 'dato nuevo por intento' },
      { value: '0', label: 'mensajes después de un no' },
    ],
    faq: [
      {
        q: '¿El seguimiento automático funciona si nadie lo revisa?',
        a: 'Funciona mejor con revisión. Diez minutos al día leyendo qué respondieron los seguimientos evitan que el sistema insista donde no debe.',
      },
      {
        q: '¿Es mejor escribir por correo o por WhatsApp?',
        a: 'Use el canal donde nació la conversación. Cambiar de canal para insistir se percibe como acoso.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/automatizacion-whatsapp', anchor: 'seguimientos dentro de la conversación' },
      { url: 'https://kora-agent.com/ia-agentica-negocios', anchor: 'un agente que recuerda el contexto' },
    ],
    related: ['ventana-24-horas-whatsapp', 'plantillas-whatsapp-aprobadas', 'metricas-de-ventas-por-canal'],
  },
  {
    slug: 'whatsapp-para-clinicas-citas',
    category: 'Guías prácticas',
    type: 'guia',
    date: '2026-11-01',
    keyword: 'WhatsApp para clínicas y citas',
    h1: 'WhatsApp en una clínica: agendar sin equivocarse de paciente',
    description:
      'Cómo automatizar la agenda de una clínica por WhatsApp: identificación del paciente, disponibilidad real, confirmación y privacidad de los datos.',
    intro:
      'Una clínica no puede permitirse el error de agendar a la persona equivocada ni de inventar un horario. La agenda real manda, y el agente solo puede ofrecer lo que el sistema de citas confirma.',
    sections: [
      {
        h2: 'La disponibilidad se consulta, no se calcula',
        html: '<p>Un agente que resta horas de un horario de atención va a ofrecer un espacio ocupado. La única forma correcta es consultar el calendario o el sistema de agenda del centro y ofrecer solo los espacios que devuelve como libres, descontando bloqueos administrativos.</p>',
      },
      {
        h2: 'Quién es el paciente',
        html: '<p>Muchas clínicas atienden familias con un mismo número. Antes de agendar hay que saber para quién es la cita: nombre completo, documento y fecha de nacimiento si el sistema lo exige. Preguntar eso una vez y guardarlo evita repetirlo en cada visita.</p>',
      },
      {
        h2: 'Confirmar y recordar',
        html: '<p>La confirmación inmediata con fecha, hora, profesional y lugar reduce el ausentismo más que cualquier recordatorio. El recordatorio de 24 horas antes es una plantilla de utilidad y se aprueba sin problema.</p>',
      },
      {
        h2: 'Privacidad primero',
        html: '<p>Por WhatsApp no se envían resultados, diagnósticos ni datos clínicos. Se agenda, se confirma, y cualquier conversación sobre el contenido de la consulta se traslada al canal que la clínica tenga autorizado.</p>',
      },
    ],
    steps: [
      {
        title: 'Conecte la agenda real',
        text: 'El agente debe leer la disponibilidad del mismo sistema que usa recepción, no una copia.',
      },
      {
        title: 'Defina qué datos pide al agendar',
        text: 'Nombre completo, documento, teléfono y motivo general. Nada clínico por chat.',
      },
      {
        title: 'Escriba el mensaje de confirmación una sola vez',
        text: 'Fecha, hora, profesional, dirección y cómo reprogramar. Se reutiliza en cada cita.',
      },
      {
        title: 'Mida el ausentismo',
        text: 'Compare inasistencias antes y después del recordatorio. Es la métrica que justifica todo el trabajo.',
      },
    ],
    faq: [
      {
        q: '¿Puede el agente cancelar una cita?',
        a: 'Debe poder, pero con reglas: identificar al paciente, confirmar cuál cita y respetar la política de cancelación del centro. Si la política es compleja, se transfiere a recepción.',
      },
      {
        q: '¿Y si el paciente escribe a las 11 de la noche?',
        a: 'Se agenda o se deja el caso preparado, sin prometer que alguien llamará a una hora que nadie cubre.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/agente-ia-whatsapp', anchor: 'agendar por WhatsApp con la agenda real' },
      { url: 'https://kora-agent.com/ia-atencion-cliente', anchor: 'atención al paciente' },
    ],
    related: ['plantillas-recordatorio-de-cita', 'whatsapp-multiagente', 'errores-al-automatizar-atencion'],
  },
  {
    slug: 'whatsapp-para-restaurantes',
    category: 'Guías prácticas',
    type: 'guia',
    date: '2026-10-31',
    keyword: 'WhatsApp para restaurantes',
    h1: 'WhatsApp para restaurantes: pedidos, reservas y el menú que cambia',
    description:
      'Qué automatizar en un restaurante por WhatsApp: reservas, pedidos para llevar, menú actualizado y coordinación con cocina sin prometer lo que no hay.',
    intro:
      'Un restaurante recibe tres tipos de mensaje: reserva, pedido y queja. Los tres llegan en el peor momento, con el salón lleno. La automatización útil no vende más: evita que el cliente espere para saber si hay mesa.',
    sections: [
      {
        h2: 'Reservas con reglas reales',
        html: '<p>El agente necesita saber cuántas mesas hay por franja, cuánto dura un servicio y si existe una política para grupos. Sin esas reglas, confirma mesas que no existen. Con ellas, ofrece dos horarios y cierra.</p>',
      },
      {
        h2: 'El menú es el punto frágil',
        html: '<p>Un menú desactualizado genera el peor mensaje posible: \"ya no tenemos eso\". El agente debe leer el menú de una sola fuente que el negocio actualiza, y nunca de un documento pegado en la configuración.</p>',
      },
      {
        h2: 'Pedidos para llevar',
        html: '<p>Un pedido necesita confirmación explícita con total, tiempo de preparación y forma de pago. El agente puede tomar el pedido, pero debe repetirlo antes de cerrar. Un error de cantidad cuesta más que un minuto de confirmación.</p>',
      },
      {
        h2: 'Quejas durante el servicio',
        html: '<p>Un cliente enojado a las 8 de la noche no quiere un formulario. Quiere que alguien del salón se entere. La transferencia debe llegar con el número de mesa y el motivo, no con un resumen genérico.</p>',
      },
    ],
    faq: [
      {
        q: '¿Sirve para pedidos por aplicación de reparto?',
        a: 'WhatsApp complementa, no reemplaza. Sirve para clientes que ya conocen el local y prefieren pedir directo.',
      },
      {
        q: '¿Cómo se evita que el agente invente platos?',
        a: 'Limitando la respuesta al menú cargado y prohibiendo explícitamente recomendar algo que no esté en la lista.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/chatbot-whatsapp-negocios', anchor: 'atender pedidos por WhatsApp' },
      { url: 'https://kora-agent.com/automatizacion-whatsapp', anchor: 'automatizar reservas' },
    ],
    related: ['whatsapp-para-clinicas-citas', 'catalogo-de-whatsapp', 'cuando-la-ia-no-debe-responder'],
  },
  {
    slug: 'whatsapp-para-inmobiliarias',
    category: 'Guías prácticas',
    type: 'articulo',
    date: '2026-10-30',
    keyword: 'WhatsApp para inmobiliarias',
    h1: 'WhatsApp en una inmobiliaria: filtrar curiosos y no perder compradores',
    description:
      'Cómo usar WhatsApp en una inmobiliaria para calificar interesados, agendar visitas y responder disponibilidad sin prometer propiedades que ya se vendieron.',
    intro:
      'En bienes raíces el mensaje llega todos los días y casi nunca trae intención clara. El trabajo del agente no es vender: es separar a quien busca precio de quien busca visita, y llegar a la cita con los datos ordenados.',
    sections: [
      {
        h2: 'La disponibilidad no se improvisa',
        html: '<p>La propiedad se vende y el anuncio sigue publicado. Si el agente responde desde una lista desactualizada, ofrece algo que ya no existe. Debe leer el inventario vigente del sistema de la inmobiliaria, con su estado.</p>',
      },
      {
        h2: 'Cuatro preguntas que califican',
        html: '<ul><li>Zona y rango de precio real.</li><li>Si compra con financiamiento o al contado.</li><li>Cuándo necesita mudarse.</li><li>Si ya vendió su propiedad actual.</li></ul><p>Con esas cuatro, un asesor sabe si vale una llamada de veinte minutos o un mensaje corto.</p>',
      },
      {
        h2: 'Agendar la visita con dirección',
        html: '<p>La visita requiere dirección exacta, hora y nombre de quien la hará. Confirmar el día anterior reduce las visitas fallidas, que en este negocio cuestan horas de traslado.</p>',
      },
      {
        h2: 'Nunca dar datos del propietario',
        html: '<p>El agente no comparte nombres, teléfonos ni documentos del dueño. Esa información se entrega solo cuando un asesor decide que el interesado califica.</p>',
      },
    ],
    faq: [
      {
        q: '¿El agente puede negociar el precio?',
        a: 'No. Puede informar el precio publicado y registrar una oferta para que un asesor la revise.',
      },
      {
        q: '¿Sirve para alquileres también?',
        a: 'Sí, y es donde más se nota: los requisitos de alquiler repetidos (documentos, depósito, plazo) son exactamente el tipo de pregunta que se puede resolver sola.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/ia-atencion-cliente', anchor: 'calificar interesados' },
      { url: 'https://kora-agent.com/agente-ia-whatsapp', anchor: 'un agente para el inventario real' },
    ],
    related: ['whatsapp-para-restaurantes', 'whatsapp-multiagente', 'seguimiento-automatico-clientes'],
  },
  {
    slug: 'audios-de-whatsapp-transcripcion',
    category: 'WhatsApp',
    type: 'articulo',
    date: '2026-10-29',
    keyword: 'transcribir audios de WhatsApp',
    h1: 'Notas de voz: por qué son el mensaje más importante y el peor documentado',
    description:
      'Cómo funcionan las notas de voz en atención al cliente, por qué se pierden y cómo transcribirlas para que queden en el historial del negocio.',
    intro:
      'En muchos negocios más de la mitad de los mensajes entrantes son audios. Son los que más información traen, los que nadie revisa por falta de tiempo y los que nunca quedan registrados en el sistema. Ese es el agujero de memoria más caro del día.',
    sections: [
      {
        h2: 'Por qué la gente graba',
        html: '<p>Escribir en un teléfono es incómodo. Un audio de cuarenta segundos dice más que cinco mensajes y se graba en menos tiempo. El cliente no lo hace para complicar: lo hace porque es más fácil.</p>',
      },
      {
        h2: 'Qué se pierde sin transcripción',
        html: '<p>Quien atiende escucha el audio, responde y sigue. El contenido no queda en ningún sistema, no aparece en una búsqueda y no existe para la siguiente persona que atienda el caso. La conversación se pierde aunque se haya contestado.</p>',
      },
      {
        h2: 'La transcripción como registro',
        html: '<p>Convertir el audio en texto permite buscar por nombre, por producto, por fecha, y permite que un agente automático lo entienda igual que un mensaje escrito. La grabación puede no guardarse; lo que se guarda es lo que dijo.</p>',
      },
      {
        h2: 'Un audio sin texto es un caso pendiente',
        html: '<p>Si la transcripción falla, el mensaje no puede quedar como \"leído y resuelto\". Debe marcarse para que una persona lo escuche, porque un audio vacío en el historial parece una conversación resuelta que en realidad nunca se atendió.</p>',
      },
    ],
    stats: [
      { value: '1 de 2', label: 'mensajes que son audio en muchos negocios' },
      { value: '40 s', label: 'duración típica de una consulta hablada' },
      { value: '0', label: 'audios que aparecen en una búsqueda del sistema' },
      { value: '1', label: 'transcripción necesaria para que el texto exista' },
    ],
    faq: [
      {
        q: '¿Se debe pedir a los clientes que escriban?',
        a: 'No. Si el canal permite audio, prohibirlo es fricción. Lo correcto es procesarlo.',
      },
      {
        q: '¿La transcripción reemplaza al audio original?',
        a: 'Para el registro operativo sí. Para casos delicados, la persona puede escuchar el original antes de responder.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/agente-ia-whatsapp', anchor: 'Kora transcribe notas de voz' },
      { url: 'https://kora-agent.com/automatizacion-whatsapp', anchor: 'audios dentro del flujo' },
    ],
    related: ['whatsapp-para-clinicas-citas', 'plantillas-whatsapp-aprobadas', 'medir-whatsapp-sin-spam'],
  },
  {
    slug: 'catalogo-de-whatsapp',
    category: 'WhatsApp',
    type: 'guia',
    date: '2026-10-28',
    keyword: 'catálogo de WhatsApp Business',
    h1: 'Catálogo de WhatsApp: cuándo usarlo y cuándo es una trampa',
    description:
      'Ventajas y límites del catálogo de WhatsApp Business, cómo mantenerlo actualizado y por qué un catálogo desordenado vende menos que una buena respuesta.',
    intro:
      'El catálogo parece la solución obvia: una tienda dentro del chat. En la práctica, un catálogo con veinte productos y fotos tomadas con prisa convierte peor que una persona que pregunta qué necesita el cliente.',
    sections: [
      {
        h2: 'Qué hace bien',
        html: '<p>Sirve para negocios con pocos productos, precio fijo y stock estable. El cliente ve la ficha, pregunta y compra. La foto y el precio hacen la mitad del trabajo.</p>',
      },
      {
        h2: 'Dónde falla',
        html: '<p>Con inventario cambiante, el catálogo se convierte en una promesa vieja. Con servicios personalizados no aplica: nadie elige un ritual o una consultoría desde una ficha de producto. Y sin buscador, un catálogo de cincuenta ítems es un listado interminable en la pantalla del teléfono.</p>',
      },
      {
        h2: 'La alternativa que funciona',
        html: '<p>Un agente que pregunta qué necesita y responde con dos o tres opciones. Eso es un catálogo conversacional: mismo inventario, formato humano. Requiere que el inventario esté en un sistema que el agente pueda leer.</p>',
      },
      {
        h2: 'Si va a usar el catálogo, manténgalo',
        html: '<p>Precio correcto, foto limpia, descripción de una línea y stock actualizado. Un catálogo con un solo error de precio genera una discusión que cuesta más que el producto.</p>',
      },
    ],
    table: {
      head: ['Situación', 'Catálogo', 'Agente conversacional'],
      rows: [
        ['Pocos productos, precio fijo', 'Ideal', 'Funciona'],
        ['Inventario cambiante', 'Riesgo de datos viejos', 'Lee el sistema'],
        ['Servicios a medida', 'No aplica', 'Ideal'],
        ['Cliente que no sabe qué quiere', 'Lo abruma', 'Lo guía'],
      ],
    },
    faq: [
      {
        q: '¿El catálogo se puede usar con la API?',
        a: 'Sí, pero el envío de fichas requiere mensajes de tipo interactivo con formato específico. Muchas integraciones lo simplifican con un enlace.',
      },
      {
        q: '¿Cuántos productos conviene mostrar?',
        a: 'Los que se venden. Un catálogo de dos productos claros vende más que uno de treinta sin orden.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/chatbot-whatsapp-negocios', anchor: 'catálogo conversacional' },
    ],
    related: ['whatsapp-para-restaurantes', 'whatsapp-business-vs-api', 'medir-whatsapp-sin-spam'],
  },
  {
    slug: 'whatsapp-multiagente',
    category: 'WhatsApp',
    type: 'articulo',
    date: '2026-10-27',
    keyword: 'WhatsApp con varios agentes',
    h1: 'Varios agentes en un mismo número: cómo evitar que dos personas respondan lo mismo',
    description:
      'Cómo organizar un número de WhatsApp compartido entre varias personas: asignación, estado de la conversación, notas internas y traspasos sin duplicar respuestas.',
    intro:
      'El primer día con dos personas en un número aparece el problema más tonto y más caro: dos respuestas distintas al mismo cliente. La solución no es un chat interno, es un estado compartido de la conversación.',
    sections: [
      {
        h2: 'Una conversación tiene un dueño a la vez',
        html: '<p>Asignación explícita, no por buena voluntad. Cuando alguien abre un caso, queda marcado a su nombre por un tiempo. Los demás ven quién lo tiene y no escriben encima.</p>',
      },
      {
        h2: 'El estado debe ser visible sin abrir el chat',
        html: '<p>Nuevo, en atención, esperando al cliente, cerrado. Con eso se evita el \"¿alguien contestó esto?\". Es la información más barata de mantener y la que más tiempo ahorra.</p>',
      },
      {
        h2: 'Notas internas separadas del mensaje',
        html: '<p>La nota para el compañero (\"este cliente ya reclamó dos veces\") no puede salir al cliente. En las herramientas serias eso está separado por diseño; en un número compartido sin sistema, se mezcla.</p>',
      },
      {
        h2: 'Traspaso con contexto',
        html: '<p>Al cambiar de responsable, la persona nueva debe recibir el resumen, no solo el mensaje. Sin eso, el cliente repite todo y la sensación es de un negocio desordenado.</p>',
      },
    ],
    faq: [
      {
        q: '¿Cuántas personas pueden atender un número en la API?',
        a: 'Tantas como permita la herramienta que administra el canal. El límite técnico no es el problema; el límite es el desorden.',
      },
      {
        q: '¿Sirve para equipos que trabajan por turnos?',
        a: 'Es donde más rinde: al cambiar de turno, el estado y el resumen evitan que el cliente cuente su caso de nuevo.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/ia-agentica-negocios', anchor: 'un canal con varios agentes' },
      { url: 'https://kora-agent.com/ia-atencion-cliente', anchor: 'atención en equipo' },
    ],
    related: ['handoff-humano-ia', 'whatsapp-para-clinicas-citas', 'etiquetas-y-crm-whatsapp'],
  },
  {
    slug: 'etiquetas-y-crm-whatsapp',
    category: 'WhatsApp',
    type: 'guia',
    date: '2026-10-26',
    keyword: 'etiquetas y CRM en WhatsApp',
    h1: 'Etiquetas en WhatsApp: el CRM mínimo que sí se usa',
    description:
      'Cómo usar etiquetas en WhatsApp para no perder el seguimiento: qué etiquetas valen, cuáles sobran y cómo pasarlas a un CRM cuando el negocio crece.',
    intro:
      'Las etiquetas son el CRM de quien no tiene CRM. Funcionan si son pocas, si significan una acción y si alguien las usa. Con veinte etiquetas que nadie actualiza, son decoración de color.',
    sections: [
      {
        h2: 'Una etiqueta, una acción',
        html: '<p>\"Cotización enviada\" significa: hay que retomar en dos días. \"Cliente nuevo\" significa: falta pedir datos. Si una etiqueta no cambia lo que se hace después, sobra.</p>',
      },
      {
        h2: 'Cinco etiquetas bastan para empezar',
        html: '<ol><li>Nuevo, sin atender.</li><li>En conversación.</li><li>Cotización enviada.</li><li>Cita agendada.</li><li>Cerrado o perdido.</li></ol><p>Cinco estados cubren el 90% de una operación pequeña. Todo lo demás es detalle que se guarda en otro lado.</p>',
      },
      {
        h2: 'Cuándo migrar a un CRM',
        html: '<p>Cuando dos personas necesitan ver el mismo historial, cuando el volumen supera lo que se revisa a mano, o cuando las ventas dependen de recordar algo de hace tres semanas. Ahí las etiquetas dejan de alcanzar.</p>',
      },
      {
        h2: 'La migración sin drama',
        html: '<p>No se migra la etiqueta, se migra el estado y el historial relevante. Nombre, canal, último tema, fecha del último contacto y próximo paso. Con eso, cualquier herramienta nueva sirve desde el primer día.</p>',
      },
    ],
    faq: [
      {
        q: '¿Las etiquetas de la app Business son compatibles con la API?',
        a: 'No directamente. En la API las etiquetas las administra la herramienta que gestiona el canal, no Meta.',
      },
      {
        q: '¿Cuántas etiquetas es demasiado?',
        a: 'Si alguien no puede recordar todas sin mirar la pantalla, son demasiadas.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/ia-atencion-cliente', anchor: 'historial de conversación' },
    ],
    related: ['whatsapp-multiagente', 'seguimiento-automatico-clientes', 'metricas-de-ventas-por-canal'],
  },
  {
    slug: 'numeros-de-whatsapp-para-equipos',
    category: 'WhatsApp',
    type: 'articulo',
    date: '2026-10-25',
    keyword: 'varios números de WhatsApp en un negocio',
    h1: 'Un número o varios: cómo decidir la estructura de WhatsApp de tu negocio',
    description:
      'Criterios para decidir cuántos números de WhatsApp necesita un negocio: sedes, marcas, equipos y el costo real de mantener cada uno.',
    intro:
      'Cada número es una identidad, un historial y una verificación. Multiplicarlos sin necesidad crea clientes que escriben al número equivocado y equipos que no ven la conversación completa.',
    sections: [
      {
        h2: 'Un número por marca, no por persona',
        html: '<p>Si dos marcas distintas comparten número, el cliente no sabe con quién habla y el historial se mezcla. Si dos personas de la misma marca comparten número, es una operación normal y no requiere otro canal.</p>',
      },
      {
        h2: 'Sedes: número local o uno central',
        html: '<p>Un número por sede ayuda al cliente a sentir cercanía, pero fragmenta la operación. Un número central con enrutamiento es más barato de mantener y más fácil de supervisar. La decisión depende de si la sede resuelve distinto o solo atiende distinto.</p>',
      },
      {
        h2: 'El costo oculto',
        html: '<p>Cada número necesita verificación, plantillas propias y alguien que lo revise. Tres números mal atendidos son peores que uno bien atendido, porque el cliente no distingue la causa: solo ve que no le contestan.</p>',
      },
      {
        h2: 'Qué medir antes de abrir otro',
        html: '<p>Volumen por número, tiempo de respuesta y tasa de conversación. Si un número está saturado pero convierte bien, se justifica dividir. Si está saturado y no convierte, el problema es otro.</p>',
      },
    ],
    faq: [
      {
        q: '¿Puedo mover un número de la app a la API y devolverlo?',
        a: 'Se puede, con pasos de desvinculación y verificación. No conviene hacerlo seguido: cada movimiento tiene costo operativo y riesgo de perder historial.',
      },
      {
        q: '¿Un número por sucursal mejora el SEO local?',
        a: 'Ayuda a la coherencia de la ficha de cada sucursal, pero no reemplaza el trabajo de contenido local.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/automatizacion-whatsapp', anchor: 'una estructura de WhatsApp ordenada' },
    ],
    related: ['whatsapp-business-vs-api', 'verificacion-negocio-meta', 'whatsapp-multiagente'],
  },
  {
    slug: 'plantillas-recordatorio-de-cita',
    category: 'WhatsApp',
    type: 'guia',
    date: '2026-10-24',
    keyword: 'plantilla de recordatorio de cita por WhatsApp',
    h1: 'La plantilla de recordatorio de cita, escrita bien y sin sonar a cobro',
    description:
      'Estructura exacta de una plantilla de recordatorio de cita por WhatsApp: qué datos incluir, qué evitar y cómo redactarla para que se apruebe y se lea.',
    intro:
      'Un recordatorio bien escrito baja el ausentismo y no molesta. Uno mal escrito parece un mensaje automático de cobranza. La diferencia está en tres datos y una forma de pedir confirmación.',
    sections: [
      {
        h2: 'Los cuatro datos obligatorios',
        html: '<ul><li>Nombre de la persona.</li><li>Día y hora, escritos como se dicen.</li><li>Lugar o profesional, según lo que importe.</li><li>Cómo confirmar o reprogramar.</li></ul><p>Sin el cómo, el recordatorio genera una pregunta extra y pierde su función.</p>',
      },
      {
        h2: 'Lo que hay que evitar',
        html: '<p>No usar mayúsculas, no pedir dinero en el recordatorio si el pago se hace en el lugar, no incluir más de un enlace y no prometer flexibilidad que la agenda no tiene.</p>',
      },
      {
        h2: 'Un ejemplo que funciona',
        html: '<blockquote><p>Hola {{nombre}}, le recordamos su cita del {{fecha}} a las {{hora}} con {{profesional}}. Si necesita reprogramar, responda este mensaje con la palabra CAMBIAR.</p></blockquote><p>Corto, concreto y con una acción clara. La palabra clave evita que el sistema tenga que interpretar lenguaje libre en un mensaje transaccional.</p>',
      },
      {
        h2: 'Cuándo enviarla',
        html: '<p>Veinticuatro horas antes, en el horario en que la persona suele revisar el teléfono. Un recordatorio a las 3 de la mañana se lee al día siguiente, cuando ya no sirve.</p>',
      },
    ],
    faq: [
      {
        q: '¿Es una plantilla de utilidad o de marketing?',
        a: 'De utilidad: es una cita que la persona agendó. Meta la aprueba sin problema si el texto no promociona nada.',
      },
      {
        q: '¿Se puede enviar dos recordatorios?',
        a: 'Uno a 24 horas y otro a 2 horas funciona en clínicas. Más de dos se percibe como insistencia.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/agente-ia-whatsapp', anchor: 'recordatorios automáticos' },
      { url: 'https://kora-agent.com/automatizacion-whatsapp', anchor: 'plantillas en Kora' },
    ],
    related: ['whatsapp-para-clinicas-citas', 'plantillas-whatsapp-aprobadas', 'ventana-24-horas-whatsapp'],
  },
  {
    slug: 'medir-whatsapp-sin-spam',
    category: 'Datos y métricas',
    type: 'articulo',
    date: '2026-10-23',
    keyword: 'métricas de WhatsApp sin caer en spam',
    h1: 'Medir WhatsApp sin caer en spam: las métricas que respetan al cliente',
    description:
      'Qué medir en WhatsApp para crecer sin dañar la calidad del número: tasa de bloqueo, respuesta, conversión y el costo real de insistir.',
    intro:
      'En WhatsApp hay una métrica que casi nadie mira y que decide el futuro del canal: cuántos contactos bloquean el número. Subir el volumen de mensajes sin controlarla es la forma más rápida de perder el canal.',
    sections: [
      {
        h2: 'La calidad del número es un activo',
        html: '<p>Meta asigna un estado de calidad a cada número. Los bloqueos y los reportes lo bajan, y con él bajan los límites de mensajería. Un número marcado tarda meses en recuperarse, y a veces no se recupera.</p>',
      },
      {
        h2: 'Cuatro números que sí importan',
        html: '<ul><li><strong>Tasa de bloqueo:</strong> bloqueos sobre conversaciones iniciadas.</li><li><strong>Respuesta:</strong> porcentaje de conversaciones donde el cliente contesta algo.</li><li><strong>Conversión:</strong> citas, pedidos o ventas por conversación atendida.</li><li><strong>Reapertura:</strong> el mismo cliente vuelve por el mismo tema.</li></ul>',
      },
      {
        h2: 'El experimento que conviene hacer una vez',
        html: '<p>Tome dos grupos de conversaciones frías: uno recibe un seguimiento, el otro no. Compare conversión y bloqueos. En la mayoría de los negocios el seguimiento sube las ventas un poco y los bloqueos bastante, y la relación deja de convenir.</p>',
      },
      {
        h2: 'La regla que resume todo',
        html: '<p>Escribir menos y mejor. Un mensaje que llega porque la persona mostró interés rinde más que tres que llegan porque el sistema tenía programado insistir.</p>',
      },
    ],
    stats: [
      { value: '0,5%', label: 'tasa de bloqueo que conviene vigilar' },
      { value: '2', label: 'mensajes de seguimiento que casi siempre sobran' },
      { value: '1', label: 'canal por conversación' },
      { value: '6 meses', label: 'para recuperar un número marcado' },
    ],
    faq: [
      {
        q: '¿Cómo sé si mi número está marcado?',
        a: 'La herramienta que administra el canal muestra el estado de calidad y los límites de mensajería. Si los límites bajaron sin cambiar de plan, es una señal.',
      },
      {
        q: '¿Las plantillas de marketing siempre dañan la calidad?',
        a: 'No, si se envían a quien dio consentimiento y con algo relevante. El daño aparece cuando se usan como seguimiento insistente.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/automatizacion-whatsapp', anchor: 'WhatsApp medido y sin spam' },
    ],
    related: ['audios-de-whatsapp-transcripcion', 'seguimiento-automatico-clientes', 'metricas-atencion-cliente-ia'],
  },
];
