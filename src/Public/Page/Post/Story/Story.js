import React from "react";
import "./Story.scss";

function Story() {
  const ListUser = [
    {
      id: 1,
      name: "name 1",
    },
  ];
  return (
    <>
      <div id="story-page">
        <div className="mid-header__tab">
          <ul className="mid-header__tab--list">
            <li
              data-tab="tab_one"
              className="mid-header__tab--list-item active_tab"
            >
              Tin
            </li>
            <li data-tab="tab_two" className="mid-header__tab--list-item">
              Reels
            </li>
            <li data-tab="tab_three" className="mid-header__tab--list-item">
              Phòng họp mặt
            </li>
          </ul>
          {ListUser.map((item) => (
            <div className="mid-header__tab-content">
              <div
                id="tab_one"
                className="mid-header__tab-content-item active__tab-content"
              >
                <div className="card-list">
                  <div className="card-create">
                    <img src="./assets/img/user.png" alt="" />
                    <div className="card-create-icon">
                      <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        width="1em"
                        height="1em"
                        className="b6ax4al1 m4pnbp5e somyomsx ahndzqod qsbzbi57 dmdr2h6l kgzac55p"
                      >
                        <g fillRule="evenodd" transform="translate(-446 -350)">
                          <g fillRule="nonzero">
                            <path
                              d="M95 201.5h13a1 1 0 1 0 0-2H95a1 1 0 1 0 0 2z"
                              transform="translate(354.5 159.5)"
                            />
                            <path
                              d="M102.5 207v-13a1 1 0 1 0-2 0v13a1 1 0 1 0 2 0z"
                              transform="translate(354.5 159.5)"
                            />
                          </g>
                        </g>
                      </svg>
                    </div>
                    <p className="card-create-text">Tạo tin</p>
                  </div>
                  <div className="card-item">
                    <img src="./assets/img/user/user1.jpeg" alt="" />
                    <div className="card-item-user">
                      <div className="card-item-avatar">
                        <img src="./assets/img/user.png" alt="" />
                      </div>
                      <p className="card-item-name">{item.name}</p>
                    </div>
                  </div>
                  <div className="card-item">
                    <img src="./assets/img/user/user1.jpeg" alt="" />
                    <div className="card-item-user">
                      <div className="card-item-avatar">
                        <img src="./assets/img/user.png" alt="" />
                      </div>
                      <p className="card-item-name">{item.name}</p>
                    </div>
                  </div>
                  <div className="card-item">
                    <img src="./assets/img/user/user1.jpeg" alt="" />
                    <div className="card-item-user">
                      <div className="card-item-avatar">
                        <img src="./assets/img/user.png" alt="" />
                      </div>
                      <p className="card-item-name">{item.name}</p>
                    </div>
                  </div>
                  <div className="card-item">
                    <img src="./assets/img/user/user1.jpeg" alt="" />
                    <div className="card-item-user">
                      <div className="card-item-avatar">
                        <img src="./assets/img/user.png" alt="" />
                      </div>
                      <p className="card-item-name">{item.name}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div id="tab_two" className="mid-header__tab-content-item">
                <div className="card-list">
                  <div className="card-item">
                    <img src="./assets/img/user/user1.jpeg" alt="" />
                    <div className="card-item-user">
                      <div className="card-item-avatar"></div>
                      <p className="card-item-name">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <span>1,2 triệu</span>
                      </p>
                    </div>
                  </div>
                  <div className="card-item">
                    <img src="./assets/img/user/user1.jpeg" alt="" />
                    <div className="card-item-user">
                      <div className="card-item-avatar"></div>
                      <p className="card-item-name">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <span>1,2 triệu</span>
                      </p>
                    </div>
                  </div>
                  <div className="card-item">
                    <img src="./assets/img/user/user1.jpeg" alt="" />
                    <div className="card-item-user">
                      <div className="card-item-avatar"></div>
                      <p className="card-item-name">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <span>1,2 triệu</span>
                      </p>
                    </div>
                  </div>
                  <div className="card-item">
                    <img src="./assets/img/user/user1.jpeg" alt="" />
                    <div className="card-item-user">
                      <div className="card-item-avatar"></div>
                      <p className="card-item-name">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <span>1,2 triệu</span>
                      </p>
                    </div>
                  </div>
                  <div className="card-item">
                    <img src="./assets/img/user/user1.jpeg" alt="" />
                    <div className="card-item-user">
                      <div className="card-item-avatar"></div>
                      <p className="card-item-name">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <span>1,2 triệu</span>
                      </p>
                    </div>
                  </div>
                  <div className="card__item-more">
                    <span className="card__item-more-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="card__item-more-text">
                      Xem thêm thước phim{" "}
                    </span>
                  </div>
                </div>
              </div>
              <div id="tab_three" className="mid-header__tab-content-item">
                <div className="room__card">
                  <div className="room__card-item">
                    <div className="room__card-item-info">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="room__card-item-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z" />
                      </svg>
                    </div>
                    <p className="room__card-item-text">
                      Phòng họp mặt của Name
                    </p>
                    <span className="room__card-item-sub-text">Bắt đầu</span>
                    <button className="room__card-item-button">Tạo</button>
                  </div>
                  <div className="room__card-item">
                    <div className="room__card-item-avatar">
                      <img src="./assets/img/user.png" alt="" />
                    </div>
                    <p className="room__card-item-text">{item.name}</p>
                    <button className="room__card-item-button">
                      Gửi lời chào
                    </button>
                  </div>
                  <div className="room__card-item">
                    <div className="room__card-item-avatar">
                      <img src="./assets/img/user.png" alt="" />
                    </div>
                    <p className="room__card-item-text">{item.name}</p>
                    <button className="room__card-item-button">
                      Gửi lời chào
                    </button>
                  </div>
                  <div className="room__card-item">
                    <div className="room__card-item-avatar">
                      <img src="./assets/img/user.png" alt="" />
                    </div>
                    <p className="room__card-item-text">{item.name}</p>
                    <button className="room__card-item-button">
                      Gửi lời chào
                    </button>
                  </div>
                  <div className="room__card-item">
                    <div className="room__card-item-avatar">
                      <img src="./assets/img/user.png" alt="" />
                    </div>
                    <p className="room__card-item-text">{item.name}</p>
                    <button className="room__card-item-button">
                      Gửi lời chào
                    </button>
                  </div>
                  <div className="room__card-item">
                    <div className="room__card-item-avatar">
                      <img src="./assets/img/user.png" alt="" />
                    </div>
                    <p className="room__card-item-text">{item.name}</p>
                    <button className="room__card-item-button">
                      Gửi lời chào
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Story;
