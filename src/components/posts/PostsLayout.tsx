import React, { useState } from "react";
import PostsList from "./PostsList";
import { makeStyles } from "@material-ui/core/styles";
import { Fab, Switch } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import MutatePostModal from "./MutatePostModal";
import Post from "../../service/models/posts.model";

const CREATE_POST_MODAL_TITLE = "Create a Post";

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
  userId: string;
  posts: Array<Post>;
  setFilters: (withFilters: boolean) => void;
};

function PostsLayout(props: Props) {
  const styles = useStyles();
  const { posts, userId, setFilters } = props;

  const [displayModal, setDisplayModal] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);

  const handleChangeSwitch = () => {
    setChecked(!checked);
    setFilters(!checked);
  };

  const FilterSwitch = (
    <>
      {"Only my posts: "}
      <Switch
        checked={checked}
        onChange={handleChangeSwitch}
        color="primary"
        name="filter-posts-switch"
      />
    </>
  );

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
        {FilterSwitch}
        <span className={styles.postLayout__listContainer}>
          <PostsList posts={posts} />
        </span>
      </div>
      {displayModal && (
        <MutatePostModal
          prefilledPost={new Post({ authorId: userId })}
          modalTitle={CREATE_POST_MODAL_TITLE}
          onClose={() => setDisplayModal(false)}
        />
      )}
    </>
  );
}

export default PostsLayout;
