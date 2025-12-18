import { Article, Category } from "./types";

export const SITE_NAME = "Tempo de Partir";
export const TAGLINE = "O mundo é mais bonito quando a gente desacelera.";

/**
 * --- GUIA DE PUBLICAÇÃO & IMAGENS (MÉTODO LOCAL) ---
 *
 * 1. ONDE SALVAR AS FOTOS:
 *    - Coloque suas imagens na pasta: public/assets/
 *    - Exemplo: Salve uma foto como 'nordeste-capa.jpg' dentro de 'assets'.
 *
 * 2. COMO REFERENCIAR AQUI NO CÓDIGO:
 *    - Não use o caminho completo do seu PC (C:/...).
 *    - Use o caminho relativo à web, começando com barra.
 *    - Exemplo correto: imageUrl: '/assets/nordeste-capa.jpg'
 *
 * 3. GUIA DE DIMENSÕES:
 *    - HERO (Capa do Artigo): 1920x1280px (Foco no centro).
 *    - GALERIA: Use '/assets/foto1.jpg', '/assets/foto2.jpg'
 *
 * 4. TEXTO:
 *    - Títulos: ## Título
 *    - Galeria: GALLERY: /assets/foto1.jpg, /assets/foto2.jpg | Legenda
 */

export const MOCK_ARTICLES: Article[] = [
  {
    id: "6",
    title: "Verão no nordeste: O guia para fugir das chuvas.",
    excerpt:
      "Esqueça o calendário. Para encontrar dias de céu azul no Nordeste durante a alta temporada, você precisa olhar o mapa. O segredo está na Costa Leste.",
    content: `O verão no Brasil parece simples no calendário: dezembro, janeiro e fevereiro. É a época clássica das férias, da praia lotada e da promessa de calor.

Mas, quando olhamos com atenção para o mapa do clima, percebemos que o verão funciona de forma diferente perto da linha do Equador. No Nordeste, a sazonalidade não segue exatamente o mesmo ritmo do Sul e do Sudeste, onde o verão é sinônimo de pancadas de chuva no fim da tarde.

GALLERY: https://picsum.photos/seed/praia1/800/600, https://picsum.photos/seed/praia2/800/600 | O contraste entre o mar calmo e o céu limpo da costa leste em janeiro.

Lá em cima, a regra é outra: quanto mais ao norte você sobe no mapa, mais cedo chegam as chuvas. E quanto mais ao leste você viaja — do Rio Grande do Norte ao Sergipe — mais estáveis e azuis ficam os dias, mesmo no auge de janeiro.

Isso acontece porque a região é influenciada por sistemas climáticos próprios. O principal protagonista aqui é a ZCIT (Zona de Convergência Intertropical). Imagine uma grande faixa de nuvens que se desloca ao longo do ano, marcando o início do período chuvoso nas áreas mais próximas ao Equador.

Enquanto ela "dança" para cima e para baixo no mapa, ela muda completamente o comportamento do clima. No leste, durante o verão, ela está longe, garantindo tempo firme. Mas, no extremo noroeste da região, em janeiro, já é quase outra estação.

> Entender essa sazonalidade é sobre aproveitar melhor o destino — escolher a época onde o verão realmente acontece naquele momento.

Se o seu objetivo entre dezembro e fevereiro é garantir a máxima incidência solar e aquele mar azul-turquesa de cartão-postal, o seu destino é a Costa Leste. Selecionamos três trechos do litoral onde o sol reina absoluto nesta temporada:

### 1. Alagoas e a Costa dos Corais
O epicentro do "Caribe Brasileiro".

Se tivéssemos que apostar todas as fichas em um único estado para o verão perfeito, seria Alagoas. Nesta época do ano, a água atinge uma transparência surreal, e as chuvas são eventos raros e passageiros. 

Maceió é uma base urbana excelente, com a orla mais bonita do Brasil, mas o tesouro está ao norte. A rota que liga Maragogi a São Miguel dos Milagres oferece a quintessência do verão nordestino: piscinas naturais mornas na maré baixa, coqueirais a perder de vista e uma brisa constante que ameniza o calor.

GALLERY: https://picsum.photos/seed/maceio1/800/1000, https://picsum.photos/seed/maceio2/800/600, https://picsum.photos/seed/maceio3/800/600 | As águas mornas de São Miguel dos Milagres e o artesanato local em palha, tesouros da rota ecológica.

Em janeiro, Milagres e a vizinha Praia do Patacho oferecem um refúgio sofisticado e tranquilo, onde a principal atividade é esperar a maré baixar para caminhar quilômetros mar adentro com água na canela, sob um sol inclemente.

### 2. O litoral sul da Paraíba
A aposta certeira e subestimada.

Espremida entre os gigantes turísticos de Pernambuco e Rio Grande do Norte, a Paraíba é frequentemente ignorada, o que é um erro estratégico. João Pessoa é uma das capitais mais verdes e agradáveis do país, e seu clima no verão é de uma estabilidade invejável.

A poucos minutos da capital, a Costa do Conde revela um litoral dramático, marcado por falésias coloridas e mar aberto de um azul intenso. Praias como Coqueirinho e a famosa Tambaba (a primeira praia de naturismo oficial do Brasil) estão no seu auge entre janeiro e fevereiro.

O sol aqui nasce extremamente cedo — lembre-se, estamos no ponto mais oriental das Américas. Prepare-se para estar na praia às 7h da manhã já com sol forte, aproveitando dias longos e secos.

### 3. Rio Grande do Norte - na esquina do continente
Onde o sol faz curva com intensidade.

Natal é conhecida como a "Cidade do Sol", e o apelido não é marketing vazio. O Rio Grande do Norte fica bem na "esquina" do Brasil, uma posição geográfica privilegiada que, durante o verão, recebe ventos constantes que varrem as nuvens para longe.

Embora a capital seja vibrante, a experiência solar definitiva está em Pipa. O vilarejo cosmopolita, com suas falésias avermelhadas e a Baía dos Golfinhos, vive seu auge no verão.

Diferente do Ceará, que fica logo ao lado e começa a ver mais nuvens em fevereiro, a costa leste potiguar se mantém firme. É o destino ideal para quem busca a combinação de dias de praia garantidos com uma vida noturna agitada e gastronomia internacional.

## O mapa é o seu melhor guia.

No fim das contas, o Nordeste é vasto e generoso o ano inteiro, mas cada pedaço do litoral tem seu momento de brilhar. Escolher a rota certa não é apenas sobre fugir da chuva; é sobre sintonizar a sua energia com a do lugar.

Se o seu plano para este verão é recarregar as energias com vitamina D, a Costa Leste está de portas abertas.

Escolha seu trecho de areia, desligue as notificações e aproveite a luz.
`,
    category: Category.ROTA_RITMO,
    // Mude aqui para o nome da sua foto na pasta assets, ex: '/assets/nordeste.jpg'
    imageUrl: "/assets/verao-nordeste-hero.png",
    author: "Equipe TDP",
    date: "16 Dez 2025",
    readTime: "6 min",
  },
  {
    id: "1",
    title:
      "250 anos de Jane Austen: Porque ela (ainda] é a rainha da comédia romântica.",
    excerpt:
      "Você sabia que O Diário de Bridget Jones e As Patricinhas de Beverly Hills nasceram aqui? Nos 250 anos de Jane Austen, preparamos um roteiro descomplicado para você se apaixonar pela autora que inventou o gênero enemies to lovers. Veja por onde começar.",
    content: `No dia 16 de dezembro de 1775, nascia Jane Austen. Esse ano celebramos os 250 anos de uma das autoras mais lidas do mundo, responsável por livros como Orgulho e Preconceito e Razão e Sensibilidade. Mas, se ao ouvir a palavra "clássico", você sente um arrepio pensando em linguagem difícil, páginas intermináveis e tramas complicadas, pode relaxar.

> Jane Austen é a deliciosa exceção a essa regra.

A verdade é que, muito antes de Hollywood, ela inventou a comédia romântica moderna. Suas histórias não são sobre heróis inalcançáveis, mas sobre pessoas comuns lidando com dinheiro, fofocas, erros de julgamento e a busca pelo amor — soa familiar?

É o estilo característico da autora — marcado pela inteligência e pela observação afiada do comportamento humano — que torna sua obra atemporal. É verdade que algumas situações causam estranhamento hoje, como casamentos entre primos ou o interesse de homens maduros por adolescentes. Mas, tirando o contexto da época, a dinâmica dos relacionamentos se encaixa perfeitamente no mundo atual.

A maior prova disso? O Diário de Bridget Jones.

Sim, o clássico da cultura pop é uma releitura direta de Orgulho e Preconceito. A atrapalhada Bridget é a nossa Elizabeth Bennet moderna, e o advogado "snobe" Mark Darcy é, literalmente, uma homenagem ao Mr. Darcy original. Se você torceu por eles no filme, você já gosta de Jane Austen e nem sabia.

## Por onde começar a ler Jane Austen?

### 1.Orgulho e Preconceito
A porta de entrada

Não é o mais famoso à toa. É o livro perfeito para começar porque o ritmo é ágil e os diálogos são brilhantes. A dinâmica entre Elizabeth Bennet e Mr. Darcy definiu o que conhecemos hoje como enemies to lovers (inimigos que se apaixonam).

> "É uma verdade universalmente reconhecida que um homem solteiro, possuidor de uma grande fortuna, deve estar necessitado de uma esposa."

### 2. Razão e Sensibilidade
A segunda parada

Se você gostou da escrita, esse é o próximo passo natural. A história foca no contraste entre duas irmãs: Marianne, que é pura emoção e drama, e Elinor, que é contida e racional. Ambas têm o coração partido e precisam aprender um pouco com a outra para encontrar o equilíbrio.

> "Não é o tempo nem a oportunidade que determinam a intimidade; é só a disposição."

### 3. Emma
Para rir (e passar raiva)

Emma Woodhouse é descrita pela própria autora como uma heroína que "ninguém além dela iria gostar muito". Ela é rica, bonita, inteligente e um tanto mimada. Diferente das outras protagonistas que precisam casar por dinheiro, Emma não tem pressa, mas adora brincar de cupido com a vida alheia — o que gera confusões hilárias.

> "Se eu a amasse menos, talvez fosse capaz de falar mais sobre isso."

⚠️ Onde NÃO começar: Mansfield Park Deixe este para quando já for fã. É o livro mais denso e complexo da autora. A protagonista, Fanny Price, é tímida, passiva e moralista, muito diferente da energia vibrante de Elizabeth ou Emma. É uma obra-prima, mas pode frustrar um leitor de primeira viagem que espera um romance arrebatador logo de cara.

## O universo visual: Filmes e séries

Para muita gente, ver o filme antes ajuda a visualizar os cenários, os figurinos e a entender o ritmo social da época. Aqui estão as melhores produções para "entrar no clima":

### Orgulho e Preconceito (2025)

A versão com Keira Knightley e Matthew Macfadyen é visualmente deslumbrante. A fotografia, a trilha sonora de Dario Marianelli e a tensão ("a cena da mão"!) entre o casal são perfeitas. É aquele filme conforto ideal para assistir em um dia de chuva com uma xícara de chá.

### Emma (2020)

Com Anya Taylor-Joy. Se você gosta de design, simetria, cores pastéis e figurinos impecáveis, esse filme é um banquete. O diretor transformou a história em uma verdadeira "caixa de doces" visual, mantendo o humor ácido da obra original.

### As Patricinhas de Beverly Hills (1995) - a versão pop

Talvez você não saiba, mas Cher Horowitz é a Emma Woodhouse de Los Angeles. O filme é uma adaptação modernizada de Emma. É genial ver como os problemas da alta sociedade inglesa de 1815 se traduzem perfeitamente para um colégio de ricos nos anos 90. Mais uma prova de que Austen é eterna.

## Curiosidades rápidas

Autora Fantasma (e Rebelde): Em vida, Jane publicava sem revelar seu nome na capa (usava apenas "Por uma Dama"). Mas houve uma exceção curiosa: o Príncipe Regente (futuro rei George IV) era fã dos livros, embora Jane desaprovasse sua vida de excessos. Ela foi "gentilmente convidada" a dedicar seu quarto livro, Emma, a ele. Ela o fez a contragosto, por pura pressão social, provando que nem a autora escapava das obrigações sociais que criticava.

Casa de ferreiro, espeto de pau: Apesar de ter escrito as histórias de amor e casamento mais famosas da literatura, Jane nunca se casou. Ela chegou a aceitar um pedido de um homem rico, mas mudou de ideia na manhã seguinte porque não o amava. Ela escolheu a liberdade (e a escrita) em vez da segurança financeira.

Destino de Viagem: Jane viveu alguns anos em Bath, uma cidade inglesa famosa por suas termas romanas. Embora ela não amasse morar lá (preferia o campo), a cidade hoje respira a autora, com festivais, museus e locações que parecem ter parado no tempo. É um destino de viagem imperdível para fãs.

Ler Jane Austen é como aceitar um convite para um chá da tarde que dura para sempre. É um conforto, uma risada inteligente e um lembrete de que, mudam-se os séculos, mas as emoções humanas continuam as mesmas.

Que tal aproveitar esse aniversário de 250 anos para começar? Escolha um livro da lista, prepare sua bebida favorita e boa viagem no tempo.

> "A pessoa que não sente prazer num bom romance, deve ser intoleravelmente estúpida." — A Abadia de Northanger`,
    category: Category.BAGAGEM,
    imageUrl: "/assets/jane-austen.png",
    author: "Ana Clara Reis",
    date: "16 Dez 2025",
    readTime: "8 min",
  },
  {
    id: "6b",
    title: "Diário de Bordo: A Travessia do Atlântico",
    excerpt:
      "30 dias no mar sem internet. O que acontece com a mente quando a única paisagem é a linha infinita do horizonte?",
    content: `Dia 1: A terra firme sumiu. É estranho como a nossa segurança está atrelada à visibilidade da costa. Sem ela, somos apenas um ponto flutuante numa imensidão azul que respira.

Dia 7: O enjoo passou, mas veio o tédio. E depois do tédio, algo curioso aconteceu: a criatividade. Sem a dopamina constante das notificações, meu cérebro começou a desenterrar memórias antigas, ideias de livros, conversas que eu gostaria de ter tido. O mar limpa tudo.

> Descobri que a pressa é uma invenção terrestre. Aqui, no meio do Atlântico, o vento sopra quando quer.

Dia 15: O azul muda de cor. Hoje contei sete tonalidades diferentes antes do meio-dia. O tempo a bordo não se mede em horas, mas em turnos de vigília e na posição do sol.

Dia 30: Chegamos. Ver terra firme novamente foi emocionante, mas confesso que uma parte de mim queria continuar lá, no balanço constante, onde a vida é reduzida ao essencial: água, vento e horizonte.`,
    category: Category.VIAGENS_QUEM_VIAJA,
    imageUrl: "https://picsum.photos/seed/ocean/800/600",
    author: "Carlos Mendes",
    date: "20 Out 2023",
    readTime: "15 min",
  },
  {
    id: "2",
    title: "O Futuro é a Nossa Bagagem: Guia de Leitura Sul-Americana",
    excerpt:
      "Cinco obras essenciais de realismo mágico para levar na mala antes de cruzar a fronteira dos Andes.",
    content: `Nenhuma viagem à América do Sul está completa sem entender que, por aqui, a linha entre o real e o mágico é tênue, quase invisível. Antes de embarcar para a Colômbia, Peru ou Chile, sua bagagem precisa pesar mais com livros do que com roupas.

### 1. "Cem Anos de Solidão" - Gabriel García Márquez
A Bíblia do Realismo Mágico.

Não leia como ficção. Leia como um manual de instruções para entender o calor, a chuva eterna e a paixão desmedida que permeia o continente. Macondo não é um lugar fictício; é um estado de espírito latino-americano.

### 2. "A Casa dos Espíritos" - Isabel Allende
Memória e Política.

Para entender o Chile, é preciso entender suas dores políticas e suas assombrações familiares. Allende tece isso com uma maestria que faz você olhar para as montanhas dos Andes e ver fantasmas gentis.

### 3. "Ficções" - Jorge Luis Borges
O Labirinto Intelectual.

Buenos Aires é um labirinto, e Borges é o minotauro. Seus contos preparam sua mente para a complexidade e a sofisticação intelectual da Argentina.

Viajar lendo é viajar duas vezes. Uma no espaço geográfico, outra no espaço imaginário. E muitas vezes, o segundo é o que dá sentido ao primeiro.`,
    category: Category.BAGAGEM,
    imageUrl: "https://picsum.photos/seed/books/800/600",
    author: "Lucas Viana",
    date: "05 Out 2023",
    readTime: "6 min",
  },
  {
    id: "3",
    title: "Saturno em Peixes: Quando o Mar Chama pelo Nome",
    excerpt:
      "A astrologia cármica explica por que certos lugares nos atraem magneticamente em momentos específicos de transição.",
    content: `Você já sentiu uma vontade inexplicável de ir para um lugar onde nunca esteve? Como se houvesse um ímã no mapa puxando seu peito? Na astrocartografia, isso não é coincidência.

Com Saturno transitando em Peixes, estamos vivendo um momento coletivo de dissolução de fronteiras e estruturação dos sonhos. É um período onde viagens para perto da água — oceanos, rios, lagos — não são apenas férias, são medicina.

Peixes rege o inconsciente, o onírico, o espiritual. Saturno pede maturidade e concretização. Viajar sob essa influência significa buscar lugares que permitam o silêncio e a introspecção. Não é hora de baladas em Ibiza, é hora de retiros em Bali ou caminhadas solitárias na costa de Portugal.

Se o mar está te chamando, não é apenas para nadar. É Saturno pedindo que você vá lavar a alma e estruturar o que, até agora, era apenas fluído e incerto.`,
    category: Category.MAPA_TEMPO,
    imageUrl: "https://picsum.photos/seed/astro/800/600",
    author: "Helena S.",
    date: "28 Set 2023",
    readTime: "12 min",
  },
  {
    id: "4",
    title: "Cafés de Lisboa: A Arquitetura da Conversa",
    excerpt:
      "Não é apenas sobre o café, mas sobre o tempo suspenso entre uma xícara e outra nas esquinas de Alfama.",
    content: `Em Lisboa, o café não é um combustível para acordar; é uma instituição social. Diferente do "coffee to go" americano, feito para ser consumido em movimento, a bica lisboeta exige pausa.

Entrar na A Brasileira ou no Nicola é pisar em um palco onde a história literária de Portugal foi escrita. Fernando Pessoa não frequentava cafés apenas pela cafeína, mas pela atmosfera. A arquitetura desses lugares — mesas de mármore, espelhos antigos, garçons de jaqueta branca — cria um ambiente propício para a demora.

Ninguém te expulsa se você ficar duas horas com uma única xícara e um caderno. Pelo contrário, faz parte do ritual. O tempo em Lisboa parece passar mais devagar dentro de um café. Observar a vida passar pela vitrine, ouvir o burburinho das conversas alheias, sentir o cheiro de pastel de nata saindo do forno...

Viajar para Lisboa e não perder uma tarde inteira em um café é não ter ido a Lisboa. É na demora, na conversa fiada, na observação despretensiosa que a alma da cidade se revela.`,
    category: Category.ROTA_RITMO,
    imageUrl: "https://picsum.photos/seed/coffee/800/600",
    author: "Ana Clara Reis",
    date: "15 Set 2023",
    readTime: "5 min",
  },
  {
    id: "5",
    title: "Cinema Novo e o Sertão Imaginário",
    excerpt:
      "Como os filmes de Glauber Rocha redefiniram a paisagem visual do interior do Brasil para o viajante contemporâneo.",
    content: `Antes de visitar o sertão nordestino, eu já tinha estado lá através das lentes de Glauber Rocha. O preto e branco contrastado, o sol estourado na película, a aridez que não é apenas geográfica, mas existencial.

O Cinema Novo não apenas documentou o Brasil; ele inventou uma estética para o Brasil. "Deus e o Diabo na Terra do Sol" transformou a caatinga em um cenário épico, quase mitológico.

Viajar pelo interior da Bahia ou de Pernambuco hoje é dialogar com essas imagens. É impossível ver um vaqueiro ou uma procissão sem lembrar da câmera na mão e da ideia na cabeça. O cinema nos ensinou a ver beleza na dureza, a encontrar poesia na resistência.

Para o viajante cultural, o sertão não é um lugar de falta, mas de potência. E essa mudança de olhar devemos, em grande parte, àqueles cineastas que ousaram filmar a luz cegante do nosso sol sem filtros suavizantes.`,
    category: Category.BAGAGEM,
    imageUrl: "https://picsum.photos/seed/cinema/800/600",
    author: "Marcos T.",
    date: "10 Set 2023",
    readTime: "9 min",
  },
];
