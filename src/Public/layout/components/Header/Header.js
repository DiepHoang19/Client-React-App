import React from "react";
import "./Header.scss";
import {
  Friendfb,
  Gamingfb,
  Groupfb,
  Homefb,
  Messengefb,
  Notifycationfb,
  WatchVideofb,
} from "../../../Icon/Icon";
import Tippy from "react-tippy";
import { Button } from "antd";
import { Link } from "react-router-dom";
import Messenger from "../../Popper/Messenger";

function Header() {
  const currentUser = true;

  return (
    <>
      <div id="header-home">
        <header className="header">
          <nav className="nav">
            <div className="nav_left">
              <div className="logo">
                <Link to="/">
                  <img src="./assets/img/facebook-new.png" alt="" width={50} />
                </Link>
              </div>
              <div className="nav_search">
                <input
                  id="input_search"
                  className="input_search"
                  type="text"
                  placeholder=" "
                />

                <label htmlFor="input_search" className="form_label ">
                  <span>
                    <svg
                      viewBox="0 0 28 28"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  </span>
                  <span className="form_label-text">
                    Tìm kiếm trên Facebook
                  </span>
                </label>
              </div>
            </div>
            <div className="nav_middle">
              <ul className="nav_lists">
                <li className="nav_list-item ">
                  <Link to="/">
                    <Homefb />
                  </Link>
                </li>
                <li className="nav_list-item">
                  <Link to="friend">
                    <Friendfb />
                  </Link>
                </li>
                <li className="nav_list-item">
                  <Link to="watch-video">
                    <WatchVideofb />
                  </Link>
                </li>
                <li className="nav_list-item">
                  <Link to="/group">
                    <Groupfb />
                  </Link>
                </li>
                <li className="nav_list-item">
                  <Link to="/gaming">
                    <Gamingfb />
                  </Link>
                </li>
                <li className="nav_list-item nav_list-item-open"></li>
              </ul>
            </div>
            <div className="nav_right">
              <div className="nav_menu">
                <div className="nav_menu-icon">
                  <div className="close_menu" />
                  <svg
                    fill="currentColor"
                    viewBox="0 0 44 44"
                    className="b6ax4al1 m4pnbp5e somyomsx ahndzqod g8r5yzqk dmdr2h6l kgzac55p"
                  >
                    <circle cx={7} cy={7} r={6} />
                    <circle cx={22} cy={7} r={6} />
                    <circle cx={37} cy={7} r={6} />
                    <circle cx={7} cy={22} r={6} />
                    <circle cx={22} cy={22} r={6} />
                    <circle cx={37} cy={22} r={6} />
                    <circle cx={7} cy={37} r={6} />
                    <circle cx={22} cy={37} r={6} />
                    <circle cx={37} cy={37} r={6} />
                  </svg>
                </div>
              </div>
              <div className="nav_messenger">
                <div className="nav_messenger-icon">
                  <div className="close_messenger" />
                  <Messenger>
                    <Messengefb />
                  </Messenger>
                </div>
              </div>
              <div className="nav_notify">
                <div className="nav_notify-icon">
                  <div className="close_notify" />
                  <Notifycationfb />
                </div>
              </div>
              <div className="nav_user">
                <div className="nav_user-icon">
                  <div className="close_user" />
                  <img src="./assets/img/user.png" alt="" />
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
}

export default Header;
