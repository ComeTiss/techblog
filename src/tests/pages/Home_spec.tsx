import React from "react";
import Home from "../../pages/Home";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { MockedProvider } from "@apollo/react-testing";
import { GET_POSTS } from "../../service/apollo/queries";
import mockPosts from "../mocks/posts.mock.json";
import {
  DELETE_POSTS_BY_IDS,
  MUTATE_POST
} from "../../service/apollo/mutations";

configure({ adapter: new Adapter() });

const mocks = [
  {
    request: {
      query: GET_POSTS,
      variables: { request: {} }
    },
    result: {
      data: mockPosts.data
    }
  },
  {
    request: {
      query: DELETE_POSTS_BY_IDS
    },
    result: {
      data: mockPosts.data
    }
  },
  {
    request: {
      query: MUTATE_POST
    },
    result: {
      data: mockPosts.data
    }
  }
];

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
