"use strict"

class Animal {
    constructor(type){
        this.num_legs = 2
        this.type = type
        this.super_power = new SuperPower()
    }
}

class Frog extends Animal{
    constructor(){
        super('amphibi')
        this.num_legs = 4
    }
}

class Bat extends Animal{
    constructor(){
        super('Nocturnal')
    }
}

class Chimpanzee extends Animal{
    constructor(){
        super('mammals')
    }
}

class Fox extends Animal {
    constructor(){
        super('Carnivore')
        this.num_legs = 4
    }
}

class Chicken extends Animal {
    constructor(){
        super('Poultry')
        
    }
}

class SuperPower{
    constructor(){

    }

    use_laser_vision(){
        console.log(`i Can See youuuu`);
        
    }

    be_invisible(){
        console.log(`You Cant See me`);
        
    }
}

// let superPower = new SuperPower()

let katak = new Frog()
console.log(katak);
katak.super_power.be_invisible()

let kelelawar = new Bat()
kelelawar.super_power.use_laser_vision();

let simpanse = new Chimpanzee()
console.log(simpanse);

let fox = new Fox()
console.log(fox);

let ayam = new Chicken()
console.log(ayam);




