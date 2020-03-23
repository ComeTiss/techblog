import gql from "graphql-tag";
import { PostFragment } from "./fragments";

export const MUTATE_POST = gql`
  mutation MutatePost($post: MutatePostRequest!) {
    mutatePost(post: $post) {
      error
      success
      post {
        ...PostItem
      }
    }
  }
  ${PostFragment.post}
`;

export const DELETE_POSTS_BY_IDS = gql`
  mutation DeletePostsByIds($ids: [ID]!) {
    deletePostsByIds(ids: $ids) {
      error
      success
      posts {
        ...PostItem
      }
    }
  }
  ${PostFragment.post}
`;
