"use strict"
class Animals {
    constructor(object) {
        this._spesies = object.spesies;
        this._habitat = object.habitat;
        this._numLeg = 4;

    }

}
class SuperPower {
    use_laser_vision() {
        return ('This Animals use my laser vision')
    }

    be_invisible() {
        return ('This Anmimal is Invicible')
    }
}

class Frog extends Animals {
    constructor(object) {
        super(object)
        this._food = object.food;

    }
}

class Bat extends Animals {
    constructor(object) {
        super(object)
        this._numLeg = 2;
        this._food = object.food;
        this.superPower = new SuperPower
    }
}

class Chimpanzee extends Animals {
    constructor(object) {
        super(object)
        this._food = object.food;
        this.superPower = new SuperPower
    }
}

class Fox extends Animals {
    constructor(object) {
        super(object)
        this._food = object.food;
        this.superPower = new SuperPower
    }
}

class Chicken extends Animals {
    constructor(object) {
        super(object)
        this._numLeg = 2;
        this._food = object.food;
    }
}




var animals = new Animals({ spesies: 'Binatang', habitat: 'Darat, Laut dan Udara', isWarm_Blood: 'Hot and Cool' });
var frog = new Frog({ spesies: 'Amphibi', habitat: 'sungai', food: 'serangga', isWarm_Blood: 'Cool' })
var bat = new Bat({ spesies: 'mamalia', habitat: 'goa', food: 'buah-buah', isWarm_Blood: 'Hot and Cool' })
var chimpanzee = new Chimpanzee({ spesies: 'primata', habitat: 'pohon', food: 'buah-buahan', isWarm_Blood: 'Hot' })
var fox = new Fox({ spesies: 'mamalia', habitat: 'hutan', food: 'daging', isWarm_Blood: 'Hot and Cool' })
var chicken = new Chicken({ spesies: 'unggas', habitat: 'hutan', food: 'biji-bijian', isWarm_Blood: 'Hot' })




console.log(animals);
console.log(frog);
console.log(bat)
console.log(chimpanzee);
console.log(fox);
console.log(chicken);

console.log(bat.superPower.be_invisible());
console.log(fox.superPower.use_laser_vision());
