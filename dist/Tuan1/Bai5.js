"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BankAccount {
    deposit(dep) {
        this.balance = this.balance + dep;
    }
    withdraw(withdraw) {
        this.balance = this.balance - withdraw;
    }
    constructor(balance) {
        this.balance = balance;
    }
}
const bankOfNghia = new BankAccount(200);
bankOfNghia.deposit(10000);
console.log("Money after deposit " + 10000 + " is " + bankOfNghia.balance);
bankOfNghia.withdraw(200);
console.log("Money after withdraw " + 200 + " is " + bankOfNghia.balance);
