"use strict"
class superpower {
    constructor(){
        
    }

    lari_kencang () {
        console.log('wiihhhhh kencang')
    }
    ngilang (){
        console.log('lah kok ilang')
    }
}

class herbivora extends superpower {
    constructor(){
        super()
        this.makanan = 'rumput'
        this.superpower = new superpower()
    }
}

class karnivora extends superpower{
    constructor(){
        super()
        this.makanan = 'daging'
        this.superpower = new superpower()
    }
}

class macan extends karnivora {
    constructor() {
        super()
        
    }
}

class kucing extends karnivora {
    constructor() {
        super()
        
    }
}


class ayam extends herbivora {
    constructor() {
        super()
    }
}

class kambing extends herbivora {
    constructor() {
        super()
    }
}

let superpower_coy = new superpower()
let hewan_kucing = new kucing ()
let hewan_macan = new macan()
let hewan_kambing = new kambing ()
let hewan_ayam = new ayam ()

console.log(hewan_kambing)
console.log(hewan_kambing.superpower.lari_kencang())
// console.log(hewan_ayam)

 console.log(hewan_macan)
 console.log(hewan_macan.superpower.ngilang())
// console.log(hewan_kucing)