"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CashPayment {
    pay(amount) {
        console.log(`Paid ${amount} using Cash.`);
    }
}
class CardPayment {
    pay(amount) {
        console.log(`Paid ${amount} using Card.`);
    }
}
const cash = new CashPayment();
cash.pay(100);
const card = new CardPayment();
card.pay(250);
