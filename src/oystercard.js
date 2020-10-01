"use strict";

const defaultBalance = 0;

class Oystercard {
  constructor(balance = defaultBalance) {
    this.balance = balance;
    this.currentTrip = null;
    this.journeys = [];
    this.minimumBalance = 1;
    this.maximumBalance = 90;
  }

  checkBalance() {
    return `Your current Oystercard balance is £${this.balance.toFixed(2)}`;
  }

  topUp(amount) {
    if (this.maxBalanceReached(amount)) {
      throw new Error(`Maximum balance of £${this.maximumBalance} reached`);
    }
    this.balance += amount;
    return this.balance;
  }

  touchIn() {}

  touchOut() {}

  journeyHistory() {}

  deduct(amount) {
    this.balance -= amount;
  }

  maxBalanceReached(amount) {
    return this.balance + amount > this.maximumBalance;
  }

  insufficientFunds() {
    this.balance < this.minimumBalance;
  }

  addJourney() {
    this.journeys.push(this.currentTrip);
  }

  newJourney() {
    this.currentTrip = new Journey();
  }
}

module.exports = Oystercard;
