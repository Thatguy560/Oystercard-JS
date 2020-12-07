"use strict";

// const Journey = require("../src/journey");
import Journey from "../src/journey";

let journey;

beforeEach(() => {
  journey = new Journey();
});

describe("Journey", () => {
  it("Shows you before a journey is started the entry and exit station don't exist.", () => {
    expect(journey.entryStation).toEqual(null);
    expect(journey.exitStation).toEqual(null);
  });

  it("Shows you the entry station when a journey is started", () => {
    journey.startedJourney("Enfield Town", 5);
    expect(journey.entryStation).toEqual("Enfield Town");
    expect(journey.entryZone).toEqual(5);
  });

  it("Shows you the exit station when a journey is finished", () => {
    journey.finishedJourney("Moorgate", 1);
    expect(journey.exitStation).toEqual("Moorgate");
    expect(journey.exitZone).toEqual(1);
  });

  it("Checks that once in journey the entry station exists but the exit station doesn't exist yet", () => {
    journey.startedJourney("Enfield Town", 5);
    // journey.inJourney();
    expect(journey.entryStation).toEqual("Enfield Town");
    expect(journey.exitStation).toEqual(null);
  });

  it("Checks that if we forget to tap in at the station but we tap out we're charged the maximum fee", () => {
    journey.startedJourney("Enfield Town", 5);
    journey.calculateFare();
    expect(journey.fare).toEqual(6);
  });

  it("Checks that if we don't tap out at the station we're charged the maximum fee", () => {
    journey.finishedJourney("Old Street", 1);
    journey.calculateFare();
    expect(journey.fare).toEqual(6);
  });

  it("Will charge you the correct fee if you charge in and out correctly", () => {
    journey.startedJourney("Finsbury Park", 2);
    journey.finishedJourney("Old Street", 1);
    journey.calculateFare();
    expect(journey.fare).toEqual(3);
  });
});
