import gql from "graphql-tag";
import { PostFragment } from "./fragments";

export const MUTATE_POST = gql`
  mutation MutatePost($request: MutatePostRequest!) {
    mutatePost(request: $request) {
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

export const MUTATE_VOTE = gql`
  mutation MutateVote($request: MutateVoteRequest!) {
    mutateVote(request: $request) {
      vote {
        vote
        post {
          id
        }
        user {
          id
        }
      }
    }
  }
`;

export const DELETE_VOTE = gql`
  mutation DeleteVote($request: DeleteVoteRequest!) {
    deleteVote(request: $request) {
      vote {
        vote
        post {
          id
        }
        user {
          id
        }
      }
    }
  }
`;

export const SIGNUP = gql`
  mutation Signup($request: SignUpRequest!) {
    signup(request: $request) {
      error
      user {
        id
        email
        authProvider
      }
      token
    }
  }
`;

export const LOGIN = gql`
  mutation Login($request: LoginRequest!) {
    login(request: $request) {
      error
      user {
        id
        email
        authProvider
      }
      token
    }
  }
`;
