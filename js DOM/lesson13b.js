// BANKING SYSTEM
// OWNER, WITHDRAWAL, DEPOSIT

// CLASS BANK
// PROPERTIES => OWNER, BALANCE
// METHODS WITHDRAW AND DEPOSIT
 class Bank{
    constructor(owner, balance){
        this.owner=owner
        this.balance=balance
    }
    // methods(deposit)
    deposit(amount){
        this.balance=this.balance+amount
        console.log(`Your new balance is ${this.balance}`)
    }
    // method(withdraw)
    withdraw(amount){
        if(amount >this.balance){
            console.log(`Your balance is ${this.balance}. You cannot withdraw`)
        }else{
        this.balance=+amount 
            console.log(`You have withdrawn ${amount}. Your balance is ${this.balance}`)
        }
    }
 }

 const Kelly= new Bank("Kelly", 67000)
 console.log(Kelly)
 Kelly.deposit(20000)