import React from "react";
import { shallow } from "enzyme";
import Message from "../Message";
describe("Message", () => {
  it(`should have <div> with class "message"`, () => {
    const component = shallow(<Message text={"Hello"} />);
    expect(component.find("div").hasClass("message")).toBe(true);
  });
  it(`should not render if we don't give any text"`, () => {
    const component = shallow(<Message />);
    expect(component).toBeTruthy();
  });
});
