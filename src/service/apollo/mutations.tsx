import gql from "graphql-tag";

export const MUTATE_POST = gql`
  mutation MutatePost($post: PostInput!) {
    mutatePost(post: $post) {
      id
      title
      description
    }
  }
`;

export const DELETE_POSTS_BY_IDS = gql`
  mutation DeletePostsByIds($ids: [ID]!) {
    deletePostsByIds(ids: $ids) {
      id
      title
      description
    }
  }
`;
