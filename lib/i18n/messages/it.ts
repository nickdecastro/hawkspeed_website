import type { Messages } from "./en";

const it: Messages = {
  siteTitle: (page) => `${page} — HawkSpeed`,
  nav: {
    games: "Giochi",
    guides: "Guide ai giochi",
  },
  language: {
    label: "Lingua",
  },
  footer: {
    cookies: "Informativa sui cookie",
    privacy: "Informativa sulla privacy (Endings Guide for Elden Ring)",
  },
  cookieBanner: {
    region: "Informativa sui cookie",
    text: "Questo sito usa i cookie per salvare i progressi delle checklist e la tua lingua tra una visita e l'altra, senza bisogno di accedere.",
    learnMore: "Scopri di più",
    decline: "Rifiuta",
    accept: "Accetta",
  },
  common: {
    comingSoon: "Prossimamente",
  },
  home: {
    intro:
      "HawkSpeed crea giochi e guide ai giochi. Scopri cosa abbiamo realizzato o tuffati subito in una guida.",
    browseGames: "Sfoglia i giochi",
    browseGuides: "Sfoglia le guide",
  },
  games: {
    title: "Giochi",
    intro: "Giochi creati da HawkSpeed.",
    features: "Caratteristiche",
    download: (title) => `Scarica ${title} su itch.io`,
    entries: {
      ivatg: {
        blurb:
          "Un gioco di combattimento tra carri armati in prima persona con costruzione della base e strategia, ispirato a Battlezone II.",
        body: [
          "Comandi un solo carro armato in ogni momento: niente fanteria, niente uscita dal mezzo, niente multigiocatore. Una strategia leggera si innesta direttamente sul combattimento tra carri in prima persona: conquista i tre punti risorse della mappa, espandi la tua base e produci carri, unità di supporto ed edifici per logorare un comandante nemico controllato dall'IA, che ha accesso a tutto ciò che hai tu.",
          "Il gioco è una campagna di dieci missioni, ognuna sulla propria mappa. Ogni missione sblocca qualcosa di nuovo per entrambe le fazioni — una fabbrica e torrette mobili, mortai, mezzi di riparazione, carri con scudo, cannoni a rotaia, portadroni, camminatori d'assedio — e l'ultima ti mette contro il Leviatano, un camminatore di 25 metri da abbattere. Le missioni durano in media circa dieci minuti: circa sei la prima, quindici o più il finale. Una vittoria sblocca la missione successiva; una sconfitta fa rigiocare quella in corso.",
          "IVATG è in sviluppo attivo ed è disponibile per il download su itch.io. L'intera campagna è giocabile dall'inizio alla fine, con una colonna sonora orchestrale originale, sei lingue e opzioni di accessibilità per il daltonismo e per i giocatori sordi o ipoudenti.",
        ],
        features: [
          {
            title: "Combattimento tra carri in prima persona",
            items: [
              "Movimento diretto con WASD (avanti/indietro/laterale), rotazione dello scafo con il mouse ed elevazione indipendente della torretta",
              "Scatto (Maiusc) per un massimo di cinque secondi di velocità extra, che si ricarica mentre guidi",
              "Cannone principale e lanciamissili secondario, ognuno con danno, gittata e tempo di ricarica propri",
              "Uno scudo assorbe i danni prima dei PS dello scafo e si ricarica dopo qualche secondo senza essere colpiti",
              "Telecamera in prima persona montata sulla torretta, telecamera d'inseguimento in terza persona con V, inclinazione della telecamera negli spostamenti laterali e un mirino dinamico che segue il punto di mira della canna",
              "Il giocatore rinasce tre secondi dopo la morte: solo la perdita della tua base di comando pone fine alla missione",
            ],
          },
          {
            title: "Campagna e mappe",
            items: [
              "Dieci missioni su dieci mappe: altopiani desertici, una foresta di colonne di basalto, una fonderia notturna, creste glaciali, un alveare alieno, un labirinto di braci, una cittadella di ossidiana e altro ancora",
              "Ogni mappa è speculare rispetto al centro, così entrambi i comandanti combattono sullo stesso terreno",
              "Ogni missione aggiunge una nuova unità o meccanica, e anche il comandante nemico la ottiene",
              "Il Leviatano dell'ultima missione difende la sua base per dieci minuti, poi marcia sulla tua; abbatterlo è la vittoria, e i suoi punti deboli subiscono danni doppi",
              "Un briefing prima di ogni missione e una schermata finale che mostra cosa ha sbloccato la vittoria",
              "Salvataggio rapido (F5) e caricamento rapido (F7) a metà missione",
            ],
          },
          {
            title: "Mappa ed economia",
            items: [
              "Tre punti risorse, riposizionati a ogni partita: uno in ciascuna metà della mappa e uno al centro",
              "Si conquistano parcheggiando un carro nella zona di un punto finché non si riempie una barra di avanzamento; la fazione avversaria può contestarla e azzerarla",
              "I punti conquistati costruiscono un estrattore che genera Energia per il proprietario",
              "Ogni punto ha un alto faro del colore del proprietario, così si vede chi controlla cosa da qualsiasi punto della mappa",
            ],
          },
          {
            title: "Costruzione della base e produzione di unità",
            items: [
              "Ogni fazione ha una base di comando protetta dalla propria torretta: perdere la tua pone fine alla missione",
              "Carri da ricognizione, d'assalto e pesanti fin dall'inizio; fabbrica, fabbrica di mortai, officina e hangar droni ne sbloccano altri nel corso della campagna",
              "Unità di supporto come la torretta mobile, il mortaio, la batteria lanciarazzi, il mezzo di riparazione, il carro scudo Aegis, il carro con cannone a rotaia, il portadroni e il camminatore d'assedio",
              "Ogni edificio ha la propria linea di produzione, così più unità possono essere costruite contemporaneamente",
              "Menu di costruzione organizzato come un albero delle dipendenze, che mostra cosa sblocca ogni edificio",
            ],
          },
          {
            title: "Interfaccia di comando e HUD",
            items: [
              "Menu di costruzione (Tab/Q) con costo in Energia e tempo di costruzione di ogni unità; clicca per metterla in coda",
              "Elenco delle unità (E) con nove ordini permanenti sui tasti 1–9: Seguimi, Difendi la mia posizione, Attacca il più vicino, Assalta la base, conquista e tieni uno dei tre obiettivi, Schiera/Ritira e Segui/Ripara un'unità",
              "Le unità si dispongono su un obiettivo nell'ordine in cui sono state inviate e si spostano di lato per avere una linea di tiro libera",
              "Minimappa radar disegnata sul terreno della mappa stessa, con un riepilogo degli obiettivi che mostra chi controlla ogni punto",
              "HUD completo: salute, scudo, contatore di Energia, coda di costruzione, radar e obiettivi",
            ],
          },
          {
            title: "IA del comandante nemico",
            items: [
              "Funziona con un ciclo strategico ripetuto: si espande verso i punti risorse liberi, costruisce quando l'Energia lo consente e attacca non appena ha l'esercito per farlo",
              "Gioca la tua stessa campagna: ogni unità o edificio che una missione sblocca per te, può costruirlo anche lei",
              "I carri dell'IA anticipano i bersagli in movimento e non sparano finché la canna non è davvero puntata sul bersaglio",
              "Facile / Normale / Difficile regolano quanto velocemente ragiona, quando attacca, quanta mappa conquista, quanto è grande il suo esercito e quanto colpisce forte il Leviatano",
            ],
          },
          {
            title: "Audio, lingue e accessibilità",
            items: [
              "Una colonna sonora orchestrale originale di dieci brani, uno per missione, che lascia spazio a una traccia di combattimento quando lo scontro è vicino",
              "Un'ambientazione sonora propria per ogni mappa",
              "Sei lingue: inglese, francese, tedesco, spagnolo, portoghese e italiano",
              "Cinque modalità per il daltonismo e una modalità per sordi e ipoudenti che fa lampeggiare le unità quando sparano o vengono colpite",
              "Tasti riassegnabili, volumi separati per musica, effetti e ambiente, sensibilità del mouse e impostazioni dello schermo",
            ],
          },
        ],
      },
    },
  },
  guides: {
    title: "Guide ai giochi",
    intro: "Soluzioni complete e guide di riferimento, ordinate per gioco.",
    links: {
      "/guides/elden-ring": {
        title: "Tutti i finali di Elden Ring",
        blurb: "Una guida passo passo e senza spoiler a tutti i finali di Elden Ring.",
      },
      "/guides/elden-ring/full-walkthrough": {
        title: "Soluzione completa",
        blurb: "Un percorso regione per regione attraverso tutto il gioco, Shadow of the Erdtree compreso.",
      },
    },
  },
  eldenRing: {
    englishOnly: "Per ora i passaggi della guida sono disponibili solo in inglese.",
    stepsHelp: [
      "I passaggi compaiono uno alla volta, così vedi sempre e solo cosa fare dopo. Spunta un passaggio una volta completato per mostrare il successivo; togli la spunta per tornare a quel punto. Ogni passaggio contrassegnato da ",
      " modifica in modo permanente la tua partita: aprilo e leggi il perché prima di procedere. I tuoi progressi vengono salvati in questo browser.",
    ],
    endings: {
      title: "Tutti i finali di Elden Ring",
      intro:
        "Una guida passo passo e senza spoiler a tutti i finali di Elden Ring (Lord ancestrale, Lord della Fiamma della frenesia, Era delle stelle, il finale segreto e Shadow of the Erdtree) nell'ordine giusto, così da non precludersi nulla per errore.",
      pick: "Scegli un finale qui sotto.",
    },
    walkthrough: {
      title: "Soluzione completa di Elden Ring",
      intro:
        "Un percorso zona per zona attraverso tutto Elden Ring, dalla Cappella dell'Attesa fino al Trono ancestrale.",
      listed: "Tutte le zone sono elencate qui sotto.",
      credit: [
        "Adattato dalla ",
        "soluzione di Elden Ring del wiki Fextralife",
        ". Una guida non ufficiale realizzata dai fan, non affiliata né approvata da FromSoftware o Bandai Namco.",
      ],
    },
    quest: {
      back: "Indietro",
      endingComplete: "Hai completato tutti i passaggi per questo finale.",
      resetEnding: "Azzera i progressi per questo finale",
      altersWarning: "Attenzione: modifica in modo permanente la tua partita",
      whyChanges: "Perché questo modifica la tua partita",
      completed: "Completato",
      markDone: "Segna come fatto",
    },
    checklist: {
      allComplete: "Hai completato tutti i passaggi della soluzione.",
      sectionCompleted: "Sezione completata",
      markSection: "Segna questa sezione come fatta",
      reset: "Azzera i progressi della soluzione",
    },
  },
  cookies: {
    title: "Informativa sui cookie",
    effective: (date) => `In vigore dal ${date}`,
    intro: [
      "Questo sito non ha account né accessi. Per ricordare tra una visita e l'altra a che punto sei nella checklist di una guida e quale lingua hai scelto, può salvarli sul tuo dispositivo, ma solo se fai clic su ",
      "Accetta",
      " nel banner dei cookie.",
    ],
    storeTitle: "Cosa salviamo",
    storeIntro: "Se accetti, il sito salva:",
    storeCookie: [
      "Un cookie di prima parte, ",
      ", che registra che hai accettato così che il banner non venga più mostrato. Scade dopo un anno.",
    ],
    storeLocal:
      "I progressi delle checklist e la lingua scelta, conservati nell'archivio locale del browser con queste chiavi. L'archivio locale resta sul tuo dispositivo e non viene mai inviato al nostro server:",
    storeNoPersonal: "Nulla di tutto ciò comprende informazioni personali.",
    dontTitle: "Cosa non facciamo",
    dont: "Il sito non usa cookie di analisi, pubblicità o tracciamento e non condivide nessuno di questi dati con nessuno.",
    declineTitle: "Se rifiuti",
    decline:
      "Non viene salvato nulla. Le checklist e la scelta della lingua funzionano comunque, ma i progressi e la lingua vanno persi alla chiusura della pagina e il banner ricomparirà alla prossima visita.",
    removeTitle: "Rimuovere i dati salvati",
    remove:
      "Puoi cancellare in qualsiasi momento il cookie e i dati del sito hawkspeed.com dalle impostazioni del browser. In questo modo si azzerano i progressi e la lingua scelta, e il banner ricomparirà.",
  },
  privacy: {
    title: "Informativa sulla privacy",
    pageTitle: "Informativa sulla privacy — Endings Guide for Elden Ring",
    effective: (date) => `In vigore dal ${date}`,
    intro: [
      "La presente Informativa sulla privacy spiega come HawkSpeed («noi») tratta le informazioni relative all'app Android ",
      " (l'«App»).",
    ],
    sections: [
      {
        title: "Nessuna raccolta di dati",
        body: "L'App non raccoglie, conserva né trasmette alcun dato personale. Non utilizza servizi di analisi, segnalazione degli arresti anomali o pubblicità, e non include SDK di tracciamento di terze parti. L'App non richiede la creazione di un account e non prevede acquisti in-app.",
      },
      {
        title: "Autorizzazioni",
        body: "L'App non richiede autorizzazioni del dispositivo oltre a quelle necessarie per il funzionamento di base su Android.",
      },
      {
        title: "Privacy dei minori",
        body: "L'App non è rivolta ai minori di 13 anni e non raccoglie consapevolmente informazioni da minori.",
      },
      {
        title: "Link di terze parti",
        body: "I contenuti delle guide all'interno dell'App possono rimandare a fonti ufficiali o di terze parti (come i wiki dei giochi). Non siamo responsabili delle pratiche sulla privacy dei siti esterni che visiti tramite questi link.",
      },
      {
        title: "Modifiche alla presente informativa",
        body: "Se le nostre pratiche sui dati cambieranno in un futuro aggiornamento, questa pagina verrà aggiornata di conseguenza, con una nuova data di entrata in vigore indicata sopra.",
      },
    ],
    contactTitle: "Contatti",
    contact: ["Le domande su questa informativa possono essere inviate a ", "."],
  },
};

export default it;
