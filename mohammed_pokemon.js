/*
Define the Pokemon class to have the following:
    ● Constructed with the following parameters in the order given:
        ○ name (string)
        ○ type (string)
        ○ hp (number)

        ○ def (number)
        ○ atk (number)
        ○ legend (boolean)
    ● If any parameter given is of the wrong data type, an error should be thrown
*/

// Using ES6 class instance
// Disabled from directly stating minimal class variables - possible in ES7

class Pokemon {

    constructor (name, type, health, defense, atk, legendary, shiny) {
        if (typeof(name) !== "string") {
            throw new Error("Invalid Argument: Name - Must be a [String]")
        }
        this.name = name

        if (typeof(type) !== "string") {
            throw new Error("Invalid Argument: Type - Must be a [String]")
        }
        this.type = type

        if (typeof(health) !== "number") {
            throw new Error("Invalid Argument: Health - Must be a [Number]")
        }
        this.health = health

        if (typeof(defense) !== "number") {
            throw new Error("Invalid Argument: Defense - Must be a [Number]")
        }
        this.defense = defense

        if (typeof(atk) !== "number") {
            throw new Error("Invalid Argument: Atk - Must be a [Number]")
        }
        this.atk = atk

        if (typeof(legendary) !== "boolean") {
            throw new Error("Invalid Argument: Legendary - Must be a [Boolean]")
        }
        this.legendary = legendary

        if (typeof(shiny) !== "boolean") {
            throw new Error("Invalid Argument: Shiny - Must be a [Boolean]")
        }
        this.shiny = shiny

        Pokemon.all.push(this)
    }

    attack (target) {
        if (target instanceof Pokemon) {
            if (target.aliveCheck) { target.damage(this.atk) }
        } else {
            throw new Error("Target(Object) must be a descendant [Pokemon] class.")
        }
    }

    damage (quantity) {
        let amount = quantity - this.defense
        this.health -= amount
    }

   aliveCheck () { return this.health > 0 }
}

Pokemon.all = []


