class magicGame{

    constructor(gameMode, amtPlayers){

        this.amtPlayers = amtPlayers;
        this.gameMode = gameMode;

        this.createPlayers();
        this.drawGame();
    }
    createPlayers() {
        this.player1 = new Player(gameMode, amtPlayers);
        this.player2 = new Player(gameMode, amtPlayers);
        this.player3 = new Player(gameMode, amtPlayers);
        this.player4 = new Player(gameMode, amtPlayers);
        this.playerList = new Array(this.player1, this.player2, this.player3, this.player4);
    }
    drawGame(){
        this.playArea = document.getElementById("playArea");
        for(var i = 0; i < amtPlayers; ++i){
            var accessHtml = "player" + (i + 1);
            var current = this.playerList[i];
            current.setHtmlAccess(accessHtml);

            this.playArea.innerHTML += '<div id="playerBox">Player Box<div id="' + accessHtml + '"><div></div></div></div>';
        }
    }

    getHealth(){
        return this.player1.getHealth();
    }
    getGameMode(){
        return gameMode;
    }
}