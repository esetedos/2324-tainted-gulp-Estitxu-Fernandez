import {getData, getPlayerData} from "./service.mjs";
import { Ingredients } from "./ingredients.mjs";
import { Cauldron } from "./cauldron.mjs";
import { PotionBag } from "./potionBag.mjs";
import { Character } from "./character.mjs";


const execute = async () => {
    try
    {
        const data = await getData();
        const playersData = await getPlayerData();
        const playerData = playersData.players[0];
        const bag = playersData.players[0].pouch_aged;
        //pouch_red, pouch_green, pouch_yellow, pouch_aged


        //Creamos los ingredientes
        const ingredients = Ingredients.load(data);

        //Creamos el caldero de pociones
        const cauldron = new Cauldron(ingredients);
        

        const potionsBag = PotionBag.createPotions(bag, cauldron);

        // showPotions(potionsBag);

        const joseph = Character.from(playerData, potionsBag);

        // showCharacater(joseph);

        // joseph.drinkEmAll();

    }
    catch(error){
        //ERROR
        console.log(error.message);
    }
}

function showPotions(array){
    array.map(element => {
        console.log(`${element.name}`);
        console.log(`Value:         ${element.value}`);
        console.log(`Weight:        ${element.weight}`);
        console.log(`Time:          ${element.time}`);
        console.log(`------------------------------`);
    })
}

function showCharacater(character){
    console.log(`${character.fullName}`);
    console.log(`------------------------------`);
    console.log(`Health:         ${character.health}`);
    console.log(`Magick:         ${character.magick}`);
    console.log(`Stamina:        ${character.stamina}`);
    character.potions.map(potion => {
        console.log(`Potion ${character.potions.indexOf(potion) + 1}:       ${potion.name}`);
    })
}

export function showCharacaterNextMovement(joseph){
    console.log(`Health:         ${joseph.health}`);
    console.log(`Magick:         ${joseph.magick}`);
    console.log(`Stamina:        ${joseph.stamina}`);

    console.log(`------------------------------`);
}




execute();



