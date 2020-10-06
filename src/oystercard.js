"use strict";

const Journey = require("./journey");
const defaultBalance = 0;

class Oystercard {
  constructor(balance = defaultBalance) {
    this.balance = balance;
    // this.currentTrip = null;
    // this.inJourney = null
    this.currentTrip = new Journey();
    this.journeyHistory = [];
    this.minimumBalance = 1;
    this.maximumBalance = 90;
  }

  checkBalance() {
    return `Your current Oystercard balance is £${this.balance.toFixed(2)}`;
  }

  topUp(amount) {
    if (this.balance + amount > this.maximumBalance) {
      throw new Error(`Maximum balance of £${this.maximumBalance} reached`);
    }
    this.balance += amount;
    return this.balance;
  }

  deduct(amount) {
    this.balance -= amount;
  }

  touchIn(name, zone) {
    if (this.balance < this.minimumBalance) {
      throw new Error(`Minimum balance of £${this.minimumBalance} needed.`);
    }
    this.currentTrip !== null
      ? this.currentTrip && this.calculateFare()
      : this.currentTrip;
    this.currentTrip.startedJourney(name, zone);
  }

  touchOut(name, zone) {
    if (this.currentTrip === null) {
      this.currentTrip;
    }
    this.currentTrip.finishedJourney(name, zone);
    this.calculateFare();
    this.addJourney();
    this.currentTrip = null;
  }

  addJourney() {
    this.journeyHistory.push(this.currentTrip);
  }

  calculateFare() {
    this.deduct(this.currentTrip.calculateFare());
  }
  // newJourney() {
  //   this.currentTrip = new Journey();
  // }
}

module.exports = Oystercard;
