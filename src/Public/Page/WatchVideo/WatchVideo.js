import React from "react";
import "./WatchVideo.scss";

function WatchVideo() {
  return (
    <main className="container">
      <div className="side-bar_left">
        <div className="sbl_title">
          <h2 className="sbl_title-text">Watch</h2>
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
        <div className="sbl_action-lists">
          <div className="sbl_action-item">
            <div className="sbl_action-item-icon">
              <img src="./assets/img/watch.png" alt="" />
            </div>
            <div className="sbl_action-item-text">Trang chủ</div>
          </div>
          <div className="sbl_action-item">
            <div className="sbl_action-item-icon">
              <img src="./assets/img/livestreamicon.png" alt="" />
            </div>
            <div className="sbl_action-item-text">Trực tiếp</div>
          </div>
          <div className="sbl_action-item">
            <div className="sbl_action-item-icon">
              <img src="./assets/img/cast.png" alt="" />
            </div>
            <div className="sbl_action-item-text">Chương trình&nbsp;</div>
          </div>
          <div className="sbl_action-item">
            <div className="sbl_action-item-icon">
              <img src="./assets/img/save.png" alt="" />
            </div>
            <div className="sbl_action-item-text">Đã lưu</div>
          </div>
        </div>
      </div>
      <div className="content hidden_scroll">
        <div className="box">
          <div className="box_header">
            <div className="box_header-avt">
              <img src="./assets/img/user/user1.jpeg" alt="" />
            </div>
            <div className="box_header-name">
              <span className="text-user">Review Phim</span>
              <p className="box_header-name-text">
                <span className="text-time">6 giờ ·</span>
                <span className="icon-earth">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    width="1.2rem"
                    height="1.2em"
                    title="Đã chia sẻ với Công khai"
                  >
                    <title>Đã chia sẻ với Công khai</title>
                    <g fillRule="evenodd" transform="translate(-448 -544)">
                      <g>
                        <path
                          d="M109.5 408.5c0 3.23-2.04 5.983-4.903 7.036l.07-.036c1.167-1 1.814-2.967 2-3.834.214-1 .303-1.3-.5-1.96-.31-.253-.677-.196-1.04-.476-.246-.19-.356-.59-.606-.73-.594-.337-1.107.11-1.954.223a2.666 2.666 0 0 1-1.15-.123c-.007 0-.007 0-.013-.004l-.083-.03c-.164-.082-.077-.206.006-.36h-.006c.086-.17.086-.376-.05-.529-.19-.214-.54-.214-.804-.224-.106-.003-.21 0-.313.004l-.003-.004c-.04 0-.084.004-.124.004h-.037c-.323.007-.666-.034-.893-.314-.263-.353-.29-.733.097-1.09.28-.26.863-.8 1.807-.22.603.37 1.166.667 1.666.5.33-.11.48-.303.094-.87a1.128 1.128 0 0 1-.214-.73c.067-.776.687-.84 1.164-1.2.466-.356.68-.943.546-1.457-.106-.413-.51-.873-1.28-1.01a7.49 7.49 0 0 1 6.524 7.434"
                          transform="translate(354 143.5)"
                        />
                        <path
                          d="M104.107 415.696A7.498 7.498 0 0 1 94.5 408.5a7.48 7.48 0 0 1 3.407-6.283 5.474 5.474 0 0 0-1.653 2.334c-.753 2.217-.217 4.075 2.29 4.075.833 0 1.4.561 1.333 2.375-.013.403.52 1.78 2.45 1.89.7.04 1.184 1.053 1.33 1.74.06.29.127.65.257.97a.174.174 0 0 0 .193.096"
                          transform="translate(354 143.5)"
                        />
                        <path
                          fillRule="nonzero"
                          d="M110 408.5a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-1 0a7 7 0 1 0-14 0 7 7 0 0 0 14 0z"
                          transform="translate(354 143.5)"
                        />
                      </g>
                    </g>
                  </svg>
                </span>
              </p>
            </div>
            <div className="box_header-icon">
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
                  d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                ></path>
              </svg>
            </div>
          </div>
          <div className="box_content">
            <div className="box_content-title">
              At My Worst - Pink Sweat$ ( Lyrics + Vietsub )
            </div>
            <div className="box_content-video">
              <video controls="">
                <source src="./assets/img/video.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="box_bottom">
            <div className="box_bottom-action">
              <div className="box_bottom-action-reaction">
                <div className="pick__reaction">
                  <img
                    data-reaction="like"
                    className="pick__reaction-item"
                    src="./assets/img/reaction/like64.png"
                  />
                  <img
                    data-reaction="love"
                    className="pick__reaction-item"
                    src="./assets/img/reaction/love64.png"
                  />
                  <img
                    data-reaction="haha"
                    className="pick__reaction-item"
                    src="./assets/img/reaction/haha64.png"
                  />
                  <img
                    data-reaction="care"
                    className="pick__reaction-item"
                    src="./assets/img/reaction/care64.png"
                  />
                  <img
                    data-reaction="wow"
                    className="pick__reaction-item"
                    src="./assets/img/reaction/wow64.png"
                  />
                  <img
                    data-reaction="sad"
                    className="pick__reaction-item"
                    src="./assets/img/reaction/sad64.png"
                  />
                  <img
                    data-reaction="angry"
                    className="pick__reaction-item"
                    src="./assets/img/reaction/angry64.png"
                  />
                </div>
                <img className="feeling" src="" alt="" />
                <span className="icon-replace">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M96 191.1H32c-17.67 0-32 14.33-32 31.1v223.1c0 17.67 14.33 31.1 32 31.1h64c17.67 0 32-14.33 32-31.1V223.1C128 206.3 113.7 191.1 96 191.1zM512 227c0-36.89-30.05-66.92-66.97-66.92h-99.86C354.7 135.1 360 113.5 360 100.8c0-33.8-26.2-68.78-70.06-68.78c-46.61 0-59.36 32.44-69.61 58.5c-31.66 80.5-60.33 66.39-60.33 93.47c0 12.84 10.36 23.99 24.02 23.99c5.256 0 10.55-1.721 14.97-5.26c76.76-61.37 57.97-122.7 90.95-122.7c16.08 0 22.06 12.75 22.06 20.79c0 7.404-7.594 39.55-25.55 71.59c-2.046 3.646-3.066 7.686-3.066 11.72c0 13.92 11.43 23.1 24 23.1h137.6C455.5 208.1 464 216.6 464 227c0 9.809-7.766 18.03-17.67 18.71c-12.66 .8593-22.36 11.4-22.36 23.94c0 15.47 11.39 15.95 11.39 28.91c0 25.37-35.03 12.34-35.03 42.15c0 11.22 6.392 13.03 6.392 22.25c0 22.66-29.77 13.76-29.77 40.64c0 4.515 1.11 5.961 1.11 9.456c0 10.45-8.516 18.95-18.97 18.95h-52.53c-25.62 0-51.02-8.466-71.5-23.81l-36.66-27.51c-4.315-3.245-9.37-4.811-14.38-4.811c-13.85 0-24.03 11.38-24.03 24.04c0 7.287 3.312 14.42 9.596 19.13l36.67 27.52C235 468.1 270.6 480 306.6 480h52.53c35.33 0 64.36-27.49 66.8-62.2c17.77-12.23 28.83-32.51 28.83-54.83c0-3.046-.2187-6.107-.6406-9.122c17.84-12.15 29.28-32.58 29.28-55.28c0-5.311-.6406-10.54-1.875-15.64C499.9 270.1 512 250.2 512 227z"></path>
                  </svg>
                </span>
                <span className="icon-sub-text">Thích</span>
              </div>
              <div className="box_bottom-action-comment">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M447.1 0h-384c-35.25 0-64 28.75-64 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.98c0 9.836 11.02 15.55 19.12 9.7l124.9-93.68h144c35.25 0 64-28.75 64-63.1V63.1C511.1 28.75 483.2 0 447.1 0zM464 352c0 8.75-7.25 16-16 16h-160l-80 60v-60H64c-8.75 0-16-7.25-16-16V64c0-8.75 7.25-16 16-16h384c8.75 0 16 7.25 16 16V352z"></path>
                  </svg>
                </span>
                <span>Bình luận</span>
              </div>
              <div className="box_bottom-action-share">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z"></path>
                  </svg>
                </span>
                <span>Chia sẻ</span>
              </div>
            </div>
            <div className="box_bottom-count">
              <span>
                <img src="./assets/img/reaction/like64.png" alt="" />
                Ai đó và 94K người khác
              </span>
              <span>1k Bình luận</span>
              <span>2 tỷ lượt xem</span>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="box_header">
            <div className="box_header-avt">
              <img src="./assets/img/user/user1.jpeg" alt="" />
            </div>
            <div className="box_header-name">
              <span className="text-user">Review Phim</span>
              <p className="box_header-name-text">
                <span className="text-time">6 giờ ·</span>
                <span className="icon-earth">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    width="1.2rem"
                    height="1.2em"
                    title="Đã chia sẻ với Công khai"
                  >
                    <title>Đã chia sẻ với Công khai</title>
                    <g fillRule="evenodd" transform="translate(-448 -544)">
                      <g>
                        <path
                          d="M109.5 408.5c0 3.23-2.04 5.983-4.903 7.036l.07-.036c1.167-1 1.814-2.967 2-3.834.214-1 .303-1.3-.5-1.96-.31-.253-.677-.196-1.04-.476-.246-.19-.356-.59-.606-.73-.594-.337-1.107.11-1.954.223a2.666 2.666 0 0 1-1.15-.123c-.007 0-.007 0-.013-.004l-.083-.03c-.164-.082-.077-.206.006-.36h-.006c.086-.17.086-.376-.05-.529-.19-.214-.54-.214-.804-.224-.106-.003-.21 0-.313.004l-.003-.004c-.04 0-.084.004-.124.004h-.037c-.323.007-.666-.034-.893-.314-.263-.353-.29-.733.097-1.09.28-.26.863-.8 1.807-.22.603.37 1.166.667 1.666.5.33-.11.48-.303.094-.87a1.128 1.128 0 0 1-.214-.73c.067-.776.687-.84 1.164-1.2.466-.356.68-.943.546-1.457-.106-.413-.51-.873-1.28-1.01a7.49 7.49 0 0 1 6.524 7.434"
                          transform="translate(354 143.5)"
                        />
                        <path
                          d="M104.107 415.696A7.498 7.498 0 0 1 94.5 408.5a7.48 7.48 0 0 1 3.407-6.283 5.474 5.474 0 0 0-1.653 2.334c-.753 2.217-.217 4.075 2.29 4.075.833 0 1.4.561 1.333 2.375-.013.403.52 1.78 2.45 1.89.7.04 1.184 1.053 1.33 1.74.06.29.127.65.257.97a.174.174 0 0 0 .193.096"
                          transform="translate(354 143.5)"
                        />
                        <path
                          fillRule="nonzero"
                          d="M110 408.5a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-1 0a7 7 0 1 0-14 0 7 7 0 0 0 14 0z"
                          transform="translate(354 143.5)"
                        />
                      </g>
                    </g>
                  </svg>
                </span>
              </p>
            </div>
            <div className="box_header-icon">
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
                  d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                ></path>
              </svg>
            </div>
          </div>
          <div className="box_content">
            <div className="box_content-title">
              At My Worst - Pink Sweat$ ( Lyrics + Vietsub )
            </div>
            <div className="box_content-video">
              <video controls="">
                <source src="./assets/img/video.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="box_bottom">
            <div className="box_bottom-action">
              <div className="box_bottom-action-reaction">
                <div className="pick__reaction">
                  <img
                    data-reaction="like"
                    className="pick__reaction-item"
                    src="./assets/img/reaction/like64.png"
                  />
                  <img
                    data-reaction="love"
                    className="pick__reaction-item"
                    src="./assets/img/reaction/love64.png"
                  />
                  <img
                    data-reaction="haha"
                    className="pick__reaction-item"
                    src="./assets/img/reaction/haha64.png"
                  />
                  <img
                    data-reaction="care"
                    className="pick__reaction-item"
                    src="./assets/img/reaction/care64.png"
                  />
                  <img
                    data-reaction="wow"
                    className="pick__reaction-item"
                    src="./assets/img/reaction/wow64.png"
                  />
                  <img
                    data-reaction="sad"
                    className="pick__reaction-item"
                    src="./assets/img/reaction/sad64.png"
                  />
                  <img
                    data-reaction="angry"
                    className="pick__reaction-item"
                    src="./assets/img/reaction/angry64.png"
                  />
                </div>
                <img className="feeling" src="" alt="" />
                <span className="icon-replace">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M96 191.1H32c-17.67 0-32 14.33-32 31.1v223.1c0 17.67 14.33 31.1 32 31.1h64c17.67 0 32-14.33 32-31.1V223.1C128 206.3 113.7 191.1 96 191.1zM512 227c0-36.89-30.05-66.92-66.97-66.92h-99.86C354.7 135.1 360 113.5 360 100.8c0-33.8-26.2-68.78-70.06-68.78c-46.61 0-59.36 32.44-69.61 58.5c-31.66 80.5-60.33 66.39-60.33 93.47c0 12.84 10.36 23.99 24.02 23.99c5.256 0 10.55-1.721 14.97-5.26c76.76-61.37 57.97-122.7 90.95-122.7c16.08 0 22.06 12.75 22.06 20.79c0 7.404-7.594 39.55-25.55 71.59c-2.046 3.646-3.066 7.686-3.066 11.72c0 13.92 11.43 23.1 24 23.1h137.6C455.5 208.1 464 216.6 464 227c0 9.809-7.766 18.03-17.67 18.71c-12.66 .8593-22.36 11.4-22.36 23.94c0 15.47 11.39 15.95 11.39 28.91c0 25.37-35.03 12.34-35.03 42.15c0 11.22 6.392 13.03 6.392 22.25c0 22.66-29.77 13.76-29.77 40.64c0 4.515 1.11 5.961 1.11 9.456c0 10.45-8.516 18.95-18.97 18.95h-52.53c-25.62 0-51.02-8.466-71.5-23.81l-36.66-27.51c-4.315-3.245-9.37-4.811-14.38-4.811c-13.85 0-24.03 11.38-24.03 24.04c0 7.287 3.312 14.42 9.596 19.13l36.67 27.52C235 468.1 270.6 480 306.6 480h52.53c35.33 0 64.36-27.49 66.8-62.2c17.77-12.23 28.83-32.51 28.83-54.83c0-3.046-.2187-6.107-.6406-9.122c17.84-12.15 29.28-32.58 29.28-55.28c0-5.311-.6406-10.54-1.875-15.64C499.9 270.1 512 250.2 512 227z"></path>
                  </svg>
                </span>
                <span className="icon-sub-text">Thích</span>
              </div>
              <div className="box_bottom-action-comment">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M447.1 0h-384c-35.25 0-64 28.75-64 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.98c0 9.836 11.02 15.55 19.12 9.7l124.9-93.68h144c35.25 0 64-28.75 64-63.1V63.1C511.1 28.75 483.2 0 447.1 0zM464 352c0 8.75-7.25 16-16 16h-160l-80 60v-60H64c-8.75 0-16-7.25-16-16V64c0-8.75 7.25-16 16-16h384c8.75 0 16 7.25 16 16V352z"></path>
                  </svg>
                </span>
                <span>Bình luận</span>
              </div>
              <div className="box_bottom-action-share">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z"></path>
                  </svg>
                </span>
                <span>Chia sẻ</span>
              </div>
            </div>
            <div className="box_bottom-count">
              <span>
                <img src="./assets/img/reaction/like64.png" alt="" />
                Ai đó và 94K người khác
              </span>
              <span>1k Bình luận</span>
              <span>2 tỷ lượt xem</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default WatchVideo;
