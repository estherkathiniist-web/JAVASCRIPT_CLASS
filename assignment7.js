// ABSTRACT CLASS (BASE CLASS)
class Payment {
  constructor(balance) {
    if (this.constructor === Payment) {
      throw new Error("Abstract class cannot be instantiated.");
    }
    this._balance = balance; // Encapsulation
  }

  pay(amount) {
    throw new Error("pay() method must be implemented.");
  }

  getBalance() {
    return this._balance;
  }

  deduct(amount) {
    if (amount <= this._balance) {
      this._balance -= amount;
      return true;
    } else {
      return false;
    }
  }
}

// INHERITANCE + POLYMORPHISM

class MpesaPayment extends Payment {
  pay(amount) {
    if (this.deduct(amount)) {
      console.log(`Paid KES ${amount} via M-Pesa. Remaining balance: ${this.getBalance()}`);
    } else {
      console.log("Insufficient M-Pesa balance.");
    }
  }
}

class CardPayment extends Payment {
  pay(amount) {
    if (this.deduct(amount)) {
      console.log(`Paid KES ${amount} using Card. Remaining balance: ${this.getBalance()}`);
    } else {
      console.log("Card payment failed. Insufficient funds.");
    }
  }
}

class BankPayment extends Payment {
  pay(amount) {
    if (this.deduct(amount)) {
      console.log(`Paid KES ${amount} via Bank Transfer. Remaining balance: ${this.getBalance()}`);
    } else {
      console.log("Bank transfer failed. Insufficient funds.");
    }
  }
}

// POLYMORPHISM IN ACTION
const payments = [
  new MpesaPayment(5000),
  new CardPayment(10000),
  new BankPayment(20000)
];

payments.forEach(payment => payment.pay(3000));
