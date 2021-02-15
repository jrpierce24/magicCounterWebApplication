class Player{

    constructor(gameMode, amtPlayers){
        this.health = this.setHealth(gameMode);
    }

    setHealth(gameMode, amtPlayers){
       if(gameMode == 0){
           return 40;
       }
       if(gameMode == 1){
           if(amtPlayers == 2){
                return 20;
           }
           if(amtPlayers == 3){
                return 30;
           }
           if(amtPlayers == 4){
                return 40;
           }
       }
    }

    setHealth(health){
        this.health = health;
    }

    setHtmlAccess(htmlA){
        this.htmlAccess = htmlA;
    }

    addHealth(amt){
        this.health = health + amt;
    }

    decHealth(amt){
        this.health = health - amt;
    }

    getHealth(){
        return this.health;
    }

}