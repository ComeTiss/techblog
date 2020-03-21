import React from "react";
import Home from "../pages/Home";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { MockedProvider } from "@apollo/react-testing";

configure({ adapter: new Adapter() });

const mocks: any = [];

describe("Home", () => {
  const wrapper = shallow(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Home />
    </MockedProvider>
  );
  it("render component", () => {
    expect(
      wrapper
        .dive()
        .dive()
        .find(Home)
    ).toHaveLength(1);
  });
});
