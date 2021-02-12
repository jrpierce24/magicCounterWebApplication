var gameMode = 0; // Commander or standard  <--> 0 or 1
var amtPlayers = 2;
var game;

window.onload = function(){
    prepareOnClicks();
}

function prepareOnClicks(){


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
        game = new magicGame(gameMode, amtPlayers);

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