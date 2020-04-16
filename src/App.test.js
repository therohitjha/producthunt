import { shallow } from "enzyme";
import React from "react";
import App from "./App";
describe("testing App Component", () => {
  it("testing length of App", () => {
    expect(shallow(<App />).length).toEqual(1);
  });
});
