import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Default from "./Public/layout/DefaultLayout/Default";
import { PublicRouter } from "./Public/router";
import { Fragment } from "react";
import Groups from "./Public/Page/Groups";
import Home from "./Public/Page/Home/Home";
import WatchVideo from "./Public/Page/WatchVideo/WatchVideo";
import Friend from "./Public/Page/Friend/index";
import CreatePost from "./Public/Page/Post/CreatePost/index";
import ListPost from "./Public/Page/Post/ListPost/index";
import SignIn from "./Public/Page/Account/SignIn/SignIn";
import SignUp from "./Public/Page/Account/SignUp/SignUp";
import Header from "./Public/layout/components/Header/Header";

function App() {
  return (
    <>
    <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/watch-video" element={<WatchVideo />} />
          <Route path="/post/create-post" element={<CreatePost />} />
          <Route path="/post/list-post" element={<ListPost />} />
          <Route path="/friend" element={<Friend />} />
          <Route path="/account-signin" element={<SignIn />} />
          <Route path="/account-signup" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
