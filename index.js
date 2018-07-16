"use strict"

class Animal {
    constructor(num_legs, is_warm_blooded) {
        this.num_legs = 2;
        this.is_warm_blooded = true;
        this.superpower = new Superpower();
    }
}

class Frog extends Animal {
    constructor() {
        super()
            this.num_legs = 4
            this.is_warm_blooded = false
    }
}

class Bat extends Animal {
    constructor() {
        super()
            
    }
}

class Chimpanzee extends Animal {
    constructor() {
        super()
    }
}

class Fox extends Animal {
    constructor() {
        super()
            this.num_legs = 4
    }
}

class Chicken extends Animal {
    constructor() {
        super()
    }
}

class Superpower {
    constructor() {

    }

    nightVision() {
        this.superpower = 'I can see you..';
    }

    highJump() {
        this.superpower = 'BOING BOING';
    }

    rage() {
        this.superpower = 'AAAARRRRRGHHHHHHHHH!!!!!!';
    }

    sly() {
        this.superpower = 'i can get what i want no matter what';
    }

    flash() {
        this.superpower = 'BZINGGG!'
    }
}

let froggy = new Frog();
froggy.superpower.highJump();
console.log(froggy);

let batboy = new Bat();
batboy.superpower.nightVision();
console.log(batboy);

let capuccin = new Chimpanzee();
capuccin.superpower.rage();
console.log(capuccin);

let guminho = new Fox();
guminho.superpower.sly();
console.log(guminho);

let chick = new Chicken();
chick.superpower.flash();
console.log(chick);