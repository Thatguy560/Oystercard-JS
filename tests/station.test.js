"use strict";

const Station = require("../src/station");

describe("Station", () => {
  let station = new Station("Old Street", 1);

  it("shows you the station name.", () => {
    expect(station.name).toEqual("Old Street");
  });

  it("shows you the fare zone.", () => {
    expect(station.zone).toEqual(1);
  });
});
