
export class UpdateState{
    constructor(){
        this.col0 = 5
        this.col1 = 5
        this.col2 = 5
        this.col3 = 5
        this.col4 = 5
        this.col5 = 5
        this.col6 = 5
        this.gameOver = false;
    }

    gameOverCheck() {
        return this.gameOver
    }

    placeToken(target, player) {
        //1. check the id of our column
        let columnNum = target[target.length - 1]

        //2. setting background color of the bottom-most
        // div in that specific column === whatever color we're on

        let colDepth = null;

        switch (Number(columnNum)) {
            case 0: colDepth = this.col0;
                this.col0--
                 break;
            case 1: colDepth = this.col1;
                this.col1--
                break;
            case 2: colDepth = this.col2;
                this.col2--
                break;
            case 3: colDepth = this.col3;
                this.col3--
                break;
            case 4: colDepth = this.col4;
                this.col4--
                break;
            case 5: colDepth = this.col5;
                this.col5--
                break;
            case 6: colDepth = this.col6;
                this.col6--
                break;
        }
        let idStr = `square-${colDepth}-${Number(columnNum)}`
        let square = document.getElementById(idStr);
        square.setAttribute("class", player[0]); 
        let tokenDiv = document.createElement("div");
        tokenDiv.classList.add("token", player)
        square.append(tokenDiv);

        // make sure we decrement our column integer;

    }

    checkColsFull(colInt) {
        let currCol = document.getElementById("column-" + colInt);
        let currSq = document.getElementById("square-0-" + colInt);
        if (currSq.children.length > 0) {
            currCol.classList.add("full")
        }
    }

}

// sq0_0.append(tokenDiv);

// tokenDiv.classList.add("red")
//TODO: Pass in INT to checkColsFull that is === to the Col we're checking. Then,
//! create VAR that stores the COl by adding the INT to the string Col-
//! create a Var that contains the top square by adding square-0- to the

//! In order to check if the first square of each column is full:

//TODO: 1. Grab each square individually


// If column full - cant click and show message
// If column not full - hover event listener red or black


// Track filled squares and columns
// See if game is won
// Start new game
//
