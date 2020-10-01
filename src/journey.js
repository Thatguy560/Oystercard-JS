"use strict";

class Journey {
  constructor() {
    this.entryStation = null;
    this.exitStation = null;
    this.penaltyFare = 6;
    this.normalFare = 3;
    this.fare;
  }

  startedJourney(entrystation) {
    this.entryStation = entrystation;
  }

  finishedJourney(exitStation) {
    this.exitStation = exitStation;
  }

  inJourney() {
    this.entryStation !== null && this.exitStation === null;
  }

  calculateFare() {
    this.entryStation === null || this.exitStation === null
      ? (this.fare = this.penaltyFare)
      : (this.fare = this.normalFare);
  }
}

module.exports = Journey;
