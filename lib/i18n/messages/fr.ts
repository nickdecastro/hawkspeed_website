import type { Messages } from "./en";

const fr: Messages = {
  siteTitle: (page) => `${page} — HawkSpeed`,
  nav: {
    games: "Jeux",
    guides: "Guides de jeu",
  },
  language: {
    label: "Langue",
  },
  footer: {
    cookies: "Avis sur les cookies",
    privacy: "Politique de confidentialité (Endings Guide for Elden Ring)",
  },
  cookieBanner: {
    region: "Avis sur les cookies",
    text: "Ce site utilise des cookies pour enregistrer votre progression dans les listes de contrôle et votre langue d'une visite à l'autre, sans connexion.",
    learnMore: "En savoir plus",
    decline: "Refuser",
    accept: "Accepter",
  },
  common: {
    comingSoon: "Bientôt disponible",
  },
  home: {
    intro:
      "HawkSpeed crée des jeux et des guides de jeux. Découvrez nos créations ou plongez directement dans une soluce.",
    browseGames: "Voir les jeux",
    browseGuides: "Voir les guides de jeu",
  },
  games: {
    title: "Jeux",
    intro: "Les jeux créés par HawkSpeed.",
    features: "Fonctionnalités",
    download: (title) => `Télécharger ${title} sur itch.io`,
    entries: {
      ivatg: {
        blurb:
          "Un jeu de combat de chars à la première personne, avec construction de base et stratégie, inspiré de Battlezone II.",
        body: [
          "Vous commandez un seul char en permanence : pas d'infanterie, pas d'éjection, pas de multijoueur. Une stratégie légère se greffe directement sur le combat de chars à la première personne : capturez les trois points de ressources de la carte, développez votre base et produisez des chars, des unités de soutien et des bâtiments pour user un commandant ennemi contrôlé par l'IA, qui a accès à tout ce dont vous disposez.",
          "Le jeu est une campagne de dix missions, chacune sur sa propre carte. Chaque mission débloque quelque chose de nouveau pour les deux camps — une usine et des tourelles mobiles, des mortiers, des engins de réparation, des chars à bouclier, des canons électriques, des porte-drones, des marcheurs de siège — et la dernière vous oppose au Léviathan, un marcheur de 25 mètres qu'il faut abattre. Une mission dure environ dix minutes en moyenne : six pour la première, quinze ou plus pour la finale. Une victoire débloque la mission suivante ; une défaite fait rejouer celle en cours.",
          "IVATG est en développement actif et disponible en téléchargement sur itch.io. Toute la campagne est jouable du début à la fin, avec une bande originale orchestrale, six langues et des options d'accessibilité pour les déficiences de la vision des couleurs et pour les joueurs sourds et malentendants.",
        ],
        features: [
          {
            title: "Combat de chars à la première personne",
            items: [
              "Déplacement direct ZQSD/WASD (avant/arrière/latéral) avec rotation de la caisse à la souris et inclinaison indépendante de la tourelle",
              "Accélération (Maj) jusqu'à cinq secondes, qui se recharge en roulant",
              "Canon principal et lance-missiles secondaire, chacun avec ses propres dégâts, portée et temps de recharge",
              "Un bouclier absorbe les dégâts avant les PV de la coque et se recharge après quelques secondes sans être touché",
              "Caméra à la première personne montée sur la tourelle, caméra de poursuite à la troisième personne sur V, inclinaison de la caméra en déplacement latéral et réticule dynamique qui suit le point visé par le canon",
              "Le joueur réapparaît trois secondes après sa mort — seule la perte de votre base de commandement met fin à la mission",
            ],
          },
          {
            title: "Campagne et cartes",
            items: [
              "Dix missions sur dix cartes : mesas désertiques, forêt de colonnes de basalte, fonderie de nuit, crêtes glaciaires, ruche extraterrestre, labyrinthe rougeoyant, citadelle d'obsidienne, et plus encore",
              "Chaque carte est symétrique, pour que les deux commandants se battent sur le même terrain",
              "Chaque mission ajoute une nouvelle unité ou mécanique — et le commandant ennemi en profite aussi",
              "Le Léviathan de la dernière mission garde sa base pendant dix minutes, puis marche sur la vôtre ; l'abattre donne la victoire, et ses points faibles subissent des dégâts doublés",
              "Un briefing avant chaque mission et un écran de fin indiquant ce que la victoire a débloqué",
              "Sauvegarde rapide (F5) et chargement rapide (F7) en pleine mission",
            ],
          },
          {
            title: "Carte et économie",
            items: [
              "Trois points de ressources, replacés à chaque partie : un dans chaque moitié de la carte et un au centre",
              "Capture en stationnant un char dans la zone d'un point jusqu'à ce qu'une barre de progression se remplisse — le camp adverse peut la contester et la réinitialiser",
              "Les points capturés construisent un extracteur qui génère de l'Énergie pour leur propriétaire",
              "Chaque point porte une haute balise aux couleurs de son propriétaire, pour voir qui tient quoi depuis n'importe où sur la carte",
            ],
          },
          {
            title: "Construction de base et production d'unités",
            items: [
              "Chaque camp possède une base de commandement gardée par sa propre tourelle — perdre la vôtre met fin à la mission",
              "Chars éclaireurs, d'assaut et lourds dès le départ ; l'usine, l'atelier de mortiers, l'atelier et la baie de drones en débloquent d'autres au fil de la campagne",
              "Unités de soutien, dont la tourelle mobile, le mortier, la batterie de roquettes, l'engin de réparation, le char à bouclier Aegis, le char à canon électrique, le porte-drones et le marcheur de siège",
              "Chaque bâtiment a sa propre ligne de production, pour construire plusieurs unités à la fois",
              "Menu de construction présenté comme un arbre de dépendances, qui montre ce que chaque bâtiment débloque",
            ],
          },
          {
            title: "Interface de commandement et HUD",
            items: [
              "Menu de construction (Tab/Q) indiquant le coût en Énergie et le temps de construction de chaque unité ; cliquez pour l'ajouter à la file",
              "Liste des unités (E) avec neuf ordres permanents sur les touches 1 à 9 : Suivez-moi, Défendre ma position, Attaquer le plus proche, Assaut sur la base, prendre et tenir l'un des trois objectifs, Déployer/Replier, et Suivre/Réparer une unité",
              "Les unités se placent sur un objectif dans l'ordre où elles ont été envoyées, et se décalent pour dégager leur ligne de tir",
              "Minicarte radar dessinée sur le terrain de la carte, avec un état des objectifs indiquant qui tient chaque point",
              "HUD complet : santé, bouclier, compteur d'Énergie, file de construction, radar et objectifs",
            ],
          },
          {
            title: "IA du commandant ennemi",
            items: [
              "Fonctionne sur un cycle stratégique répété — s'étend vers les points de ressources libres, construit quand l'Énergie le permet et attaque dès qu'elle a l'armée pour le faire",
              "Joue la même campagne que vous : chaque unité ou bâtiment qu'une mission vous débloque, elle peut aussi le construire",
              "Les chars de l'IA anticipent les cibles en mouvement et ne tirent que lorsque leur canon est vraiment pointé sur la cible",
              "Les niveaux Facile / Normal / Difficile règlent la vitesse de réflexion, le moment des attaques, la part de la carte prise, la taille de l'armée et la puissance du Léviathan",
            ],
          },
          {
            title: "Son, langues et accessibilité",
            items: [
              "Une bande originale orchestrale de dix morceaux, un par mission, qui laisse place à une piste de combat quand les affrontements sont proches",
              "Une ambiance sonore propre à chaque carte",
              "Six langues : anglais, français, allemand, espagnol, portugais et italien",
              "Cinq modes pour les déficiences de la vision des couleurs, et un mode pour les sourds et malentendants qui fait clignoter les unités quand elles tirent ou sont touchées",
              "Touches reconfigurables, volumes séparés pour la musique, les effets et l'ambiance, sensibilité de la souris et réglages d'affichage",
            ],
          },
        ],
      },
    },
  },
  guides: {
    title: "Guides de jeu",
    intro: "Soluces et guides de référence, classés par jeu.",
    links: {
      "/guides/elden-ring": {
        title: "Toutes les fins d'Elden Ring",
        blurb: "Un guide pas à pas et sans spoiler de chaque fin d'Elden Ring.",
      },
      "/guides/elden-ring/full-walkthrough": {
        title: "Soluce complète",
        blurb: "Un parcours région par région de tout le jeu, Shadow of the Erdtree compris.",
      },
    },
  },
  eldenRing: {
    stepsHelp: [
      "Les étapes se dévoilent une à une : vous ne voyez jamais que la suivante. Cochez une étape une fois terminée pour afficher la suivante ; décochez-la pour revenir à ce point. Toute étape marquée d'un ",
      " modifie définitivement votre partie : dépliez-la pour en lire la raison avant de vous engager. Votre progression est enregistrée dans ce navigateur.",
    ],
    endings: {
      title: "Toutes les fins d'Elden Ring",
      intro:
        "Un guide pas à pas et sans spoiler de chaque fin d'Elden Ring (Seigneur d'Elden, Seigneur de la Flamme frénétique, Ère des étoiles, la fin secrète et Shadow of the Erdtree), dans le bon ordre, pour ne rien bloquer par accident.",
      pick: "Choisissez une fin ci-dessous.",
    },
    walkthrough: {
      title: "Soluce complète d'Elden Ring",
      intro:
        "Un parcours zone par zone de tout Elden Ring, de la Chapelle de l'Attente jusqu'au Trône d'Elden.",
      listed: "Toutes les zones sont listées ci-dessous.",
      credit: [
        "Adapté de la ",
        "soluce Elden Ring du wiki Fextralife",
        ". Guide non officiel réalisé par des fans, non affilié à FromSoftware ni à Bandai Namco et non approuvé par eux.",
      ],
    },
    quest: {
      back: "Retour",
      endingComplete: "Vous avez terminé toutes les étapes de cette fin.",
      resetEnding: "Réinitialiser la progression de cette fin",
      altersWarning: "Attention : modifie définitivement votre partie",
      whyChanges: "Pourquoi cela modifie votre partie",
      completed: "Terminé",
      markDone: "Marquer comme fait",
    },
    checklist: {
      allComplete: "Vous avez terminé toutes les étapes de la soluce.",
      sectionCompleted: "Section terminée",
      markSection: "Marquer cette section comme faite",
      reset: "Réinitialiser la progression de la soluce",
    },
  },
  cookies: {
    title: "Avis sur les cookies",
    effective: (date) => `En vigueur le ${date}`,
    intro: [
      "Ce site n'a ni comptes ni connexions. Pour se souvenir de votre avancée dans la liste de contrôle d'un guide et de la langue choisie d'une visite à l'autre, il peut les enregistrer sur votre appareil, mais seulement si vous cliquez sur ",
      "Accepter",
      " dans le bandeau des cookies.",
    ],
    storeTitle: "Ce que nous enregistrons",
    storeIntro: "Si vous acceptez, le site enregistre :",
    storeCookie: [
      "Un cookie propriétaire, ",
      ", qui indique que vous avez accepté afin que le bandeau ne s'affiche plus. Il expire au bout d'un an.",
    ],
    storeLocal:
      "Votre progression et votre choix de langue, conservés dans le stockage local de votre navigateur sous ces clés. Le stockage local reste sur votre appareil et n'est jamais envoyé à notre serveur :",
    storeNoPersonal: "Rien de tout cela ne contient d'informations personnelles.",
    dontTitle: "Ce que nous ne faisons pas",
    dont: "Le site n'utilise aucun cookie d'analyse, de publicité ou de suivi, et ne partage aucune de ces données avec qui que ce soit.",
    declineTitle: "Si vous refusez",
    decline:
      "Rien n'est enregistré. Les listes de contrôle et le choix de la langue fonctionnent toujours, mais votre progression et votre langue sont perdues à la fermeture de la page, et le bandeau réapparaîtra lors de votre prochaine visite.",
    removeTitle: "Supprimer les données enregistrées",
    remove:
      "Vous pouvez effacer à tout moment le cookie et les données du site hawkspeed.com dans les paramètres de votre navigateur. Cela réinitialise votre progression et votre choix de langue, et le bandeau réapparaîtra.",
  },
  privacy: {
    title: "Politique de confidentialité",
    pageTitle: "Politique de confidentialité — Endings Guide for Elden Ring",
    effective: (date) => `En vigueur le ${date}`,
    intro: [
      "Cette politique de confidentialité explique comment HawkSpeed (« nous ») traite les informations liées à l'application Android ",
      " (l'« Application »).",
    ],
    sections: [
      {
        title: "Aucune collecte de données",
        body: "L'Application ne collecte, ne stocke et ne transmet aucune donnée personnelle. Elle n'utilise aucun service d'analyse, de rapport de plantage ou de publicité, et n'intègre aucun SDK de suivi tiers. L'Application ne vous demande pas de créer de compte et ne propose aucun achat intégré.",
      },
      {
        title: "Autorisations",
        body: "L'Application ne demande aucune autorisation au-delà de ce qui est nécessaire à son fonctionnement de base sur Android.",
      },
      {
        title: "Confidentialité des enfants",
        body: "L'Application ne s'adresse pas aux enfants de moins de 13 ans et ne collecte pas sciemment d'informations auprès d'enfants.",
      },
      {
        title: "Liens vers des tiers",
        body: "Le contenu des guides de l'Application peut renvoyer vers des sources officielles ou tierces (comme des wikis de jeux). Nous ne sommes pas responsables des pratiques de confidentialité des sites externes que vous visitez via ces liens.",
      },
      {
        title: "Modifications de cette politique",
        body: "Si nos pratiques en matière de données changent lors d'une future mise à jour, cette page sera modifiée en conséquence et indiquera une nouvelle date d'entrée en vigueur ci-dessus.",
      },
    ],
    contactTitle: "Nous contacter",
    contact: ["Vos questions sur cette politique peuvent être envoyées à ", "."],
  },
};

export default fr;
