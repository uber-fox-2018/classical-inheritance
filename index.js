"use strict"

class Animal {
    constructor(){
        this._num_legs = 4
        this._tail = 1
        this._genre = 'herbivora'
    }

    voice(){
        return 'citcitcuit'
    }
}

class Frog extends Animal{
    constructor(){
        super()
        this._tail = 0
        this._genre = 'insektipora'
    }

    voice(){
        return 'krok krok krok'
    }
}

class Bat extends Animal{
    constructor(){
        super()
        this._num_legs = 2
        this._genre = 'insektipora'
    }

    voice(){
        return '`aaaaaaaaaa'
    }
}
class Chimpanze extends Animal{
    constructor(){
        super()
        this._num_legs = 2
        this._genre = 'insektipora'
    }

    voice(){
        return `uu aa uu aa`
    }
}

class Fox extends Animal{
    constructor(){
        super()
        this._genre = 'karnivora'
        this.SuperPower = new SuperPower()

    }

    voice(){
        return 'auuuuuuuuuuu'
    }
}

class Chicken extends Animal{
    constructor(){
        super()
        this._num_legs = 2
        this._genre = 'insektipora'

    }

    voice(){
        return 'ciak ciak ciak'
    }
}


class SuperPower {
    constructor(){

    }

    be_invisible(){
        return '123 tring !!! yah ilang'
    }

    user_laser_vision(){
        return 'kekuatan laser gagah perkasa piwwwwwwwww'
    }
}


var chicken = new Chicken()
console.log(chicken._num_legs);
var animal =  new Animal()
console.log(animal.voice());

var  fox =  new Fox()
console.log(fox.voice());
console.log(fox._genre);
console.log(fox.SuperPower.be_invisible());




