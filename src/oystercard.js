"use strict";

const Journey = require("./journey"); // require is causing the issue
const defaultBalance = 0;

class Oystercard {
  constructor(balance = defaultBalance) {
    this.balance = balance;
    this.currentTrip = null;
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

  touchIn(entryStation, zone) {
    if (this.balance < this.minimumBalance) {
      throw new Error(`Minimum balance of £${this.minimumBalance} needed.`);
    }
    this.currentTrip !== null
      ? this.addJourney() && this.calculateFare()
      : this.newJourney();
    this.currentTrip.startedJourney(entryStation);
  }

  touchOut(exitStation, zone) {
    if (this.currentTrip === null) {
      this.newJourney();
    }
    this.currentTrip.finishedJourney(exitStation);
    this.calculateFare();
    this.addJourney();
    this.currentTrip = null;
  }

  deduct(amount) {
    this.balance -= amount;
  }

  addJourney() {
    this.journeyHistory.push(this.currentTrip);
  }

  calculateFare() {
    this.deduct(this.currentTrip.calculateFare());
  }

  newJourney() {
    this.currentTrip = new Journey();
  }
}

module.exports = Oystercard;
