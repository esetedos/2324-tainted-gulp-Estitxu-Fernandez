import { Cauldron } from "./cauldron.mjs";

export class PotionBag{
    constructor(potions){
        this.potions = potions;
    }

    static createPotions(ingredients, cauldron){ //nombres de los ingredientes de las bolsas (de una imagino) && objeto cauldron(q es un array de los ingredientes + una funcion para sacar las pociones)
    //crea pociones con todas las conbinaciones disponiles
        const potions = [];

        for(let i = 0; i < ingredients.length; i++){
            for(let j = i+1; j < ingredients.length; j++){
                    potions.push(cauldron.createPotion(ingredients[i], ingredients[j]));
            }
        }

        return new PotionBag(
            potions
        );

        //creará y debolverá un objeto de la clase PotionBag
    }
}