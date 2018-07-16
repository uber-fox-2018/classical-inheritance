"use strict"
class SuperPower {
    constructor () {

    }
    be_invisible() {
        console.log('Poooffff~')
    }
    use_laser_vision() {
        console.log('Pziiiieeewwww!!')
    }
}
class Animal {
    constructor (){
        this.superPower = new SuperPower()
    }
}
class HewanTunggangan extends Animal {
    constructor () {
        super()
        this.Leg = 4
        this.Head = 1
        this.Food = 'Grass'
        this.Blodd = 'Warm Blood'
    }
}

class Kuda extends HewanTunggangan{
    constructor () {
        super()
    }
}

class Kerbau extends HewanTunggangan{
    constructor () {
        super()
    }
}

class Unta extends HewanTunggangan{
    constructor () {
        super()
    }
}

var kuda = new Kuda()
var unta = new Kerbau()
var kerbau = new Unta()

// kuda.be_invisible()
kuda.superPower.be_invisible()