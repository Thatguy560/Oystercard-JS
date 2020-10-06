"use strict";

const penaltyFare = 6;
const normalFare = 3;
class Journey {
  constructor() {
    this.entryStation = null;
    this.exitStation = null;
    this.entryZone;
    this.exitZone;
    // this.penaltyFare = 6;
    // this.normalFare = 3;
    this.fare;
  }

  startedJourney(name, zone) {
    this.entryStation = name;
    this.entryZone = zone;
  }

  finishedJourney(name, zone) {
    this.exitStation = name;
    this.exitZone = zone;
  }

  // inJourney() {
  //   this.entryStation !== null && this.exitStation === null;
  // }

  calculateFare() {
    this.entryStation === null || this.exitStation === null
      ? (this.fare = penaltyFare)
      : (this.fare = normalFare);
  }
}

module.exports = Journey;
