import gql from "graphql-tag";

export const PostFragment = {
  post: gql`
    fragment PostItem on Post {
      id
      title
      description
      createdAt
      updatedAt
      votes {
        vote
        user {
          id
        }
      }
      author {
        id
      }
    }
  `
};
