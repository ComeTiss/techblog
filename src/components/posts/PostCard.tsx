import React, { useState } from "react";
import Post from "../../service/models/posts.model";
import Card from "@material-ui/core/Card";
import {
  Typography,
  CardContent,
  makeStyles,
  CardHeader,
  CardActions,
  IconButton
} from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import EditIcon from "@material-ui/icons/Edit";
import { DELETE_POSTS_BY_IDS } from "../../service/apollo/mutations";
import { useMutation } from "@apollo/react-hooks";
import { GET_POSTS } from "../../service/apollo/queries";
import MutatePostModal from "./MutatePostModal";
import PostVoteContainer from "./PostVoteContainer";
import store from "../../store/store";

type Props = {
  post: Post;
};

const EDIT_POST_MODAL_TITLE = "Edit a Post";

const useStyles = makeStyles(() => ({
  postCard__title: {
    fontWeight: "bold"
  },
  postCard__container: {
    width: "500px"
  }
}));

function PostCard(props: Props) {
  const { post } = props;
  const { id: postId, title, description, authorId } = post;
  const styles = useStyles();
  const [displayModal, setDisplayModal] = useState<boolean>(false);
  const [deletePost] = useMutation(DELETE_POSTS_BY_IDS);
  const Author = authorId ? `User ${authorId}` : "Anonymous";

  const onClickClearBtn = () => {
    const filters = store.getState().filtersPosts;
    deletePost({
      variables: { ids: [String(postId)] },
      refetchQueries: [
        {
          query: GET_POSTS,
          variables: { request: { filters } }
        }
      ]
    })
      .then(() => {})
      .catch(() => {});
  };

  return (
    <Card variant="outlined" className={styles.postCard__container}>
      <CardHeader
        action={
          <>
            <IconButton aria-label="delete-post" onClick={onClickClearBtn}>
              <ClearIcon />
            </IconButton>
            <IconButton
              aria-label="delete-post"
              onClick={() => setDisplayModal(true)}
            >
              <EditIcon />
            </IconButton>
          </>
        }
        title={
          <Typography variant="h6" className={styles.postCard__title}>
            {title}
          </Typography>
        }
        subheader={<Typography variant="caption">author: {Author}</Typography>}
      />
      <CardContent>
        <Typography variant="subtitle1">{description}</Typography>
      </CardContent>
      <CardActions>
        <PostVoteContainer post={post} />
      </CardActions>
      {displayModal && (
        <MutatePostModal
          modalTitle={EDIT_POST_MODAL_TITLE}
          prefilledPost={post}
          onClose={() => setDisplayModal(false)}
        />
      )}
    </Card>
  );
}

export default PostCard;
