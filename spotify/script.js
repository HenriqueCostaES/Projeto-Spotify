
/* Const é uma constante que nunca vai mudar
    outra opção é a let que no caso pode mudar */

const nomeMusica = document.getElementById("musica"); // pega o elemento do html pelo id (musica) 
const nomeBanda = document.getElementById("banda"); 
const capa = document.getElementById("capa");
const musica = document.getElementById("audio");
const play = document.getElementById("play");
const next = document.getElementById("next");
const previous = document.getElementById("previous");
const barra = document.getElementById("progresso");
const barraClicar = document.getElementById("barra-clicar");
const shuffleButton = document.getElementById("shuffle");
const repeatButton = document.getElementById("repeat");
const songTime = document.getElementById("song-time");
const totalTime = document.getElementById("total-time");
const like = document.getElementById("like");

const numb = {  //objeto musica
    nome: "Numb",
    banda: "Linkin Park",
    arquivo: "numb",
    liked: false
};

const voices = {
    nome: "Voices",
    banda: "Motionless in White",
    arquivo: "voices",
    liked: false
};

const LostInHollywood = {
    nome: "Lost In Hollywood",
    banda: "System Of A Down",
    arquivo: "lostinhollywood",
    liked: false
};

const EmptinessMachine = {
    nome: "Emptiness Machine",
    banda: "Linkin Park",
    arquivo: "emptinessmachine",
    liked: false
};

const Decode = {
    nome: "Decode",
    banda: "Paramore",
    arquivo: "decode",
    liked: false
};

// let é pra quando vai precisar mudar, começa com um valor e depois pode receber outro 
let isPlaying = false;
const playlist = JSON.parse(localStorage.getItem("playlist")) ?? [numb, voices, LostInHollywood, EmptinessMachine, Decode];
let shuffledPlaylist = [...playlist];
let index = 0;
let isShuffled = false;
let repeatOn = false;

/* Função para tocar a música, pega constante
    musica e cria uma lista de ações, no caso de play */

function playSong() {
    play.querySelector(".bi").classList.remove("bi-play-circle-fill"); // remove a class bi-play-circle-fill 
    play.querySelector(".bi").classList.add("bi-pause-circle-fill"); // adiciona a class bi-pause-circle-fill 
    musica.play();
    isPlaying = true;
}

/* queryselector faz uma busca dentro do elementro, no caso o id é o play e
    nele só tem duas class a bi e bi-play-circle-fill, ele busca a primeira no caso */

function pauseSong() {
    play.querySelector(".bi").classList.add("bi-play-circle-fill"); // adiciona a class bi-play-circle-fill
    play.querySelector(".bi").classList.remove("bi-pause-circle-fill"); // remove a class bi-pause-circle-fill
    musica.pause();
    isPlaying = false;
}

function togglePlayPause() { // função para alternar entre play e pause
    if(isPlaying === true) {
        pauseSong();
    } else {
        playSong();
    }
}

function likeButtonRender() {
    if (shuffledPlaylist[index].liked === true) {
        like.querySelector(".bi").classList.remove("bi-heart");
        like.querySelector(".bi").classList.add("bi-heart-fill");
        like.classList.add("botao-ativo");
    } else {
        like.querySelector(".bi").classList.remove("bi-heart-fill");
        like.querySelector(".bi").classList.add("bi-heart");
        like.classList.remove("botao-ativo");
    }
}


function iniciarMusica() { // função para iniciar a música e trazer os arquivos para o html dinamicamente 
    capa.src = `img/${shuffledPlaylist[index].arquivo}.jpeg`; 
    nomeMusica.innerText = shuffledPlaylist[index].nome;
    nomeBanda.innerText = shuffledPlaylist[index].banda;
    musica.src = `songs/${shuffledPlaylist[index].arquivo}.mp4`;
    likeButtonRender();
}

