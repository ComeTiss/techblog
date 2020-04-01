import React from "react";
import Post from "../../service/models/posts.model";
import PostCard from "./PostCard";

type Props = {
  posts: Array<Post>;
};

function PostsList(props: Props) {
  const { posts } = props;

  return (
    <>
      {posts.map((post: Post) => (
        <PostCard key={post.id} post={new Post(post)} />
      ))}
    </>
  );
}

export default PostsList;
