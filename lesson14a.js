// PILLARS OF OOP(OBJECT ORIENTED PROGRAMMING) ~ INHERITANCE IN OOP
// INHERITANCE is used when you want to borrow/ inherit properties and functionalities from another class

// Parent ~ inherited from (also SUPERCLASS)
// Child ~ inherits(also SUBCLASS)

class Dog{
    constructor(name, age){
        this.name=name
        this.age=age
    }
    bark(){
        console.log(`${this.name} barks agressively.`)
    }
}
// INHERITANCE HAPPENS HERE(at the subclass)
// We use the word EXTENDS to inherit

class GermanShephard extends Dog{
    constructor(name, age, immunization){
        super(name, age) //from superclass Dog
        this.immunization=immunization  
    }

    immune(){
        console.log(`${this.name} is ${this.age} and the immunization is ${this.immunization}`)
    }
}
// Actual GS
const Bosco= new GermanShephard("Bosco", 4, true)

Bosco.bark()
console.log(Bosco.age)
Bosco.immune()

const puppy = new GermanShephard("Puppy", 3, false)
puppy.immune()


class Terrier extends GermanShephard{
    
}
const Doggy=new Terrier("Doggy", 2, false)
Doggy.immune()
