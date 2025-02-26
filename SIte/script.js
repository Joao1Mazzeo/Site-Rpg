document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM completamente carregado");
    // Verifica se o modo alto contraste está salvo no localStorage e o aplica
    if (localStorage.getItem("highContrast") === "true") {
      document.body.classList.add("high-contrast");
    }
    gerarCards(); // Gera os cards dinamicamente
  });
  
  // Função para alternar o modo alto contraste
  function ativarModoAltoContraste() {
    console.log("Botão de alto contraste clicado.");
    document.body.classList.toggle("high-contrast");
    const ativo = document.body.classList.contains("high-contrast");
    console.log("Modo alto contraste ativo:", ativo);
    localStorage.setItem("highContrast", ativo ? "true" : "false");
  }
  
  // Função para gerar dinamicamente 30 cards de RPGs
  function gerarCards() {
    const rpgs = [
      {
        titulo: 'Dungeons & Dragons',
        descricao: 'O RPG de fantasia mais famoso do mundo!',
        extra: `<p><strong>História:</strong> Jogadores assumem o papel de heróis em um mundo repleto de monstros e tesouros.</p>
                <p><strong>Mecânicas:</strong> Sistema baseado em dados e decisões estratégicas.</p>
                <p><strong>Destaques:</strong> Campanhas épicas e comunidade ativa.</p>`,
        imagem: 'img/dnd.png'
      },
      {
        titulo: 'Call of Cthulhu',
        descricao: 'Um RPG de terror baseado nos mitos de H.P. Lovecraft.',
        extra: `<p><strong>História:</strong> Inspirado no horror cósmico, os jogadores investigam mistérios sobrenaturais.</p>
                <p><strong>Mecânicas:</strong> Foco na investigação e tensão psicológica.</p>
                <p><strong>Destaques:</strong> Atmosfera de suspense e narrativa imersiva.</p>`,
        imagem: 'img/cthulhu.png'
      },
      {
        titulo: 'GURPS',
        descricao: 'Um sistema genérico e flexível para qualquer cenário.',
        extra: `<p><strong>História:</strong> Permite criar campanhas em variados cenários.</p>
                <p><strong>Mecânicas:</strong> Sistema modular e adaptável.</p>
                <p><strong>Destaques:</strong> Versatilidade e customização profunda.</p>`,
        imagem: 'img/gurps.png'
      },
      {
        titulo: 'Shadowrun',
        descricao: 'RPG cyberpunk com toques de fantasia.',
        extra: `<p><strong>História:</strong> Combina tecnologia futurista com magia em um mundo distópico.</p>
                <p><strong>Mecânicas:</strong> Integra combate tecnológico e poderes místicos.</p>
                <p><strong>Destaques:</strong> Ambientação única e narrativa complexa.</p>`,
        imagem: 'img/shadowrun.png'
      },
      {
        titulo: 'Vampiro: A Máscara',
        descricao: 'Mergulhe no mundo sombrio dos vampiros.',
        extra: `<p><strong>História:</strong> Explore intrigas e conflitos no submundo dos imortais.</p>
                <p><strong>Mecânicas:</strong> Sistema narrativo com dilemas morais.</p>
                <p><strong>Destaques:</strong> Atmosfera gótica e personagens profundos.</p>`,
        imagem: 'img/vampiro.png'
      },
      {
        titulo: 'Pathfinder',
        descricao: 'Uma evolução dos clássicos de fantasia.',
        extra: `<p><strong>História:</strong> Derivado de D&D 3.5, oferece um mundo repleto de aventuras.</p>
                <p><strong>Mecânicas:</strong> Regras detalhadas com alta customização.</p>
                <p><strong>Destaques:</strong> Campanhas desafiadoras e lore aprofundado.</p>`,
        imagem: 'img/pathfinder.png'
      },
      {
        titulo: 'Starfinder',
        descricao: 'RPG de ficção científica com elementos de fantasia.',
        extra: `<p><strong>História:</strong> Aventuras intergalácticas em um universo cheio de mistérios.</p>
                <p><strong>Mecânicas:</strong> Combina combates espaciais com exploração planetária.</p>
                <p><strong>Destaques:</strong> Ambientação futurista e visual impactante.</p>`,
        imagem: 'img/starfinder.png'
      },
      {
        titulo: 'Warhammer Fantasy Roleplay',
        descricao: 'Um mergulho no sombrio mundo de Warhammer.',
        extra: `<p><strong>História:</strong> Explore um mundo brutal e cheio de perigos medievais.</p>
                <p><strong>Mecânicas:</strong> Sistema que enfatiza a sobrevivência e o horror.</p>
                <p><strong>Destaques:</strong> Narrativa imersiva e ambientação sombria.</p>`,
        imagem: 'img/warhammer.png'
      },
      {
        titulo: 'Savage Worlds',
        descricao: 'Sistema rápido e flexível para aventuras diversas.',
        extra: `<p><strong>História:</strong> Adaptável a múltiplos gêneros, do faroeste à ficção científica.</p>
                <p><strong>Mecânicas:</strong> Regras simples que promovem ação intensa.</p>
                <p><strong>Destaques:</strong> Ritmo acelerado e versatilidade.</p>`,
        imagem: 'img/savageworlds.png'
      },
      {
        titulo: 'Legend of the Five Rings',
        descricao: 'RPG ambientado em um mundo inspirado no Japão feudal.',
        extra: `<p><strong>História:</strong> Intrigas, honra e samurais em um cenário mitológico.</p>
                <p><strong>Mecânicas:</strong> Sistema que valoriza a tradição e a narrativa.</p>
                <p><strong>Destaques:</strong> Lore rica e tensão dramática.</p>`,
        imagem: 'img/l5r.png'
      },
      {
        titulo: 'Cyberpunk 2020',
        descricao: 'RPG que explora um futuro distópico e tecnológico.',
        extra: `<p><strong>História:</strong> Cenário urbano dominado por corporações e tecnologia avançada.</p>
                <p><strong>Mecânicas:</strong> Foco em ação, hacking e desafios sociais.</p>
                <p><strong>Destaques:</strong> Narrativa futurista e atmosfera urbana.</p>`,
        imagem: 'img/cyberpunk2020.png'
      },
      {
        titulo: 'Mutants & Masterminds',
        descricao: 'RPG de super-heróis cheio de ação.',
        extra: `<p><strong>História:</strong> Crie heróis com poderes extraordinários para salvar o mundo.</p>
                <p><strong>Mecânicas:</strong> Sistema de combate dinâmico e personalização intensa.</p>
                <p><strong>Destaques:</strong> Aventuras épicas e desafios heroicos.</p>`,
        imagem: 'img/mutants.png'
      },
      {
        titulo: 'Paranoia RPG',
        descricao: 'Sátira de um futuro totalitário e absurdamente caótico.',
        extra: `<p><strong>História:</strong> Em um mundo controlado por um computador, a desconfiança impera.</p>
                <p><strong>Mecânicas:</strong> Humor negro e regras que incentivam a traição.</p>
                <p><strong>Destaques:</strong> Ambiente irreverente e narrativa imprevisível.</p>`,
        imagem: 'img/paranoia.png'
      },
      {
        titulo: 'FATE Core',
        descricao: 'Sistema narrativo para histórias colaborativas.',
        extra: `<p><strong>História:</strong> Permite criar cenários personalizados através da imaginação.</p>
                <p><strong>Mecânicas:</strong> Regras flexíveis que enfatizam a narrativa.</p>
                <p><strong>Destaques:</strong> Liberdade e criatividade na construção de histórias.</p>`,
        imagem: 'img/fatecore.png'
      },
      {
        titulo: 'Traveller',
        descricao: 'RPG de ficção científica e exploração espacial.',
        extra: `<p><strong>História:</strong> Aventuras interplanetárias em um universo vasto e desconhecido.</p>
                <p><strong>Mecânicas:</strong> Combina exploração, comércio e combate espacial.</p>
                <p><strong>Destaques:</strong> Universos expansivos e aventuras emocionantes.</p>`,
        imagem: 'img/traveller.png'
      },
      {
        titulo: 'RuneQuest',
        descricao: 'RPG que explora um mundo místico cheio de lendas.',
        extra: `<p><strong>História:</strong> Mitos e realidade se encontram em cenários enigmáticos.</p>
                <p><strong>Mecânicas:</strong> Sistema baseado em dados para simular magia e combate.</p>
                <p><strong>Destaques:</strong> Narrativa rica e ambientação mítica.</p>`,
        imagem: 'img/runequest.png'
      },
      {
        titulo: 'Exalted',
        descricao: 'RPG épico com deuses e heróis lendários.',
        extra: `<p><strong>História:</strong> Os jogadores assumem papéis de seres extraordinários em um mundo mitológico.</p>
                <p><strong>Mecânicas:</strong> Destaque para feitos heroicos e poderes incríveis.</p>
                <p><strong>Destaques:</strong> Narrativa grandiosa e poderes sobre-humanos.</p>`,
        imagem: 'img/exalted.png'
      },
      {
        titulo: 'Pendragon',
        descricao: 'RPG ambientado nas lendas arturianas.',
        extra: `<p><strong>História:</strong> Reviva as lendas do Rei Arthur e os cavaleiros medievais.</p>
                <p><strong>Mecânicas:</strong> Sistema focado em honra, cavalgadas e desafios medievais.</p>
                <p><strong>Destaques:</strong> Narrativa histórica e atmosfera arcaica.</p>`,
        imagem: 'img/pendragon.png'
      },
      {
        titulo: 'World of Darkness',
        descricao: 'RPG que explora o lado sombrio da humanidade.',
        extra: `<p><strong>História:</strong> Mergulhe em um mundo de seres sobrenaturais e conflitos internos.</p>
                <p><strong>Mecânicas:</strong> Foco na narrativa e drama pessoal.</p>
                <p><strong>Destaques:</strong> Atmosfera sombria e temas maduros.</p>`,
        imagem: 'img/worldofdarkness.png'
      },
      {
        titulo: 'Eclipse Phase',
        descricao: 'RPG de ficção científica e transumanismo.',
        extra: `<p><strong>História:</strong> Explora um futuro onde tecnologia e consciência humana se transformam radicalmente.</p>
                <p><strong>Mecânicas:</strong> Combina investigação com sobrevivência em ambientes extremos.</p>
                <p><strong>Destaques:</strong> Conceitos filosóficos profundos e narrativa futurista.</p>`,
        imagem: 'img/eclipsephase.png'
      },
      {
        titulo: 'Blades in the Dark',
        descricao: 'RPG de ação e estratégia no submundo.',
        extra: `<p><strong>História:</strong> Forme uma gangue em uma cidade corrupta repleta de oportunidades ilícitas.</p>
                <p><strong>Mecânicas:</strong> Planejamento tático e ação com consequências narrativas.</p>
                <p><strong>Destaques:</strong> Ambiente sombrio e estratégia intensa.</p>`,
        imagem: 'img/bladesinthedark.png'
      },
      {
        titulo: 'Numenera',
        descricao: 'RPG de exploração em um futuro distante e misterioso.',
        extra: `<p><strong>História:</strong> Situado em um mundo pós-apocalíptico onde tecnologias antigas parecem mágicas.</p>
                <p><strong>Mecânicas:</strong> Sistema que mescla descoberta e aventura com narrativa flexível.</p>
                <p><strong>Destaques:</strong> Mistério e exploração de um futuro enigmático.</p>`,
        imagem: 'img/numenera.png'
      },
      {
        titulo: 'The One Ring',
        descricao: 'RPG ambientado na Terra-média de Tolkien.',
        extra: `<p><strong>História:</strong> Embarque em aventuras inspiradas nas lendas da Terra-média.</p>
                <p><strong>Mecânicas:</strong> Sistema que capta a essência da jornada épica.</p>
                <p><strong>Destaques:</strong> Atmosfera mágica e rica em detalhes.</p>`,
        imagem: 'img/theonering.png'
      },
      {
        titulo: 'Ars Magica',
        descricao: 'RPG focado em magias e sociedades medievais.',
        extra: `<p><strong>História:</strong> Um mundo onde a magia molda a história e as sociedades se desenvolvem com poderes arcanos.</p>
                <p><strong>Mecânicas:</strong> Sistema que explora a complexidade e liberdade mágica.</p>
                <p><strong>Destaques:</strong> Narrativa profunda e inovadora.</p>`,
        imagem: 'img/arsmagica.png'
      },
      {
        titulo: '7th Sea',
        descricao: 'RPG de aventura e pirataria em alto-mar.',
        extra: `<p><strong>História:</strong> Aventuras épicas num mundo repleto de navios, reinos e lendas marítimas.</p>
                <p><strong>Mecânicas:</strong> Sistema que enfatiza a narrativa e a ação no mar.</p>
                <p><strong>Destaques:</strong> Atmosfera aventureira e batalhas navais intensas.</p>`,
        imagem: 'img/7thsea.png'
      },
      {
        titulo: 'Burning Wheel',
        descricao: 'RPG de interpretação profunda e desafios morais.',
        extra: `<p><strong>História:</strong> Foco no desenvolvimento detalhado dos personagens e suas crenças.</p>
                <p><strong>Mecânicas:</strong> Regras complexas que incentivam a narrativa colaborativa.</p>
                <p><strong>Destaques:</strong> Profundidade na construção de personagens e narrativa intensa.</p>`,
        imagem: 'img/burningwheel.png'
      },
      {
        titulo: 'Rolemaster',
        descricao: 'RPG com regras detalhadas e combate tático.',
        extra: `<p><strong>História:</strong> Um sistema que valoriza o realismo e a precisão em combates.</p>
                <p><strong>Mecânicas:</strong> Regras complexas que simulam batalhas de forma detalhada.</p>
                <p><strong>Destaques:</strong> Estratégia e riqueza de detalhes nas mecânicas.</p>`,
        imagem: 'img/rolemaster.png'
      },
      {
        titulo: 'Hero System',
        descricao: 'Sistema de super-heróis altamente customizável.',
        extra: `<p><strong>História:</strong> Crie heróis com habilidades diversas e personalizadas.</p>
                <p><strong>Mecânicas:</strong> Regras que enfatizam a customização e o combate estratégico.</p>
                <p><strong>Destaques:</strong> Flexibilidade e personalização intensa.</p>`,
        imagem: 'img/herosystem.png'
      },
      {
        titulo: 'Warhammer 40,000: Rogue Trader',
        descricao: 'RPG ambientado no universo sombrio de Warhammer 40K.',
        extra: `<p><strong>História:</strong> Explore um universo futurista repleto de impérios e mistérios.</p>
                <p><strong>Mecânicas:</strong> Combinação de exploração espacial e combates intensos.</p>
                <p><strong>Destaques:</strong> Atmosfera sombria e narrativa épica.</p>`,
        imagem: 'img/rogue_trader.png'
      },
      {
        titulo: 'Tales from the Loop',
        descricao: 'RPG inspirado em um futuro alternativo e nostálgico.',
        extra: `<p><strong>História:</strong> Aventuras em um mundo onde tecnologia avançada e estética dos anos 80 se misturam.</p>
                <p><strong>Mecânicas:</strong> Foco em investigação e resolução de mistérios de forma lúdica.</p>
                <p><strong>Destaques:</strong> Atmosfera única e narrativa encantadora.</p>`,
        imagem: 'img/talesfromtheloop.png'
      }
    ];
  
    const container = document.getElementById('cards-container');
    console.log("Container encontrado:", container);
    if (!container) {
      console.error("Elemento com id 'cards-container' não encontrado!");
      return;
    }
    rpgs.forEach(rpg => {
      const card = document.createElement('div');
      card.className = 'card';
      card.onclick = () => abrirModal(rpg.titulo, rpg.descricao, rpg.extra);
      card.innerHTML = `
        <img src="${rpg.imagem}" alt="${rpg.titulo}">
        <h3>${rpg.titulo}</h3>
        <button>Ver Mais</button>
      `;
      container.appendChild(card);
    });
    console.log("Cards gerados:", container.children.length);
  }
  
  // Função para abrir o modal com as informações do RPG
  function abrirModal(titulo, texto, extra) {
    document.getElementById("modal-title").innerText = titulo;
    document.getElementById("modal-text").innerText = texto;
    document.getElementById("modal-extra").innerHTML = extra || "";
    document.getElementById("modal").classList.add("active");
  }
  
  // Função para fechar o modal
  function fecharModal() {
    document.getElementById("modal").classList.remove("active");
  }
  
  // Funções para a página inicial (index.html)
  function conhecoRPG() {
    window.location.href = "rpgs.html";
  }
  
  function mostrarExplicacao() {
    document.getElementById("explicacao").classList.remove("hidden");
  }
  