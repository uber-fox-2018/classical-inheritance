"use strict"
// parent
class Animal {
  constructor() {
    this._num_legs = 2
    this._is_warm_blooded = false
    this._superPower = new SuperPower()
  }

  set num_legs(legs) {
    this._num_legs = legs
  }

  set is_warm_blooded(state) {
    this._is_warm_blooded = state
  }

  get num_legs() {
    return this._num_legs
  }

  get is_warm_blooded() {
    return this._is_warm_blooded
  }
  get superPower() {
    return this._superPower
  }
}

//child (inheritance Methode)
class Frog extends Animal {
  constructor(numLegs) {
    super()
    this.num_legs = numLegs
  }
  set superpower(power) {
    this._superPower = power
    // this.superPower = power 'why if this like get in parent not works?'
  }
}

class Bat extends Animal {
  constructor(warmBlood) {
    super()
    this.is_warm_blooded = warmBlood
  }
}

class Chimpanzee extends Animal {
  constructor() {
    super()
  }
  set superpower(power) {
    this._superPower = power
    // this.superpower = power
  }
}

class Fox extends Animal {
  constructor(numLegs, warmBlood) {
    super()
    this.num_legs = numLegs
    this.is_warm_blooded = warmBlood
  }
}

class Chicken extends Animal {
  constructor() {
    super()
  }
}

class SuperPower {
  constructor() {
    this.superPower = 'aku lemah tidak punya kekuatan'
  }
  static user_laser_vision() {
    return 'Kekuatan laseer mauuutt ciiaaaatt'
  }

  static be_invisible() {
    return 'Kekuatan menghilang dari angan2 siiiing'
  }
}

console.log('======PARENT======');
let animal = new Animal()
console.log(animal);
console.log('======CHILD=======');
let chicken = new Chicken()
console.log(chicken)
let fox = new Fox(4, true)
console.log(fox);
let frog = new Frog(4)
console.log(frog);
let chimpanzee = new Chimpanzee()
console.log(chimpanzee);
let bat = new Bat(true)
console.log(bat);
console.log('======SUPER POWER======');
frog.superpower = SuperPower.be_invisible()
console.log(frog);
chimpanzee.superpower = SuperPower.user_laser_vision()
console.log(chimpanzee);