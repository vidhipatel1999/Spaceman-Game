/*----- constants -----*/
const wordOptions = ["ARIEL", "BELLE", "GOOFY", "NEMO", "WOODY", "SIMBA", "RUSSELL", "OLAF", "BAMBI", "CINDERELLA"];

const hintOptions = [
    "Mermaid princess",
    "Wears yellow ballgown",
    "Friend of Mickey Mouse",
    "Lost clownfish",
    "Cowboy doll from Toy Story",
    "Character in Lion King",
    "Wilderness Explorer from Up",
    "Snowman from Frozen",
    "A Young Deer",
    "Lost her glass slipper"
];

const incorrectAllowed = 6;


/*----- state variables -----*/
let solutionWord;
let incorrectGuesses;
let wordStatus;
let gameStatus;
let hint;


/*----- cached elements  -----*/
const messagePanel = document.getElementById("message");
const spacemanImage = document.querySelector("img");
const wordGuessed = document.getElementById('word-reveal');
const letterButtons = [...document.querySelectorAll("#letters > button")];
const hintButton = document.getElementById("hint");
const hintMessage = document.querySelector("p");
const resetButton = document.getElementById("play-again");

/*----- event listeners -----*/
letterButtons.forEach(button => button.addEventListener("click", handleLetters));
resetButton.addEventListener("click", init);
hintButton.addEventListener("click", revealHint);

/*----- functions -----*/
init();

function init() {
    gameStatus = null;
    incorrectAmount = 0;
    incorrectGuesses = [];
    hintMessage.style.visibility = "hidden";
    generateRandomWord();
    resetButtonDisplay();
    render();
}

function generateRandomWord() {
    solutionWord = wordOptions[Math.floor(Math.random() * wordOptions.length)].split("");
    wordStatus = []
    for (let i = 0; i < solutionWord.length; i++) {
        wordStatus.push("_");
    }
    const solutionIndex = wordOptions.findIndex(word => word === solutionWord.join(""));
    hint = hintOptions[solutionIndex];
}

function resetButtonDisplay() {
    letterButtons.forEach(button => {
        button.disabled = false;
        button.style.color = "";
    });
}

function handleLetters(event) {
    if (gameStatus === "Winner" || gameStatus === "Loser" || gameStatus) {
        return;
    }
    const letter = event.target.textContent;
    let foundLetter = false;
    for (let i = 0; i < solutionWord.length; i++) {
        if (solutionWord[i] === letter) {
            wordStatus[i] = letter;
            foundLetter = true;
        }
    }
    if (!foundLetter) {
        incorrectGuesses.push(letter);
    }
    gameStatus = checkWin();
    render();
}

function checkWin() {
    return wordStatus.includes("_") ?
        (incorrectGuesses.length > incorrectAllowed - 1 ? "Loser" : null) :
        "Winner";
}

function revealHint() {
    hintMessage.style.visibility = "visible";
    hintMessage.innerHTML = hint;
}

function render() {
    renderWordStatus();
    renderMessage();
    renderLettersDisplay();
    renderSpaceman();
}

function renderWordStatus() {
    wordGuessed.innerText = wordStatus.join("");
}

function renderMessage() {
    if (gameStatus === "Winner") {
        messagePanel.innerText = "You Won! Great Job!";
    } else if (gameStatus === "Loser") {
        messagePanel.innerHTML = `Oh no! You lost. The word was ${solutionWord.join("")}`;
    } else {
        messagePanel.innerText = `${incorrectAllowed - incorrectGuesses.length} Guesses Remaining!`;
    }
}

function renderLettersDisplay() {
    letterButtons.forEach(button => {
        const letter = button.textContent;
        if (wordStatus.includes(letter) || incorrectGuesses.includes(letter)) {
            button.disabled = true;
            button.style.color = "black";
        }
    });
}

function renderSpaceman() {
    spacemanImage.src = `./imgs/mickey-${incorrectGuesses.length}.jpg`;
}












