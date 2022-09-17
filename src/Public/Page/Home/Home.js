import React from "react";
import Contact from "../../layout/components/SidebarContact/Contact";
import CreatePost from "../Post/CreatePost";
import Story from "../Post/Story/Story";
import SidebarHome from "./SidebarHome/SidebarHome";

function Home() {
  return (
    <>
      <div className="container">
        <SidebarHome />
        <div className="middle-container" style={{ display: "flex" }}>
          <Story />
          <CreatePost />
        </div>
        <div>
          <Contact />
        </div>
      </div>
    </>
  );
}

export default Home;
