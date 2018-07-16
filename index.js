"use strict"

class Animal {
    constructor(){
        this.abilty = new SuperPower()
    }
}

class Diurnal extends Animal{
    constructor(){
        super()
        this.activity = 'at Midday'
    }
}

class Nocturnal extends Animal{
    constructor(){
        super()
        this.activity = 'at Night'
    }
}

class SuperPower {
    constructor(){
    }

    fastest(){
        return 'Fast for everything!'
    }

    slowest(){
        return 'Slowly but sure ;)'
    }

    strongest(){
        return 'Jungle is mine!'
    }

    cutest(){
        return 'Dont be fooled with what i have!'
    }
}

class Cheetah extends Diurnal{
    constructor(){
        super()
        this.mamalia = true
    }
}

class Horse extends Diurnal{
    constructor(){
        super()
        this.mamalia = true
    }
}

class Turtle extends Diurnal{
    constructor(){
        super()
        this.mamalia = false
    }
}

class Cat extends Diurnal{
    constructor(){
        super()
        this.mamalia = true
    }
}

class Snake extends Nocturnal{
    constructor(){
        super()
        this.mamalia = false
    }
}

class Fox extends Nocturnal{
    constructor(){
        super()
        this.mamalia = true
    }
}

let cheetah = new Cheetah()
let horse = new Horse()
let turtle = new Turtle()
let cat = new Cat()
let snake = new Snake()

console.log(cheetah);
console.log(cheetah.abilty.fastest()+'\n')

console.log(horse);
console.log(horse.abilty.strongest()+'\n')

console.log(turtle);
console.log(turtle.abilty.slowest()+'\n')

console.log(cat);
console.log(cat.abilty.cutest()+'\n')

console.log(snake);
console.log(snake.abilty.fastest()+'\n')