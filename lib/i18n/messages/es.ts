import type { Messages } from "./en";

const es: Messages = {
  siteTitle: (page) => `${page} — HawkSpeed`,
  nav: {
    games: "Juegos",
    guides: "Guías de juegos",
  },
  language: {
    label: "Idioma",
  },
  footer: {
    cookies: "Aviso de cookies",
    privacy: "Política de privacidad (Endings Guide for Elden Ring)",
  },
  cookieBanner: {
    region: "Aviso de cookies",
    text: "Este sitio usa cookies para guardar tu progreso en las listas de control y tu idioma entre visitas, sin necesidad de iniciar sesión.",
    learnMore: "Más información",
    decline: "Rechazar",
    accept: "Aceptar",
  },
  common: {
    comingSoon: "Próximamente",
  },
  home: {
    intro:
      "HawkSpeed crea juegos y guías de juegos. Explora lo que hemos hecho o ve directamente a una guía.",
    browseGames: "Ver juegos",
    browseGuides: "Ver guías de juegos",
  },
  games: {
    title: "Juegos",
    intro: "Juegos creados por HawkSpeed.",
    features: "Características",
    download: (title) => `Descargar ${title} en itch.io`,
    entries: {
      ivatg: {
        blurb:
          "Un juego de combate de tanques en primera persona con construcción de bases y estrategia, inspirado en Battlezone II.",
        body: [
          "Controlas un único tanque en todo momento: sin infantería, sin salir del vehículo, sin multijugador. Una estrategia ligera se apoya directamente sobre el combate de tanques en primera persona: captura los tres puntos de recursos del mapa, amplía tu base y produce tanques, unidades de apoyo y edificios para desgastar a un comandante enemigo controlado por la IA que tiene acceso a todo lo que tienes tú.",
          "El juego es una campaña de diez misiones, cada una en su propio mapa. Cada misión desbloquea algo nuevo para ambos bandos —una fábrica y torretas móviles, morteros, vehículos de reparación, tanques con escudo, cañones de riel, portadrones, caminantes de asedio— y la última te enfrenta al Leviatán, un caminante de 25 metros al que tienes que derribar. Las misiones duran unos diez minutos de media: unos seis la primera y quince o más la final. Una victoria desbloquea la siguiente misión; una derrota repite la actual.",
          "IVATG está en desarrollo activo y disponible para descargar en itch.io. Toda la campaña se puede jugar de principio a fin, con una banda sonora orquestal original, seis idiomas y opciones de accesibilidad para el daltonismo y para jugadores sordos o con dificultades auditivas.",
        ],
        features: [
          {
            title: "Combate de tanques en primera persona",
            items: [
              "Movimiento directo con WASD (avance/retroceso/lateral), rotación del casco con el ratón y elevación independiente de la torreta",
              "Impulso (Mayús) de hasta cinco segundos de velocidad extra, que se recarga mientras conduces",
              "Cañón principal y lanzamisiles secundario, cada uno con su propio daño, alcance y tiempo de recarga",
              "Un escudo absorbe el daño antes que los PV del casco y se recarga tras unos segundos sin recibir impactos",
              "Cámara en primera persona montada en la torreta, cámara de seguimiento en tercera persona con V, inclinación de cámara al desplazarte lateralmente y una mira dinámica que sigue el punto de mira del cañón",
              "El jugador reaparece tres segundos después de morir: solo perder tu base de mando termina la misión",
            ],
          },
          {
            title: "Campaña y mapas",
            items: [
              "Diez misiones en diez mapas: mesetas desérticas, un bosque de columnas de basalto, una fundición nocturna, crestas glaciares, una colmena alienígena, un laberinto de brasas, una ciudadela de obsidiana y más",
              "Cada mapa es simétrico por el centro, para que ambos comandantes luchen en el mismo terreno",
              "Cada misión añade una nueva unidad o mecánica, y el comandante enemigo también la recibe",
              "El Leviatán de la última misión defiende su base durante diez minutos y luego marcha sobre la tuya; derribarlo es la victoria, y sus puntos débiles reciben el doble de daño",
              "Una sesión informativa antes de cada misión y una pantalla final que muestra lo que ha desbloqueado la victoria",
              "Guardado rápido (F5) y carga rápida (F7) en plena misión",
            ],
          },
          {
            title: "Mapa y economía",
            items: [
              "Tres puntos de recursos, recolocados en cada partida: uno en cada mitad del mapa y otro en el centro",
              "Se capturan aparcando un tanque en la zona de un punto hasta que se llene una barra de progreso; el bando contrario puede disputarla y reiniciarla",
              "Los puntos capturados construyen un extractor que genera Energía para su propietario",
              "Cada punto tiene una alta baliza del color de su propietario, así que se ve quién controla qué desde cualquier lugar del mapa",
            ],
          },
          {
            title: "Construcción de base y producción de unidades",
            items: [
              "Cada bando tiene una base de mando protegida por su propia torreta: perder la tuya termina la misión",
              "Tanques de exploración, asalto y pesados desde el principio; la fábrica, la planta de morteros, el taller y el hangar de drones desbloquean más a lo largo de la campaña",
              "Unidades de apoyo como la torreta móvil, el mortero, la batería de cohetes, el vehículo de reparación, el tanque de escudo Aegis, el tanque con cañón de riel, el portadrones y el caminante de asedio",
              "Cada edificio tiene su propia línea de producción, así que puedes construir varias unidades a la vez",
              "Menú de construcción organizado como un árbol de dependencias que muestra lo que desbloquea cada edificio",
            ],
          },
          {
            title: "Interfaz de mando y HUD",
            items: [
              "Menú de construcción (Tab/Q) con el coste en Energía y el tiempo de construcción de cada unidad; haz clic para ponerla en cola",
              "Lista de unidades (E) con nueve órdenes permanentes en las teclas 1–9: Sígueme, Defender mi posición, Atacar al más cercano, Asaltar la base, tomar y mantener cualquiera de los tres objetivos, Desplegar/Recoger y Seguir/Reparar una unidad",
              "Las unidades se colocan en un objetivo en el orden en que fueron enviadas y se apartan para tener línea de tiro despejada",
              "Minimapa de radar dibujado sobre el propio terreno del mapa, con un panel de objetivos que indica quién controla cada punto",
              "HUD completo: salud, escudo, contador de Energía, cola de construcción, radar y objetivos",
            ],
          },
          {
            title: "IA del comandante enemigo",
            items: [
              "Funciona con un ciclo estratégico repetido: se expande a los puntos de recursos libres, construye cuando la Energía lo permite y ataca en cuanto tiene el ejército para ello",
              "Juega la misma campaña que tú: cada unidad o edificio que una misión te desbloquea, también puede construirlo",
              "Los tanques de la IA anticipan a los objetivos en movimiento y no disparan hasta que su cañón apunta de verdad al blanco",
              "Fácil / Normal / Difícil ajustan lo rápido que piensa, cuándo ataca, cuánto mapa toma, el tamaño de su ejército y la fuerza del Leviatán",
            ],
          },
          {
            title: "Sonido, idiomas y accesibilidad",
            items: [
              "Una banda sonora orquestal original de diez piezas, una por misión, que da paso a un tema de combate cuando la lucha está cerca",
              "Un ambiente sonoro propio para cada mapa",
              "Seis idiomas: inglés, francés, alemán, español, portugués e italiano",
              "Cinco modos para el daltonismo y un modo para personas sordas o con dificultades auditivas que hace destellar a las unidades cuando disparan o reciben impactos",
              "Teclas reasignables, volumen separado para música, efectos y ambiente, sensibilidad del ratón y ajustes de pantalla",
            ],
          },
        ],
      },
    },
  },
  guides: {
    title: "Guías de juegos",
    intro: "Guías completas y de referencia, organizadas por juego.",
    links: {
      "/guides/elden-ring": {
        title: "Todos los finales de Elden Ring",
        blurb: "Una guía paso a paso y sin spoilers de todos los finales de Elden Ring.",
      },
      "/guides/elden-ring/full-walkthrough": {
        title: "Guía completa",
        blurb: "Una ruta región por región por todo el juego, incluido Shadow of the Erdtree.",
      },
    },
  },
  eldenRing: {
    stepsHelp: [
      "Los pasos aparecen de uno en uno, así que solo ves lo que tienes que hacer a continuación. Marca un paso cuando lo hayas hecho para ver el siguiente; desmárcalo para volver a ese punto. Cualquier paso marcado con ",
      " altera tu partida de forma permanente: despliégalo para leer por qué antes de decidirte. Tu progreso se guarda en este navegador.",
    ],
    endings: {
      title: "Todos los finales de Elden Ring",
      intro:
        "Una guía paso a paso y sin spoilers de todos los finales de Elden Ring (Señor del Círculo, Señor de la Llama Frenética, Era de las Estrellas, el final secreto y Shadow of the Erdtree) en el orden correcto, para que nada quede bloqueado por accidente.",
      pick: "Elige un final abajo.",
    },
    walkthrough: {
      title: "Guía completa de Elden Ring",
      intro:
        "Una ruta zona por zona por todo Elden Ring, desde la Capilla de la Espera hasta el Trono del Círculo.",
      listed: "Todas las zonas aparecen abajo.",
      credit: [
        "Adaptado de la ",
        "guía de Elden Ring del wiki de Fextralife",
        ". Guía no oficial hecha por fans, sin relación con FromSoftware ni Bandai Namco y sin su aprobación.",
      ],
    },
    quest: {
      back: "Volver",
      endingComplete: "Has completado todos los pasos de este final.",
      resetEnding: "Reiniciar el progreso de este final",
      altersWarning: "Atención: altera tu partida de forma permanente",
      whyChanges: "Por qué esto altera tu partida",
      completed: "Completado",
      markDone: "Marcar como hecho",
    },
    checklist: {
      allComplete: "Has completado todos los pasos de la guía.",
      sectionCompleted: "Sección completada",
      markSection: "Marcar esta sección como hecha",
      reset: "Reiniciar el progreso de la guía",
    },
  },
  cookies: {
    title: "Aviso de cookies",
    effective: (date) => `Vigente desde el ${date}`,
    intro: [
      "Este sitio no tiene cuentas ni inicios de sesión. Para recordar entre visitas cuánto has avanzado en la lista de control de una guía y qué idioma elegiste, puede guardarlo en tu dispositivo, pero solo si haces clic en ",
      "Aceptar",
      " en el aviso de cookies.",
    ],
    storeTitle: "Qué guardamos",
    storeIntro: "Si aceptas, el sitio guarda:",
    storeCookie: [
      "Una cookie propia, ",
      ", que registra que aceptaste para no volver a mostrar el aviso. Caduca al cabo de un año.",
    ],
    storeLocal:
      "Tu progreso en las listas de control y tu elección de idioma, guardados en el almacenamiento local de tu navegador con estas claves. El almacenamiento local se queda en tu dispositivo y nunca se envía a nuestro servidor:",
    storeNoPersonal: "Nada de esto incluye información personal.",
    dontTitle: "Qué no hacemos",
    dont: "El sitio no usa cookies de analítica, publicidad ni seguimiento, y no comparte ninguno de estos datos con nadie.",
    declineTitle: "Si rechazas",
    decline:
      "No se guarda nada. Las listas de control y el selector de idioma siguen funcionando, pero tu progreso y tu idioma se pierden al cerrar la página, y el aviso volverá a aparecer en tu próxima visita.",
    removeTitle: "Eliminar los datos guardados",
    remove:
      "Puedes borrar la cookie y los datos del sitio hawkspeed.com en cualquier momento desde la configuración de tu navegador. Esto reinicia tu progreso y tu elección de idioma, y el aviso volverá a aparecer.",
  },
  privacy: {
    title: "Política de privacidad",
    pageTitle: "Política de privacidad — Endings Guide for Elden Ring",
    effective: (date) => `Vigente desde el ${date}`,
    intro: [
      "Esta Política de privacidad explica cómo HawkSpeed («nosotros») trata la información relacionada con la aplicación para Android ",
      " (la «Aplicación»).",
    ],
    sections: [
      {
        title: "Sin recopilación de datos",
        body: "La Aplicación no recopila, almacena ni transmite ningún dato personal. No usa servicios de analítica, informes de errores ni publicidad, y no incluye SDK de seguimiento de terceros. La Aplicación no requiere crear una cuenta y no tiene compras integradas.",
      },
      {
        title: "Permisos",
        body: "La Aplicación no solicita ningún permiso del dispositivo más allá de lo necesario para su funcionamiento básico en Android.",
      },
      {
        title: "Privacidad de los menores",
        body: "La Aplicación no está dirigida a menores de 13 años y no recopila a sabiendas información de menores.",
      },
      {
        title: "Enlaces de terceros",
        body: "El contenido de las guías de la Aplicación puede enlazar a fuentes oficiales o de terceros (como wikis de juegos). No somos responsables de las prácticas de privacidad de los sitios externos que visites a través de esos enlaces.",
      },
      {
        title: "Cambios en esta política",
        body: "Si nuestras prácticas sobre datos cambian en una futura actualización, esta página se actualizará para reflejarlo, junto con una nueva fecha de vigencia arriba.",
      },
    ],
    contactTitle: "Contacto",
    contact: ["Puedes enviar tus preguntas sobre esta política a ", "."],
  },
};

export default es;
