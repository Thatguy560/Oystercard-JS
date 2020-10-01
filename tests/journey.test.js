"use strict";

const Journey = require("../src/journey");

describe("Journey", () => {
  let journey;
  let station;

  beforeEach(() => {
    journey = new Journey();
  });

  it("shows you before a journey is started the entry and exit station don't exist.", () => {
    expect(journey.entryStation).toEqual(null);
    expect(journey.exitStation).toEqual(null);
  });

  it("shows you the entry station when a journey is started", () => {
    expect(journey.startedJourney("Enfield Town")).toEqual("Enfield Town");
  });
});
