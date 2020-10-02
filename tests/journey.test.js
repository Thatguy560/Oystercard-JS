"use strict";

const Journey = require("../src/journey");

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
    journey.startedJourney("Enfield Town");
    expect(journey.entryStation).toEqual("Enfield Town");
  });

  it("Shows you the exit station when a journey is finished", () => {
    journey.finishedJourney("Moorgate");
    expect(journey.exitStation).toEqual("Moorgate");
  });

  it("Checks that once in journey the entry station exists but the exit station doesn't exist yet", () => {
    journey.startedJourney("Enfield Town");
    journey.inJourney();
    expect(journey.entryStation).toEqual("Enfield Town");
    expect(journey.exitStation).toEqual(null);
  });

  it("Checks that if we forget to tap in at the station but we tap out we're charged the maximum fee", () => {
    journey.startedJourney("Enfield Town");
    journey.calculateFare();
    expect(journey.fare).toEqual(6);
  });

  it("Checks that if we don't tap out at the station we're charged the maximum fee", () => {
    journey.finishedJourney("Old Street");
    journey.calculateFare();
    expect(journey.fare).toEqual(6);
  });

  it("Will charge you the correct fee if you charge in and out correctly", () => {
    journey.startedJourney("Finsbury Park");
    journey.finishedJourney("Old Street");
    journey.calculateFare();
    expect(journey.fare).toEqual(3);
  });
});
