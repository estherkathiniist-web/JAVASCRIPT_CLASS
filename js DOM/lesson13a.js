//object
const school={
    class:7,
    student:600,
    courses:["software,cyber"]
}
console.log(school)
console.log(typeof(school))

// Object oriented programing=it's a way of structuring code using object and classes for 
// reuserbility,easy marnagement and scaling
//step1; create a class(plan/blue print)
//step2:giive the properties(characteristics) and methods (functionality)

// BUILD HOUSES
class Houses{
    // properties
    constructor(color,floortype,rooftype,haspool){
        // This
        this.color=color
        this.floortype=rooftype
        this.haspool=haspool

    }
    // METHODS ~ Functionalities
    iot(){
        console.log(`My ${this.color} house with ${this.floortype} floors is heated and controlled by Alexa`)
    }
}
// creating the object
const WestyHouse=new Houses("Red", "Wooden", "Mabati", true)
console.log(WestyHouse)

const Waiyaki = new Houses("Blue", "Tiled", "Tiles", false)
console.log(Waiyaki)
console.log(Waiyaki.color)
console.log(WestyHouse.rooftype)

// Accessing methods
WestyHouse.iot()
Waiyaki.iot()

// method
// poolFeature(){
//    if(this.haspool){
//      console.log("The house has a luxurious heated pool")
//    }else{
//     console.log("Pool under construction")
//    }
// }