// Polymorphism ~ Same named functions that perform different tasks within classes.

class Dog{
    makeSound(){
        console.log("It barks!")
    }
}

class Cat extends Dog{
    makeSound(){
        console.log("It Meows!")
    }
}
const meow=new Cat()
meow.makeSound()


class Hen extends Cat{
    makeSound(){
        console.log("A Chicken crows!")
    }
}
const  chicken= new Hen()
chicken.makeSound()