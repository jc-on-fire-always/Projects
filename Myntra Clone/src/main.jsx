import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Routes/App.jsx";
import { RouterProvider } from "react-router-dom";
import Bag from "./Routes/Bag.jsx";
import { createBrowserRouter } from "react-router-dom";
import "../src/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Routes/Home.jsx";
import myntraStore from "./store/index.js";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> /*, loader: PostLoader */ },
      {
        path: "/bag",
        element: <Bag />,
        // action: CreatePostAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={myntraStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
