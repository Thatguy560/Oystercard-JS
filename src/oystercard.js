"use strict";

const defaultBalance = 0;
const minimumBalance = 1;
const maximumBalance = 90;

class Oystercard {
  constructor(balance = defaultBalance) {
    this.balance = balance;
    this.currentTrip = null;
    this.journeys = [];
  }

  checkBalance() {
    return `Your current Oystercard balance is £${"%.2f" % this.balance}`;
  }

  topUp(amount) {
    if (this.maxBalanceReached(amount)) {
      throw new Error(`Maximum balance of £${maximumBalance} reached`);
    }
    this.balance += amount;
    return this.balance;
  }

  maxBalanceReached(amount) {
    return this.balance + amount >= maximumBalance;
  }
}

module.exports = Oystercard;
