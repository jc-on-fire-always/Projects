import Post from "./Post";
import WelcomeMessage from "./WelcomeMessage";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  const postList = useLoaderData();

  return (
    <>
      {postList.length === 0 && <WelcomeMessage />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export const PostLoader = () => {
  const controller = new AbortController();
  const signal = controller.signal;

  return fetch("https://dummyjson.com/posts", { signal })
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
      setFetching(false);
    });
};

export default PostList;
