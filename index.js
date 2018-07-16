"use strict"

class Animal {
    constructor() {
        this.number_of_legs = 0;
        this.superpower = new SuperPower();
    }
    move() {
        console.log(`Moves with ${this.number_of_legs} legs.`);
    }
}

class FourLegged extends Animal {
    constructor() {
        super();
        this.number_of_legs = 4;
    }
}

class TwoLegged extends Animal {
    constructor() {
        super();
        this.number_of_legs = 2;
    }
}

class SuperPower {
    constructor() {}
    use_laser_vision() {
        console.log('Pew pew pew! Use laser vision.');
    }
    be_invisible() {
        console.log('Ssshh... Turns invisible.');
    }
}

class Frog extends FourLegged {
    constructor() {
        super();
        this.is_warm_blooded = false;
    }
}

class Bat extends TwoLegged {
    constructor() {
        super();
        this.is_warm_blooded = true;
    }
    move() {
        console.log(`Flies with a pair of wing.`);
    }
}

class Chimpanzee extends TwoLegged {
    constructor() {
        super();
        this.is_warm_blooded = true;
    }
}

class Fox extends FourLegged {
    constructor() {
        super();
        this.is_warm_blooded = true;
    }
}

class Chicken extends TwoLegged {
    constructor() {
        super();
        this.is_warm_blooded = true;
    }
}

let frog = new Frog();
let bat = new Bat();
let chimp = new Chimpanzee();
let fox = new Fox();
let chicken = new Chicken();

console.log(frog);
frog.move();
frog.superpower.use_laser_vision();
frog.superpower.be_invisible();
console.log();

console.log(bat);
bat.move();
bat.superpower.use_laser_vision();
bat.superpower.be_invisible();
console.log();

console.log(chimp);
chimp.move();
chimp.superpower.use_laser_vision();
chimp.superpower.be_invisible();
console.log();

console.log(fox);
fox.move();
fox.superpower.use_laser_vision();
fox.superpower.be_invisible();
console.log();

console.log(chicken);
chicken.move();
chicken.superpower.use_laser_vision();
chicken.superpower.be_invisible();
console.log();
