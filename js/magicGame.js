class magicGame{

    constructor(gameMode, amtPlayers){

        this.amtPlayers = amtPlayers;
        this.gameMode = gameMode;
        this.createPlayers();
        this.defaultHealth = this.player1.getHealth();

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

            this.playArea.innerHTML += '<div id="' + accessHtml + '"><div id="name">Name</div><div id="topButt"><div id="IncAmount">Inc5</div><div id="Inc1">&#9650</div></div><div id="health">20</div><div id="botButt"><div id="DecAmount">Dec5</div><div id="Dec1">&#9660</div></div></div>';
            
            // <div id="accessHtml">
                // <div id="name">Name</div>
                // <div id="topButt">
                //     <div id="IncAmount">Inc5</div>
                //     <div id="Inc1">Inc1</div>
                // </div>
                // <div id="health">20</div>
                // <div id="botButt">
                //     <div id="DecAmount">Dec5</div>
                //     <div id="Dec1">Dec1</div>
                // </div>
            // </div>

        }
    }

    setDefualtHealth(){
        this.player1.setHealth = this.defaultHealth;
        this.player2.setHealth = this.defaultHealth;
        this.player3.setHealth = this.defaultHealth;
        this.player4.setHealth = this.defaultHealth;
    }
    //Set the players health value by an amt, 
    setPlayerHealth(){
        for(var i = 0; i < this.amtPlayers; ++i){

        }
    }


    getHealth(){
        return this.player1.getHealth();
    }
    getGameMode(){
        return gameMode;
    }
}