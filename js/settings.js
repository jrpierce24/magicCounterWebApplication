var gameMode = 1; // Commander or standard  <--> 0 or 1
var amtPlayers = 2;
var game;
var calculator;

window.onload = function(){
    document.getElementById("Standard").style.backgroundColor = "#0E5C8C";
    document.getElementById("twoPlayers").style.backgroundColor = "#0E5C8C";
    prepareOnClicks();
}

function prepareOnClicks(){

    //Menu Actions


    document.getElementById("Commander").onclick = function() {
        unHighlightGame()
        highlight("Commander");
        gameMode = 0;
        console.log("Game Mode: " + gameMode);
    }
    document.getElementById("Standard").onclick = function() {
        unHighlightGame()
        highlight("Standard");
        gameMode = 1;
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
        document.getElementById("visable").style.visibility = "hidden";
        game = new magicGame(gameMode, amtPlayers);

    }
}

function highlight(myID){
    document.getElementById(myID).style.backgroundColor = "#0E5C8C";
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

function startCalc(){
    this.calculator = new Calculator();
}

function getGame(){
    return this.game;
}