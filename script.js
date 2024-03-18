/*----- constants -----*/
const wordOptions = ["Ariel", "Belle", "Goofy", "Nemo", "Woody", "Simba", "Russell", "Olaf", "Bambi", "Cinderella"];

/*----- state variables -----*/
let solutionWord;
let incorrectGuesses;
let incorrectAmount;
let wordStatus = [];
let gameStatus;
let hint;


/*----- cached elements  -----*/


/*----- event listeners -----*


/*----- functions -----*/
function init() {
    gameStatus = null;
    incorrectAmount = 0;
    incorrectGuesses = [];
    solutionWord = wordOptions[Math.floor(Math.random() * wordOptions.length)].split("");
    for (let i=0; i < solutionWord.length; i++){
        wordStatus.push("_");
    }
    const solutionIndex = wordOptions.findIndex(word => word === solutionWord.join(''));
    hint = hintOptions[solutionIndex]; 
}
  



