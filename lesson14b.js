// ENCAPSULATION ~Used when important data is being hidden, that should not be messed with or exposed unnecessarily.
// Protection of data
// Encapsulated data can not be accessed outside the class

class LoginPage{
    // hide the data
    #password                 //to hide you use a # and the variable name which will be used to hide it.
    constructor(name, email, password){
        this.name=name
        this.email=email
        this.#password=password

    }
    checkPassword(){
        console.log(this.#password)
    }
}

const User= new LoginPage("Esther","Essy@gmail.com", "1234")

console.log(User)
console.log(User.password)

class Uber{
    #baseFare=30

    totalFare(distance){
        const total=this.#baseFare + (distance*50)
        console.log(`Your total fare is ${total}`)
    }
    
}
const Fare = new Uber()
Fare.totalFare(45)
