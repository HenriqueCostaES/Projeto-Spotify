🎧 Player de Música estilo Spotify

Um player de música desenvolvido com HTML, CSS e JavaScript, inspirado no visual e nas funcionalidades do Spotify.
Possui controles de reprodução, barra de progresso interativa, playlist dinâmica, shuffle, repeat e sistema de likes salvo no localStorage.

🚀 Funcionalidades
🎵 Reprodução de música

Play / Pause

Próxima música

Música anterior

Reprodução contínua (repeat)

Reprodução aleatória (shuffle)

🎚️ Interface completa

Capa da música

Nome da música e da banda

Ícone de like que alterna entre vazio e preenchido

Barra de progresso com clique para avançar/retroceder

Temporizador atual e total da música

💾 Persistência de dados

Likes das músicas são salvos no localStorage, mantendo preferências mesmo após fechar a página.

🎨 Estilo inspirado no Spotify

Gradiente verde → preto

Ícones do Bootstrap Icons

Layout responsivo e organizado

📁 Estrutura de Diretórios
/projeto
│── index.html
│── style.css
│── script.js
│
├── img/
│   ├── numb.jpeg
│   ├── voices.jpeg
│   ├── lostinhollywood.jpeg
│   ├── emptinessmachine.jpeg
│   └── decode.jpeg
│
└── songs/
    ├── numb.mp4
    ├── voices.mp4
    ├── lostinhollywood.mp4
    ├── emptinessmachine.mp4
    └── decode.mp4

🛠️ Tecnologias Utilizadas

HTML5

CSS3

JavaScript (Vanilla)

Bootstrap Icons

LocalStorage

📌 Principais Arquivos
index.html

Contém a estrutura do player:

Título

Imagem da capa

Elemento <audio>

Informações da música

Botões de controle (play, pause, next, previous, shuffle, repeat)

Barra de progresso

style.css

Responsável pelo visual:

Gradiente de fundo

Cores do Spotify

Botões com hover e destaque

Tamanhos dos ícones

Barra de progresso animada

Layout centralizado

script.js

Controla toda a lógica do player:

▶️ Controle da música:

playSong()

pauseSong()

togglePlayPause()

⏩ Navegação:

proximaMusica()

musicaAnterior()

🔀 Aleatório:

shuffleButtonClicked()

shuffleArray()

🔁 Repetição:

repeatButtonClicked()

❤️ Likes:

Salvos no localStorage

Mudança visual do ícone (bi-heart / bi-heart-fill)

⏳ Progresso e tempo:

atualizaProgresso()

pularPara()

toHHMMSS()

updateTotalTime()

📦 Como usar

Faça o download/clonagem do repositório

Coloque suas músicas em /songs (formato .mp4 ou .mp3)

Coloque as capas correspondentes em /img

Abra o index.html no navegador

E pronto! O player iniciará automaticamente.

🧩 Como adicionar novas músicas

No arquivo script.js, adicione um objeto no mesmo formato:


const novaMusica = {
    nome: "Nome da Música",
    banda: "Nome da Banda",
    arquivo: "nome-do-arquivo",
    liked: false
};


E inclua na playlist:

playlist.push(novaMusica);

🟢 Melhorias Futuras (opcional)

Barra de volume

Tema claro/escuro

Busca de músicas

Interface mais parecida com o Spotify real

Animação da capa ao tocar música

Equalizador visual
