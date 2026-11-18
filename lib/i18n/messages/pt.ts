import type { Messages } from "./en";

const pt: Messages = {
  siteTitle: (page) => `${page} — HawkSpeed`,
  nav: {
    games: "Jogos",
    guides: "Guias de jogos",
  },
  language: {
    label: "Idioma",
  },
  footer: {
    cookies: "Aviso de cookies",
    privacy: "Política de privacidade (Endings Guide for Elden Ring)",
  },
  cookieBanner: {
    region: "Aviso de cookies",
    text: "Este site usa cookies para guardar o seu progresso nas listas de verificação e o seu idioma entre visitas, sem necessidade de login.",
    learnMore: "Saiba mais",
    decline: "Recusar",
    accept: "Aceitar",
  },
  common: {
    comingSoon: "Em breve",
  },
  home: {
    intro:
      "A HawkSpeed cria jogos e guias de jogos. Veja o que já fizemos ou vá direto para um guia.",
    browseGames: "Ver jogos",
    browseGuides: "Ver guias de jogos",
  },
  games: {
    title: "Jogos",
    intro: "Jogos feitos pela HawkSpeed.",
    features: "Funcionalidades",
    download: (title) => `Baixar ${title} no itch.io`,
    entries: {
      ivatg: {
        blurb:
          "Um jogo de combate de tanques em primeira pessoa com construção de base e estratégia, inspirado em Battlezone II.",
        body: [
          "Você comanda um único tanque o tempo todo — sem infantaria, sem sair do veículo, sem multijogador. Uma estratégia leve fica diretamente sobre o combate de tanques em primeira pessoa: capture os três pontos de recursos do mapa, expanda sua base e produza tanques, unidades de apoio e construções para desgastar um comandante inimigo controlado pela IA, que tem acesso a tudo o que você tem.",
          "O jogo é uma campanha de dez missões, cada uma em seu próprio mapa. Cada missão desbloqueia algo novo para os dois lados — uma fábrica e torres móveis, morteiros, veículos de reparo, tanques com escudo, canhões elétricos, porta-drones, caminhantes de cerco — e a última coloca você contra o Leviatã, um caminhante de 25 metros que você precisa derrubar. As missões duram cerca de dez minutos em média: uns seis a primeira, quinze ou mais a final. Uma vitória desbloqueia a próxima missão; uma derrota repete a atual.",
          "IVATG está em desenvolvimento ativo e disponível para download no itch.io. A campanha inteira pode ser jogada do início ao fim, com uma trilha sonora orquestral original, seis idiomas e opções de acessibilidade para daltonismo e para jogadores surdos ou com deficiência auditiva.",
        ],
        features: [
          {
            title: "Combate de tanques em primeira pessoa",
            items: [
              "Movimento direto com WASD (frente/ré/lateral), rotação do casco pelo mouse e elevação independente da torre",
              "Impulso (Shift) de até cinco segundos de velocidade extra, que se recarrega enquanto você dirige",
              "Canhão principal e lançador de mísseis secundário, cada um com dano, alcance e tempo de recarga próprios",
              "Um escudo absorve o dano antes dos PV do casco e se recarrega após alguns segundos sem ser atingido",
              "Câmera em primeira pessoa montada na torre, câmera de perseguição em terceira pessoa no V, inclinação da câmera ao se mover lateralmente e uma mira dinâmica que acompanha o ponto de mira do canhão",
              "O jogador reaparece três segundos após morrer — só perder sua base de comando encerra a missão",
            ],
          },
          {
            title: "Campanha e mapas",
            items: [
              "Dez missões em dez mapas: mesas desérticas, uma floresta de colunas de basalto, uma fundição noturna, cristas glaciais, uma colmeia alienígena, um labirinto em brasa, uma cidadela de obsidiana e mais",
              "Cada mapa é espelhado ao meio, para que os dois comandantes lutem no mesmo terreno",
              "Cada missão adiciona uma nova unidade ou mecânica — e o comandante inimigo também a recebe",
              "O Leviatã da última missão guarda sua base por dez minutos e depois marcha sobre a sua; destruí-lo é a vitória, e seus pontos fracos sofrem dano dobrado",
              "Um briefing antes de cada missão e uma tela final mostrando o que a vitória desbloqueou",
              "Salvamento rápido (F5) e carregamento rápido (F7) no meio da missão",
            ],
          },
          {
            title: "Mapa e economia",
            items: [
              "Três pontos de recursos, reposicionados a cada partida: um em cada metade do mapa e um no centro",
              "Capture estacionando um tanque na zona de um ponto até uma barra de progresso encher — o lado oposto pode disputá-la e reiniciá-la",
              "Pontos capturados constroem um extrator que gera Energia para seu dono",
              "Cada ponto tem um farol alto na cor de seu dono, então dá para ver quem controla o quê de qualquer lugar do mapa",
            ],
          },
          {
            title: "Construção de base e produção de unidades",
            items: [
              "Cada lado tem uma base de comando protegida por sua própria torre — perder a sua encerra a missão",
              "Tanques de reconhecimento, assalto e pesados desde o início; a fábrica, a fábrica de morteiros, a oficina e o hangar de drones desbloqueiam mais ao longo da campanha",
              "Unidades de apoio como a torre móvel, o morteiro, a bateria de foguetes, o veículo de reparo, o tanque de escudo Aegis, o tanque com canhão elétrico, o porta-drones e o caminhante de cerco",
              "Cada construção tem sua própria linha de produção, então várias unidades podem ser construídas ao mesmo tempo",
              "Menu de construção organizado como uma árvore de dependências, mostrando o que cada construção desbloqueia",
            ],
          },
          {
            title: "Interface de comando e HUD",
            items: [
              "Menu de construção (Tab/Q) com o custo em Energia e o tempo de construção de cada unidade; clique para colocar na fila",
              "Lista de unidades (E) com nove ordens permanentes nas teclas 1–9: Siga-me, Defender minha posição, Atacar o mais próximo, Assaltar a base, tomar e manter qualquer um dos três objetivos, Implantar/Recolher e Seguir/Reparar uma unidade",
              "As unidades se posicionam em um objetivo na ordem em que foram enviadas e se afastam para ter linha de tiro livre",
              "Minimapa de radar desenhado sobre o próprio terreno do mapa, com um painel de objetivos mostrando quem controla cada ponto",
              "HUD completo: vida, escudo, contador de Energia, fila de construção, radar e objetivos",
            ],
          },
          {
            title: "IA do comandante inimigo",
            items: [
              "Funciona em um ciclo estratégico repetido — expande para pontos de recursos livres, constrói quando a Energia permite e ataca assim que tem exército para isso",
              "Joga a mesma campanha que você: toda unidade ou construção que uma missão desbloqueia para você, ela também pode construir",
              "Os tanques da IA antecipam alvos em movimento e só disparam quando o canhão está realmente apontado para o alvo",
              "Fácil / Normal / Difícil ajustam a rapidez com que pensa, quando ataca, quanto do mapa toma, o tamanho do exército e a força do Leviatã",
            ],
          },
          {
            title: "Som, idiomas e acessibilidade",
            items: [
              "Uma trilha sonora orquestral original de dez peças, uma por missão, que dá lugar a uma faixa de combate quando a luta está perto",
              "Uma ambientação sonora própria para cada mapa",
              "Seis idiomas: inglês, francês, alemão, espanhol, português e italiano",
              "Cinco modos para daltonismo e um modo para surdos e pessoas com deficiência auditiva que faz as unidades piscarem quando disparam ou são atingidas",
              "Teclas remapeáveis, volume separado para música, efeitos e ambiente, sensibilidade do mouse e configurações de tela",
            ],
          },
        ],
      },
    },
  },
  guides: {
    title: "Guias de jogos",
    intro: "Detonados e guias de referência, organizados por jogo.",
    links: {
      "/guides/elden-ring": {
        title: "Todos os finais de Elden Ring",
        blurb: "Um guia passo a passo e sem spoilers de todos os finais de Elden Ring.",
      },
      "/guides/elden-ring/full-walkthrough": {
        title: "Detonado completo",
        blurb: "Uma rota região por região pelo jogo inteiro, incluindo Shadow of the Erdtree.",
      },
    },
  },
  eldenRing: {
    englishOnly: "Por enquanto, os passos do guia estão disponíveis apenas em inglês.",
    stepsHelp: [
      "Os passos aparecem um de cada vez, para que você veja apenas o que fazer a seguir. Marque um passo quando o concluir para ver o próximo; desmarque-o para voltar a esse ponto. Qualquer passo marcado com ",
      " altera a sua partida de forma permanente: expanda-o para ler o motivo antes de decidir. O seu progresso fica salvo neste navegador.",
    ],
    endings: {
      title: "Todos os finais de Elden Ring",
      intro:
        "Um guia passo a passo e sem spoilers de todos os finais de Elden Ring (Lorde Prístino, Lorde da Chama Frenética, Era das Estrelas, o final secreto e Shadow of the Erdtree), na ordem certa, para que nada fique bloqueado por acidente.",
      pick: "Escolha um final abaixo.",
    },
    walkthrough: {
      title: "Detonado completo de Elden Ring",
      intro:
        "Uma rota zona por zona por todo o Elden Ring, da Capela da Expectativa até o Trono Prístino.",
      listed: "Todas as zonas estão listadas abaixo.",
      credit: [
        "Adaptado do ",
        "detonado de Elden Ring do wiki Fextralife",
        ". Um guia não oficial feito por fãs, sem ligação com a FromSoftware ou a Bandai Namco e sem o seu aval.",
      ],
    },
    quest: {
      back: "Voltar",
      endingComplete: "Você concluiu todos os passos deste final.",
      resetEnding: "Reiniciar o progresso deste final",
      altersWarning: "Atenção: altera a sua partida de forma permanente",
      whyChanges: "Por que isto altera a sua partida",
      completed: "Concluído",
      markDone: "Marcar como feito",
    },
    checklist: {
      allComplete: "Você concluiu todos os passos do detonado.",
      sectionCompleted: "Seção concluída",
      markSection: "Marcar esta seção como feita",
      reset: "Reiniciar o progresso do detonado",
    },
  },
  cookies: {
    title: "Aviso de cookies",
    effective: (date) => `Em vigor desde ${date}`,
    intro: [
      "Este site não tem contas nem logins. Para lembrar entre visitas até onde você chegou na lista de verificação de um guia e qual idioma escolheu, ele pode guardar essas informações no seu dispositivo, mas apenas se você clicar em ",
      "Aceitar",
      " no aviso de cookies.",
    ],
    storeTitle: "O que guardamos",
    storeIntro: "Se você aceitar, o site guarda:",
    storeCookie: [
      "Um cookie próprio, ",
      ", que registra que você aceitou para que o aviso não volte a aparecer. Ele expira após um ano.",
    ],
    storeLocal:
      "O seu progresso nas listas de verificação e a sua escolha de idioma, guardados no armazenamento local do seu navegador com estas chaves. O armazenamento local fica no seu dispositivo e nunca é enviado ao nosso servidor:",
    storeNoPersonal: "Nada disso inclui informações pessoais.",
    dontTitle: "O que não fazemos",
    dont: "O site não usa cookies de análise, publicidade ou rastreamento, e não compartilha nenhum desses dados com ninguém.",
    declineTitle: "Se você recusar",
    decline:
      "Nada é guardado. As listas de verificação e o seletor de idioma continuam funcionando, mas o seu progresso e o seu idioma são perdidos ao fechar a página, e o aviso aparecerá novamente na sua próxima visita.",
    removeTitle: "Remover os dados guardados",
    remove:
      "Você pode apagar o cookie e os dados do site hawkspeed.com a qualquer momento nas configurações do seu navegador. Isso reinicia o seu progresso e a sua escolha de idioma, e o aviso aparecerá novamente.",
  },
  privacy: {
    title: "Política de privacidade",
    pageTitle: "Política de privacidade — Endings Guide for Elden Ring",
    effective: (date) => `Em vigor desde ${date}`,
    intro: [
      "Esta Política de privacidade explica como a HawkSpeed (“nós”) trata as informações relacionadas com o aplicativo para Android ",
      " (o “Aplicativo”).",
    ],
    sections: [
      {
        title: "Nenhuma coleta de dados",
        body: "O Aplicativo não coleta, armazena nem transmite dados pessoais. Ele não usa serviços de análise, relatórios de falhas ou publicidade, e não inclui SDKs de rastreamento de terceiros. O Aplicativo não exige a criação de uma conta e não tem compras no aplicativo.",
      },
      {
        title: "Permissões",
        body: "O Aplicativo não solicita nenhuma permissão do dispositivo além do necessário para o funcionamento básico no Android.",
      },
      {
        title: "Privacidade das crianças",
        body: "O Aplicativo não se destina a crianças com menos de 13 anos e não coleta conscientemente informações de crianças.",
      },
      {
        title: "Links de terceiros",
        body: "O conteúdo dos guias no Aplicativo pode conter links para fontes oficiais ou de terceiros (como wikis de jogos). Não somos responsáveis pelas práticas de privacidade dos sites externos que você visitar através desses links.",
      },
      {
        title: "Alterações a esta política",
        body: "Se as nossas práticas de dados mudarem numa atualização futura, esta página será atualizada para refletir essas mudanças, com uma nova data de vigência acima.",
      },
    ],
    contactTitle: "Contato",
    contact: ["Dúvidas sobre esta política podem ser enviadas para ", "."],
  },
};

export default pt;
