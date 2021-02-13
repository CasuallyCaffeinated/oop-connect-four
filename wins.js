export class WinnerWinnerChickenDinner {
    constructor () {

    }
    checkRows () {
        for(let i = 0; i < 6; i++) {
            for (let j = 0; j < 4; j++) {
                let first = document.getElementById(`square-${i}-${j}`)
                let second = document.getElementById(`square-${i}-${j + 1}`)
                let third = document.getElementById(`square-${i}-${j + 2}`)
                let forth = document.getElementById(`square-${i}-${j + 3}`)

                if(
                    first.classList.contains("b")
                && second.classList.contains("b")
                && third.classList.contains("b")
                && forth.classList.contains("b")
                ) return "b";

                if(
                    first.classList.contains("r")
                && second.classList.contains("r")
                && third.classList.contains("r")
                && forth.classList.contains("r")
                ) return "r";
            }
        }
    }

    checkColumns () {
        for(let i = 0; i < 4; i++) {
            for (let j = 0; j < 6; j++) {
                let first = document.getElementById(`square-${i}-${j}`)
                let second = document.getElementById(`square-${i + 1}-${j}`)
                let third = document.getElementById(`square-${i + 2}-${j}`)
                let forth = document.getElementById(`square-${i + 3}-${j}`)

                if(
                    first.classList.contains("b")
                && second.classList.contains("b")
                && third.classList.contains("b")
                && forth.classList.contains("b")
                ) return "b";

                if(
                    first.classList.contains("r")
                && second.classList.contains("r")
                && third.classList.contains("r")
                && forth.classList.contains("r")
                ) return "r";
            }
        }
    }
}
