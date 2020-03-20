import gql from "graphql-tag";

export const MUTATE_POST = gql`
  mutation mutatePost($id: Long, $title: String!, $description: String!) {
    mutatePost(id: $id, title: $title, description: $description) {
      id
      title
      description
    }
  }
`;
