import React, { useState } from "react";
import PostsList from "./PostsList";
import { makeStyles } from "@material-ui/core/styles";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import MutatePostModal from "./MutatePostModal";
import Post from "../../service/models/posts.model";

const useStyles = makeStyles(() => ({
  postLayout__container: {
    margin: "auto",
    width: "40%"
  },
  postLayout__listContainer: {
    display: "inline-block"
  },
  postLayout__btnContainer: {
    display: "inline-block",
    float: "right"
  }
}));

type Props = {
  posts: Array<Post>;
};

function PostsLayout(props: Props) {
  const styles = useStyles();
  const { posts } = props;

  const [displayModal, setDisplayModal] = useState<boolean>(false);

  return (
    <>
      <div className={styles.postLayout__container}>
        <span className={styles.postLayout__btnContainer}>
          <Fab
            color="primary"
            aria-label="add"
            onClick={() => setDisplayModal(true)}
          >
            <AddIcon />
          </Fab>
        </span>
        <span className={styles.postLayout__listContainer}>
          <PostsList posts={posts} />
        </span>
      </div>
      {displayModal && (
        <MutatePostModal onClose={() => setDisplayModal(false)} />
      )}
    </>
  );
}

export default PostsLayout;
