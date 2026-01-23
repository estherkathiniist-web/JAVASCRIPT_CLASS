// Abstraction ~ used to hide system complexity, only focusing on end results, only exposing the essential details.

class coffeeMaker{
    // Hide complexity
    #grindingcoffee(){
        console.log("Grinding coffee beans...")
    }
    #boilingwater(){
        console.log("Boiling water...")
    }

    // Making of cofee(end product)
    makingcoffee(){
        this.#grindingcoffee()
        this.#boilingwater()
        console.log("Coffee is ready!")
    }
}

const coffee = new coffeeMaker()
coffee.makingcoffee()
