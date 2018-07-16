class SuperPower{
    constructor(){
        this.superPower = this.night_vision()
    }
    night_vision(){
        // console.log('test')
        this.superPower = 'night vision'
        // console.log("GUNAKAN NIGHT VISION")
    }
    be_invisible(){
        this.superPower = 'Invisible'
    }
}

class KarnivoraLaut extends SuperPower{
    constructor(){
        super()
        this.name = ''
        this.hidupDi = 'Laut'
        this.pemakan = 'Karnivora'
    }
}

class KarnivoraDarat extends SuperPower{
    constructor(){
        super()
        this.name = ''
        this.hidupDi = 'Darat'
        this.pemakan = 'Karnivora'
    }
}
class HerbivoraDarat extends SuperPower{
    constructor(){
        super()
        this.name = ''
        this.hidupDi = 'Darat'
        this.pemakan = 'Herbivora'
    }
}
class Hiu extends KarnivoraLaut{
    constructor(){
        super()
        this.name = 'Hiu'
    }
}
class Sapi extends HerbivoraDarat{
    constructor(){
        super()
        this.name = 'Sapi'
        this.jumKaki = '4'
    }
}
class Kucing extends KarnivoraDarat {
    constructor(){
        super()
        this.name = 'Kucing'
        this.jumKaki = '4'
        // this.pemakan = this.karnivora
    }
}
class Rubah extends KarnivoraDarat{
    constructor(){
        super()
        this.name = 'Rubah'
        this.jumKaki = '4'
    }
}
var power = new SuperPower()
var karDar = new KarnivoraDarat()
var sapi = new Sapi()
var kucing = new Kucing()
var rubah = new Rubah()
var hiu = new Hiu()
console.log(kucing)
// console.log(rubah)
// console.log(sapi)
// console.log(hiu)
