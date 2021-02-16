class Player{

    health;

    constructor(gameMode, amtPlayers){
        this.health = this.setGameHealth(gameMode, amtPlayers);
    }

    setGameHealth(gameMode, amtPlayers){
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

    //positive health increments health up, negative increments health to a lower value
    modHealth(health){
        this.health += health; 
    }

    setHtmlAccess(htmlA){
        this.htmlAccess = htmlA;
    }

    setHealth(health){
        this.health = health;
    }

    getHtmlAccess(){
        return this.htmlAccess;
    }

    getHealth(){
        return this.health;
    }

}