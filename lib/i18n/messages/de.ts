import type { Messages } from "./en";

const de: Messages = {
  siteTitle: (page) => `${page} — HawkSpeed`,
  nav: {
    games: "Spiele",
    guides: "Spielguides",
  },
  language: {
    label: "Sprache",
  },
  footer: {
    cookies: "Cookie-Hinweis",
    privacy: "Datenschutzerklärung (Endings Guide for Elden Ring)",
  },
  cookieBanner: {
    region: "Cookie-Hinweis",
    text: "Diese Website verwendet Cookies, um deinen Checklisten-Fortschritt und deine Sprache zwischen Besuchen zu speichern – ganz ohne Anmeldung.",
    learnMore: "Mehr erfahren",
    decline: "Ablehnen",
    accept: "Akzeptieren",
  },
  common: {
    comingSoon: "Demnächst",
  },
  home: {
    intro:
      "HawkSpeed macht Spiele und Spiele-Guides. Sieh dir an, was wir gebaut haben, oder spring direkt in eine Komplettlösung.",
    browseGames: "Spiele ansehen",
    browseGuides: "Spielguides ansehen",
  },
  games: {
    title: "Spiele",
    intro: "Spiele von HawkSpeed.",
    features: "Features",
    download: (title) => `${title} auf itch.io herunterladen`,
    entries: {
      ivatg: {
        blurb:
          "Ein Ego-Panzerkampfspiel mit Basisbau und Strategie, inspiriert von Battlezone II.",
        body: [
          "Du steuerst jederzeit einen einzigen Panzer — keine Infanterie, kein Aussteigen, kein Mehrspieler. Leichte Strategie setzt direkt auf den Panzerkampf aus der Ego-Perspektive auf: Erobere die drei Ressourcenpunkte der Karte, baue deine Basis aus und produziere Panzer, Unterstützungseinheiten und Gebäude, um einen KI-Gegner zu zermürben, der Zugriff auf alles hat, was auch du hast.",
          "Das Spiel ist eine Kampagne aus zehn Missionen, jede auf ihrer eigenen Karte. Jede Mission schaltet für beide Seiten etwas Neues frei — eine Fabrik und mobile Geschütztürme, Mörser, Reparaturfahrzeuge, Schildpanzer, Railguns, Drohnenträger, Belagerungsläufer — und die letzte stellt dich dem Leviathan gegenüber, einem 25 Meter hohen Läufer, den du zu Fall bringen musst. Eine Mission dauert im Schnitt etwa zehn Minuten: rund sechs für die erste, fünfzehn oder mehr für das Finale. Ein Sieg schaltet die nächste Mission frei; nach einer Niederlage spielst du die aktuelle erneut.",
          "IVATG befindet sich in aktiver Entwicklung und ist auf itch.io zum Download verfügbar. Die gesamte Kampagne ist von Anfang bis Ende spielbar, mit einem eigenen Orchester-Soundtrack, sechs Sprachen und Barrierefreiheitsoptionen für Farbsehschwächen sowie für gehörlose und schwerhörige Spieler.",
        ],
        features: [
          {
            title: "Panzerkampf aus der Ego-Perspektive",
            items: [
              "Direkte WASD-Steuerung (vorwärts/rückwärts/seitwärts) mit Wannendrehung per Maus und unabhängiger Rohrerhöhung",
              "Boost (Umschalt) für bis zu fünf Sekunden mehr Tempo, der sich während der Fahrt wieder auflädt",
              "Hauptkanone und sekundärer Raketenwerfer, jeweils mit eigenem Schaden, eigener Reichweite und Abklingzeit",
              "Ein Schild absorbiert Schaden vor den Rumpf-HP und lädt sich nach einigen Sekunden ohne Treffer wieder auf",
              "Ego-Kamera am Turm, Verfolgerkamera aus der dritten Person auf V, Kameraneigung beim Seitwärtsfahren und ein dynamisches Fadenkreuz, das dem Zielpunkt des Rohrs folgt",
              "Der Spieler erscheint drei Sekunden nach seinem Tod wieder — nur der Verlust deiner Kommandobasis beendet die Mission",
            ],
          },
          {
            title: "Kampagne & Karten",
            items: [
              "Zehn Missionen auf zehn Karten: Wüstentafelberge, ein Wald aus Basaltsäulen, eine nächtliche Gießerei, Gletscherkämme, ein außerirdischer Bienenstock, ein glutrotes Labyrinth, eine Obsidianzitadelle und mehr",
              "Jede Karte ist in der Mitte gespiegelt, damit beide Kommandanten auf demselben Gelände kämpfen",
              "Jede Mission fügt eine neue Einheit oder Mechanik hinzu — und der feindliche Kommandant bekommt sie auch",
              "Der Leviathan der letzten Mission hält zehn Minuten lang seine Basis und marschiert dann auf deine; ihn zu vernichten ist der Sieg, und seine Schwachstellen nehmen doppelten Schaden",
              "Ein Briefing vor jeder Mission und ein Abschlussbildschirm, der zeigt, was der Sieg freigeschaltet hat",
              "Schnellspeichern (F5) und Schnellladen (F7) mitten in der Mission",
            ],
          },
          {
            title: "Karte & Wirtschaft",
            items: [
              "Drei Ressourcenpunkte, die in jeder Partie neu verteilt werden: einer in jeder Kartenhälfte und einer in der Mitte",
              "Erobern, indem man einen Panzer in der Zone eines Punktes parkt, bis sich ein Fortschrittsbalken füllt — die Gegenseite kann ihn streitig machen und zurücksetzen",
              "Eroberte Punkte errichten einen Ressourcenextraktor, der Energie für seinen Besitzer erzeugt",
              "Jeder Punkt trägt ein hohes Leuchtfeuer in der Farbe seines Besitzers, sodass von überall auf der Karte zu erkennen ist, wer was hält",
            ],
          },
          {
            title: "Basisbau & Einheitenproduktion",
            items: [
              "Jede Seite hat eine Kommandobasis mit eigenem Geschützturm — verlierst du deine, endet die Mission",
              "Späh-, Sturm- und schwere Panzer von Anfang an; Fabrik, Mörserwerk, Werkstatt und Drohnenhangar schalten im Lauf der Kampagne weitere frei",
              "Unterstützungseinheiten wie der mobile Geschützturm, Mörser, Raketenwerfer, Reparaturfahrzeug, Aegis-Schildpanzer, Railgun-Panzer, Drohnenträger und Belagerungsläufer",
              "Jedes Gebäude hat seine eigene Produktionslinie, sodass mehrere Einheiten gleichzeitig gebaut werden können",
              "Baumenü als Abhängigkeitsbaum, der zeigt, was jedes Gebäude freischaltet",
            ],
          },
          {
            title: "Kommando-UI & HUD",
            items: [
              "Baumenü (Tab/Q) mit Energiekosten und Bauzeit jeder Einheit; zum Einreihen klicken",
              "Einheitenliste (E) mit neun Daueraufträgen auf den Tasten 1–9: Folgt mir, Meine Position verteidigen, Nächsten angreifen, Basis stürmen, eines der drei Ziele einnehmen und halten, Aufbauen/Abbauen sowie Einheit folgen/reparieren",
              "Einheiten stellen sich an einem Ziel in der Reihenfolge auf, in der sie geschickt wurden, und treten zur Seite, um freie Schussbahn zu bekommen",
              "Radar-Minikarte auf dem Gelände der jeweiligen Karte, mit einer Zielanzeige, die zeigt, wer welchen Punkt hält",
              "Vollständiges HUD: Gesundheit, Schild, Energiezähler, Bauwarteschlange, Radar und Ziele",
            ],
          },
          {
            title: "KI des feindlichen Kommandanten",
            items: [
              "Läuft in einem wiederkehrenden strategischen Takt — breitet sich auf freie Ressourcenpunkte aus, baut, wenn die Energie reicht, und greift an, sobald die Armee dafür steht",
              "Spielt dieselbe Kampagne wie du: Jede Einheit und jedes Gebäude, das eine Mission für dich freischaltet, kann sie ebenfalls bauen",
              "KI-Panzer halten bei bewegten Zielen vor und feuern erst, wenn ihr Rohr wirklich aufs Ziel gerichtet ist",
              "Leicht / Normal / Schwer bestimmen, wie schnell sie denkt, wann sie angreift, wie viel der Karte sie einnimmt, wie groß ihre Armee ist und wie hart der Leviathan zuschlägt",
            ],
          },
          {
            title: "Sound, Sprachen & Barrierefreiheit",
            items: [
              "Ein eigener Orchester-Soundtrack aus zehn Stücken, eines pro Mission, der einem Kampftrack weicht, wenn die Gefechte nah sind",
              "Eine eigene Klangkulisse für jede Karte",
              "Sechs Sprachen: Englisch, Französisch, Deutsch, Spanisch, Portugiesisch und Italienisch",
              "Fünf Modi für Farbsehschwächen und ein Modus für Gehörlose und Schwerhörige, der Einheiten aufblitzen lässt, wenn sie feuern oder getroffen werden",
              "Frei belegbare Tasten, getrennte Lautstärke für Musik, Effekte und Umgebung, Mausempfindlichkeit und Anzeigeeinstellungen",
            ],
          },
        ],
      },
    },
  },
  guides: {
    title: "Spielguides",
    intro: "Komplettlösungen und Nachschlage-Guides, nach Spiel sortiert.",
    links: {
      "/guides/elden-ring": {
        title: "Alle Enden von Elden Ring",
        blurb: "Ein spoilerfreier Schritt-für-Schritt-Guide zu jedem Ende von Elden Ring.",
      },
      "/guides/elden-ring/full-walkthrough": {
        title: "Komplettlösung",
        blurb: "Eine Route Region für Region durch das ganze Spiel, inklusive Shadow of the Erdtree.",
      },
    },
  },
  eldenRing: {
    englishOnly: "Die Schritte des Guides unten sind derzeit nur auf Englisch verfügbar.",
    stepsHelp: [
      "Die Schritte erscheinen einzeln, sodass du immer nur siehst, was als Nächstes zu tun ist. Hake einen Schritt ab, sobald du ihn erledigt hast, um den nächsten anzuzeigen; entferne den Haken, um zu diesem Punkt zurückzuspringen. Jeder mit ",
      " markierte Schritt verändert deinen Spieldurchlauf dauerhaft – klappe ihn auf und lies den Grund, bevor du dich festlegst. Dein Fortschritt wird in diesem Browser gespeichert.",
    ],
    endings: {
      title: "Alle Enden von Elden Ring",
      intro:
        "Ein spoilerfreier Schritt-für-Schritt-Guide zu jedem Ende von Elden Ring – Eldenfürst, Fürst der Raserei-Flamme, Zeitalter der Sterne, das geheime Ende und Shadow of the Erdtree – in der richtigen Reihenfolge, damit nichts versehentlich verloren geht.",
      pick: "Wähle unten ein Ende.",
    },
    walkthrough: {
      title: "Elden Ring – Komplettlösung",
      intro:
        "Eine Route Zone für Zone durch ganz Elden Ring, von der Kapelle der Erwartung bis zum Eldenthron.",
      listed: "Alle Zonen sind unten aufgeführt.",
      credit: [
        "Basierend auf der ",
        "Elden-Ring-Komplettlösung des Fextralife-Wikis",
        ". Ein inoffizieller Fan-Guide, nicht mit FromSoftware oder Bandai Namco verbunden oder von ihnen unterstützt.",
      ],
    },
    quest: {
      back: "Zurück",
      endingComplete: "Du hast alle Schritte für dieses Ende abgeschlossen.",
      resetEnding: "Fortschritt für dieses Ende zurücksetzen",
      altersWarning: "Achtung: verändert deinen Spieldurchlauf dauerhaft",
      whyChanges: "Warum das deinen Spieldurchlauf verändert",
      completed: "Erledigt",
      markDone: "Als erledigt markieren",
    },
    checklist: {
      allComplete: "Du hast alle Schritte der Komplettlösung abgeschlossen.",
      sectionCompleted: "Abschnitt erledigt",
      markSection: "Diesen Abschnitt als erledigt markieren",
      reset: "Fortschritt der Komplettlösung zurücksetzen",
    },
  },
  cookies: {
    title: "Cookie-Hinweis",
    effective: (date) => `Gültig ab ${date}`,
    intro: [
      "Diese Website hat keine Konten oder Anmeldungen. Damit sie sich zwischen Besuchen merken kann, wie weit du in der Checkliste eines Guides bist und welche Sprache du gewählt hast, kann sie diese Angaben auf deinem Gerät speichern – aber nur, wenn du im Cookie-Banner auf ",
      "Akzeptieren",
      " klickst.",
    ],
    storeTitle: "Was wir speichern",
    storeIntro: "Wenn du akzeptierst, speichert die Website:",
    storeCookie: [
      "Ein Erstanbieter-Cookie, ",
      ", das festhält, dass du zugestimmt hast, damit das Banner nicht erneut erscheint. Es läuft nach einem Jahr ab.",
    ],
    storeLocal:
      "Deinen Checklisten-Fortschritt und deine Sprachwahl, im lokalen Speicher deines Browsers unter diesen Schlüsseln. Der lokale Speicher bleibt auf deinem Gerät und wird nie an unseren Server gesendet:",
    storeNoPersonal: "Nichts davon enthält personenbezogene Daten.",
    dontTitle: "Was wir nicht tun",
    dont: "Die Website verwendet keine Analyse-, Werbe- oder Tracking-Cookies und gibt keine dieser Daten an Dritte weiter.",
    declineTitle: "Wenn du ablehnst",
    decline:
      "Es wird nichts gespeichert. Die Checklisten und die Sprachauswahl funktionieren weiterhin, aber Fortschritt und Sprachwahl gehen verloren, wenn du die Seite schließt, und das Banner erscheint beim nächsten Besuch erneut.",
    removeTitle: "Gespeicherte Daten entfernen",
    remove:
      "Du kannst das Cookie und die Website-Daten von hawkspeed.com jederzeit in den Einstellungen deines Browsers löschen. Dadurch werden dein Checklisten-Fortschritt und deine Sprachwahl zurückgesetzt, und das Banner erscheint erneut.",
  },
  privacy: {
    title: "Datenschutzerklärung",
    pageTitle: "Datenschutzerklärung — Endings Guide for Elden Ring",
    effective: (date) => `Gültig ab ${date}`,
    intro: [
      "Diese Datenschutzerklärung erläutert, wie HawkSpeed („wir“, „uns“) mit Informationen im Zusammenhang mit der Android-App ",
      " (die „App“) umgeht.",
    ],
    sections: [
      {
        title: "Keine Datenerhebung",
        body: "Die App erhebt, speichert oder überträgt keine personenbezogenen Daten. Sie nutzt keine Analyse-, Absturzbericht- oder Werbedienste und enthält keine Tracking-SDKs von Drittanbietern. Für die App ist kein Konto erforderlich, und sie bietet keine In-App-Käufe.",
      },
      {
        title: "Berechtigungen",
        body: "Die App fordert keine Geräteberechtigungen an, die über das für den Grundbetrieb unter Android Erforderliche hinausgehen.",
      },
      {
        title: "Datenschutz für Kinder",
        body: "Die App richtet sich nicht an Kinder unter 13 Jahren und erhebt wissentlich keine Informationen von Kindern.",
      },
      {
        title: "Links zu Dritten",
        body: "Guide-Inhalte in der App können auf offizielle oder externe Quellen (etwa Spiele-Wikis) verlinken. Wir sind nicht für die Datenschutzpraktiken externer Websites verantwortlich, die du über diese Links besuchst.",
      },
      {
        title: "Änderungen dieser Erklärung",
        body: "Falls sich unser Umgang mit Daten in einem künftigen Update ändert, wird diese Seite entsprechend aktualisiert und oben mit einem neuen Gültigkeitsdatum versehen.",
      },
    ],
    contactTitle: "Kontakt",
    contact: ["Fragen zu dieser Erklärung kannst du an ", " senden."],
  },
};

export default de;
