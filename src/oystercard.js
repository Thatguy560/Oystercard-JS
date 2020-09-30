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

  topUp(amount) {
    this.balance += amount;
  }
}

module.exports = Oystercard;
