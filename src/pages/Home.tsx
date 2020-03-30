import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PostsLayout from "../components/posts/PostsLayout";
import { useQuery } from "@apollo/react-hooks";
import { GET_ALL_POSTS } from "../service/apollo/queries";
import Navigation from "../components/routes/Navigation";
import { useCookies } from "react-cookie";

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
  const [cookies] = useCookies();
  const userId = cookies["userId"];

  return (
    <div>
      <Navigation linkPath="/logout" linkTitle="Logout" />
      <h1 className={styles.homePage__title}>The Tech-Blog</h1>
      <PostsLayout userId={userId} posts={posts} />
    </div>
  );
}

export default Home;
