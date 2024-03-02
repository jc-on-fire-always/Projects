import { useContext, useRef } from "react";
import { PostList } from "../Store/post-list-store";
import { useNavigate } from "react-router-dom";
import { redirect } from "react-router-dom";
import { Form } from "react-router-dom";

const CreatePost = () => {
  // const { addPost } = useContext(PostList);
  // const navigate = useNavigate();

  // const userIdElement = useRef();
  // const PostTitleElement = useRef();
  // const PostBodyElement = useRef();
  // const reactionsElement = useRef();
  // const tagsElement = useRef();

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const userId = userIdElement.current.value;
  //   const PostTitle = PostTitleElement.current.value;
  //   const PostBody = PostBodyElement.current.value;
  //   const reactions = reactionsElement.current.value;
  //   const tags = tagsElement.current.value.split(" ");
  //   userIdElement.current.value = "";
  //   PostTitleElement.current.value = "";
  //   PostBodyElement.current.value = "";
  //   reactionsElement.current.value = "";
  //   tagsElement.current.value = "";
  // };

  return (
    <Form method="POST" className="create-post">
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          UserID
        </label>
        <input
          type="text"
          name="userId"
          className="form-control"
          id="userId"
          placeholder="Enter your UserId Here."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          name="title"
          className="form-control"
          id="title"
          placeholder="How are you feeling today..."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          rows="4"
          type="text"
          name="body"
          className="form-control"
          id="body"
          placeholder="Tell us more about it..."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of Reactions
        </label>
        <input
          type="text"
          className="form-control"
          name="reactions"
          id="reactions"
          placeholder="How many people reacted to this post"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="hashtags" className="form-label">
          Hashtags
        </label>
        <input
          type="text"
          name="tags"
          className="form-control"
          id="hashtags"
          placeholder="Enter the hashtags here."
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
  );
};

export async function CreatePostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  console.log(postData);

  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post);
    });

  return redirect("/");
}

export default CreatePost;
