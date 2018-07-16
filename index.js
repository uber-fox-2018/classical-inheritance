"use strict"
class Animal {
    constructor(num_legs, is_warm_blooded) {
        this.num_legs = num_legs;
        this.is_warm_blooded = is_warm_blooded;
        this.superpower = new Superpower();
    }
}

class Frog extends Animal {
    constructor(num_legs, is_warm_blooded) {
        super(num_legs, is_warm_blooded)
    }
}

class Bat extends Animal {
    constructor(num_legs, is_warm_blooded) {
        super(num_legs, is_warm_blooded)
    }
}

class Chimpanzee extends Animal {
    constructor(num_legs, is_warm_blooded) {
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

class Superpower {
    constructor() {
        this.superpower = 'weakling, no power.';
    }

    teleportation() {
        this.superpower = 'ZZIIINNNGGG!!! Off to another dimension!';
    }

    laser_beam() {
        this.superpower = 'PEW PEW PEW!!!';
    }

    camouflage() {
        this.superpower = "Now you see me, Now you don't!";
    }

    ghostify() {
        this.superpower = 'BOO! You can see right through me!';
    }

    super_strength() {
        this.superpower = 'WRECKKKKK!'
    }
}

let naveen = new Frog(4, false);
naveen.superpower.camouflage();
console.log(naveen);

let batman = new Bat(2, true);
batman.superpower.ghostify();
console.log(batman);

let kong = new Chimpanzee(2, true);
kong.superpower.super_strength();
console.log(kong);

let finnick = new Fox(4, true);
finnick.superpower.teleportation();
console.log(finnick);

let chickaroo = new Chicken(2, true);
chickaroo.superpower.laser_beam();
console.log(chickaroo);
