import { UpdateState } from "./updateState.js";
import { Player } from "./currentPlayer.js";
import { WinnerWinnerChickenDinner } from "./wins.js"

const newGame = new UpdateState();
const newPlayer = new Player();
const winRow = new WinnerWinnerChickenDinner();

const targets = document.getElementById("click-targets");

targets.classList.add(newPlayer.giveTokenColor())

targets.addEventListener("click", event => {
    let currTarget = event.target.id
    let playerColor = newPlayer.giveTokenColor()
    if (!newGame.gameOverCheck()) {
        newGame.placeToken(currTarget, playerColor);
        targets.classList.remove(newPlayer.giveTokenColor())
        newPlayer.switchPlayer();
        targets.classList.add(newPlayer.giveTokenColor())
        newGame.checkColsFull(currTarget[currTarget.length - 1]);
        let winner = winRow.checkRows();
        if (winner === "b" || winner === "r") {
            newGame.gameOver = true;
        }
        // console.log(newGame.gameOver)
    }
    let curr =  event.target;
})
