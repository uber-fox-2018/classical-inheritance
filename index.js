"use strict"
 
class Animal {
    constructor(num_legs, is_warm_blooded){
        this._num_legs = num_legs;
        this._is_warm_blooded = is_warm_blooded;
        this._superpower = new SuperPower()
    }

    get num_legs(){
        return this._num_legs;
    }

    get is_warm_blooded(){
        return this._is_warm_blooded;
    }

    get superpower(){
        return this._superpower;
    }

}

class Frog extends Animal {
    constructor(num_legs, is_warm_blooded){
        super(num_legs, is_warm_blooded)
    }
}

class Bat extends Animal {
    constructor(num_legs, is_warm_blooded){
        super(num_legs, is_warm_blooded)
    }
}

class Chimpanzee extends Animal {
    constructor(num_legs, is_warm_blooded){
        super(num_legs, is_warm_blooded)
    }
}

class Fox extends Animal {
    constructor(num_legs, is_warm_blooded) {
        super(num_legs, is_warm_blooded)
    }
}

class Chicken extends Animal {
    constructor(num_legs, is_warm_blooded) {
        super(num_legs, is_warm_blooded)
    }
}

class SuperPower {

    use_laser_vision(){
        console.log('Laser api, zrrrrrrrr !!!');
    }

    be_invisible(){
        console.log('~~~~~~~~ menghilang !!!');
    }

    fast_run(){
        console.log('Wuzzzzzss, kaburrrr !!!');
    }

    flying(){
        console.log('Ciattt, terbang ke angkasa !!!');
    }

    bomb(){
        console.log('Rasakan bom ini, dhuarrrr !!!'); 
    }
}


let animal = new Animal(2, true)
console.log(animal);

let frog = new Frog(2, true)
console.log(frog);
frog.superpower.use_laser_vision()

let bat = new Bat(2, true)
console.log(bat);
bat.superpower.be_invisible()

let chimpanzee = new Chimpanzee(2, true)
console.log(chimpanzee);
chimpanzee.superpower.fast_run()

let fox = new Fox(4, true)
console.log(fox);
fox.superpower.flying()

let chicken = new Chicken(2, true)
console.log(chicken);
chicken.superpower.bomb()

