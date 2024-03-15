
Pseudocode-
Consolidating the information into the requested categories:
1) Define required constants:
An array of secret words
The number of incorrect guesses allowed in total for a player during one round
An array of all of the letters
The images of the spaceman
2) Define required variables used to track the state of the game (state variables):
let answer: The secret word that needs to be guessed
let guessesRemaining: Number of incorrect guesses left (based off of amount of guesses provided in beginning and amount of incorrect guesses already made)
let wordStatus: The letters displayed after guessed correctly (revealed letters and underscores)
let gameStatus: Won, Loss, or still playing
let lettersStatus: status of letters (chosen vs available)
let spacemanStatus: status of image during game 
3) Store elements on the page that will be accessed in code more than once in variables to make code more concise, readable, and performant (cached elements): 
guessedWord: Element representing the guessed word
spacemanImage: Element representing the spaceman image
message: Element for displaying messages to the user
playAgainButton: Button element for playing the game again
letterButtons: Array or collection of letter buttons for player interaction
4) Upon loading the app should (Functions) :
The initialization (init) function (Initialize state variables)
Init a random secret word chosen
Init the random secret word to appear with underscores (underscores amount = length of word)
Init number of guesses start off with (reset guesses)
Init win/loss status to null to represent there is no winner or loser and game is in progress
Init full spaceman image
Init starting message of “Pick a letter”
Init all letters to be available to choose
Render function (Render state variables to the page)
Layout Display:
Render spacemans image based on guesses
Render the word display/status based on letter guesses
Render guesses/turns remaining based on amount of guesses already made 
Render availability of letters after they have been selected already
Render when player has won or loss (end of game) - check win or loss 
Message:
Render a message based on if they need to pick a letter (in progress game), if they won (game ended), or if they lost (game ended)
Render message in regards to guesses remaining
Wait for user to click a letter 
5) Handle a player clicking a letter button(Event listeners):
Any letters clicked
Play Again button clicked
6) Handle a player clicking the replay button (Event listeners):
Function to reset the game and start a new round when the replay button is clicked
Do all of the steps in 4 - init and render 


Pseudocode Summary-
Start game with full spaceman image
Random word selected
Blank spaces representing selected word pops up
Max amount of incorrect guesses provided (shown in guesses remaining section)
Message to player : “Pick a letter”
If correct letter, show in blank space; If incorrect guess, remove spaceman bodypart and decrease “guesses remaining” by 1
Message displayed on remaining guesses after each play 
Letter marked unavailable after chosen 
If player guesses word correctly - winning message
If player runs out of guesses before guessing word - losing message (with word revealed possibly)
Reset game button for new game */ 






