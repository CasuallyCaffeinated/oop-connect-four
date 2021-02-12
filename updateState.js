export class UpdateState{
    constructor(){
        this.col0 = document.getElementById("column-0")
        this.col1 = document.getElementById("column-1")
        this.col2 = document.getElementById("column-2")
        this.col3 = document.getElementById("column-3")
        this.col4 = document.getElementById("column-4")
        this.col5 = document.getElementById("column-5")
        this.col6 = document.getElementById("column-6")
    }
    checkColsFull() {
        let sq0_0 = document.getElementById("square-0-0")
        let tokenDiv = document.createElement("div");
        tokenDiv.setAttribute("class", "token")
        sq0_0.append(tokenDiv);
        if (sq0_0.children.length > 0) {
            tokenDiv.classList.add("red")
            this.col0.classList.add("full")
        }
    }
}



//! In order to check if the first square of each column is full:

//TODO: 1. Grab each square individually


// If column full - cant click and show message
// If column not full - hover event listener red or black


// Track filled squares and columns
// See if game is won
// Start new game
//
