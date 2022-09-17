import "./App.css";
import Groups from "./Public/Page/Groups";
import Home from "./Public/Page/Home/Home";
import WatchVideo from "./Public/Page/WatchVideo/WatchVideo";
import Friend from "./Public/Page/Friend/index";
import Header from "./Public/layout/components/Header/Header";
import { Routes, Route } from "react-router-dom";
import SignIn from "./Public/Page/Account/SignIn/SignIn";
import SignUp from "./Public/Page/Account/SignUp/SignUp";

function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 bg-dark min-height-100vh">
            <Header />
          </div>
          <main className="col-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/watch-video" element={<WatchVideo />} />
              <Route path="/group" element={<Groups />} />
              <Route path="/friend" element={<Friend />} />
              <Route path="/account-signin" element={<SignIn />} />
              <Route path="/account-signup" element={<SignUp />} />
            </Routes>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
