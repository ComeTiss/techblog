import gql from "graphql-tag";

export const GET_ALL_POSTS = gql`
  {
    getAllPosts {
      id
      title
      description
    }
  }
`;
