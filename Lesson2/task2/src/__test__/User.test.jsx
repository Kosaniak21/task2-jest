import React from "react";
import { shallow } from "enzyme";
import User from "../User";
describe("User", () => {
  it(`should have <span> with class "user__name" if we give prop "name"`, () => {
    const component = shallow(<User name={"Emma"} />);
    expect(component.find(".user__name").exists()).toBe(true);
  });
  it(`should have <span> with class "user__age" if we give prop "age"`, () => {
    const component = shallow(<User age={21} />);
    expect(component.find(".user__age").exists()).toEqual(true);
  });
});
