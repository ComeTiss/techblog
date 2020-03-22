import React, { useState } from "react";
import Post from "../../service/models/posts.model";
import Card from "@material-ui/core/Card";
import {
  Typography,
  CardContent,
  makeStyles,
  CardHeader,
  IconButton
} from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import EditIcon from "@material-ui/icons/Edit";
import { DELETE_POSTS_BY_IDS } from "../../service/apollo/mutations";
import { useMutation } from "@apollo/react-hooks";
import { GET_ALL_POSTS } from "../../service/apollo/queries";
import MutatePostModal from "./MutatePostModal";

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
  const styles = useStyles();
  const [displayModal, setDisplayModal] = useState<boolean>(false);
  const [deletePost] = useMutation(DELETE_POSTS_BY_IDS);

  const onClickClearBtn = () => {
    deletePost({
      variables: { ids: [String(post.id)] },
      refetchQueries: [{ query: GET_ALL_POSTS }]
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
            {post.title}
          </Typography>
        }
      />
      <CardContent>
        <Typography variant="subtitle1">{post.description}</Typography>
      </CardContent>
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
