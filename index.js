"use strict"

class Animal {
    constructor(){
        this.power = new AnimalPower()
    }
}

class AnimalPower {
    constructor(){}
    
    useBlackShadow(){
        console.log('attack with dark shadow')
    }

    useLight(){
        console.log('defend eith sun light')
    }
}

class Ovipar extends Animal{
    constructor(){
        super()
        this.howToBreed = 'ovipar'
    }
}

class Vivipar extends Animal{
    constructor(){
        super()
        this.howToBreed = 'vivipar'
    }
}

class Chicken extends Ovipar {
    constructor() {
        super()
        this.habit= 'land'
    }
}

class Bat extends Vivipar {
    constructor() {
        super()
        this.habit= 'air'
    }
}

class Fox extends Vivipar {
    constructor() {
        super()
        this.habit= 'land'
    }
}

class Frog extends Ovipar {
    constructor() {
        super()
        this.habit= 'land and water'
    }
}

class Chimpanzeec extends Vivipar {
    constructor() {
        super()
        this.habit= 'land'
    }
}

let chicken = new Chicken();
console.log(chicken)
chicken.power.useBlackShadow()
console.log()

let bat = new Bat()
console.log(bat)
bat.power.useLight()
console.log()