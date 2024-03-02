import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import SideBar from "../Components/SideBar";
import CreatePost from "../Components/CreatePost";
import PostList from "../Components/PostList";
import { useState } from "react";
import PostListProvider from "../Store/post-list-store";
import { Outlet } from "react-router-dom";

function App() {
  const [selectedTab, SetSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        <SideBar selectedTab={selectedTab} SetSelectedTab={SetSelectedTab} />
        <div className="content">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
