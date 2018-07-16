"use strict"
class Animal {
    constructor(numLegs,isWarmBlooded){
        this._num_legs=numLegs;
        this._is_warm_blooded = isWarmBlooded;
        this.superpower = new SuperPower
    }
}

class Frog extends Animal{
    constructor(){
        super()
        this._num_legs = 4
        this._is_warm_blooded = false

    }
}

class Monkey extends Animal{
    constructor(numLegs,isWarmBlooded){
        super(numLegs,isWarmBlooded)
    }

}

class Snake extends Animal{
    constructor(){
        super();
        this._num_legs = 0
        this._is_warm_blooded = false
    }
}

class Fox extends Animal{
    constructor(numLegs,isWarmBlooded){
        super(numLegs,isWarmBlooded)
    }

}

class SuperPower{

    poison(){
        return'racuuuuuun'
    }

    punch(){
        return 'pukuuuuul'
    }

    use_laser_vision(){
        return 'peeeeeewwwww'
    }

    be_invisible(){
        return'woooossshh'
    }



}

// let superPower = new SuperPower
let fox = new Fox(2,true)
let snake = new Snake()

console.log(fox)
console.log(fox.superpower.use_laser_vision())//string
console.log(fox._num_legs)//2
console.log('------------')

console.log(snake)
console.log(snake.superpower.poison())
console.log(snake._is_warm_blooded)