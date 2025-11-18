# 🎧 Player de Música — Estilo Spotify

Um player de música moderno, leve e totalmente construído com **HTML**, **CSS** e **JavaScript**.
Inspirado na interface do Spotify, o projeto oferece uma experiência limpa e funcional, com capa da música, botões interativos, progresso animado e controle completo da playlist.

---

## ✨ Destaques do Projeto

* 🎵 **Reprodução completa** (play, pause, next, previous)
* 🔀 **Shuffle** com embaralhamento real da playlist
* 🔁 **Repeat** para repetir a faixa atual
* ❤️ **Sistema de like** salvo no *localStorage*
* 🎚️ **Barra de progresso clicável**
* ⏱️ **Exibição de tempo atual e total da música**
* 🖼️ **Capa, nome da música e banda dinâmicos**
* 🎨 **Design inspirado no Spotify**, com gradient icônico
* 📦 Nenhum framework JS — apenas **JavaScript puro (vanilla)**

---

## 🛠️ Tecnologias Utilizadas

* **HTML5**
* **CSS3 (vanilla)**
* **JavaScript puro**
* **Bootstrap Icons**
* **localStorage**

---

## 📁 Estrutura de Diretórios

```
projeto/
│── index.html
│── style.css
│── script.js
│
├── img/
│   ├── numb.jpeg
│   ├── voices.jpeg
│   ├── ...
│
└── songs/
    ├── numb.mp4
    ├── voices.mp4
    ├── ...
```

---

## 🔧 Como rodar o projeto

1. Baixe ou clone o repositório
2. Mantenha a estrutura de pastas exatamente como está
3. Coloque suas músicas em `/songs` e capas em `/img`
4. Abra o arquivo **index.html** no navegador
5. Pronto! Seu player estará funcionando 🎶

---

## 📜 Principais Arquivos

### **index.html**

Estrutura do player: capa, nome da música, botões e barra de progresso.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Spotify</title>
    <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css">
</head>
<body>
    <div class="container">
        <h4 id="titulo">Só as Melhores</h4>

        <img id="capa" alt="imagem da musica">
        <audio id="audio"></audio>

        <div id="abaixo-capa">
            <div id="info">
                <div id="musica">Nome da Música</div>
                <div id="banda" class="cor-fraca">Nome da Banda</div>
            </div>
            <button id="like" class="botao" onclick="likeButtonClicked()">
                <i class="bi bi-heart"></i>
            </button>
        </div>

        <div id="barra-clicar">
            <div id="barra">
                <div id="progresso"></div>
            </div>
            <div id="time-box">
                <div id="song-time">00:00</div>
                <div id="total-time">00:00</div>
            </div>
        </div>

        <div id="botoes">
            <button id="shuffle" class="botao">
                <i class="bi bi-shuffle" onclick="shuffleButtonClicked()"></i>
            </button>

            <button id="previous" class="botao botao-navigate" onclick="musicaAnterior()">
                <i class="bi bi-skip-start-fill"></i>
            </button>

            <button id="play" class="botao botao-grande" onclick="togglePlayPause()">
                <i class="bi bi-play-circle-fill"></i>
            </button>

            <button id="next" class="botao botao-navigate" onclick="proximaMusica()">
                <i class="bi bi-skip-end-fill"></i>
            </button>

            <button id="repeat" class="botao">
                <i class="bi bi-repeat" onclick="repeatButtonClicked()"></i>
            </button>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
```

---

### **style.css**

Estilo inspirado no Spotify: gradiente verde → preto, botões grandes e interface centralizada.

```css
body {
    background: linear-gradient(to bottom, #1DB954, #191414);
    height: 100vh;
    color: white;
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
}

button {
    background-color: inherit;
    color: inherit;
    border: none;
}

#capa {
    width: 350px;
    height: 350px;
    border-radius: 8px;
}

#musica {
    font-size: 1.7em;
    font-weight: bolder;
}

#barra {
    background-color: #88999C;
    height: 3px;
    width: 100%;
    border-radius: 10px;
}

#progresso {
    --progresso: 0%;
    background-color: white;
    height: 3px;
    width: var(--progresso);
    border-radius: 10px;
}

.botao-ativo {
    color: rgb(67, 187, 67);
}
```

---

### **script.js**

Toda a lógica do player: controle da música, likes, shuffle, repeat, progresso e playlist.

```js
const nomeMusica = document.getElementById("musica");
const nomeBanda = document.getElementById("banda");
const capa = document.getElementById("capa");
const musica = document.getElementById("audio");
const play = document.getElementById("play");
const barra = document.getElementById("progresso");

const numb = {
    nome: "Numb",
    banda: "Linkin Park",
    arquivo: "numb",
    liked: false
};

let playlist = JSON.parse(localStorage.getItem("playlist")) 
            ?? [numb];

let index = 0;
let isPlaying = false;

function iniciarMusica() {
    const musicaAtual = playlist[index];
    capa.src = `img/${musicaAtual.arquivo}.jpeg`;
    nomeMusica.innerText = musicaAtual.nome;
    nomeBanda.innerText = musicaAtual.banda;
    musica.src = `songs/${musicaAtual.arquivo}.mp4`;
}

function playSong() {
    play.querySelector(".bi").classList.replace("bi-play-circle-fill", "bi-pause-circle-fill");
    musica.play();
    isPlaying = true;
}

function pauseSong() {
    play.querySelector(".bi").classList.replace("bi-pause-circle-fill", "bi-play-circle-fill");
    musica.pause();
    isPlaying = false;
}

function togglePlayPause() {
    isPlaying ? pauseSong() : playSong();
}

musica.addEventListener("timeupdate", () => {
    const progresso = (musica.currentTime / musica.duration) * 100;
    barra.style.setProperty("--progresso", `${progresso}%`);
});

iniciarMusica();
```

---

## ➕ Como adicionar novas músicas

```js
const novaMusica = {
    nome: "Nome",
    banda: "Artista",
    arquivo: "nome-arquivo",
    liked: false
};

playlist.push(novaMusica);
```

Coloque:

* `songs/nome-arquivo.mp4`
* `img/nome-arquivo.jpeg`





É só pedir!
