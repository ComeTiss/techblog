import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PostsLayout from "../components/posts/PostsLayout";
import { useQuery } from "@apollo/react-hooks";
import { GET_ALL_POSTS } from "../service/apollo/queries";

const useStyles = makeStyles(() => ({
  homePage__title: {
    paddingTop: "32px",
    textAlign: "center"
  }
}));

function Home() {
  const styles = useStyles();
  const { data } = useQuery(GET_ALL_POSTS);
  // Handle Error, loading

  const posts = data?.getAllPosts?.posts || [];

  return (
    <div>
      <h1 className={styles.homePage__title}>The Tech-Blog</h1>
      <PostsLayout posts={posts} />
    </div>
  );
}

export default Home;
