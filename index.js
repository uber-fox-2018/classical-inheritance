"use strict"
class Animal {
    constructor(num_legs, is_warm_blooded) {
        this.mum_legs = num_legs
        this.is_warm_blooded = is_warm_blooded
        this.superPower = new SuperPower()
    }
}

class Chimpanzee extends Animal {
    constructor() {
        super(2, true)
    
    }
}

class Frog extends Animal {
    constructor() {
        super(4, false)
    }
}

class Chicken extends Animal {
    constructor() {
        super(2, true)
    }
}

class SuperPower {
    constructor() {
      
    }

    waterGun() {
        console.log(`hey mudkip use watergun`)
    }

    furySwipes() {
        console.log(`hey chimpchar use multiple quick attack`)
    }

    ember() {
        console.log(`torchic use ember`)
    }
}

var chimpanzee = new Chimpanzee()
var frog = new Frog()
var chicken = new Chicken()

var superPower = new SuperPower()

console.log(chimpanzee)
console.log(frog)
console.log(chicken)

chimpanzee.superPower.furySwipes()
frog.superPower.waterGun()