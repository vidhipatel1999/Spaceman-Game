/*----- constants -----*/
const wordOptions = ["Ariel", "Belle", "Goofy", "Nemo", "Woody", "Simba", "Russell", "Olaf", "Bambi", "Cinderella"];

const hintOptions = [
     
]

const incorrectAllowed = 6;
/*or can declare in init?*/

/*----- state variables -----*/
let solutionWord;
let incorrectGuesses;
let incorrectAmount;
let wordStatus;
let gameStatus;
let hint;


/*----- cached elements  -----*/
const messagePanel = document.getElementById("message");
const spacemanImage = document.querySelector("img");
const wordGuessed = document.getElementById('word-reveal');
const letterButtons = [...document.querySelectorAll("#letters > button")];
const hintButton = document.getElementById('hint');
const hintMessage = document.querySelector("p");
const resetButton = document.getElementById("play-again");

/*----- event listeners -----*


/*----- functions -----*/
init();

function init() {
    gameStatus = null;
    incorrectAmount = 0;
    incorrectGuesses = [];
    wordStatus = [];
    solutionWord = wordOptions[Math.floor(Math.random() * wordOptions.length)].split("");
    for (let i=0; i < solutionWord.length; i++){
        wordStatus.push("_");
    }
    const solutionIndex = wordOptions.findIndex(word => word === solutionWord.join(""));
    hint = hintOptions[solutionIndex]; 
    render();
    /*hint box line and the incorrectAmount declared under state...*/
}

function render() {
    renderMessage();
    renderButton();
    renderButtonStyle();
}

function renderMessage() {
    if (gameStatus === "Winner") {
        messagePanel.innerText = "You Won! Great Job!";
    } else if (gamestatus === "Loser") {
        messagePanel.innerHTML = `Oh no! You lost. The word was ${solutionWord.join("")}`;
    } else {
        messageEl.innerText = `${incorrectAllowed - incorrectGuesses.length} Guesses Remaining!`
    }
}
/*can add span style of bold*/








