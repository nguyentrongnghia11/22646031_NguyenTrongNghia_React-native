interface Payment {
    pay(amount: number): void;
}

class CashPayment implements Payment {
    pay(amount: number): void {
        console.log(`Paid ${amount} using Cash.`);
    }
}

class CardPayment implements Payment {
    pay(amount: number): void {
        console.log(`Paid ${amount} using Card.`);
    }
}

const cash: Payment = new CashPayment();
cash.pay(100);

const card: Payment = new CardPayment();
card.pay(250);  
