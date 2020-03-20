import gql from "graphql-tag";

export const MUTATE_POST = gql`
  mutation MutatePost($title: String!, $description: String!, $id: String) {
    mutatePost(title: $title, description: $description, id: $id) {
      id
      title
      description
    }
  }
`;
