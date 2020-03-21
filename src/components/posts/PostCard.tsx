import React from "react";
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
import { DELETE_POSTS_BY_IDS } from "../../service/apollo/mutations";
import { useMutation } from "@apollo/react-hooks";
import { GET_ALL_POSTS } from "../../service/apollo/queries";

type Props = {
  post: Post;
};

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
          <IconButton aria-label="delete-post" onClick={onClickClearBtn}>
            <ClearIcon />
          </IconButton>
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
    </Card>
  );
}

export default PostCard;
