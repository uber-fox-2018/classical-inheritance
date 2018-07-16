"use strict"
class Animal {
    constructor(species, num_legs) {
        this.species = species
        this.num_legs = num_legs
        this.superPower=new superPower()
    }

}

class Frog extends Animal {
    constructor(species, num_legs) {
        super(species, num_legs)

    }
}
class Bat extends Animal {
    constructor(species, num_legs) {
        super(species, num_legs)

    }
}
class Chimpanze extends Animal {
    constructor(species, num_legs) {
        super(species, num_legs)

    }
}
class Fox extends Animal {
    constructor(species, num_legs) {
        super(species, num_legs)

    }
}
class Chicken extends Animal {
    constructor(species, num_legs) {
        super(species, num_legs)

    }
}


class superPower {
    constructor() {
        this.superPower = 'this animal is weaak so too bad it doesnt have any superpower'
    }
    kamehameha() {
        this.superPower = 'kamehameha'
    }
    rasengan() {
        this.superPower = 'rasengaaan!'
    }
    jankenpon() {
        this.superPower = 'rock, paper, scizzor!!!'
    }
}


let frog = new Frog('amphibi', 2)
let bat = new Bat('mamal', 2)
let chimpanze = new Chimpanze('mamal', 2)
let fox = new Fox('mamal', 4)
let chicken = new Chicken('aves', 2)
bat.superPower.kamehameha()
frog.superPower.jankenpon()
fox.superPower.rasengan()
console.log(frog)
console.log(bat)
console.log(chimpanze)
console.log(fox)
console.log(chicken)