function musicaAnterior() { // função para ir para a música anterior
    if(index === 0) {
        index = shuffledPlaylist.length -1;
    } else {
        index -= 1;
    }
    iniciarMusica();
    playSong();
}

function proximaMusica() { // função para ir para a próxima música
    if(index === shuffledPlaylist.length -1) {
        index = 0;
    } else {
        index += 1;
    }
    iniciarMusica();
    playSong();
}

function atualizaProgresso() { // função para atualizar a barra de progresso
    musica.currentTime
    musica.duration
    const barraWidth = (musica.currentTime/musica.duration) * 100;
    barra.style.setProperty("--progresso", `${barraWidth}%`);
    songTime.innerText = toHHMMSS(musica.currentTime);

}

function pularPara(event) { // função para pular para uma posição na música
    const width = barraClicar.clientWidth // largura total da barra
    const clickPosition = event.offsetX; // posição do clique
    const jumpTo = (clickPosition / width) * musica.duration; // calcula o tempo para pular
    musica.currentTime = jumpTo; // atualiza o tempo atual da música 
    
}

function shuffleArray(preShuffleArray) {
    const tamanho = preShuffleArray.length;
    let posicacao = tamanho - 1;
    while(posicacao > 0) {
        let randomIndex = Math.floor(Math.random()* tamanho); // gera um número aleatório entre 0 e 1 ou tamanho, tira os decimais com floor
        let aux = preShuffleArray[posicacao];
        preShuffleArray[posicacao] = preShuffleArray[randomIndex];
        preShuffleArray[randomIndex] = aux;
        posicacao -= 1;
    }
}

function shuffleButtonClicked() {
    if(isShuffled === false) {
        isShuffled = true;
        shuffleArray(shuffledPlaylist);
        shuffleButton.classList.add("botao-ativo");
    }
    else {
        isShuffled = false;
        shuffledPlaylist = [...playlist];
        shuffleButton.classList.remove("botao-ativo");
    }
}

function repeatButtonClicked() {
    if(repeatOn === false) {
        repeatOn = true;
        repeatButton.classList.add("botao-ativo");
    }
    else {
        repeatOn = false;
        repeatButton.classList.remove("botao-ativo");
    }

}

function nextOrRepeat() { 
    if(repeatOn === false) {
        proximaMusica();
    } else {
        playSong();
    }
}

function toHHMMSS(originalNumber) {
    let hours = Math.floor(originalNumber / 3600 ); 
    let min = Math.floor((originalNumber - hours * 3600) / 60);
    let sec = Math.floor(originalNumber - hours * 3600 - min * 60);

    return(`${min.toString().padStart(2, "0")}: ${sec.toString().padStart(2, "0")}`); // duas casas decimais e prencher com 0 
}

function updateTotalTime() {
    toHHMMSS(musica.duration)
    totalTime.innerText = toHHMMSS(musica.duration);
}

function likeButtonClicked() {
    if (shuffledPlaylist[index].liked === false) {
        shuffledPlaylist[index].liked = true;
        likeButtonRender();
    } else {
        shuffledPlaylist[index].liked = false;
        
    }
    likeButtonRender();
    localStorage.setItem("playlist", JSON.stringify(playlist));
}

iniciarMusica(); // inicia a música 

musica.addEventListener("timeupdate", atualizaProgresso); // adiciona o evento de timeupdate e recebe a função para atualizar a barra de progresso 

musica.addEventListener("ended", nextOrRepeat); // adiciona o evento de ended e recebe a função para quando a música acabar

musica.addEventListener("loadedmetadata", updateTotalTime); 

barraClicar.addEventListener("click", pularPara); // adiciona o evento de click e recebe a função de pular para uma posição na música

/* adiciona a capacidade de receber um evento, no caso click 
    e o que fazer quando clicar ativa a função playSong que é dar play na musica */

/* outra forma de adicionar o evento, alternativo ao onlick + função no html
play.addEventListener("click", togglePlayPause); */