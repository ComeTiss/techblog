import React from "react";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import { Button } from "@material-ui/core";
import { useMutation } from "@apollo/react-hooks";
import { MUTATE_VOTE, DELETE_VOTE } from "../../service/apollo/mutations";
import { useCookies } from "react-cookie";
import { GET_POSTS } from "../../service/apollo/queries";
import store from "../../store/store";
import Post from "../../service/models/posts.model";

type Props = {
  post: Post;
};

enum PostVoteType {
  UP = "UP",
  DOWN = "DOWN"
}

function findPreviousVote(votes: any[], userId: string) {
  return votes.find(vote => vote.user.id === userId)?.vote;
}

function PostVoteContainer(props: Props) {
  const {
    post: { id: postId, votes }
  } = props;
  const [deleteVote] = useMutation(DELETE_VOTE);
  const [mutateVote] = useMutation(MUTATE_VOTE);
  const [cookies] = useCookies();
  const authorId = cookies["userId"];
  const filters = store.getState().filtersPosts;
  const currentVote = findPreviousVote(votes, authorId);

  const thumbColor = (targetVote: PostVoteType) => {
    return currentVote === targetVote ? "primary" : "inherit";
  };

  const onClickIcon = (vote: PostVoteType) => {
    if (vote === currentVote) {
      executeDeleteVote();
    } else {
      executeMutateVote(vote);
    }
  };

  const executeMutateVote = (vote: PostVoteType) => {
    mutateVote({
      variables: { request: { postId, authorId, vote } },
      refetchQueries: [
        {
          query: GET_POSTS,
          variables: { request: { filters } }
        }
      ]
    })
      .then(() => {})
      .catch(error => {
        console.error(error);
      });
  };

  const executeDeleteVote = () => {
    deleteVote({
      variables: { request: { postId, authorId } },
      refetchQueries: [
        {
          query: GET_POSTS,
          variables: { request: { filters } }
        }
      ]
    })
      .then(() => {})
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <>
      <Button onClick={() => onClickIcon(PostVoteType.UP)}>
        <ThumbUpIcon color={thumbColor(PostVoteType.UP)} />
      </Button>
      <Button onClick={() => onClickIcon(PostVoteType.DOWN)}>
        <ThumbDownIcon color={thumbColor(PostVoteType.DOWN)} />
      </Button>
    </>
  );
}

export default PostVoteContainer;
