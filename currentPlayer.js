export class Player {
    constructor (name) {
        this.name = name;
        this.currentColor = "black";
    }
    giveTokenColor() {
        return this.currentColor;
    }

    switchPlayer() {
        if(this.currentColor === "black") {
            this.currentColor = "red";
        } else {
            this.currentColor = "black";
        }
    }

}



/*
1. Set the hover prop to the current player's color;
    sub1 - get the element by Id - the event.target.id
    sub2 - set the class to that element with setAtrribute; Set to the class that
    is gonna be black or red; we will do this using Player.setTokenType();


2. When we listen for the click event, we need to place the token in the correct position;
3. Then when we have the token placed, check if the game is Over;
4. If the game isn't over, change players
5. continue until game is won by one of the players.



*/
