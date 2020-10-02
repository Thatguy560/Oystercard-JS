"use strict";

const Oystercard = require("../src/oystercard");
const Journey = require("../src/journey");

let oystercard;
let entryStation;
let exitStation;
let zone;
let journey;

beforeEach(() => {
  oystercard = new Oystercard();
  journey = new Journey();
});

describe("Oystercard", () => {
  it("will let you top up your Oystercard", () => {
    oystercard.topUp(5);
    expect(oystercard.balance).toEqual(5);
  });

  it("has a maximum balance of £90.", () => {
    oystercard.topUp(1);
    expect(() => {
      oystercard.topUp(oystercard.maximumBalance);
    }).toThrowError(`Maximum balance of £${oystercard.maximumBalance} reached`);
  });

  it("wont let you travel unless you have the minimum balance of £1", () => {
    expect(() => {
      oystercard.touchIn(entryStation, zone);
    }).toThrowError(`Minimum balance of £${oystercard.minimumBalance} needed.`);
  });

  it("will allow you to check the Oystercard balance at any time.", () => {
    expect(oystercard.checkBalance()).toBe(
      `Your current Oystercard balance is £${oystercard.balance}.00`
    );
  });

  it("expects to know where I've travelled from", () => {
    oystercard.topUp(oystercard.maximumBalance);
    oystercard.touchIn("Enfield Town", 5);
    expect(oystercard.currentTrip.entryStation).toEqual("Enfield Town");
    // expect(oystercard.currentTrip.zone).toEqual(5);
  });

  it("will save a journey if you touch in and out at the station", () => {
    oystercard.topUp(oystercard.maximumBalance);
    oystercard.touchIn("Enfield Town", 5);
    oystercard.touchOut("Liverpool Street", 1);
    expect(oystercard.journeyHistory).toEqual([
      {
        entryStation: "Enfield Town",
        exitStation: "Liverpool Street",
        fare: 3,
      },
    ]);
  });

  it("Will save a journey if you forget to touch in at the station", () => {
    oystercard.topUp(10);
    oystercard.touchOut("Liverpool Street", 1);
    expect(oystercard.journeyHistory).toEqual([
      { entryStation: null, exitStation: "Liverpool Street", fare: 6 },
    ]);
  });

  it("will deduct the balance from your Oystercard", () => {
    oystercard.topUp(10);
    oystercard.touchIn("Enfield Town", 5);
    oystercard.touchOut("Liverpool Street", 1);
    expect(oystercard.balance).toEqual(7);
  });
});
