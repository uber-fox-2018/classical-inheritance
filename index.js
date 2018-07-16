"use strict"
class Animal{
    constructor(numlegs, is_warm_blooded,is_herbivore){
        this.num_legs = 2
        this.is_warm_blooded = true
        this.is_herbivore = true
        this.superpower = new SuperPower();
    }
    
}

class Frog extends Animal {
    constructor(){
        super()
            this.num_legs = 4
            this.is_warm_blooded = false
            this.is_herbivore = false
    }
}

class Duck extends Animal {
    constructor(){
       super()
    }
}

class Fox extends Animal {
    constructor(){
        super()
        this.num_legs = 4
        this.is_herbivore = false
    }
}
class SuperPower{
    constructor(){

    }

    use_laser_vision(){
        console.log("Have laser vision");
    }

    be_invisible(){
        console.log("like a ninja");
    }

    super_swimmer(){
        console.log("like a tornado");
    }

}

var fox = new Fox();
var frog = new Frog();
var duck = new Duck();
fox.superpower.use_laser_vision();//Have laser vision
frog.superpower.super_swimmer();//like a tornado
console.log(duck.num_legs);//2