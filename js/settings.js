var gameMode = 0; // Commander or standard  <--> 0 or 1
var amtPlayers = 2;
var game;
var gameTime = false;

window.onload = function(){
    prepareOnClicks();
}

function prepareOnClicks(){

    //Menu Actions


    document.getElementById("Commander").onclick = function() {
        unHighlightGame()
        highlight("Commander");
        gameMode = 1;
        console.log("Game Mode: " + gameMode);
    }
    document.getElementById("Standard").onclick = function() {
        unHighlightGame()
        highlight("Standard");
        gameMode = 0;
        console.log("Game Mode: " + gameMode);
    }
    document.getElementById("twoPlayers").onclick = function() {
        unHighLightPlayers()
        highlight("twoPlayers");
        amtPlayers = 2;
        console.log("Amount of Players: " + amtPlayers);
    }
    document.getElementById("threePlayers").onclick = function() {
        unHighLightPlayers()
        highlight("threePlayers");
        amtPlayers = 3;  
    }
    document.getElementById("fourPlayers").onclick = function() {
        unHighLightPlayers()
        highlight("fourPlayers");
        amtPlayers = 4;
    }
    document.getElementById("start").onclick = function() {
        document.getElementById("visable").style.display = "none";
        gameTime = true;
        game = new magicGame(gameMode, amtPlayers);

    }

    // Player Actions 

    if(gameTime){

        document.getElementById("player1").children[1].children[1].onclick() = function(){
            magicGame.setPlayerHealth(0, 1);
            console.log("im gay");
        }
        document.querySelector("#player2 > #topButt > #Inc1").onclick() = function(){
            magicGame.setPlayerHealth(1, 1);
            console.log("P2: UP 1");
        }
        document.querySelector("#player3 > #topButt > #Inc1").onclick() = function(){
            magicGame.setPlayerHealth(2, 1);
            console.log("P3: UP 1");
        }
        document.querySelector("#player4 > #topButt > #Inc1").onclick() = function(){
            magicGame.setPlayerHealth(3, 1);
            console.log("P4: UP 1");
        }
        document.querySelector("#player1 > #botButt > #Dec1").onclick() = function(){
            magicGame.setPlayerHealth(0, -1);
            console.log("P1: UP 1");
        }
        document.querySelector("#player2 > #botButt > #Dec1").onclick() = function(){
            magicGame.setPlayerHealth(1, -1);
            console.log("P2: UP 1");
        }
        document.querySelector("#player3 > #botButt > #Dec1").onclick() = function(){
            magicGame.setPlayerHealth(2, -1);
            console.log("P3: UP 1");
        }
        document.querySelector("#player4 > #botButt > #Dec1").onclick() = function(){
            magicGame.setPlayerHealth(3, -1);
            console.log("P4: UP 1");
        }

    }
}

function highlight(myID){
    document.getElementById(myID).style.backgroundColor = "blue";
}
function unHighLightPlayers(){
    document.getElementById("twoPlayers").style.backgroundColor = null;
    document.getElementById("threePlayers").style.backgroundColor = null;
    document.getElementById("fourPlayers").style.backgroundColor = null;
}

function unHighlightGame(){
    document.getElementById("Commander").style.backgroundColor = null;
    document.getElementById("Standard").style.backgroundColor = null;
}

function getGame(){
    return this.game;
}