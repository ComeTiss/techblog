import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PostsLayout from "../components/posts/PostsLayout";

const useStyles = makeStyles(() => ({
  homePage__title: {
    paddingTop: "32px",
    textAlign: "center"
  }
}));

function Home() {
  const styles = useStyles();
  return (
    <div>
      <h1 className={styles.homePage__title}>The Tech-Blog</h1>
      <PostsLayout />
    </div>
  );
}

export default Home;
