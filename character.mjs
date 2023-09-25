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
}