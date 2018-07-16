"use strict"

class SuperPower {
    constructor() {
    }
    use_laser_vision() {
        console.log('ZAAAPPP!!')
    }

    be_invisible() {
        console.log('MENGHILANG!!')
    }

    turn_into_giant() {
        console.log('HUAHAHAHAHA!!')
    }
}



class Animal {
    constructor(num_legs, is_warm_blooded) {
        this.num_legs= num_legs
        this.is_warm_blooded= is_warm_blooded
        this.super_power= new SuperPower()

    }
}

class Frog extends Animal {
    constructor(num_legs = 4) {                    // => menjadi default value krn diperlakukan dinamis
        super(num_legs, false, this.super_power.use_laser_vision() )
        // this.num_legs= 2 ; //OVERRIDING => POLYMOR{HYSM}
        // this.is_warm_blooded= false
    }
}

class Bat extends Animal {
    constructor() {
        super(2, true)
        // this.num_legs= 2
        // this.is_warm_blooded= true
    }
}

class Chimpanzee extends Animal {
    constructor() {
        super(2, true)
        //this.num_legs= 2
        //this.is_warm_blooded= true
    }
}

class Fox extends Animal {
    constructor() {
        super(4, true)
        //this.num_legs= 4
        //this.is_warm_blooded= true
    }
}

class Chicken extends Animal {
    constructor() {
        super(2, true)
        // this.num_legs= 2
        // this.is_warm_blooded= true
    }
}

class Snake extends Animal {
    constructor() {
        super(0, false)
        // this.num_legs= 4
        // this.is_warm_blooded= false
    }
}


let chimpanzee= new Chimpanzee()
chimpanzee.super_power.use_laser_vision()
console.log(chimpanzee)

let chicken= new Chicken()
chicken.super_power.be_invisible()
console.log(chicken)

let snake= new Snake()
snake.super_power.turn_into_giant()
console.log(snake)
