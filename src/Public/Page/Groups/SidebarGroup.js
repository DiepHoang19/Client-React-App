import React from "react";
import "./Groups.scss";

function SidebarGroup() {
  return (
    <>
      <div className="side-bar">
        <div className="side-bar_left hidden_scroll">
          <div className="sbl_title">
            <h2 className="sbl_title-text">Bạn bè</h2>
            <span className="sbl_title-icon">
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
                  d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
            </span>
          </div>
          <div className="sbl_search">
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
            <input
              id="input_search-2"
              className="input_search"
              type="text"
              placeholder="Tìm kiếm trong menu"
              onkeyup="filterFunction2()"
            />
          </div>
          <div className="sbl_action-lists">
            <div className="sbl_action-item">
              <div className="sbl_action-item-icon">
                <img src="./assets/img/feed.png" alt="" />
              </div>
              <div className="sbl_action-item-text">Trang chủ</div>
            </div>
            <div className="sbl_action-item">
              <div className="sbl_action-item-icon">
                <img src="./assets/img/laban.png" alt="" />
              </div>
              <div className="sbl_action-item-text">Lời mời kết bạn</div>
              <ion-icon name="chevron-forward-outline" />
            </div>
            <a className="sbl_action-button btn btn-primary">
              + Tạo cộng đồng (nhóm) mới
            </a>
          </div>
          <div className="sbl_group-joined-lists">
            <div className="sbl_group-joined-item">
              <div className="sbl_group-joined-item-avt">
                <img src="./assets/img/user/user1.jpeg" alt="" />
              </div>
              <div className="sbl_group-joined-item-text">
                <p className="text-user">Phòng thú tội</p>
                <span className="text-time">
                  Lần hoạt động gần nhất: 16 giờ trước
                </span>
              </div>
            </div>
            <div className="sbl_group-joined-item">
              <div className="sbl_group-joined-item-avt">
                <img src="./assets/img/user/user1.jpeg" alt="" />
              </div>
              <div className="sbl_group-joined-item-text">
                <p className="text-user">Phòng thú tội</p>
                <span className="text-time">
                  Lần hoạt động gần nhất: 16 giờ trước
                </span>
              </div>
            </div>
            <div className="sbl_group-joined-item">
              <div className="sbl_group-joined-item-avt">
                <img src="./assets/img/user/user1.jpeg" alt="" />
              </div>
              <div className="sbl_group-joined-item-text">
                <p className="text-user">Phòng thú tội</p>
                <span className="text-time">
                  Lần hoạt động gần nhất: 16 giờ trước
                </span>
              </div>
            </div>
            <div className="sbl_group-joined-item">
              <div className="sbl_group-joined-item-avt">
                <img src="./assets/img/user/user1.jpeg" alt="" />
              </div>
              <div className="sbl_group-joined-item-text">
                <p className="text-user">Phòng thú tội</p>
                <span className="text-time">
                  Lần hoạt động gần nhất: 16 giờ trước
                </span>
              </div>
            </div>
            <div className="sbl_group-joined-item">
              <div className="sbl_group-joined-item-avt">
                <img src="./assets/img/user/user1.jpeg" alt="" />
              </div>
              <div className="sbl_group-joined-item-text">
                <p className="text-user">Phòng thú tội</p>
                <span className="text-time">
                  Lần hoạt động gần nhất: 16 giờ trước
                </span>
              </div>
            </div>
            <div className="sbl_group-joined-item">
              <div className="sbl_group-joined-item-avt">
                <img src="./assets/img/user/user1.jpeg" alt="" />
              </div>
              <div className="sbl_group-joined-item-text">
                <p className="text-user">Phòng thú tội</p>
                <span className="text-time">
                  Lần hoạt động gần nhất: 16 giờ trước
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SidebarGroup;
