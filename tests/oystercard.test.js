"use strict";

const Oystercard = require("../src/oystercard");

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
});
