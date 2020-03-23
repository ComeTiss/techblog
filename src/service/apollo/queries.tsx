import gql from "graphql-tag";
import { PostFragment } from "./fragments";

export const GET_ALL_POSTS = gql`
  {
    getAllPosts {
      error
      success
      posts {
        ...PostItem
      }
    }
  }
  ${PostFragment.post}
`;
