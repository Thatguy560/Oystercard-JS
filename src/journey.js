"use strict";

const penaltyFare = 6;
const normalFare = 3;
class Journey {
  constructor() {
    this.entryStation = null;
    this.exitStation = null;
    // this.penaltyFare = 6;
    // this.normalFare = 3;
    this.fare;
  }

  startedJourney(entryStation) {
    this.entryStation = entryStation;
  }

  finishedJourney(exitStation) {
    this.exitStation = exitStation;
  }

  inJourney() {
    this.entryStation !== null && this.exitStation === null;
  }

  calculateFare() {
    this.entryStation === null || this.exitStation === null
      ? (this.fare = penaltyFare)
      : (this.fare = normalFare);
  }
}

module.exports = Journey;
