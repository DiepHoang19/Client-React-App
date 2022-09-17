import React from "react";
import "./SidebarHome.scss";
import { Link } from "react-router-dom";

function SidebarHome() {
  return (
    <>
      <div id="sidebar-left">
        <div className="hidden_scroll">
          <ul className="bs__list--visible">
            <li className="bs__list--item">
              <Link to="/profile" className="bs__list--item-link">
                <img src="./assets/img/user.png" alt="" />
                <h6 className="bs__list--item-text">Name</h6>
              </Link>
            </li>
            <li className="bs__list--item">
              <Link to="/friend" className="bs__list--item-link">
                <img
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/tSXYIzZlfrS.png"
                  alt=""
                />
                <h6 className="bs__list--item-text">Bạn bè</h6>
              </Link>
            </li>
            <li className="bs__list--item">
              <Link to="/group" className="bs__list--item-link">
                <img
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/Im_0d7HFH4n.png"
                  alt=""
                />
                <h6 className="bs__list--item-text">Cộng đồng (Nhóm)</h6>
              </Link>
            </li>
            <li className="bs__list--item">
              <Link to="*" className="bs__list--item-link">
                <img
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/yF/r/kD5Sv0isIPs.png"
                  alt=""
                />
                <h6 className="bs__list--item-text">Gần đây nhất</h6>
              </Link>
            </li>
            <li className="bs__list--item">
              <Link to="/watch-video" className="bs__list--item-link">
                <img
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/FhOLTyUFKwf.png"
                  alt=""
                />
                <h6 className="bs__list--item-text">Watch</h6>
              </Link>
            </li>
            <li className="bs__list--item">
              <Link to="*" className="bs__list--item-link">
                <img
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/yJ/r/tYxGXJRPH5q.png"
                  alt=""
                />
                <h6 className="bs__list--item-text">Kỉ niệm</h6>
              </Link>
            </li>
          </ul>
          <ul className="bs__list--hide"></ul>
          <div className="bs__list--button">
            <div className="button_show">
              <div className="button_show-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokewidth="{1.5}"
                  stroke="currentColor"
                  classname="w-6 h-6"
                >
                  <path
                    strokelinecap="round"
                    strokelinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
              <span className="button_show-text">Xem thêm</span>
            </div>
            <div className="button_hide">
              <div className="button_hide-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 15.75l7.5-7.5 7.5 7.5"
                  />
                </svg>
              </div>
              <span className="button_hide-text">Ẩn bớt</span>
            </div>
          </div>
          <ul className="bs__shortcut--list">
            <li className="bs__shortcut--list-title">Lối tắt của bạn</li>
            <li className="bs__shortcut--list-item">
              <Link to="" className="bs__shortcut--list-item-link">
                <img src="./assets/img/facebook-new.png" alt="" />
                <h6 className="bs__shortcut--list-item-text">Công an huyện</h6>
              </Link>
            </li>
            <li className="bs__shortcut--list-item">
              <Link to="" className="bs__shortcut--list-item-link">
                <img src="./assets/img/facebook-new.png" alt="" />
                <h6 className="bs__shortcut--list-item-text">
                  Vua màn hình ngang
                </h6>
              </Link>
            </li>
            <li className="bs__shortcut--list-item">
              <Link to="" className="bs__shortcut--list-item-link">
                <img src="./assets/img/facebook-new.png" alt="" />
                <h6 className="bs__shortcut--list-item-text">
                  Hướng dẫn chơi fi fai
                </h6>
              </Link>
            </li>
            <li className="bs__shortcut--list-item">
              <Link to="" className="bs__shortcut--list-item-link">
                <img src="./assets/img/facebook-new.png" alt="" />
                <h6 className="bs__shortcut--list-item-text">
                  Hướng dẫn đi chơi với gái
                </h6>
              </Link>
            </li>
            <li className="bs__shortcut--list-item">
              <Link to="" className="bs__shortcut--list-item-link">
                <img src="./assets/img/facebook-new.png" alt="" />
                <h6 className="bs__shortcut--list-item-text">
                  Hội lái máy bay
                </h6>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default SidebarHome;
