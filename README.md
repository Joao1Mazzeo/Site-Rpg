# RPG LOVERS
Este é um projeto de site para entusiastas de RPG de mesa. O site apresenta informações sobre diversos sistemas de RPG, com cards dinâmicos que exibem detalhes e um modal para informações adicionais. Também inclui uma funcionalidade de modo alto contraste, visando melhorar a acessibilidade.

Estrutura do Projeto
index.html
Página inicial com uma breve introdução ao RPG de mesa e botões para navegação.

acessibilidade.html
Página que permite ativar o modo alto contraste para melhorar a leitura.

rpgs.html
Página que exibe dinamicamente 30 cards com informações sobre diversos RPGs. Cada card possui um botão "Ver Mais" que abre um modal detalhado.

script.js
Código JavaScript responsável por:

Gerar os cards dinamicamente a partir de um array de objetos.
Gerenciar a exibição do modal com informações adicionais.
Alternar o modo alto contraste e armazenar a preferência no localStorage.
styles.css
Arquivo CSS que define o estilo do site, incluindo:

Layout e responsividade dos cards.
Estilos para o modal.
Regras para o modo alto contraste.
img/
Pasta contendo as imagens dos RPGs (por exemplo, dnd.png, cthulhu.png, etc.).

Funcionalidades
Geração Dinâmica dos Cards:
A função gerarCards() no script.js gera 30 cards automaticamente, cada um representando um RPG, com título, descrição, informações detalhadas e imagem.

Modal Informativo:
Cada card possui um botão "Ver Mais" que aciona o modal. O modal exibe informações detalhadas sobre o RPG selecionado.

Modo Alto Contraste:
O site possui uma opção de alto contraste acessível via acessibilidade.html. Ao clicar no botão, a classe high-contrast é adicionada ao <body>, e os estilos CSS adaptam o visual para cores de alto contraste. A preferência é armazenada no localStorage, permitindo a persistência da escolha entre sessões.
