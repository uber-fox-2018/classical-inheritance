"use strict"

class Animal {
    constructor(num_legs, is_warm_blooded) {
        this.num_legs= num_legs
        this.is_warm_blooded= is_warm_blooded

    }
}

class Frog extends Animal {
    constructor(num_legs = 4) {                    // => menjadi default value krn diperlakukan dinamis
        super(num_legs, false)
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

let frog = new Frog(3);
console.log(frog)

let chimpanzee= new Chimpanzee()
console.log(chimpanzee)

let snake= new Snake()
console.log(snake)