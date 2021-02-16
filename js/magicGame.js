class magicGame{

    constructor(gameMode, amtPlayers){

        this.amtPlayers = amtPlayers;
        this.gameMode = gameMode;
        this.createPlayers();
        this.defaultHealth = this.player1.getHealth();

        this.drawGame();
        this.setDefaultHealth();
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

            this.playArea.innerHTML += '<div id="' + accessHtml + '"><div class="name">Name</div><div class="topButt"><div class="IncAmount">Inc5</div><div class="Inc1">&#9650</div></div><div class="health">20</div><div class="botButt"><div class="DecAmount">Dec5</div><div class="Dec1">&#9660</div></div></div>';
            
            var thisQ = document.querySelector("#" + accessHtml).getElementsByClassName("Inc1");
            
            thisQ[0].setAttribute("onclick", "game.setPlayerHealth(" + i + ", 1)");
            
            thisQ = document.querySelector("#" + accessHtml).getElementsByClassName("Dec1");

            thisQ[0].setAttribute("onclick", "game.setPlayerHealth(" + i + ", (-1))");


            // <div id="accessHtml">
                // <div class="name">Name</div>
                // <div class="topButt">
                //     <div class="IncAmount">Inc5</div>
                //     <div class="Inc1">Inc1</div>
                // </div>
                // <div class="health">20</div>
                // <div class="botButt">
                //     <div class="DecAmount">Dec5</div>
                //     <div class="Dec1">Dec1</div>
                // </div>
            // </div>

        }
    }

        // this.player1.setHealth = this.defaultHealth;
        // this.player2.setHealth = this.defaultHealth;
        // this.player3.setHealth = this.defaultHealth;
        // this.player4.setHealth = this.defaultHealth;


    setDefaultHealth(){
        for(var i = 0; i < amtPlayers; ++i){
            this.setPlayerHealth(i, 0);
        }
    }
    // Updates HTML GUI and player object
    setPlayerHealth(selector, health){

        var current = this.playerList[selector];
        var accessHtml = current.getHtmlAccess();

        current.modHealth(health);
    
        //Updates GUI Health of player selected
        document.getElementById(accessHtml).children[2].textContent = current.getHealth();

        var thisQ = document.querySelector("#" + accessHtml).getElementsByClassName("health");
        thisQ[0].textContent = current.getHealth();

    }


    getHealth(){
        return this.player1.getHealth();
    }
    getGameMode(){
        return gameMode;
    }
}