/**
 * 87-100: números. Cómo calcular el retorno, el costo de perder un cliente y
 * qué panel mínimo hace falta para decidir sin adivinar.
 */
export default [
  {
    slug: 'roi-de-la-automatizacion',
    category: 'Datos y métricas',
    type: 'guia',
    date: '2026-08-22',
    keyword: 'ROI de la automatización',
    h1: 'Cómo calcular el ROI de automatizar atención (con números reales)',
    description:
      'Fórmula completa del ROI de automatización: horas ahorradas, ventas recuperadas, costo de plataforma y supervisión. Con ejemplo numérico.',
    intro:
      'El ROI de automatizar no se calcula con una diapositiva. Se calcula con tres números que el negocio ya tiene: cuánto cuesta una hora de atención, cuántas conversaciones se pierden y cuánto vale una venta.',
    sections: [
      {
        h2: 'La fórmula, sin adornos',
        html: '<p>Retorno = (horas ahorradas × costo por hora) + (ventas recuperadas × margen por venta) − (plataforma + supervisión + implementación mensualizada). Si el resultado es negativo el primer mes, no significa que esté mal: mire el mes seis.</p>',
      },
      {
        h2: 'Un ejemplo con números pequeños',
        html: '<p>Un negocio atiende 600 conversaciones al mes. Dedicar seis minutos a cada una son 60 horas. Si el agente resuelve el 50% sin intervención, son 30 horas. A $8 la hora, son $240 al mes. Si además recupera tres ventas de $120 con 40% de margen, son $144 más. Total: $384 contra una plataforma de $100 y dos horas de supervisión ($16). El retorno es claro.</p>',
      },
      {
        h2: 'Lo que no entra en la cuenta',
        html: '<p>La mejora en la experiencia, la respuesta nocturna y la reducción de errores. Son reales, pero si el cálculo solo se sostiene por beneficios intangibles, el proyecto probablemente no se paga.</p>',
      },
      {
        h2: 'Los tres errores de cálculo',
        html: '<ul><li>Contar el 100% de las conversaciones como automatizadas.</li><li>Ignorar la supervisión en el costo.</li><li>Comparar contra el escenario ideal, no contra el actual.</li></ul>',
      },
    ],
    stats: [
      { value: '3', label: 'números que necesita para calcularlo' },
      { value: '50%', label: 'resolución sin intervención razonable' },
      { value: '6 meses', label: 'horizonte mínimo para evaluar' },
      { value: '2 h', label: 'de supervisión mensual que hay que sumar' },
    ],
    faq: [
      {
        q: '¿Qué pasa si el volumen es bajo?',
        a: 'Con menos de 200 conversaciones al mes, la tarifa fija puede pesar más que el ahorro. Ahí conviene medir el beneficio en ventas recuperadas, no en horas.',
      },
      {
        q: '¿Se puede calcular antes de implementar?',
        a: 'Sí, con datos de una semana. Si el cálculo previo no cierra, tampoco va a cerrar después.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/ia-atencion-cliente', anchor: 'retorno de automatizar atención' },
      { url: 'https://kora-agent.com/ia-agentica-negocios', anchor: 'IA que se paga sola' },
    ],
    related: ['costos-ocultos-de-automatizar', 'costo-por-conversacion-ia', 'cuanto-cuesta-un-cliente-perdido'],
  },
  {
    slug: 'metricas-de-ventas-por-canal',
    category: 'Datos y métricas',
    type: 'guia',
    date: '2026-08-21',
    keyword: 'ventas por canal de origen',
    h1: 'Ventas por canal: cómo saber de dónde viene el dinero',
    description:
      'Cómo atribuir ventas al canal de origen sin un CRM complejo: campo obligatorio, ventana de atribución y los errores que inflan un canal.',
    intro:
      'Casi todos los negocios creen saber de dónde vienen sus clientes y casi todos se equivocan. El canal que se recuerda es el último, no el que inició la conversación.',
    sections: [
      {
        h2: 'El campo que lo resuelve',
        html: '<p>Un campo obligatorio en el registro del cliente: ¿por dónde nos escribió la primera vez? WhatsApp, Instagram, recomendación, Google, paso por el local. Con eso y el monto de la venta, hay atribución suficiente.</p>',
      },
      {
        h2: 'La ventana de atribución',
        html: '<p>Se atribuye al canal del primer contacto. Un cliente que llegó por Instagram y compró por WhatsApp es una venta de Instagram. Si se atribuye al último canal, todos los canales parecen WhatsApp.</p>',
      },
      {
        h2: 'Qué hacer con las recomendaciones',
        html: '<p>Es el canal más valioso y el peor medido. Preguntar \"¿quién le recomendó?\" con nombre permite identificar a los clientes que traen más gente, y eso vale más que cualquier campaña.</p>',
      },
      {
        h2: 'El informe mínimo',
        html: '<p>Por canal: conversaciones, ventas, ingreso y ticket promedio. Con cuatro columnas se decide dónde poner esfuerzo.</p>',
      },
    ],
    table: {
      head: ['Canal', 'Qué mide', 'Error típico'],
      rows: [
        ['WhatsApp', 'Intención alta', 'Contarlo todo como WhatsApp'],
        ['Instagram', 'Descubrimiento', 'No preguntar el primer contacto'],
        ['Google', 'Búsqueda activa', 'Ignorar el tráfico local'],
        ['Recomendación', 'Confianza', 'No pedir el nombre de quien recomendó'],
      ],
    },
    faq: [
      {
        q: '¿Se necesita un CRM con UTM para esto?',
        a: 'Para canales digitales ayuda, pero para una pyme el campo obligatorio de primer contacto resuelve el 80%.',
      },
      {
        q: '¿Qué pasa con quien no recuerda?',
        a: 'Se registra como desconocido y se deja fuera del análisis. Inventar una atribución es peor que no tenerla.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/ia-atencion-cliente', anchor: 'medir de dónde vienen los clientes' },
    ],
    related: ['conversion-de-consulta-a-cita', 'medir-sin-crm', 'embudo-de-whatsapp'],
  },
  {
    slug: 'tasa-de-respuesta',
    category: 'Datos y métricas',
    type: 'articulo',
    date: '2026-08-20',
    keyword: 'tasa de respuesta en atención',
    h1: 'Tasa de respuesta: el número que revela si estás perdiendo clientes sin saberlo',
    description:
      'Qué es la tasa de respuesta, cómo se calcula por canal y por qué un 70% parece bueno y significa que tres de cada diez se fueron.',
    intro:
      'Ningún negocio cree que ignora clientes. La tasa de respuesta dice otra cosa: cuántos mensajes recibieron una respuesta con contenido, no solo un acuse.',
    sections: [
      {
        h2: 'Cómo se calcula',
        html: '<p>Conversaciones con al menos una respuesta útil, dividido entre conversaciones recibidas, por canal y por franja horaria. Un acuse automático no cuenta.</p>',
      },
      {
        h2: 'Por qué el promedio engaña',
        html: '<p>Un 90% de respuesta en horario de oficina y un 20% fuera de horario pueden dar 70% promedio. Ese promedio esconde que la mayoría de los mensajes llegan justo cuando nadie está.</p>',
      },
      {
        h2: 'El piso aceptable',
        html: '<p>Por debajo de 95% hay clientes perdidos sin explicación. Cada punto que falta es una persona que decidió escribir a otro lado.</p>',
      },
      {
        h2: 'Cómo subirla sin contratar',
        html: '<p>Respuesta inmediata automática con información útil fuera de horario, y una sola persona responsable de revisar lo pendiente al abrir. Son dos cambios, no un proyecto.</p>',
      },
    ],
    stats: [
      { value: '95%', label: 'piso razonable de respuesta' },
      { value: '1 de 3', label: 'mensajes que llegan fuera de horario' },
      { value: '0', label: 'acuses que cuentan como respuesta' },
      { value: '48 h', label: 'para que un mensaje sin respuesta se vuelva una pérdida' },
    ],
    faq: [
      {
        q: '¿Responder a todo es sostenible?',
        a: 'Con automatización de lo repetido, sí. Sin ella, el volumen crece y la tasa baja.',
      },
      {
        q: '¿Incluye mensajes de proveedores?',
        a: 'No. Se mide sobre mensajes de clientes o posibles clientes. Mezclar categorías distorsiona el número.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/ia-atencion-cliente', anchor: 'no dejar mensajes sin respuesta' },
    ],
    related: ['metricas-de-ventas-por-canal', 'medir-sin-crm', 'cuanto-cuesta-un-cliente-perdido'],
  },
  {
    slug: 'embudo-de-whatsapp',
    category: 'Datos y métricas',
    type: 'infografia',
    date: '2026-08-19',
    keyword: 'embudo de conversión en WhatsApp',
    h1: 'El embudo de WhatsApp: dónde se cae la venta',
    description:
      'Infografía del embudo en WhatsApp: mensaje recibido, respuesta, interés, cotización, cita y cierre, con las fugas típicas en cada paso.',
    intro:
      'En WhatsApp no hay una página de gracias. Hay una conversación que avanza o se detiene. Medir cada paso del embudo revela exactamente en qué mensaje se pierde el cliente.',
    stats: [
      { value: '100', label: 'mensajes recibidos' },
      { value: '85', label: 'reciben respuesta útil' },
      { value: '40', label: 'declaran interés concreto' },
      { value: '18', label: 'piden precio o cotización' },
      { value: '9', label: 'agendan o compran' },
    ],
    sections: [
      {
        h2: 'Las cinco etapas',
        html: '<ol><li><strong>Entrada:</strong> mensaje recibido.</li><li><strong>Respuesta:</strong> contestación con contenido.</li><li><strong>Interés:</strong> el cliente dice qué busca.</li><li><strong>Propuesta:</strong> precio o cotización enviada.</li><li><strong>Cierre:</strong> cita agendada o venta.</li></ol>',
      },
      {
        h2: 'Dónde se cae más',
        html: '<p>La caída grande suele estar entre respuesta e interés: la respuesta fue un \"¿en qué le ayudo?\" que no avanzó nada. La segunda, entre propuesta y cierre: nadie hizo seguimiento.</p>',
      },
      {
        h2: 'Cómo se mide sin un sistema',
        html: '<p>Contando cincuenta conversaciones de la última semana a mano. Dos horas de trabajo dan un diagnóstico más preciso que cualquier panel genérico.</p>',
      },
      {
        h2: 'Qué ajustar primero',
        html: '<p>La etapa con más caída y menos esfuerzo. Si la gente pregunta y no recibe precio, el problema es la propuesta. Si recibe precio y no cierra, es el seguimiento.</p>',
      },
    ],
    faq: [
      {
        q: '¿Sirve el mismo embudo para servicios?',
        a: 'Sí, cambiando \"venta\" por \"cita\" o \"propuesta aceptada\". La estructura es igual.',
      },
      {
        q: '¿Cada cuánto se mide?',
        a: 'Una vez por trimestre con una muestra. Medirlo semanalmente con pocos datos produce conclusiones ruidosas.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/automatizacion-whatsapp', anchor: 'embudo medido por etapa' },
    ],
    related: ['conversion-de-consulta-a-cita', 'tasa-de-respuesta', 'metricas-de-ventas-por-canal'],
  },
  {
    slug: 'costo-de-adquirir-un-cliente',
    category: 'Datos y métricas',
    type: 'guia',
    date: '2026-08-18',
    keyword: 'costo de adquirir un cliente',
    h1: 'Costo de adquirir un cliente: qué incluir para que el número sirva',
    description:
      'Cómo calcular el costo de adquisición real: publicidad, tiempo de venta, herramientas y el costo de los clientes que no compran.',
    intro:
      'El costo de adquisición suele calcularse con el gasto de publicidad dividido entre las ventas. Ese número ignora el tiempo de las personas que atienden y el de los clientes que nunca compraron.',
    sections: [
      {
        h2: 'La fórmula completa',
        html: '<p>(Publicidad + herramientas + horas de venta y atención) dividido entre clientes nuevos del periodo. Las horas incluyen la atención a quien nunca compró, porque también se pagaron.</p>',
      },
      {
        h2: 'El error de excluir la atención',
        html: '<p>En negocios que venden por conversación, el costo de atender es la partida más grande. Excluirla produce un costo de adquisición artificialmente bajo y decisiones de inversión equivocadas.</p>',
      },
      {
        h2: 'Por qué el canal importa',
        html: '<p>Un cliente que llega por recomendación cuesta casi nada y uno que llega por publicidad puede costar diez veces más. Un promedio general esconde esa diferencia.</p>',
      },
      {
        h2: 'El uso correcto',
        html: '<p>Comparar con el margen por cliente. Si adquirir cuesta más que el margen del primer año, el modelo tiene un problema, no la publicidad.</p>',
      },
    ],
    faq: [
      {
        q: '¿Se incluye el sueldo completo del equipo?',
        a: 'Se incluye la porción de horas dedicada a vender y atender, con un costo por hora razonable. El sueldo completo infla el número.',
      },
      {
        q: '¿Cada cuánto se recalcula?',
        a: 'Mensual con los datos del mes. Trimestral con promedio, para suavizar campañas puntuales.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/ia-agentica-negocios', anchor: 'adquirir clientes con números' },
    ],
    related: ['roi-de-la-automatizacion', 'valor-de-vida-del-cliente-pyme', 'metricas-de-ventas-por-canal'],
  },
  {
    slug: 'valor-de-vida-del-cliente-pyme',
    category: 'Datos y métricas',
    type: 'guia',
    date: '2026-08-17',
    keyword: 'valor de vida del cliente en una pyme',
    h1: 'Valor de vida del cliente: cómo calcularlo con datos que ya tienes',
    description:
      'Cálculo práctico del valor de vida del cliente para una pyme: ticket, frecuencia, margen y duración real de la relación.',
    intro:
      'Si no sabe cuánto vale un cliente en el tiempo, cualquier discusión sobre precios o inversión en atención se vuelve intuición. El cálculo es simple y cambia decisiones.',
    sections: [
      {
        h2: 'La fórmula',
        html: '<p>(Ticket promedio × margen × compras por año × años de relación). Con cuatro números que el negocio tiene, sale el valor de vida.</p>',
      },
      {
        h2: 'El dato más difícil',
        html: '<p>Los años de relación. Casi nadie lo mide. La forma práctica: fecha del primer contacto de los clientes activos, promedio simple. Es suficiente para empezar.</p>',
      },
      {
        h2: 'Por qué cambia la estrategia',
        html: '<p>Un cliente que vale $400 en tres años justifica una atención muy distinta a uno que vale $40 una sola vez. Y explica por qué responder rápido deja de ser un lujo.</p>',
      },
      {
        h2: 'El uso más útil',
        html: '<p>Comparar el valor de un cliente retenido con el costo de recuperarlo. Muchas veces conviene invertir en retención y no en adquisición.</p>',
      },
    ],
    table: {
      head: ['Variable', 'Ejemplo', 'Dónde se obtiene'],
      rows: [
        ['Ticket promedio', '$120', 'Facturación / ventas'],
        ['Margen', '40%', 'Costos directos'],
        ['Compras al año', '2', 'Historial de clientes'],
        ['Años de relación', '3', 'Fecha del primer contacto'],
        ['Valor de vida', '$288', 'Ticket × margen × compras × años'],
      ],
    },
    faq: [
      {
        q: '¿Sirve para un negocio nuevo?',
        a: 'Con pocos datos, use una estimación conservadora y revísela cada trimestre. Es mejor un número aproximado que ninguno.',
      },
      {
        q: '¿Incluye referidos?',
        a: 'No directamente, pero un cliente que trae a otros vale más. Si mide referidos, súmelos como valor adicional.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/ia-atencion-cliente', anchor: 'valor de retener un cliente' },
    ],
    related: ['costo-de-adquirir-un-cliente', 'tasa-de-perdida-de-clientes', 'roi-de-la-automatizacion'],
  },
  {
    slug: 'medir-sin-crm',
    category: 'Datos y métricas',
    type: 'guia',
    date: '2026-08-16',
    keyword: 'medir ventas y atención sin CRM',
    h1: 'Medir sin CRM: el mínimo viable con una hoja y dos preguntas',
    description:
      'Cómo medir atención y ventas sin comprar un CRM: una hoja con seis columnas, dos preguntas obligatorias y una revisión semanal.',
    intro:
      'No tener CRM no es excusa para no medir. Seis columnas en una hoja cubren lo esencial, siempre que alguien las llene el mismo día y que las preguntas sean obligatorias.',
    sections: [
      {
        h2: 'Las seis columnas',
        html: '<ol><li>Fecha.</li><li>Canal de primer contacto.</li><li>Qué pidió (en una línea).</li><li>Estado: cerrado, pendiente, perdido.</li><li>Monto, si aplica.</li><li>Motivo de pérdida, si aplica.</li></ol>',
      },
      {
        h2: 'Las dos preguntas obligatorias',
        html: '<p>\"¿Por dónde nos escribió la primera vez?\" y \"¿qué lo decidió?\". La primera da atribución; la segunda da el argumento que funciona.</p>',
      },
      {
        h2: 'La disciplina',
        html: '<p>Se llena el mismo día. Una hoja que se completa los viernes de memoria es una hoja de ficción.</p>',
      },
      {
        h2: 'Cuándo ya no alcanza',
        html: '<p>Cuando el equipo tiene tres personas y hay que cruzar información que no cabe en filas. Ahí sí conviene un CRM, pero ya sabrá qué medir.</p>',
      },
    ],
    faq: [
      {
        q: '¿Una hoja compartida en la nube sirve?',
        a: 'Sí, con dos reglas: una fila por conversación y un responsable por fila. Sin responsable, nadie la llena.',
      },
      {
        q: '¿Qué hago con los datos después?',
        a: 'Un resumen mensual con tres números: conversaciones atendidas, cierres y motivo principal de pérdida.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/ia-atencion-cliente', anchor: 'medir con lo que ya tienes' },
    ],
    related: ['crm-vs-hoja-de-calculo', 'metricas-de-ventas-por-canal', 'panel-de-control-minimo'],
  },
  {
    slug: 'panel-de-control-minimo',
    category: 'Datos y métricas',
    type: 'infografia',
    date: '2026-08-15',
    keyword: 'panel de control mínimo para una pyme',
    h1: 'El panel mínimo: siete números que sí se miran cada semana',
    description:
      'Infografía con el panel de control mínimo de una pyme de servicios: siete métricas, dónde se obtienen y qué decisión cambia cada una.',
    intro:
      'Un panel con veinte gráficos no se mira. Uno con siete números y una decisión asociada a cada uno se revisa todos los lunes en diez minutos.',
    stats: [
      { value: '7', label: 'números en el panel' },
      { value: '10 min', label: 'de revisión semanal' },
      { value: '1', label: 'decisión por número' },
      { value: '0', label: 'métricas de vanidad' },
    ],
    sections: [
      {
        h2: 'Los siete',
        html: '<ol><li>Conversaciones recibidas.</li><li>Tasa de respuesta.</li><li>Tiempo de primera respuesta.</li><li>Cotizaciones enviadas.</li><li>Cierres o citas concretadas.</li><li>Motivo principal de pérdida.</li><li>Ingreso del periodo.</li></ol>',
      },
      {
        h2: 'La decisión de cada uno',
        html: '<p>Si la tasa de respuesta baja, se revisa quién atiende fuera de horario. Si las cotizaciones suben y los cierres no, se revisa el seguimiento. Si el motivo de pérdida se repite, se cambia el argumento o el precio.</p>',
      },
      {
        h2: 'Lo que no va en el panel',
        html: '<p>Seguidores, likes, mensajes enviados y horas conectadas. Suben o bajan sin cambiar ninguna decisión.</p>',
      },
      {
        h2: 'Cómo se arma sin herramientas',
        html: '<p>Una hoja con siete columnas y una fila por semana. Se llena el lunes en cinco minutos y se lee en otros cinco.</p>',
      },
    ],
    faq: [
      {
        q: '¿Sirve para un negocio de productos?',
        a: 'Sí, cambiando cotizaciones por pedidos y citas por entregas. La estructura se mantiene.',
      },
      {
        q: '¿Qué hago si un número no se mueve nunca?',
        a: 'Puede que no sea relevante para el negocio. Se retira y se reemplaza por uno que sí cambie decisiones.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/ia-atencion-cliente', anchor: 'decisiones con siete números' },
    ],
    related: ['medir-sin-crm', 'tasa-de-respuesta', 'como-presentar-resultados-a-la-gerencia'],
  },
  {
    slug: 'tasa-de-perdida-de-clientes',
    category: 'Datos y métricas',
    type: 'articulo',
    date: '2026-08-14',
    keyword: 'tasa de pérdida de clientes',
    h1: 'Tasa de pérdida: cuántos clientes se van y por qué nadie lo nota',
    description:
      'Cómo medir la pérdida de clientes en una pyme, distinguir la pérdida silenciosa y calcular cuánto cuesta cada cliente que deja de volver.',
    intro:
      'La pérdida de clientes no hace ruido: no hay reclamo, no hay cancelación. Simplemente alguien deja de escribir. Ese silencio es el dato más caro del negocio.',
    sections: [
      {
        h2: 'Cómo se calcula',
        html: '<p>Clientes activos al inicio del periodo que no volvieron a comprar en el periodo, dividido entre los activos al inicio. Con periodos de tres o seis meses, según la frecuencia de compra.</p>',
      },
      {
        h2: 'La pérdida silenciosa',
        html: '<p>Un cliente que dejó de escribir después de una consulta sin respuesta cuenta como pérdida aunque nunca haya comprado. Muchas pymes solo miden la pérdida de quien ya era cliente y no ven el resto.</p>',
      },
      {
        h2: 'Las tres causas más comunes',
        html: '<ul><li>No hubo seguimiento después de una propuesta.</li><li>La atención fue lenta en el momento crítico.</li><li>El cliente cambió de necesidad y nadie se enteró.</li></ul>',
      },
      {
        h2: 'Qué hacer con el número',
        html: '<p>Un punto de pérdida en un negocio de 200 clientes son dos clientes cada trimestre. Multiplicado por el valor de vida, justifica cualquier inversión en atención.</p>',
      },
    ],
    faq: [
      {
        q: '¿Toda pérdida es recuperable?',
        a: 'No. Algunos clientes se van porque ya no necesitan el servicio. Esos no se recuperan y no deben contarse como falla.',
      },
      {
        q: '¿Cómo se distingue una pérdida de una pausa?',
        a: 'Con la frecuencia típica de compra del negocio. Si el ciclo es de seis meses, un cliente de tres meses no está perdido todavía.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/ia-atencion-cliente', anchor: 'no perder clientes en silencio' },
    ],
    related: ['valor-de-vida-del-cliente-pyme', 'cuanto-cuesta-un-cliente-perdido', 'metricas-de-ventas-por-canal'],
  },
  {
    slug: 'conversion-de-consulta-a-cita',
    category: 'Datos y métricas',
    type: 'guia',
    date: '2026-08-13',
    keyword: 'conversión de consulta a cita',
    h1: 'De consulta a cita: dónde se pierde la conversión y cómo subirla',
    description:
      'Cómo medir y mejorar la conversión de consulta a cita: pasos, fuga principal y los tres ajustes que más mueven la tasa.',
    intro:
      'Entre \"hola, quería información\" y una cita confirmada hay cinco decisiones del cliente. Cada una puede detener la conversación, y casi siempre es la misma la que la detiene.',
    sections: [
      {
        h2: 'El recorrido',
        html: '<ol><li>El cliente escribe.</li><li>Recibe respuesta útil.</li><li>Cuenta qué necesita.</li><li>Recibe una opción concreta con precio.</li><li>Confirma.</li></ol>',
      },
      {
        h2: 'La fuga principal',
        html: '<p>El paso 4. Muchas respuestas ofrecen \"agendar cuando quiera\" sin dar opciones concretas. Ofrecer dos horarios específicos convierte más que cualquier discurso sobre calidad.</p>',
      },
      {
        h2: 'Los otros dos ajustes',
        html: '<p>Responder en minutos, no en horas, y confirmar la cita con todos los datos en un solo mensaje. Ambos son operativos, no de ventas.</p>',
      },
      {
        h2: 'Cómo se mide',
        html: '<p>Cincuenta conversaciones, contando cuántas llegan a cada paso. La tasa entre el paso 3 y el 4 es la que más rápido se mueve con un cambio de mensaje.</p>',
      },
    ],
    faq: [
      {
        q: '¿Más opciones de horario convierten más?',
        a: 'Dos opciones concretas convierten mejor que diez. La elección entre muchas alternativas paraliza.',
      },
      {
        q: '¿La automatización baja la conversión?',
        a: 'Puede bajarla si responde de forma genérica, y subirla si responde rápido y ofrece horarios reales. La variable no es la automatización, es la calidad de la respuesta.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/agente-ia-whatsapp', anchor: 'de la consulta a la cita' },
    ],
    related: ['embudo-de-whatsapp', 'plantillas-recordatorio-de-cita', 'metricas-de-ventas-por-canal'],
  },
  {
    slug: 'cuanto-cuesta-un-cliente-perdido',
    category: 'Datos y métricas',
    type: 'articulo',
    date: '2026-08-12',
    keyword: 'cuánto cuesta un cliente perdido',
    h1: 'Cuánto cuesta un mensaje sin responder: el cálculo que cambia prioridades',
    description:
      'Cálculo del costo real de un mensaje sin responder, incluyendo la venta perdida, el valor de vida y el efecto de la recomendación negativa.',
    intro:
      'Un mensaje sin responder parece un descuido menor. Puesto en dinero, es la pérdida más fácil de evitar de todo el negocio: no cuesta nada responder, y no hacerlo cuesta una venta completa.',
    sections: [
      {
        h2: 'El cálculo básico',
        html: '<p>Mensajes sin responder al mes × tasa de conversión habitual × ticket promedio. Con 20 mensajes, 30% de conversión y $120 de ticket, son $720 al mes. Al año, $8.640.</p>',
      },
      {
        h2: 'El valor de vida',
        html: '<p>Si el cliente vuelve, la pérdida se multiplica. Con dos compras al año durante tres años, esos 20 mensajes valen más de $4.000 al mes en ingreso futuro.</p>',
      },
      {
        h2: 'El costo de la recomendación negativa',
        html: '<p>Un cliente ignorado no solo no compra: cuenta que nadie le contestó. En negocios locales, esa conversación ocurre en la misma semana.</p>',
      },
      {
        h2: 'Cómo se evita',
        html: '<p>Una respuesta inmediata con información útil, una persona responsable de lo que llega fuera de horario y una revisión diaria de lo pendiente. Nada de eso es caro comparado con el número de arriba.</p>',
      },
    ],
    stats: [
      { value: '$720', label: 'pérdida mensual con 20 mensajes sin responder' },
      { value: '$8.640', label: 'pérdida anual en el mismo escenario' },
      { value: '30%', label: 'conversión típica de una consulta respondida' },
      { value: '0', label: 'costo de responder a tiempo' },
    ],
    faq: [
      {
        q: '¿Todos los mensajes sin responder eran una venta?',
        a: 'No, pero el cálculo usa la tasa de conversión habitual, así que ya descuenta a quienes no habrían comprado.',
      },
      {
        q: '¿Sirve para justificar automatización?',
        a: 'Es el mejor argumento. El costo de no responder suele ser diez veces la tarifa de la herramienta.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/ia-atencion-cliente', anchor: 'el costo de no responder' },
      { url: 'https://kora-agent.com', anchor: 'Kora' },
    ],
    related: ['tasa-de-respuesta', 'roi-de-la-automatizacion', 'tasa-de-perdida-de-clientes'],
  },
  {
    slug: 'como-presentar-resultados-a-la-gerencia',
    category: 'Datos y métricas',
    type: 'guia',
    date: '2026-08-11',
    keyword: 'presentar resultados de atención a la gerencia',
    h1: 'Cómo presentar resultados de atención sin ahogar a la gerencia en gráficos',
    description:
      'Estructura de una presentación de resultados de atención en cinco minutos: contexto, tres números, una decisión y el costo de no actuar.',
    intro:
      'La gerencia no necesita el detalle operativo: necesita una decisión. Una presentación que empieza por la metodología pierde a la audiencia antes de llegar al número que importa.',
    sections: [
      {
        h2: 'El orden correcto',
        html: '<ol><li>Qué se midió y para qué, en dos frases.</li><li>Tres números con su comparación.</li><li>La causa principal.</li><li>La decisión que se pide.</li><li>El costo de no decidir.</li></ol>',
      },
      {
        h2: 'Tres números, no treinta',
        html: '<p>Tasa de respuesta, tiempo de primera respuesta y conversión. Si hay que explicar un cuarto, se pierde el hilo.</p>',
      },
      {
        h2: 'La comparación importa más que el valor',
        html: '<p>\"42%\" no dice nada. \"42%, antes 61%\" dice todo. Siempre con referencia: mes anterior, mismo mes del año pasado o el objetivo acordado.</p>',
      },
      {
        h2: 'El cierre que consigue algo',
        html: '<p>Una petición concreta: aprobar una contratación, cambiar un horario, autorizar una herramienta. Si no se pide nada, la reunión no cambió nada.</p>',
      },
    ],
    faq: [
      {
        q: '¿Cuánto debe durar?',
        a: 'Cinco minutos con cinco diapositivas. Si piden más detalle, se entrega un anexo después de la reunión.',
      },
      {
        q: '¿Qué hago si los números empeoraron?',
        a: 'Decirlo primero y traer la causa. Esconder una caída cuesta más credibilidad que la caída misma.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/ia-agentica-negocios', anchor: 'resultados que se traducen en decisiones' },
    ],
    related: ['panel-de-control-minimo', 'roi-de-la-automatizacion', 'experimentos-simples-para-probar-una-idea'],
  },
  {
    slug: 'experimentos-simples-para-probar-una-idea',
    category: 'Datos y métricas',
    type: 'guia',
    date: '2026-08-10',
    keyword: 'experimentos simples en un negocio',
    h1: 'Probar una idea en dos semanas sin montar un laboratorio',
    description:
      'Cómo diseñar un experimento simple en un negocio: una variable, una métrica, un plazo y un criterio de decisión escrito antes de empezar.',
    intro:
      'Un experimento no necesita estadística: necesita una decisión definida antes de empezar. Sin eso, cualquier resultado se interpreta a favor de la idea que ya se tenía.',
    sections: [
      {
        h2: 'Una sola variable',
        html: '<p>Cambiar el mensaje de primera respuesta, o el horario, o el canal. Dos cambios a la vez hacen imposible saber qué funcionó.</p>',
      },
      {
        h2: 'La métrica y el plazo, antes',
        html: '<p>\"Tasa de respuesta en dos semanas\". Escrito antes de empezar, no después de ver los datos.</p>',
      },
      {
        h2: 'El criterio de decisión',
        html: '<p>\"Si sube cinco puntos, se queda; si no, se revierte.\" Sin criterio previo, el experimento se convierte en una discusión de opiniones.</p>',
      },
      {
        h2: 'El tamaño de la muestra',
        html: '<p>Con veinte conversaciones por grupo ya hay señal para decisiones operativas. No es ciencia, es gestión: sirve para elegir, no para publicar.</p>',
      },
    ],
    faq: [
      {
        q: '¿Se puede experimentar con clientes reales?',
        a: 'Sí, si el cambio no afecta la calidad del servicio. Cambiar un mensaje es seguro; cambiar un precio, no.',
      },
      {
        q: '¿Qué hago si el resultado es ambiguo?',
        a: 'Se repite con más volumen o se abandona. Las decisiones grandes no se toman con señal ambigua.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/ia-atencion-cliente', anchor: 'probar sin arriesgar la atención' },
    ],
    related: ['como-presentar-resultados-a-la-gerencia', 'medir-sin-crm', 'que-automatizar-primero'],
  },
  {
    slug: 'capacidad-de-atencion-sin-contratar',
    category: 'Productividad',
    type: 'articulo',
    date: '2026-08-09',
    keyword: 'aumentar capacidad de atención sin contratar',
    h1: 'Subir la capacidad de atención sin contratar: las cuatro palancas',
    description:
      'Cómo aumentar el volumen atendido sin sumar personal: eliminar trabajo repetido, agrupar, automatizar lo previsible y priorizar por valor.',
    intro:
      'Contratar es la respuesta evidente y la más cara. Antes de sumar una persona conviene revisar si el equipo está gastando su tiempo en trabajo que nadie necesita hacer.',
    sections: [
      {
        h2: 'Palanca 1: eliminar',
        html: '<p>Reportes que nadie lee, confirmaciones dobles, datos que se piden dos veces. En una semana de observación se suele encontrar entre el 10% y el 20% del tiempo en trabajo eliminable.</p>',
      },
      {
        h2: 'Palanca 2: agrupar',
        html: '<p>Responder mensajes en bloques en lugar de reaccionar a cada notificación. El mismo trabajo, menos cambios de contexto, más capacidad real.</p>',
      },
      {
        h2: 'Palanca 3: automatizar lo previsible',
        html: '<p>Las diez preguntas repetidas suelen ser la mitad del volumen. Ahí no se necesita criterio, se necesita velocidad.</p>',
      },
      {
        h2: 'Palanca 4: priorizar por valor',
        html: '<p>Un cliente que va a comprar hoy vale más que una consulta curiosa. Ordenar la cola por valor percibido cambia el ingreso sin cambiar el esfuerzo.</p>',
      },
    ],
    faq: [
      {
        q: '¿Cuándo sí hay que contratar?',
        a: 'Cuando el tiempo ahorrado por las cuatro palancas ya no alcanza y la calidad empieza a caer. Ese es el indicador, no el volumen.',
      },
      {
        q: '¿Automatizar reduce la calidad?',
        a: 'Reduce la personalización en lo repetido, que es donde importa menos. En lo delicado, la persona sigue siendo mejor.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/ia-agentica-negocios', anchor: 'capacidad sin contratar' },
      { url: 'https://kora-agent.com', anchor: 'Kora' },
    ],
    related: ['atencion-en-temporada-alta', 'interrupciones-y-trabajo-profundo', 'cuanto-cuesta-un-cliente-perdido'],
  },
];
