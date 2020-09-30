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
});
