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
        const bag = playersData.players[0].pouch_red;


        //Creamos los ingredientes
        const ingredients = Ingredients.load(data);

        //Creamos el caldero de pociones
        const cauldron = new Cauldron(ingredients);
        
        let potionsBag = new PotionBag(ingredients);

        potionsBag = potionsBag.createPotions(bag, cauldron);

        // showPotions(potionsBag);

        const joseph = Character.from(playerData, potionsBag);

        showCharacater(joseph);




        //Creamos pociones
        const potion1 = cauldron.createPotion("Bear Claws", "Bee");
        // showPotion(potion1);

        const potion2 = cauldron.createPotion("Chicken's Egg", "Chaurus Eggs");
        // showPotion(potion2);
        
        const potion3 = cauldron.createPotion("Chaurus Eggs", "Bleeding Crown");
        // showPotion(potion3);

        const potion4 = cauldron.createPotion("Nightshade", "Ectoplasm");
        // showPotion(potion4);



    }
    catch(error){
        //ERROR
        console.log(error.message);
    }
}

function showPotion(potion){
    console.log(`${potion.name}`);
    console.log(`Value:         ${potion.value}`);
    console.log(`Weight:        ${potion.weight}`);
    console.log(`Time:          ${potion.time}`);
    console.log(`------------------------------`);
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

function showCharacater(joseph){
    console.log(`${joseph.name}`);
    console.log(`------------------------------`);
    console.log(`Health:         ${joseph.health}`);
    console.log(`Magick:         ${joseph.magick}`);
    console.log(`Stamina:        ${joseph.stamina}`);
    joseph.potions.map(potion => {
        console.log(`Potion ${joseph.potions.indexOf(potion) + 1}:       ${potion.name}`);
    })
}




execute();



