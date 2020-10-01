"use strict";

const Oystercard = require("../src/oystercard");
const Journey = require("../src/journey.js");
const Station = require("../src/station.js");

describe("Oystercard", () => {
  let oystercard;
  let entryStation;
  let exitStation;

  beforeEach(() => {
    oystercard = new Oystercard();
  });

  it("will let you top up your Oystercard", () => {
    oystercard.topUp(5);
    expect(oystercard.balance).toEqual(5);
  });

  it("has a maximum balance of £90.", () => {
    expect(() => {
      oystercard.topUp(91);
    }).toThrowError("Maximum balance of £90 reached");
  });

  describe("For making journeys with your Oystercard", () => {
    beforeEach(() => {
      oystercard.topUp(90);
    });
  });

  it("will allow you to check the Oystercard balance at any time.", () => {
    expect(oystercard.checkBalance()).toBe(
      `Your current Oystercard balance is £${oystercard.balance}.00`
    );
  });
});
