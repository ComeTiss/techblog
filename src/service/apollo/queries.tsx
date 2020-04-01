import gql from "graphql-tag";
import { PostFragment } from "./fragments";

export const GET_POSTS = gql`
  query GetPostsWithFilters($request: GetPostRequest!) {
    getPostsWithFilters(request: $request) {
      error
      success
      posts {
        ...PostItem
      }
    }
  }
  ${PostFragment.post}
`;
