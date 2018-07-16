"use strict"
class Animal {
  constructor (name, num_legs) {
    this.name = name
    this.num_legs = num_legs
    this.superPower = new SuperPower()
  }
}

class Frog extends Animal { 
  constructor(name, num_legs) {
    super(name, num_legs)
    this.swin = true
  }
}

class Bat extends Animal {
  constructor(name, num_legs) {
    super(name, num_legs)
    this.wing = true
  }
}

class Fox extends Animal {
  constructor(name, num_legs) {
    super(name, num_legs)
    this.fangs = true
  }
}

class SuperPower {
  constructor () {
    this.super_power = 'whoooaa'
  }

  superFrog() {
    return this.super_power = 'krokkrokrkokr'
  }

  superBat() {
    return this.super_power = 'triirttiirttriit'
  }

  superFox() {
    return this.super_power = 'ngggauungg nggauuung'
  }
}

const animal = new Animal('Moms Animal', 4)
console.log(animal)
const frog = new Frog('Frog', 4)
console.log(frog)
const bat = new Bat('Bat', 2)
console.log(bat)
const fox = new Fox('Fox', 4)
console.log(fox)
console.log(`Super power ${fox.name} : ${fox.superPower.superFox()}`)
console.log(`Super power ${bat.name} : ${bat.superPower.superBat()}`)
console.log(`Super power ${frog.name} : ${frog.superPower.superFrog()}`)
// console.log(fox.superPower.superFox())