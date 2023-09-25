import { showCharacaterNextMovement } from "./index.mjs";

export class Character{
    constructor(fullName, health, magick, stamina, potions){
        this.fullName = fullName;
        this.health = health;
        this.magick = magick;
        this.stamina = stamina;
        this.potions = potions;
    }

    static from(playerData, potions){
        return new Character(
            playerData.name + " the " + playerData.class,
            playerData.health,
            playerData.magick,
            playerData.stamina,
            potions
        )
    }

    drinkEmAll(){
        this.potions.every(potion => {

        //prueba de las pociones y sus resultados
            if(potion.name.includes("Failed potion")){
                console.log("Failed potion. " + this.fullName + " cannot drink");
            }
            else{
                console.log(this.fullName + " drinks " + potion.name + " and ");
                if(potion.name.includes("Potion")){
                    if(potion.name.includes("Potion of Sanity")){
                        this.health += potion.value;
                        this.magick += potion.value;
                        this.stamina += potion.value;
                        console.log("gains " + potion.value + " of health, magick & stamina");
                    }
                    else if(potion.name.includes("Health")){
                        this.health += potion.value;
                        console.log("gains " + potion.value + " of health");
                    }
                    else if(potion.name.includes("Magicka")){
                        this.magick += potion.value;
                        console.log("gains " + potion.value + " of magick");
                    }
                    else if(potion.name.includes("Stamina")){
                        this.stamina += potion.value;
                        console.log("gains " + potion.value + " of stamina");
                    }
                    else{
                        this.health ++;
                        this.magick ++;
                        this.stamina ++;
                        console.log("gains 1 of health, magick & stamina");
                    }
                }
                else if(potion.name.includes("Poison")){
                    if(potion.name.includes("Health")){
                        this.health -= potion.value;
                        console.log("loses " + potion.value + " of health");
                    }
                    else if(potion.name.includes("Magicka")){
                        this.magick -= potion.value;
                        console.log("loses " + potion.value + " of magick");
                    }
                    else if(potion.name.includes("Stamina")){
                        this.stamina -= potion.value;
                        console.log("loses " + potion.value + " of stamina");
                    }
                    else{
                        this.health --;
                        this.magick --;
                        this.stamina --;
                        console.log("loses 1 of health, magick & stamina");
                    }
                }
            } 
            showCharacaterNextMovement(this);

        //Final del juego

            if(potion.name.includes("Potion of Sanity")){
                console.log(this.fullName + " has found the " + potion.name + ". His mind is healed. Well donse!!");
                return false;
            }
            if(this.health <= 0){
                console.log(this.fullName + " has died");
                return false;
            }
            if(this.magick <= 0){
                console.log(this.fullName + " has been drained of all his magic and Scholar X.G's Chaos spell finishes him off");
                return false;
            }
            if(this.stamina <= 0){
                console.log(this.fullName + " has lost all his stamina. He feels completly exhausted");
                return false;
            }

            return true;
        })
        console.log("Game end")


    }
}