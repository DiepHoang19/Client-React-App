import React from "react";
import "./Friend.scss";

function Friend() {
  return (
    <main className="container">
      <div className="side-bar_left">
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
              />
            </svg>
          </span>
        </div>
        <div className="sbl_action-lists">
          <div className="sbl_action-item">
            <div className="sbl_action-item-icon">
              <svg
                viewBox="0 0 28 28"
                fill="currentColor"
                height={28}
                width={28}
              >
                <path d="M20.34 22.428c.077-.455.16-1.181.16-2.18 0-1.998-.84-3.981-2.12-5.41-.292-.326-.077-.838.36-.838h2.205C24.284 14 27 16.91 27 20.489c0 1.385-1.066 2.51-2.378 2.51h-3.786a.496.496 0 01-.495-.571zM20 13c-1.93 0-3.5-1.794-3.5-4 0-2.467 1.341-4 3.5-4s3.5 1.533 3.5 4c0 2.206-1.57 4-3.5 4zm-9.5-1c-2.206 0-4-2.019-4-4.5 0-2.818 1.495-4.5 4-4.5s4 1.682 4 4.5c0 2.481-1.794 4.5-4 4.5zm2.251 2A6.256 6.256 0 0119 20.249v1.313A2.44 2.44 0 0116.563 24H4.438A2.44 2.44 0 012 21.562v-1.313A6.256 6.256 0 018.249 14h4.502z"></path>
              </svg>
            </div>
            <div className="sbl_action-item-text">Trang chủ</div>
          </div>
          <div className="sbl_action-item">
            <div className="sbl_action-item-icon">
              <img src="./assets/img/RLP6DNroaNd.png" alt="" />
            </div>
            <div className="sbl_action-item-text">Lời mời kết bạn</div>
            <ion-icon name="chevron-forward-outline" />
          </div>
          <div className="sbl_action-item">
            <div className="sbl_action-item-icon">
              <img src="./assets/img/user-plus.png" alt="" />
            </div>
            <div className="sbl_action-item-text">Gợi ý</div>
            <ion-icon name="chevron-forward-outline" />
          </div>
          <div className="sbl_action-item">
            <div className="sbl_action-item-icon">
              <img src="./assets/img/user-setting.png" alt="" />
            </div>
            <div className="sbl_action-item-text">Tất cả bạn bè</div>
            <ion-icon name="chevron-forward-outline" />
          </div>
          <div className="sbl_action-item">
            <div className="sbl_action-item-icon">
              <ion-icon name="gift" />
            </div>
            <div className="sbl_action-item-text">Sinh nhật</div>
          </div>
          <div className="sbl_action-item">
            <div className="sbl_action-item-icon">
              <img src="./assets/img/RLP6DNroaNd.png" alt="" />
            </div>
            <div className="sbl_action-item-text">Danh sách tuỳ chỉnh</div>
            <ion-icon name="chevron-forward-outline" />
          </div>
        </div>
      </div>
      <div className="content hidden_scroll">
        <div className="content_header-title">
          <div className="content_header-title-text">
            Những người bạn có thể biết
          </div>
          <a className="btn" href="#">
            Xem tất cả
          </a>
        </div>
        <div className="card_list">
          <div className="card_item">
            <div className="card_item-avt">
              <img src="./assets/img/user/user1.jpeg" alt="" />
            </div>
            <div className="card_item-content">
              <div className="card_item-content-name">
                <span>Thu Trang</span>
              </div>
              <div className="card_item-content-friend-common">
                <span>
                  <img src="./assets/img/user/user2.jpeg" alt="" />
                </span>
                <span>
                  <img src="./assets/img/user/user3.jpeg" alt="" />
                </span>
                <span>24 bạn chung</span>
              </div>
              <div className="card_item-content-button">
                <a className="btn btn-primary" href="#">
                  Thêm bạn bè
                </a>
                <a className="btn btn-sencondary delete-button" href="#">
                  Xoá ,gỡ bỏ
                </a>
              </div>
            </div>
          </div>
          <div className="card_item">
            <div className="card_item-avt">
              <img src="./assets/img/user/user2.jpeg" alt="" />
            </div>
            <div className="card_item-content">
              <div className="card_item-content-name">
                <span>Thu Quỳnh</span>
              </div>
              <div className="card_item-content-friend-common">
                <span>
                  <img src="./assets/img/user/user1.jpeg" alt="" />
                </span>
                <span>
                  <img src="./assets/img/user/user3.jpeg" alt="" />
                </span>
                <span>24 bạn chung</span>
              </div>
              <div className="card_item-content-button">
                <a className="btn btn-primary" href="#">
                  Thêm bạn bè
                </a>
                <a className="btn btn-sencondary delete-button" href="#">
                  Xoá ,gỡ bỏ
                </a>
              </div>
            </div>
          </div>
          <div className="card_item">
            <div className="card_item-avt">
              <img src="./assets/img/user/user3.jpeg" alt="" />
            </div>
            <div className="card_item-content">
              <div className="card_item-content-name">
                <span>Diệu Nhi</span>
              </div>
              <div className="card_item-content-friend-common">
                <span>
                  <img src="./assets/img/user/user2.jpeg" alt="" />
                </span>
                <span>
                  <img src="./assets/img/user/user1.jpeg" alt="" />
                </span>
                <span>24 bạn chung</span>
              </div>
              <div className="card_item-content-button">
                <a className="btn btn-primary" href="#">
                  Thêm bạn bè
                </a>
                <a className="btn btn-sencondary delete-button" href="#">
                  Xoá ,gỡ bỏ
                </a>
              </div>
            </div>
          </div>
          <div className="card_item">
            <div className="card_item-avt">
              <img src="./assets/img/user/user4.jpeg" alt="" />
            </div>
            <div className="card_item-content">
              <div className="card_item-content-name">
                <span>Hà My</span>
              </div>
              <div className="card_item-content-friend-common">
                <span>
                  <img src="./assets/img/user/user2.jpeg" alt="" />
                </span>
                <span>
                  <img src="./assets/img/user/user3.jpeg" alt="" />
                </span>
                <span>24 bạn chung</span>
              </div>
              <div className="card_item-content-button">
                <a className="btn btn-primary" href="#">
                  Thêm bạn bè
                </a>
                <a className="btn btn-sencondary delete-button" href="#">
                  Xoá ,gỡ bỏ
                </a>
              </div>
            </div>
          </div>
          <div className="card_item">
            <div className="card_item-avt">
              <img src="./assets/img/user/user1.jpeg" alt="" />
            </div>
            <div className="card_item-content">
              <div className="card_item-content-name">
                <span>Thu Trang</span>
              </div>
              <div className="card_item-content-friend-common">
                <span>
                  <img src="./assets/img/user/user2.jpeg" alt="" />
                </span>
                <span>
                  <img src="./assets/img/user/user3.jpeg" alt="" />
                </span>
                <span>24 bạn chung</span>
              </div>
              <div className="card_item-content-button">
                <a className="btn btn-primary" href="#">
                  Thêm bạn bè
                </a>
                <a className="btn btn-sencondary delete-button" href="#">
                  Xoá ,gỡ bỏ
                </a>
              </div>
            </div>
          </div>
          <div className="card_item">
            <div className="card_item-avt">
              <img src="./assets/img/user/user2.jpeg" alt="" />
            </div>
            <div className="card_item-content">
              <div className="card_item-content-name">
                <span>Thu Quỳnh</span>
              </div>
              <div className="card_item-content-friend-common">
                <span>
                  <img src="./assets/img/user/user1.jpeg" alt="" />
                </span>
                <span>
                  <img src="./assets/img/user/user3.jpeg" alt="" />
                </span>
                <span>24 bạn chung</span>
              </div>
              <div className="card_item-content-button">
                <a className="btn btn-primary" href="#">
                  Thêm bạn bè
                </a>
                <a className="btn btn-sencondary delete-button" href="#">
                  Xoá ,gỡ bỏ
                </a>
              </div>
            </div>
          </div>
          <div className="card_item">
            <div className="card_item-avt">
              <img src="./assets/img/user/user3.jpeg" alt="" />
            </div>
            <div className="card_item-content">
              <div className="card_item-content-name">
                <span>Diệu Nhi</span>
              </div>
              <div className="card_item-content-friend-common">
                <span>
                  <img src="./assets/img/user/user2.jpeg" alt="" />
                </span>
                <span>
                  <img src="./assets/img/user/user1.jpeg" alt="" />
                </span>
                <span>24 bạn chung</span>
              </div>
              <div className="card_item-content-button">
                <a className="btn btn-primary" href="#">
                  Thêm bạn bè
                </a>
                <a className="btn btn-sencondary delete-button" href="#">
                  Xoá ,gỡ bỏ
                </a>
              </div>
            </div>
          </div>
          <div className="card_item">
            <div className="card_item-avt">
              <img src="./assets/img/user/user4.jpeg" alt="" />
            </div>
            <div className="card_item-content">
              <div className="card_item-content-name">
                <span>Hà My</span>
              </div>
              <div className="card_item-content-friend-common">
                <span>
                  <img src="./assets/img/user/user2.jpeg" alt="" />
                </span>
                <span>
                  <img src="./assets/img/user/user3.jpeg" alt="" />
                </span>
                <span>24 bạn chung</span>
              </div>
              <div className="card_item-content-button">
                <a className="btn btn-primary" href="#">
                  Thêm bạn bè
                </a>
                <a className="btn btn-sencondary delete-button" href="#">
                  Xoá ,gỡ bỏ
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Friend;
