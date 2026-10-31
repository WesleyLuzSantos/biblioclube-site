// Texto original de apoio para cada livro do acervo (guia de leitura).
// Fica no HTML da página (SSR) para ser lido por quem acessa e pelos buscadores.
// Campos: sobre, personagens [[nome, descrição]], contexto, autor, curiosidade.

export const CONTEUDO = {
  "dom-casmurro": {
    sobre: "Dom Casmurro, publicado por Machado de Assis em 1899, é narrado por Bento Santiago, o Bentinho, já mais velho e isolado numa casa que reproduz a da infância. Ele conta a própria vida para tentar «atar as duas pontas»: a juventude no Rio de Janeiro do Segundo Reinado, o amor por Capitu, vizinha e amiga de infância, o seminário que deixou por pressão dela, o casamento e a convivência com o amigo Escobar. O centro do livro é a suspeita de que Capitu o traiu com Escobar, e Bentinho nunca apresenta uma prova. É justamente essa dúvida que mantém o romance vivo há mais de cem anos.",
    personagens: [
      ["Bentinho (Bento Santiago)", "Narrador e protagonista, inseguro e ciumento, filho de uma viúva que prometeu vê-lo padre."],
      ["Capitu", "Capitolina, vizinha de Bentinho, decidida e observadora, famosa pelos «olhos de ressaca»."],
      ["Escobar", "Colega de seminário e depois amigo íntimo e vizinho do casal."],
      ["Dona Glória e José Dias", "A mãe de Bentinho e o agregado da família, que alimenta as desconfianças do rapaz."]
    ],
    contexto: "A história se passa no Rio de Janeiro do século XIX, numa sociedade em que casamento, favor e aparência social pesavam muito. Machado de Assis escreve já na fase madura, depois da abolição e da proclamação da República, com ironia e foco na psicologia das personagens, algo que o tornou o maior nome do Realismo brasileiro.",
    autor: "Joaquim Maria Machado de Assis (1839-1908) nasceu no Rio de Janeiro, de origem humilde, e foi tipógrafo, jornalista, contista, poeta e romancista. Fundou a Academia Brasileira de Letras e foi seu primeiro presidente.",
    curiosidade: "A pergunta «Capitu traiu ou não traiu?» virou um dos maiores debates da literatura em português. Um ponto a considerar na leitura: toda a história é contada apenas pelo ponto de vista de Bentinho, o que torna a narrativa questionável."
  },
  "memorias-postumas-de-bras-cubas": {
    sobre: "Memórias Póstumas de Brás Cubas, de 1881, é considerado o marco inicial do Realismo no Brasil. O livro tem um narrador inusitado: Brás Cubas, já morto, decide escrever a própria biografia «da eternidade», sem nenhuma pressa de agradar. Ele relembra a infância privilegiada, os amores (Marcela, Virgília, Eugênia), a carreira política frustrada e a ideia fixa de criar um emplasto que curaria a melancolia humana. O tom é bem-humorado, cínico e cheio de digressões dirigidas diretamente ao leitor.",
    personagens: [
      ["Brás Cubas", "O defunto-autor, filho de família rica, vaidoso e sem grandes realizações."],
      ["Virgília", "Grande amor adúltero de Brás Cubas, casada com Lobo Neves."],
      ["Marcela", "A cortesã por quem o jovem Brás gasta dinheiro e promessas."],
      ["Quincas Borba", "Amigo de infância, mendigo e filósofo, criador do Humanitismo."]
    ],
    contexto: "A obra reage ao romantismo idealizado e mostra a elite carioca com ironia: favores, interesses e vaidades movem as pessoas mais do que sentimentos nobres. Foi escrita quando Machado de Assis já tinha prestígio e experimentava uma linguagem mais livre e inovadora.",
    autor: "Machado de Assis (1839-1908) é considerado o maior escritor brasileiro. Além de romances, escreveu centenas de contos e crônicas, e foi o fundador da Academia Brasileira de Letras.",
    curiosidade: "O livro foi publicado primeiro em capítulos, em 1880, na Revista Brasileira. A dedicatória é famosa: «Ao verme que primeiro roeu as frias carnes do meu cadáver dedico como saudosa lembrança estas memórias póstumas»."
  },
  "1984": {
    sobre: "1984, publicado por George Orwell em 1949, se passa em Londres, parte da Oceânia, um Estado totalitário governado pelo Partido e por seu líder, o Grande Irmão. Winston Smith trabalha no Ministério da Verdade reescrevendo registros do passado para que combinem com a versão oficial do presente. Em segredo, começa a duvidar do sistema, escreve um diário proibido e se envolve com Julia. O romance mostra como vigilância constante, controle da linguagem e manipulação da história podem tirar de uma pessoa até a liberdade de pensar.",
    personagens: [
      ["Winston Smith", "Funcionário do Partido que passa a desconfiar do regime."],
      ["Julia", "Colega de Winston, que vive a rebeldia no campo pessoal."],
      ["O'Brien", "Membro do Partido interior, em quem Winston deposita confiança."],
      ["Grande Irmão", "Figura onipresente nos cartazes: «O Grande Irmão está de olho em você»."]
    ],
    contexto: "Orwell escreveu o livro logo após a Segunda Guerra Mundial, com o peso das experiências do nazismo e do stalinismo. Termos criados por ele, como «duplipensar», «novilíngua» e «Grande Irmão», entraram para o vocabulário usado para discutir vigilância e propaganda.",
    autor: "George Orwell é o pseudônimo de Eric Arthur Blair (1903-1950), escritor e jornalista britânico, também autor de A Revolução dos Bichos e de reportagens sobre pobreza e guerra civil.",
    curiosidade: "O título teria vindo da inversão dos dois últimos dígitos do ano em que Orwell terminou a obra, 1948. O livro volta às listas de mais lidos sempre que o debate sobre vigilância e desinformação ganha força."
  },
  "o-conde-de-monte-cristo": {
    sobre: "O Conde de Monte Cristo, de Alexandre Dumas (publicado em capítulos entre 1844 e 1846), acompanha Edmond Dantès, jovem marinheiro de Marselha que está prestes a se casar e se tornar capitão quando é traído por falsos amigos e preso, sem julgamento, no Château d'If. Na prisão, conhece o Abade Faria, que o instrui e revela a existência de um tesouro. Depois de fugir, Dantès assume a identidade do misterioso Conde de Monte Cristo e passa a planejar, com paciência, a vingança contra quem o destruiu. A história fala de justiça, perdão e dos limites da vingança.",
    personagens: [
      ["Edmond Dantès", "O marinheiro injustiçado que se transforma no conde."],
      ["Abade Faria", "Prisioneiro sábio que se torna mestre e amigo de Dantès."],
      ["Mercedes", "A noiva de Edmond, que acaba casada com Fernand."],
      ["Danglars, Fernand e Villefort", "Os três homens cuja ambição e covardia causam a ruína de Dantès."]
    ],
    contexto: "A trama cruza a França após a queda de Napoleão, quando disputas políticas entre bonapartistas e monarquistas podiam destruir uma vida por uma simples denúncia. Dumas aproveita esse clima para criar um suspense de aventura com forte crítica social.",
    autor: "Alexandre Dumas (1802-1870), escritor francês, também autor de Os Três Mosqueteiros. Filho de um general de origem antilhana, foi um dos romancistas mais populares do século XIX.",
    curiosidade: "A inspiração veio de um caso real do século XIX, o de um sapateiro preso injustamente que depois herdou uma fortuna. O livro é uma das obras mais adaptadas ao cinema e à televisão."
  },
  "orgulho-e-preconceito": {
    sobre: "Orgulho e Preconceito, de Jane Austen (1813), conta a história de Elizabeth Bennet, uma das cinco filhas de uma família de classe média rural inglesa. Em uma época em que o casamento era a principal forma de segurança econômica para uma mulher, Elizabeth se recusa a aceitar um pretendente só por conveniência. Ao conhecer o rico e reservado Sr. Darcy, forma uma péssima primeira impressão, que o romance vai desmontando aos poucos. O livro é um clássico do romance de costumes e da ironia social.",
    personagens: [
      ["Elizabeth Bennet", "Inteligente, espirituosa e independente, protagonista da história."],
      ["Sr. Darcy", "Rico proprietário de terras, orgulhoso e reservado."],
      ["Jane Bennet", "Irmã mais velha de Elizabeth, gentil e discreta."],
      ["Sra. Bennet", "A mãe, determinada a casar as filhas a qualquer custo."]
    ],
    contexto: "A Inglaterra rural do início do século XIX tinha regras rígidas de herança e de casamento, o que explica a pressão sobre as irmãs Bennet. Austen usa o humor para criticar a importância do dinheiro e do status.",
    autor: "Jane Austen (1775-1817) foi uma romancista inglesa que publicou, em vida e sem assinar o nome, obras como Razão e Sensibilidade e Emma. Seus livros seguem populares em adaptações para cinema e TV.",
    curiosidade: "O título original do rascunho era First Impressions (Primeiras Impressões), tema que continua no centro da trama. A frase de abertura do livro, sobre um homem rico necessitar de uma esposa, é uma das mais citadas da literatura inglesa."
  },
  "um-estudo-em-vermelho": {
    sobre: "Um Estudo em Vermelho, de Arthur Conan Doyle (1887), é a primeira história com o detetive Sherlock Holmes e seu companheiro, o Dr. John Watson. O médico militar Watson, recém-voltado do Afeganistão, procura um quarto para alugar em Londres e acaba dividindo apartamento com Holmes, um homem de método e curiosidade científica. Os dois são chamados para investigar um assassinato em uma casa vazia, com uma palavra escrita em sangue na parede. A segunda parte do livro volta no tempo e revela as origens do crime.",
    personagens: [
      ["Sherlock Holmes", "Detetive consultor, conhecido pela observação e pela dedução lógica."],
      ["Dr. John Watson", "Médico e narrador, amigo e colega de apartamento de Holmes."],
      ["Inspetor Lestrade e Gregson", "Policiais da Scotland Yard que pedem ajuda a Holmes."]
    ],
    contexto: "A Londres vitoriana vivia o auge da ciência e da curiosidade pelo método de investigação. Conan Doyle, que era médico, inspirou-se num professor de medicina capaz de deduzir detalhes da vida das pessoas apenas observando-as.",
    autor: "Sir Arthur Conan Doyle (1859-1930) foi um escritor e médico escocês, criador de Sherlock Holmes, protagonista de quatro romances e dezenas de contos.",
    curiosidade: "O livro apresenta pela primeira vez a dupla Holmes e Watson e o método de dedução do detetive. O autor vendeu os direitos da obra por uma quantia modesta, e o sucesso só veio com as histórias seguintes."
  },
  "a-arte-da-guerra": {
    sobre: "A Arte da Guerra é um tratado militar atribuído ao general e estrategista chinês Sun Tzu, dividido em treze capítulos curtos. Mais do que um manual de combate, o texto defende que a melhor vitória é a que se obtém sem lutar: conhecer o terreno, o adversário e a si mesmo, usar o planejamento, o engano e a velocidade, e evitar desgastes desnecessários. Por isso o livro é lido hoje também por quem se interessa por liderança, negociação e estratégia de negócios.",
    personagens: [
      ["Sun Tzu", "O estrategista a quem a obra é atribuída; seu nome significa «mestre Sun»."],
      ["O general e o soberano", "Figuras citadas ao longo do texto: o general deve decidir com autonomia no campo, mas respeitar o soberano."]
    ],
    contexto: "O texto é associado ao período das Primaveras e Outonos ou dos Reinos Combatentes, há mais de dois mil anos, quando os reinos chineses viviam em guerra constante. Esse cenário explica a ênfase no cálculo e na economia de recursos.",
    autor: "Pouco se sabe com segurança sobre Sun Tzu. A tradição o descreve como general do reino de Wu, e alguns estudiosos discutem se a obra foi escrita por uma só pessoa ou reunida depois.",
    curiosidade: "Uma das frases mais famosas do livro diz que quem conhece o inimigo e a si mesmo não precisa temer o resultado de cem batalhas. A obra é lida em escolas militares e cursos de administração em vários países."
  },
  "a-revolucao-dos-bichos": {
    sobre: "A Revolução dos Bichos, de George Orwell (1945), é uma fábula política. Os animais de uma fazenda, cansados de serem explorados pelo dono, o Sr. Jones, fazem uma revolta e passam a governar o lugar com ideais de igualdade, resumidos nos Sete Mandamentos. Aos poucos, porém, os porcos, mais astutos, assumem o comando, mudam as regras e passam a viver como os antigos senhores. A frase «todos os animais são iguais, mas alguns são mais iguais que os outros» virou um símbolo da corrupção do poder.",
    personagens: [
      ["Napoleão", "O porco que toma o poder e governa com ajuda de cães."],
      ["Bola-de-Neve", "Porco inteligente e idealista, expulso por Napoleão."],
      ["Major", "O velho porco cujos discursos inspiram a revolução."],
      ["Boxer", "O cavalo trabalhador e leal, símbolo de quem acredita no sistema."]
    ],
    contexto: "Orwell escreveu a obra como crítica ao regime stalinista na União Soviética e à forma como uma revolução pode trair seus próprios ideais. A fábula, porém, vale para qualquer governo ou grupo que se afaste de seus princípios.",
    autor: "George Orwell (1903-1950) foi um escritor e jornalista britânico, autor também de 1984. Ele dizia que queria transformar a escrita política em arte.",
    curiosidade: "O livro foi recusado por alguns editores por tratar de um aliado da Inglaterra na guerra. Hoje é leitura comum em escolas, por ser curto e fácil de entender, mesmo tratando de um tema complexo."
  },
  "os-tres-mosqueteiros": {
    sobre: "Os Três Mosqueteiros, de Alexandre Dumas (1844), acompanha o jovem gascão D'Artagnan, que viaja a Paris para se tornar mosqueteiro do rei Luís XIII. Logo na chegada, envolve-se em desafios de duelo com três mosqueteiros, Athos, Porthos e Aramis, e os quatro se tornam amigos inseparáveis. Juntos enfrentam as intrigas do Cardeal Richelieu e da enigmática Milady de Winter, numa trama que inclui um colar de diamantes, espionagem e perseguições entre a França e a Inglaterra. O lema da amizade é «um por todos e todos por um».",
    personagens: [
      ["D'Artagnan", "Jovem corajoso e impulsivo que busca seu lugar entre os mosqueteiros."],
      ["Athos, Porthos e Aramis", "Os três mosqueteiros: o nobre reservado, o vaidoso e forte e o religioso elegante."],
      ["Cardeal Richelieu", "Poderoso ministro do rei e adversário do grupo."],
      ["Milady de Winter", "Espiã a serviço do cardeal, uma das vilãs mais lembradas da literatura."]
    ],
    contexto: "A história se passa na França do século XVII, em meio a disputas entre a coroa, a nobreza e a Igreja. Dumas mistura personagens e eventos reais com ficção, o que ajudou a popularizar o romance histórico de aventura.",
    autor: "Alexandre Dumas (1802-1870) foi um escritor francês, também autor de O Conde de Monte Cristo. Escrevia muitos folhetins, e seus livros eram publicados em capítulos nos jornais.",
    curiosidade: "A obra foi publicada primeiro em folhetim, o que explica o ritmo de cada capítulo terminar em suspense. Tem continuações como Vinte Anos Depois e O Visconde de Bragelonne."
  },
  "a-guerra-dos-mundos": {
    sobre: "A Guerra dos Mundos, de H. G. Wells (1898), é um dos livros fundadores da ficção científica. Um narrador sem nome conta como cilindros vindos de Marte caem perto de Londres e dão origem a máquinas de guerra de três pernas, que destroem tudo com um raio de calor e uma fumaça negra. A tecnologia humana não consegue detê-las, e a sociedade entra em pânico. O desfecho surpreende ao mostrar que a ameaça acaba por causa de algo muito pequeno, sem que os humanos tenham de vencer pelas armas.",
    personagens: [
      ["O narrador", "Um escritor que acompanha a invasão e tenta sobreviver."],
      ["O artilheiro", "Soldado que sonha em reconstruir a humanidade debaixo da terra."],
      ["Os marcianos", "Seres de inteligência avançada e aparência estranha, que veem a Terra como um destino a conquistar."]
    ],
    contexto: "No fim do século XIX, havia grande interesse em Marte, graças a observações astronômicas que sugeriam canais na superfície. A obra também faz uma crítica ao imperialismo: os ingleses passam a sentir o que era ser invadido por uma potência tecnologicamente superior.",
    autor: "Herbert George Wells (1866-1946) foi um escritor inglês, conhecido como um dos pais da ficção científica, autor também de A Máquina do Tempo, O Homem Invisível e A Ilha do Dr. Moreau.",
    curiosidade: "Em 1938, uma adaptação para rádio dirigida por Orson Welles foi apresentada como se fossem notícias reais e, segundo relatos da época, assustou parte dos ouvintes nos Estados Unidos."
  },
  "a-maquina-do-tempo": {
    sobre: "A Máquina do Tempo, de H. G. Wells (1895), é a história de um inventor, chamado apenas de Viajante do Tempo, que constrói um aparelho capaz de se mover pelo tempo e viaja até o ano 802.701. Lá encontra os Eloi, seres pacíficos e frágeis que vivem na superfície, e descobre que sob a terra moram os Morlocks, criaturas que cuidam de máquinas e se alimentam dos Eloi. A obra usa a aventura para discutir o futuro da sociedade, a desigualdade e o destino da humanidade.",
    personagens: [
      ["O Viajante do Tempo", "Cientista e inventor que testa sua máquina."],
      ["Weena", "Uma Eloi que se aproxima do protagonista."],
      ["Os Eloi e os Morlocks", "Duas espécies descendentes dos humanos, uma que vive acima e outra abaixo do solo."]
    ],
    contexto: "Escrito na Inglaterra industrial, o livro reflete os temores de Wells sobre uma sociedade dividida entre quem tem tudo e quem trabalha nas máquinas. O autor estava também influenciado pelas ideias de evolução de Darwin, muito discutidas na época.",
    autor: "H. G. Wells (1866-1946) estudou ciências e depois se dedicou à escrita. Além de ficção, escreveu sobre história e política.",
    curiosidade: "O termo «máquina do tempo» se popularizou a partir deste livro, e a obra foi adaptada para o cinema várias vezes. Wells foi um dos primeiros autores a tratar o tempo como uma «quarta dimensão» numa história popular."
  },
  "iracema": {
    sobre: "Iracema, de José de Alencar (1865), é um romance do Indianismo brasileiro, subtitulado «lenda do Ceará». Conta o amor entre Iracema, jovem indígena tabajara, guardiã do segredo da jurema, e Martim, guerreiro português que chega às terras do Ceará. Ao se apaixonar, Iracema abandona seu povo e quebra seu voto, e dessa união nasce Moacir, o primeiro cearense, «filho da dor». A narrativa é escrita em prosa poética, cheia de imagens da natureza, e transforma o encontro entre dois povos em mito de origem.",
    personagens: [
      ["Iracema", "A «virgem dos lábios de mel», filha do pajé Araquém."],
      ["Martim", "Soldado português que se une à causa de Iracema e seu povo."],
      ["Poti", "Amigo e aliado indígena de Martim, de povo vizinho."],
      ["Moacir", "O filho do casal, símbolo do nascimento do povo brasileiro."]
    ],
    contexto: "O Romantismo brasileiro buscava criar uma identidade nacional, e o indígena foi escolhido como símbolo. Hoje, a leitura crítica lembra que essa visão é idealizada e escrita por um autor não indígena.",
    autor: "José de Alencar (1829-1877) foi romancista, político e jornalista cearense, autor também de O Guarani, Senhora e Lucíola. É um dos nomes centrais do Romantismo brasileiro.",
    curiosidade: "O nome Iracema é um anagrama de «América». O livro ajudou a consolidar a imagem do Ceará como terra de lendas e é muito cobrado em vestibulares."
  },
  "o-cortico": {
    sobre: "O Cortiço, de Aluísio Azevedo (1890), é o principal romance naturalista brasileiro. A história acompanha João Romão, português ambicioso que enriquece explorando o trabalho de Bertoleza, uma escrava que ele engana, e que constrói um cortiço ao lado da casa de seu vizinho rico, Miranda. O cortiço funciona como um organismo vivo, com lavadeiras, operários e imigrantes que dividem espaço, brigas e festas. O livro mostra como o meio e a pobreza moldam o comportamento das pessoas.",
    personagens: [
      ["João Romão", "Dono do cortiço, dominado pelo desejo de enriquecer."],
      ["Bertoleza", "Escrava que trabalha para Romão e é enganada por ele."],
      ["Miranda", "Comerciante português, vizinho de Romão e símbolo da ascensão social."],
      ["Rita Baiana e Jerônimo", "Casal central da trama, em torno do qual se dá o encontro de culturas."]
    ],
    contexto: "A obra se passa no Rio de Janeiro do final do século XIX, entre o fim da escravidão e o crescimento das cidades. O Naturalismo apresenta as personagens como produtos do ambiente e da herança, com linguagem direta e cenas fortes.",
    autor: "Aluísio Azevedo (1857-1913), nascido no Maranhão, foi romancista, caricaturista e diplomata, e escreveu também O Mulato.",
    curiosidade: "O cortiço é tratado quase como um personagem, que «cresce» e «respira» junto com seus moradores. O romance é um dos mais estudados nas escolas brasileiras."
  },
  "o-coracao-delator": {
    sobre: "O Coração Delator, de Edgar Allan Poe (1843), é um conto curto narrado por alguém que insiste em afirmar que não é louco. Ele conta como passou a odiar o olho de um velho com quem morava, descrito como o «olho de abutre», e como planejou o crime com extremo cuidado. Depois do assassinato, a polícia aparece, e o narrador, confiante, convida os policiais a conversar na sala. É então que um som passa a atormentá-lo, o batimento de um coração que só ele ouve.",
    personagens: [
      ["O narrador", "Sem nome, afirma estar são, mas o relato mostra o contrário."],
      ["O velho", "Seu único «defeito» é o olho pálido que perturba o narrador."]
    ],
    contexto: "O conto pertence à tradição do terror psicológico, em que o medo vem da mente da personagem e não de monstros. É um bom exemplo de narrador não confiável, recurso que Poe ajudou a tornar famoso.",
    autor: "Edgar Allan Poe (1809-1849), escritor americano, é considerado um dos criadores do conto de terror e do romance policial, com obras como O Corvo, Os Crimes da Rua Morgue e O Gato Preto.",
    curiosidade: "A leitura leva poucos minutos, e a tensão cresce a cada parágrafo, o que a torna uma boa porta de entrada para a obra de Poe e para a literatura de terror."
  },
  "o-gato-preto": {
    sobre: "O Gato Preto, de Edgar Allan Poe (1843), é um conto narrado por um homem condenado que quer contar sua história antes de morrer. Ele diz que sempre amou os animais, mas o vício na bebida muda seu temperamento e o leva a maltratar Pluto, o gato da casa. Depois de um ato cruel, a culpa e o medo o perseguem, e outro gato muito parecido aparece. O conto trata de remorso, de impulsos destrutivos e da ideia de que a mente humana pode ser a maior fonte de terror.",
    personagens: [
      ["O narrador", "Um homem de temperamento antes calmo, que se torna violento por causa do álcool."],
      ["Pluto", "O gato preto, antes querido, e depois símbolo de culpa."],
      ["A esposa", "Companheira do narrador, paciente e dedicada aos animais."]
    ],
    contexto: "Poe escreveu sobre a mente perturbada numa época em que a literatura gótica e o interesse por superstições, como a que liga gatos pretos ao azar, eram muito populares.",
    autor: "Edgar Allan Poe (1809-1849) viveu uma vida difícil, marcada por perdas e dificuldades financeiras, e é lembrado como mestre do suspense e do terror psicológico.",
    curiosidade: "O conto foi publicado em um jornal da Filadélfia, o United States Saturday Post, em 1843. Ele costuma ser lido junto com O Coração Delator por tratar do mesmo tema: a culpa que se revela."
  }
};
