"use strict"
class Superpower {
  constructor (){
  }

  nightVision(){
    console.log ('Dapat melihat dalam gelap')
  }

  superJump(){
    console.log ('Dapat melompat tinggi ke angkasa')
  }

  superStrength(){
    console.log ('Dapat menghancurkan apa saja yang dipukul')
  }

}

class Animal {
  constructor (numOfLegs, haveFur, hotBlooded){
    this._numOfLegs = numOfLegs
    this._haveFur = haveFur
    this._hotBlooded = hotBlooded
    this._superPower = new Superpower()
  }

  get superPower (){
    return this._superPower
  }
}

class Bat extends Animal {
  constructor () {
    super(2, false, false)
  }
}

class Frog extends Animal {
  constructor (){
    super(4, false, false)
  }
}

class Gorilla extends Animal {
  constructor () {
    super(2, true, true)
  }
}

let bat = new Bat ()
let frog = new Frog ()
let gorilla = new Gorilla ()

console.log(bat)
frog.superPower.superJump()

