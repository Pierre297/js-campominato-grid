/* L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata,
in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100 10 * 10
con difficoltà 2 => tra 1 e 81 9 * 9
con difficoltà 3 => tra 1 e 49 7 * 7 
 */

// crea tre funzioni con cicli for in base al livello scelto dall'utente.

// ogni ciclo imposta alla griglia il numero di caselle associato al livello.

// con if/else if/else collegare i bottoni ed eseguire la funzione corrispondente al livello scelto.

// costanti griglia e bottoni
const gridContainer = document.getElementById("grid");
const gamemModeEasy = document.getElementById("easy-btn");
const gamemModeMedium = document.getElementById("medium-btn");
const gamemModeHard = document.getElementById("hard-btn");

// dichiarazioni funzioni
let firstOption = easyButton;
let secondOption = middleButton;
let thirdOption = hardButton;



// primo ciclo modalità facile
 function easyButton() {

    for(let i = 0; i < 100; i++){
    let node = document.createElement("div");
    node.classList.add("square-easy");

    gridContainer.appendChild(node);

    }
}

// secondo ciclo modalità media
function middleButton() {

    for(let i = 0; i < 81; i++){
    let node = document.createElement("div");
    node.classList.add("square-middle");

    gridContainer.appendChild(node);

    }
}


// terzo ciclo modalità difficile
function hardButton() {

    for(let i = 0; i < 49; i++){
    let node = document.createElement("div");
    node.classList.add("square-hard");

    gridContainer.appendChild(node);

    }
}

// esegui le funzioni in base al click del bottone

gamemModeEasy.addEventListener('click',

)