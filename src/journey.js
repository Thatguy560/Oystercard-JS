"use strict";

const penaltyFare = 6;
const normalFare = 3;

class Journey {
  constructor() {
    this.entryStation = null;
    this.exitStation = null;
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
      ? penaltyFare
      : normalFare;
  }
}

module.exports = Journey;
