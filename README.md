# 🎵 Music Player — Documentação do Projeto

Este repositório contém um **Music Player simples e funcional**, desenvolvido em **HTML, CSS e JavaScript**, capaz de carregar músicas, exibir informações da faixa, mostrar o progresso da reprodução e controlar todas as ações básicas de um player moderno.

Abaixo está uma explicação clara e resumida de **como cada parte do projeto funciona**.

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

# ⚙️ Como o Music Player Funciona

## 🎶 1. Lista de músicas

O player possui um array com todas as músicas disponíveis — cada item contém:

* nome da música
* artista
* caminho do arquivo `.mp3`
* capa do álbum (thumbnail)

O player usa esse array para saber qual faixa está tocando e para mudar para a próxima ou anterior.

---

## ▶️ 2. Função de tocar música

A função de “play” simplesmente:

* carrega o arquivo de áudio da música atual
* altera o ícone do botão (play ↔ pause)
* inicia a reprodução

Caso a música já esteja tocando, ela alterna para “pause”.

---

## ⏸️ 3. Função de pausar música

A função de “pause” interrompe a reprodução mantendo o progresso, permitindo retomada onde parou.

---

## ⏭️ 4. Pular para a próxima música

A função de "next" aumenta o índice da música atual e:

* carrega a nova faixa
* atualiza título, artista e capa
* inicia a reprodução automaticamente

Se estiver na última música, volta para a primeira (loop).

---

## ⏮️ 5. Voltar para a música anterior

Semelhante ao “next”, mas reduz o índice da faixa.
Se estiver na primeira, volta para a última.

---

## ⏱️ 6. Barra de progresso

A barra funciona em dois sentidos:

* **Atualização automática**
  A cada segundo o player atualiza:

  * posição atual
  * duração total
  * porcentagem preenchida na barra

* **Interação do usuário**
  Ao clicar ou arrastar a barra, a função calcula a posição correspondente e ajusta o áudio para aquele momento.

---

## 🔊 7. Controle de volume (se existir)

O player ajusta o volume diretamente no objeto `Audio`, indo de 0 até 1.

---

## 🔁 8. Reprodução automática da próxima faixa

Quando a música termina, um evento `ended` é disparado e ativa automaticamente:

* a função de next
* mudando para a faixa seguinte sem intervenção do usuário

---

## 🖼️ 9. Atualização visual (UI)

O script troca dinamicamente:

* nome da música
* artista
* capa do álbum
* botões (play/pause)

Tudo isso garante que a interface esteja sempre sincronizada com o estado do player.

---

# 🎧 Como Adicionar Novas Músicas

1. Coloque os arquivos `.mp3` na pasta `/songs`.
2. Adicione um novo objeto na lista de músicas dentro do `script.js`:

```js
{
  name: "Nome da música",
  artist: "Nome do artista",
  src: "songs/nome-do-arquivo.mp3",
  cover: "songs/capa.jpg"
}
```

Pronto! A música já estará disponível no player.


