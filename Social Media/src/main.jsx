import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./Routes/App.jsx";
import PostList, { PostLoader } from "./Components/PostList.jsx";
import CreatePost, { CreatePostAction } from "./Components/CreatePost.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <PostList />, loader: PostLoader },
      {
        path: "/create-post",
        element: <CreatePost />,
        action: CreatePostAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
