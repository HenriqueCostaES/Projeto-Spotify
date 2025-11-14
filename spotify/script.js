
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
const like = document.getElementById("like");

const numb = {  //objeto musica  
    nome: "Numb",
    banda: "Linkin Park",
    arquivo: "numb"
};

const voices = {
    nome: "Voices",
    banda: "Motionless in White",
    arquivo: "voices"
};

const LostInHollywood = {
    nome: "Lost In Hollywood",
    banda: "System Of A Down",
    arquivo: "lostinhollywood"
};

const EmptinessMachine = {
    nome: "Emptiness Machine",
    banda: "Linkin Park",
    arquivo: "emptinessmachine"
};

const Decode = {
    nome: "Decode",
    banda: "Paramore",
    arquivo: "decode"
};

/* let é pra quando vai precisar mudar  */
let isPlaying = false;
const playlist = [numb, voices, LostInHollywood, EmptinessMachine, Decode];
let shuffledPlaylist = [...playlist];
let index = 0;
let isLike = false;
let isShuffled = false;


/* Função para tocar a música, pega constante
    musica e cria uma lista de ações, no caso de play  */

function playSong() {
    play.querySelector(".bi").classList.remove("bi-play-circle-fill"); // remove a class bi-play-circle-fill
    play.querySelector(".bi").classList.add("bi-pause-circle-fill"); // adiciona a class bi-pause-circle-fill
    musica.play();
    isPlaying = true;
}

/* queryselector faz uma busca dentro do elementro, no caso o id é o play e 
    nele só tem duas class a bi e bi-play-circle-fill, ele busca a primeira no caso
*/

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

function iniciarMusica() { // função para iniciar a música e trazer os arquivos para o html dinamicamente
    capa.src = `img/${shuffledPlaylist[index].arquivo}.jpeg`; 
    nomeMusica.innerText = shuffledPlaylist[index].nome;
    nomeBanda.innerText = shuffledPlaylist[index].banda;
    musica.src = `songs/${shuffledPlaylist[index].arquivo}.mp4`;
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
        let randomIndex = Math.floor(Math.random()* tamanho); // gera um número aleatório entre 0 e tamanho, tira os decimais com floor
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

function Like() {
    like.querySelector(".bi").classList.remove("bi-heart");
    like.querySelector(".bi").classList.add("bi-heart-fill");
    isLike = true;
}

function Deslike() {
    like.querySelector(".bi").classList.add("bi-heart");
    like.querySelector(".bi").classList.remove("bi-heart-fill");
    isLike = false;
}

function toggleLike() {
    if(isLike === true) {
        Deslike();
    } else {
        Like();
    }
}


iniciarMusica(); // inicia a música

musica.addEventListener("timeupdate", atualizaProgresso); // adiciona o evento de timeupdate e recebe a função para atualizar a barra de progresso 

barraClicar.addEventListener("click", pularPara); // adiciona o evento de click e recebe a função de pular para uma posição na música



/* adiciona a capacidade de receber um evento, no caso click 
    e o que fazer quando clicar ativa a função playSong que é dar play na musica */

/* outra forma de adicionar o evento, alternativo ao onlick + função no html

play.addEventListener("click", togglePlayPause); */