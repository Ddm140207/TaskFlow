/**
 * 74-86: guías prácticas. Checklist y procedimientos que se pueden aplicar el
 * lunes, no teoría.
 */
export default [
  {
    slug: 'delegar-sin-microgestionar',
    category: 'Productividad',
    type: 'guia',
    date: '2026-09-04',
    keyword: 'delegar sin microgestionar',
    h1: 'Delegar sin microgestionar: qué se entrega y qué se queda',
    description:
      'Cómo delegar tareas en una pyme sin perder control: qué incluye una entrega clara, cómo se revisa y por qué el "avísame antes de" arruina la delegación.',
    intro:
      'Delegar mal tiene dos formas: soltar sin contexto o pedir permiso para todo. La primera produce errores repetidos; la segunda produce un equipo que espera instrucciones y un dueño que trabaja el doble.',
    sections: [
      {
        h2: 'Una entrega tiene cuatro partes',
        html: '<ol><li>El resultado esperado, en una frase.</li><li>El límite: hasta dónde se puede decidir solo.</li><li>El plazo.</li><li>Cómo se avisa que está listo.</li></ol><p>Sin el límite, la persona consulta todo. Sin el plazo, el trabajo se hunde.</p>',
      },
      {
        h2: 'El límite se escribe con ejemplos',
        html: '<p>\"Podés aplicar hasta un 10% de descuento; por encima, me consultás.\" Eso es un límite. \"Usá tu criterio\" no es un límite, es un problema transferido.</p>',
      },
      {
        h2: 'Revisar el resultado, no el proceso',
        html: '<p>Si se revisa cada paso, la persona deja de pensar y empieza a esperar aprobación. Se revisa el resultado en el plazo acordado y se corrige lo que haga falta.</p>',
      },
      {
        h2: 'Cuándo sí hay que mirar el proceso',
        html: '<p>Cuando hay riesgo legal, dinero comprometido o un cliente importante. Ahí se acompaña la primera vez y después se suelta. Acompañar siempre no es supervisión, es desconfianza.</p>',
      },
    ],
    faq: [
      {
        q: '¿Qué hago si la persona decide distinto de lo que yo habría decidido?',
        a: 'Si está dentro del límite y el resultado es aceptable, se acepta. La delegación real incluye decisiones distintas a la propia.',
      },
      {
        q: '¿Cuánto tiempo toma delegar bien?',
        a: 'La primera vez cuesta más que hacerlo uno mismo. A la tercera, se recupera la inversión.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/ia-agentica-negocios', anchor: 'delegar con límites claros' },
    ],
    related: ['manual-de-atencion-en-una-pagina', 'documentar-procesos-sin-burocracia', 'metricas-personales-de-trabajo'],
  },
  {
    slug: 'boletines-y-notificaciones-en-la-bandeja',
    category: 'Guías prácticas',
    type: 'guia',
    date: '2026-09-03',
    keyword: 'separar boletines y notificaciones',
    h1: 'La bandeja llena de ruido: cómo separar clientes de notificaciones',
    description:
      'Cómo distinguir un cliente de un boletín automático en la bandeja compartida, y por qué contestar una notificación daña la atención.',
    intro:
      'La mayoría de los mensajes que llegan a una bandeja de negocio no son clientes. Alertas de plataformas, boletines, avisos de empleo y recibos ocupan el mismo espacio que una consulta real, y responden al mismo botón.',
    sections: [
      {
        h2: 'Las señales que distinguen',
        html: '<ul><li>Remitente con palabras como no-reply, notifications o newsletter.</li><li>Aviso de baja o \"ver en el navegador\" al pie.</li><li>Asunto con formato de alerta o de promoción.</li><li>Cuerpo sin saludo ni pregunta dirigida al negocio.</li></ul>',
      },
      {
        h2: 'Por qué no se contestan',
        html: '<p>Responder a un robot de notificaciones genera rebotes, daña la reputación del dominio y ensucia el historial. Además, en un sistema con IA, contesta en nombre del negocio a alguien que no es cliente.</p>',
      },
      {
        h2: 'Cómo se archiva sin perder nada',
        html: '<p>Se guardan en una vista separada, no se borran. Un aviso de la plataforma de pagos puede tener información útil aunque no se responda.</p>',
      },
      {
        h2: 'La regla del cliente real',
        html: '<p>Un mensaje merece respuesta si hay una persona detrás que espera algo. Si el mensaje se envió a mil personas a la vez, no hay nadie esperando.</p>',
      },
    ],
    faq: [
      {
        q: '¿Y si el mensaje automático es en realidad un cliente escribiendo desde un formulario?',
        a: 'Los formularios del sitio suelen traer el correo del cliente, no un no-reply. Ahí sí hay que responder.',
      },
      {
        q: '¿Se puede automatizar esta separación?',
        a: 'Sí, en el servidor y antes de responder: remitente, marcadores de envío masivo y ausencia de señal humana. Es más confiable que pedirle al modelo que decida.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/ia-atencion-cliente', anchor: 'responder solo a quien escribe' },
      { url: 'https://kora-agent.com/ia-agentica-negocios', anchor: 'triaje antes de contestar' },
    ],
    related: ['automatizacion-de-correo', 'ia-en-instagram-y-facebook', 'cuando-la-ia-no-debe-responder'],
  },
  {
    slug: 'montar-atencion-en-una-semana',
    category: 'Guías prácticas',
    type: 'guia',
    date: '2026-09-02',
    keyword: 'montar atención automatizada en una semana',
    h1: 'De cero a atender con IA en una semana: plan día por día',
    description:
      'Plan de cinco días para poner en marcha una atención automatizada: contenido, canal, pruebas y primera revisión, con lo que debe quedar fuera.',
    intro:
      'Una semana es suficiente si el alcance es pequeño. Lo que hunde estos proyectos no es la técnica: es intentar cubrir tres canales, cinco servicios y todas las excepciones en los primeros cinco días.',
    sections: [
      {
        h2: 'Día 1: la información',
        html: '<p>Escribir servicios, precios, horarios, políticas y las diez preguntas frecuentes con su respuesta real. Sin esto, nada de lo que sigue funciona.</p>',
      },
      {
        h2: 'Día 2: el canal',
        html: '<p>Un solo canal, el que más mensajes recibe. Verificación, conexión y una prueba con un mensaje propio.</p>',
      },
      {
        h2: 'Día 3: las respuestas',
        html: '<p>Cargar el conocimiento, definir el tono con tres ejemplos y las cinco prohibiciones. Probar diez mensajes escritos a mano por el equipo, incluyendo los difíciles.</p>',
      },
      {
        h2: 'Día 4: los límites',
        html: '<p>Qué no responde, cuándo transfiere y a quién. Probar una queja, un audio y un mensaje fuera de horario.</p>',
      },
      {
        h2: 'Día 5: la revisión',
        html: '<p>Diez conversaciones reales revisadas una por una, con corrección inmediata en la fuente. Al final del día: ¿se queda encendido, con ajustes o se apaga?</p>',
      },
    ],
    faq: [
      {
        q: '¿Se puede hacer en menos?',
        a: 'Con información ya escrita, sí. El día 1 es el que no se puede comprimir, porque depende de que el negocio se ponga de acuerdo.',
      },
      {
        q: '¿Qué queda fuera de la primera semana?',
        a: 'Segundo canal, integraciones complejas, campañas y cualquier cosa que no afecte la atención diaria.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/ia-atencion-cliente', anchor: 'empezar en una semana' },
      { url: 'https://kora-agent.com', anchor: 'Kora' },
    ],
    related: ['ia-para-pymes-sin-equipo-tecnico', 'checklist-lanzamiento-whatsapp', 'que-automatizar-primero'],
  },
  {
    slug: 'checklist-lanzamiento-whatsapp',
    category: 'Guías prácticas',
    type: 'guia',
    date: '2026-09-01',
    keyword: 'checklist antes de lanzar WhatsApp',
    h1: 'Checklist antes de abrir WhatsApp al público',
    description:
      'Doce verificaciones antes de publicar un número de WhatsApp automatizado: número, plantillas, horarios, transferencia y pruebas reales.',
    intro:
      'Abrir el canal es irreversible en la práctica: el número queda publicado en el sitio y en la ficha de Google. Estas doce verificaciones evitan el primer día de vergüenza.',
    sections: [
      {
        h2: 'Número y cuenta',
        html: '<ul><li>Número dedicado, no el personal.</li><li>Verificación de negocio aprobada.</li><li>Nombre visible coherente con la marca.</li><li>Foto y descripción completas.</li></ul>',
      },
      {
        h2: 'Mensajes',
        html: '<ul><li>Plantillas de recordatorio y confirmación aprobadas.</li><li>Horario real configurado, con mensaje fuera de horario.</li><li>Respuestas de precios con la lista vigente.</li><li>Ruta de transferencia a persona probada.</li></ul>',
      },
      {
        h2: 'Pruebas',
        html: '<ul><li>Mensaje de audio transcrito correctamente.</li><li>Consulta de agenda con un horario ocupado.</li><li>Queja simulada con transferencia.</li><li>Mensaje a medianoche.</li></ul>',
      },
      {
        h2: 'Después de abrir',
        html: '<p>Primeras 48 horas con alguien revisando cada conversación. Los errores de la primera semana definen la percepción durante meses.</p>',
      },
    ],
    faq: [
      {
        q: '¿Se puede abrir con un solo número y agregar otro después?',
        a: 'Sí, pero cada número tiene su verificación. Abrir dos a la vez duplica el trabajo sin validar nada.',
      },
      {
        q: '¿Qué hago si un cliente escribe antes de estar listo?',
        a: 'Si el número ya está publicado, hay que atender. Por eso se publica al final, no al principio.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/automatizacion-whatsapp', anchor: 'lanzar WhatsApp sin sorpresas' },
      { url: 'https://kora-agent.com/agente-ia-whatsapp', anchor: 'un agente probado' },
    ],
    related: ['montar-atencion-en-una-semana', 'checklist-lanzamiento-correo', 'verificacion-negocio-meta'],
  },
  {
    slug: 'checklist-lanzamiento-correo',
    category: 'Guías prácticas',
    type: 'guia',
    date: '2026-08-31',
    keyword: 'checklist antes de automatizar el correo',
    h1: 'Checklist antes de automatizar la bandeja de correo',
    description:
      'Verificaciones antes de conectar un agente al correo del negocio: dominio, autenticación, triaje, historial de hilos y pruebas.',
    intro:
      'El correo es más frágil que WhatsApp: un dominio mal configurado hace que las respuestas lleguen a spam, y un hilo mal armado hace que el cliente vea dos conversaciones distintas.',
    sections: [
      {
        h2: 'Dominio y autenticación',
        html: '<ul><li>Registros SPF y DKIM configurados.</li><li>DMARC en modo de monitoreo al menos.</li><li>Remitente visible coherente con la marca.</li><li>Respuesta en el mismo hilo, sin cambiar el asunto.</li></ul>',
      },
      {
        h2: 'Triaje antes de responder',
        html: '<ul><li>No responder a no-reply, boletines ni alertas.</li><li>Distinguir cliente nuevo de proveedor.</li><li>Separar reclamos para revisión.</li><li>Registrar el motivo por el que no se respondió.</li></ul>',
      },
      {
        h2: 'Pruebas reales',
        html: '<ul><li>Escribir desde un correo externo.</li><li>Responder con un hilo de tres mensajes.</li><li>Enviar un audio adjunto.</li><li>Simular un reenvío con historial citado.</li></ul>',
      },
      {
        h2: 'El detalle que rompe todo',
        html: '<p>El agente lee sus propias respuestas copiadas en copia oculta como si fueran mensajes nuevos. Hay que reconocer el propio remitente y los identificadores de mensajes enviados, o la conversación se contesta a sí misma sin fin.</p>',
      },
    ],
    faq: [
      {
        q: '¿Se puede usar el correo personal del dueño?',
        a: 'No es recomendable. Se mezcla la vida personal con la atención y se pierde control sobre el historial.',
      },
      {
        q: '¿Cuánto tarda en calentarse un dominio nuevo?',
        a: 'Semanas. Enviar volumen alto desde un dominio nuevo garantiza entregabilidad pobre.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/ia-atencion-cliente', anchor: 'automatizar el correo bien' },
    ],
    related: ['automatizacion-de-correo', 'checklist-lanzamiento-whatsapp', 'boletines-y-notificaciones-en-la-bandeja'],
  },
  {
    slug: 'como-escribir-lista-de-precios',
    category: 'Guías prácticas',
    type: 'guia',
    date: '2026-08-30',
    keyword: 'cómo escribir una lista de precios clara',
    h1: 'Cómo escribir una lista de precios que no genere preguntas',
    description:
      'Qué debe incluir una lista de precios para reducir consultas: qué cubre, qué no, forma de pago, vigencia y el orden en que se presenta.',
    intro:
      'La mitad de las preguntas de un negocio son sobre precios, y casi todas son por lo que la lista no dice. Un precio sin alcance genera tres mensajes más y una discusión al final.',
    sections: [
      {
        h2: 'Cada línea necesita cuatro cosas',
        html: '<ol><li>Qué es, en palabras del cliente.</li><li>Qué incluye.</li><li>Qué no incluye.</li><li>Cuánto cuesta y en qué moneda.</li></ol>',
      },
      {
        h2: 'El orden importa',
        html: '<p>De lo más pedido a lo menos pedido, no de lo más caro a lo más barato. El cliente debe encontrar lo que vino a buscar sin leer toda la lista.</p>',
      },
      {
        h2: 'Los rangos con criterio',
        html: '<p>\"Desde $50\" invita a preguntar cuánto es en su caso. Si existe un rango, hay que explicar qué lo mueve: tamaño, plazo, complejidad. Un rango sin explicación es una pregunta pendiente.</p>',
      },
      {
        h2: 'La vigencia',
        html: '<p>Con fecha. Un precio sin fecha se convierte en una promesa permanente y en una discusión cuando cambia.</p>',
      },
    ],
    faq: [
      {
        q: '¿Es mejor no publicar precios?',
        a: 'Solo si el precio depende de un diagnóstico que requiere conversación. En ese caso se publica el rango o el costo del diagnóstico.',
      },
      {
        q: '¿Se puede usar la misma lista en todos los canales?',
        a: 'Sí, y es lo recomendable: una sola fuente para WhatsApp, sitio y agente. Lo que cambia es el formato, no el dato.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/ia-atencion-cliente', anchor: 'precios claros en la conversación' },
    ],
    related: ['ia-para-cotizaciones', 'plantillas-de-respuesta-reutilizables', 'como-elegir-un-proveedor-de-whatsapp'],
  },
  {
    slug: 'como-elegir-un-proveedor-de-whatsapp',
    category: 'Guías prácticas',
    type: 'guia',
    date: '2026-08-29',
    keyword: 'elegir proveedor de WhatsApp',
    h1: 'Cómo elegir un proveedor de WhatsApp en una tarde, con cinco preguntas',
    description:
      'Cinco preguntas para evaluar un proveedor de WhatsApp antes de firmar: número, plantillas, exportación, soporte y salida.',
    intro:
      'La mayoría de las decisiones se toman con una demo y un precio. Estas cinco preguntas se hacen en una llamada y revelan lo que la demo no muestra.',
    sections: [
      {
        h2: '1. ¿El número es mío?',
        html: '<p>Debe quedar registrado a nombre del negocio. Si el proveedor lo administra como propio, migrar después es un problema.</p>',
      },
      {
        h2: '2. ¿Puedo ver el estado de mis plantillas?',
        html: '<p>Con motivo de rechazo y fecha. Sin eso, cada plantilla es una caja negra y cada campaña una incógnita.</p>',
      },
      {
        h2: '3. ¿Puedo exportar mis conversaciones?',
        html: '<p>En un formato usable, cuando quiera y sin costo extra. Es la prueba de que el proveedor no secuestra el historial.</p>',
      },
      {
        h2: '4. ¿Quién me responde si el canal se cae un sábado?',
        html: '<p>Un nombre, un canal y un horario. Si la respuesta es \"abrimos ticket el lunes\", el negocio pierde el fin de semana.</p>',
      },
      {
        h2: '5. ¿Cómo me voy si quiero irme?',
        html: '<p>Procedimiento escrito. Si nadie puede explicarlo en dos minutos, no está resuelto.</p>',
      },
    ],
    faq: [
      {
        q: '¿La tarifa por conversación varía mucho?',
        a: 'Varía menos que el soporte. Pregunte por el costo total con su volumen real, no por el precio de lista.',
      },
      {
        q: '¿Conviene un proveedor grande o uno pequeño?',
        a: 'Grande para estabilidad, pequeño para atención personalizada. La pregunta 4 es la que decide.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/automatizacion-whatsapp', anchor: 'conectar WhatsApp con un proveedor claro' },
    ],
    related: ['proveedores-de-api-de-whatsapp', 'api-de-whatsapp-para-empresas', 'checklist-lanzamiento-whatsapp'],
  },
  {
    slug: 'migrar-de-la-app-business-a-la-api',
    category: 'Guías prácticas',
    type: 'guia',
    date: '2026-08-28',
    keyword: 'migrar de WhatsApp Business a la API',
    h1: 'Migrar de la app Business a la API sin perder clientes',
    description:
      'Proceso de migración de WhatsApp Business a la API de WhatsApp: preparación, ventana de mantenimiento, historial y pruebas posteriores.',
    intro:
      'La migración tiene un momento crítico: el número deja de funcionar en la app y todavía no está verificado en la API. Planear esa ventana es la diferencia entre un día de molestia y una semana de problemas.',
    sections: [
      {
        h2: 'Antes: exportar y avisar',
        html: '<ul><li>Exportar el historial de chats importantes.</li><li>Descargar catálogo y respuestas rápidas.</li><li>Avisar a los clientes frecuentes con antelación.</li><li>Publicar el cambio en el sitio y en la ficha de Google.</li></ul>',
      },
      {
        h2: 'La ventana de mantenimiento',
        html: '<p>Elegir un horario de bajo volumen. Durante ese periodo, el número no recibe mensajes. Un mensaje automático en otro canal (correo o redes) cubre el hueco.</p>',
      },
      {
        h2: 'Verificación y primer mensaje',
        html: '<p>Verificar el negocio, configurar el nombre visible, aprobar una plantilla y enviar un mensaje de prueba a un número propio antes de anunciar nada.</p>',
      },
      {
        h2: 'Después: revisar la entregabilidad',
        html: '<p>Primeras 48 horas con revisión de conversaciones. Si los mensajes no llegan, puede ser calidad del número o un problema de plantilla, no del cliente.</p>',
      },
    ],
    steps: [
      {
        title: 'Exporte y guarde el historial',
        text: 'El historial de la app no se traslada. Lo que no se exporte, se pierde.',
      },
      {
        title: 'Desvincule el número de la app',
        text: 'Es el paso que abre la ventana sin servicio. Hágalo en un horario de bajo volumen.',
      },
      {
        title: 'Verifique y configure en la API',
        text: 'Nombre visible, foto, descripción y una plantilla de prueba aprobada.',
      },
      {
        title: 'Envíe un mensaje a usted mismo',
        text: 'Antes de anunciar el número nuevo, verifique que entra y sale correctamente.',
      },
    ],
    faq: [
      {
        q: '¿Se pierden los contactos?',
        a: 'Los contactos del teléfono no. Las etiquetas y el historial de la app sí, por eso se exportan antes.',
      },
      {
        q: '¿Se puede volver atrás?',
        a: 'Sí, con el mismo proceso de desvinculación en sentido contrario. No es recomendable hacerlo varias veces.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/automatizacion-whatsapp', anchor: 'migrar a la API con acompañamiento' },
    ],
    related: ['whatsapp-business-vs-api', 'checklist-lanzamiento-whatsapp', 'api-de-whatsapp-para-empresas'],
  },
  {
    slug: 'entrenar-al-equipo-en-un-agente',
    category: 'Guías prácticas',
    type: 'guia',
    date: '2026-08-27',
    keyword: 'entrenar al equipo para trabajar con un agente de IA',
    h1: 'Entrenar al equipo para trabajar con un agente: dos horas bien usadas',
    description:
      'Cómo capacitar a un equipo de atención para convivir con un agente de IA: qué revisar, cuándo intervenir y cómo corregir sin miedo.',
    intro:
      'Un agente mal recibido por el equipo se sabotea sin querer: nadie corrige sus errores y todos lo rodean. La capacitación no es enseñar la herramienta, es definir la relación.',
    sections: [
      {
        h2: 'Lo primero: el agente no los reemplaza',
        html: '<p>Pero no basta con decirlo. Hay que mostrar qué tareas desaparecen de su día y cuáles se vuelven más importantes. Si la respuesta honesta es que el volumen baja, decirlo.</p>',
      },
      {
        h2: 'Qué revisar y con qué criterio',
        html: '<p>Una muestra diaria con tres preguntas: ¿la respuesta era correcta?, ¿era completa?, ¿el cliente tuvo que repetir algo? Esas tres detectan casi todos los problemas.</p>',
      },
      {
        h2: 'Cómo corregir',
        html: '<p>El error no se corrige en el chat: se corrige en la fuente (el precio, la política, el manual). Enseñar eso cambia la relación con la herramienta: dejan de pelear con el mensaje y arreglan el dato.</p>',
      },
      {
        h2: 'Cuándo intervenir',
        html: '<p>Cuando el cliente está enojado, cuando hay dinero comprometido o cuando el agente repite el mismo error. La intervención es parte del trabajo, no un fracaso del sistema.</p>',
      },
    ],
    faq: [
      {
        q: '¿Cuánto tiempo toma la capacitación?',
        a: 'Dos horas iniciales y una revisión semanal de veinte minutos el primer mes. Después, se sostiene sola.',
      },
      {
        q: '¿Quién debe ser el referente interno?',
        a: 'Alguien que atienda clientes, no solo alguien de sistemas. El conocimiento operativo es el que corrige.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/ia-atencion-cliente', anchor: 'equipo y agente trabajando juntos' },
      { url: 'https://kora-agent.com/ia-agentica-negocios', anchor: 'IA recibida por el equipo' },
    ],
    related: ['delegar-sin-microgestionar', 'handoff-humano-ia', 'mantenimiento-de-automatizaciones'],
  },
  {
    slug: 'responder-una-resena-negativa',
    category: 'Guías prácticas',
    type: 'guia',
    date: '2026-08-26',
    keyword: 'responder una reseña negativa',
    h1: 'Cómo responder una reseña negativa sin empeorarla',
    description:
      'Estructura de respuesta a una reseña negativa: reconocer, concretar, resolver en privado y qué nunca escribir en público.',
    intro:
      'Una reseña negativa bien respondida convence más que diez positivas: demuestra que el negocio responde cuando algo sale mal. Mal respondida, es la prueba pública de que el problema es real.',
    sections: [
      {
        h2: 'Tres movimientos',
        html: '<ol><li>Reconocer el hecho sin discutir la percepción.</li><li>Concretar qué se va a hacer.</li><li>Ofrecer un canal privado para resolver.</li></ol><p>Nada más. La respuesta pública no es el lugar para explicar el contexto interno.</p>',
      },
      {
        h2: 'Lo que nunca se escribe',
        html: '<ul><li>Que el cliente está equivocado.</li><li>Detalles internos o nombres de empleados.</li><li>Descuentos compensatorios públicos.</li><li>Respuestas idénticas copiadas en varias reseñas.</li></ul>',
      },
      {
        h2: 'El plazo importa',
        html: '<p>Responder en 48 horas. Una respuesta tardía se lee como indiferencia, aunque el texto sea perfecto.</p>',
      },
      {
        h2: 'La reseña falsa',
        html: '<p>Se responde una vez, con calma, ofreciendo resolver por privado, y se reporta a la plataforma. Discutir en público nunca termina bien.</p>',
      },
    ],
    faq: [
      {
        q: '¿Conviene pedir que la borren?',
        a: 'No. Una reseña borrada por presión suele volver con más detalle. Resolver el problema es lo que cambia la percepción.',
      },
      {
        q: '¿Se puede automatizar la respuesta?',
        a: 'Se puede preparar una base, pero la respuesta pública debe ser específica. Un texto genérico en una queja concreta empeora la situación.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/ia-atencion-cliente', anchor: 'responder bien cuando algo falla' },
    ],
    related: ['gestionar-un-reclamo-en-cinco-mensajes', 'cuando-la-ia-no-debe-responder', 'tono-de-voz-marca-ia'],
  },
  {
    slug: 'pedir-datos-sin-interrogar',
    category: 'Guías prácticas',
    type: 'guia',
    date: '2026-08-25',
    keyword: 'pedir datos al cliente sin interrogar',
    h1: 'Pedir datos al cliente sin que parezca un interrogatorio',
    description:
      'Cómo recoger los datos que el negocio necesita en una conversación: orden, justificación y qué preguntar solo cuando hace falta.',
    intro:
      'Un formulario pide todo de golpe porque no puede conversar. Un agente sí puede, y ese es su ventaja: preguntar una cosa, usarla y seguir. Cuando imita al formulario, pierde lo único que lo hacía mejor.',
    sections: [
      {
        h2: 'Una pregunta por mensaje',
        html: '<p>Dos preguntas en un mensaje se contestan a medias. Una sola, con contexto, se contesta completa.</p>',
      },
      {
        h2: 'Preguntar solo lo que se va a usar',
        html: '<p>Si el dato no cambia la respuesta ni el registro, no se pide. Cada campo extra es una razón para abandonar la conversación.</p>',
      },
      {
        h2: 'Explicar para qué',
        html: '<p>\"Para reservarle el espacio necesito su nombre completo\" funciona mejor que \"nombre completo:\". La razón reduce la resistencia.</p>',
      },
      {
        h2: 'Aprovechar lo que ya se sabe',
        html: '<p>Si el cliente ya dijo su nombre, no se vuelve a preguntar. Repetir una pregunta es la señal más clara de que nadie estaba escuchando.</p>',
      },
    ],
    faq: [
      {
        q: '¿Cuántos datos se piden antes de agendar?',
        a: 'Los que el sistema exige para crear la cita, y ninguno más. Lo demás se completa después si hace falta.',
      },
      {
        q: '¿Qué hago si el cliente no quiere dar un dato?',
        a: 'Explicar la consecuencia concreta y ofrecer una alternativa. Si el dato es obligatorio, se dice con claridad y sin rodeos.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/agente-ia-whatsapp', anchor: 'conversaciones que no interrogan' },
    ],
    related: ['whatsapp-para-clinicas-citas', 'manual-de-atencion-en-una-pagina', 'entrenar-al-equipo-en-un-agente'],
  },
  {
    slug: 'gestionar-un-reclamo-en-cinco-mensajes',
    category: 'Guías prácticas',
    type: 'guia',
    date: '2026-08-24',
    keyword: 'gestionar un reclamo por WhatsApp',
    h1: 'Un reclamo en cinco mensajes: la secuencia que baja la tensión',
    description:
      'Secuencia de cinco mensajes para gestionar un reclamo por chat: reconocer, aclarar, comprometer, resolver y cerrar. Con ejemplo.',
    intro:
      'Un reclamo mal manejado escala porque el cliente siente que no lo escuchan. Cinco mensajes bien usados resuelven la mayoría de los casos sin compensación y sin escalar a una persona.',
    sections: [
      {
        h2: 'Mensaje 1: reconocer, sin explicar',
        html: '<p>\"Entiendo, y le pido disculpas por la molestia. Déjeme revisar qué pasó.\" Sin justificaciones todavía: una explicación antes del reconocimiento se lee como defensa.</p>',
      },
      {
        h2: 'Mensaje 2: aclarar el hecho',
        html: '<p>Una pregunta concreta para confirmar el dato: número de pedido, fecha, monto. Nada de \"cuénteme todo de nuevo\".</p>',
      },
      {
        h2: 'Mensaje 3: comprometer algo verificable',
        html: '<p>\"Le confirmo hoy antes de las 5.\" Un compromiso corto y real. Si no se puede cumplir, no se promete.</p>',
      },
      {
        h2: 'Mensaje 4: resolver o trasladar con contexto',
        html: '<p>La solución concreta, o el traspaso explicando qué se hizo ya. El cliente no debe repetir nada.</p>',
      },
      {
        h2: 'Mensaje 5: cerrar y verificar',
        html: '<p>\"¿Quedó resuelto o falta algo?\" Esa pregunta detecta el reclamo que se va a repetir en dos días.</p>',
      },
    ],
    faq: [
      {
        q: '¿Cuándo se ofrece una compensación?',
        a: 'Cuando el error del negocio causó un perjuicio concreto y la política lo permite. Ofrecerla antes de entender el caso crea expectativas y desconfianza.',
      },
      {
        q: '¿Un agente puede manejar un reclamo?',
        a: 'Puede reconocer, aclarar y trasladar. Decidir una compensación o una excepción es de una persona.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/ia-atencion-cliente', anchor: 'reclamos manejados con criterio' },
    ],
    related: ['responder-una-resena-negativa', 'handoff-humano-ia', 'cuando-la-ia-no-debe-responder'],
  },
  {
    slug: 'atencion-en-temporada-alta',
    category: 'Guías prácticas',
    type: 'guia',
    date: '2026-08-23',
    keyword: 'atención al cliente en temporada alta',
    h1: 'Temporada alta sin colapsar: qué preparar dos semanas antes',
    description:
      'Preparación de atención para temporada alta: mensajes, capacidad, prioridades y qué automatizar para no perder clientes en el pico.',
    intro:
      'La temporada alta no falla por falta de personal: falla porque todo llega junto y no hay prioridades definidas. Dos semanas de preparación evitan la mayoría de los problemas.',
    sections: [
      {
        h2: 'Dos semanas antes',
        html: '<ul><li>Actualizar precios y disponibilidad.</li><li>Escribir el mensaje de respuesta inmediata con tiempos reales.</li><li>Aprobar las plantillas de recordatorio.</li><li>Definir qué consultas son prioritarias.</li></ul>',
      },
      {
        h2: 'La semana antes',
        html: '<ul><li>Probar el agente con los mensajes típicos de temporada.</li><li>Revisar la capacidad real de agenda.</li><li>Preparar respuestas para las tres quejas más probables.</li></ul>',
      },
      {
        h2: 'Durante',
        html: '<p>Revisión diaria de diez conversaciones y ajuste inmediato. En temporada, la información cambia más rápido que en cualquier otra época.</p>',
      },
      {
        h2: 'Después',
        html: '<p>Un resumen de qué se rompió y qué se aprendió. La temporada siguiente empieza con ese documento, no con la memoria.</p>',
      },
    ],
    faq: [
      {
        q: '¿Conviene subir precios en temporada?',
        a: 'Es una decisión comercial, pero la respuesta debe estar escrita y disponible el primer día. Improvisar precios en el pico genera la peor conversación posible.',
      },
      {
        q: '¿Se puede ampliar el horario sin contratar?',
        a: 'Parcialmente, con automatización de lo repetido y un mensaje honesto de tiempos de respuesta. Prometer atención inmediata sin capacidad es peor.',
      },
    ],
    koraLinks: [
      { url: 'https://kora-agent.com/agente-ia-whatsapp', anchor: 'temporada alta atendida' },
      { url: 'https://kora-agent.com', anchor: 'Kora' },
    ],
    related: ['checklist-lanzamiento-whatsapp', 'montar-atencion-en-una-semana', 'capacidad-de-atencion-sin-contratar'],
  },
];
