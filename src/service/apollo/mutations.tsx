import gql from "graphql-tag";

export const MUTATE_POST = gql`
  mutation MutatePost($input: PostInput!) {
    mutatePost(post: $input) {
      id
      title
      description
    }
  }
`;

export const DELETE_POSTS_BY_IDS = gql`
  mutation DeletePostsByIds($postsIds: [ID]!) {
    deletePostsByIds(ids: $postsIds) {
      id
      title
      description
    }
  }
`;
