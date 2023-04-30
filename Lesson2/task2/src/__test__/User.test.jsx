import React from "react";
import { shallow } from "enzyme";
import User from "../User";
import { getUserData } from "../usersGateway";

jest.mock("../usersGateway", () => {
  return {
    getUserData: jest.fn(() => Promise.resolve({})),
  };
});
describe("User", () => {
  it(`should display nothing if user don't get data`, () => {
    const component = shallow(<User />);
    expect(component.find(".user").exists()).toBe(false);
  });
  it(`should display user with data`, () => {
    const component = shallow(<User />);
    component.setState({
      userDate: {
        name: "John Doe",
        location: "New York",
        avatar_url: "https://example.com",
      },
    });
    expect(component.find(".user")).toMatchSnapshot();
  });
  it(`should display nothing if user don't get data`, () => {
    shallow(<User />);

    expect(getUserData).toBeCalled();
  });
});
