import { Cauldron } from "./cauldron.mjs";

export class PotionBag{
    constructor(potions){
        this.potions = potions;
    }

    createPotions(ingredients, cauldron){ //nombres de los ingredientes de las bolsas (de una imagino) && objeto cauldron(q es un array de los ingredientes + una funcion para sacar las pociones)
//crea pociones con todas las conbinaciones disponiles
        const potions = [];

        for(let i = 0; i < ingredients.length; i++){
            for(let j = 0; j < ingredients.length; j++){
                if(ingredients[i] !== ingredients[j]){
                    // // console.log(ingredients[i] + ", " + ingredients[j]);
                    // console.log(cauldron.createPotion(ingredients[i], ingredients[j]));
                    potions.push(cauldron.createPotion(ingredients[i], ingredients[j]));
                }
            }
            ingredients.splice(0, 1);
            i--;
        }
        return potions;
// console.log(potions)
//creará y debolverá un objeto de la clase PotionBag
    }
}