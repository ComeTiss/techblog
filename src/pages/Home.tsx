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
  const { data, error } = useQuery(GET_ALL_POSTS);
  // Handle Error, loading
  console.error(error);
  const posts = data?.getAllPosts || [];

  return (
    <div>
      <h1 className={styles.homePage__title}>The Tech-Blog</h1>
      <PostsLayout posts={posts} />
    </div>
  );
}

export default Home;
