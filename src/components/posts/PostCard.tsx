import React from "react";
import Post from "../../service/models/posts.model";
import Card from "@material-ui/core/Card";
import { Typography, CardContent, makeStyles } from "@material-ui/core";

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

  return (
    <Card variant="outlined" className={styles.postCard__container}>
      <CardContent>
        <Typography variant="h6" className={styles.postCard__title}>
          {post.title}
        </Typography>
        <Typography variant="subtitle1">{post.description}</Typography>
      </CardContent>
    </Card>
  );
}

export default PostCard;
