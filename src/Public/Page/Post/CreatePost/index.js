import React from "react";
import "./CreatePost.scss";
import Box from "@mui/material/Box";
import NoSsr from "@mui/material/NoSsr";
import Commen from "../Comment/Commen";

function LargeTree() {
  return Array.from(new Array(5000)).map((_, index) => (
    <span key={index}>.</span>
  ));
}

function CreatePost() {
  const [state, setState] = React.useState({
    open: false,
    defer: false,
  });
  const handleComment = () => {
    setState({
      open: !state.open,
      defer: false,
    });
  };

  return (
    <>
      <div id="create-post">
        <div className="mid-create__post">
          <div className="m-c__p-header">
            <div className="m-c__p-header--avt">
              <img src="./assets/img/user.png" alt="" />
            </div>
            <input
              className="m-c__p-header--input"
              placeholder="Name, bạn đang nghĩ gì thế"
            />
          </div>
          <div className="m-c__p-bottom">
            <div className="m-c__p-bottom-item">
              <div className="m-c__p-header--action-item-icon">
                <svg fill="red" viewBox="0 0 24 24">
                  <g fillRule="evenodd" transform="translate(-444 -156)">
                    <g>
                      <path
                        d="M113.029 2.514c-.363-.088-.746.014-1.048.234l-2.57 1.88a.999.999 0 0 0-.411.807v8.13a1 1 0 0 0 .41.808l2.602 1.901c.219.16.477.242.737.242.253 0 .508-.077.732-.235.34-.239.519-.65.519-1.065V3.735a1.25 1.25 0 0 0-.971-1.22m-20.15 6.563c.1-.146 2.475-3.578 5.87-3.578 3.396 0 5.771 3.432 5.87 3.578a.749.749 0 0 1 0 .844c-.099.146-2.474 3.578-5.87 3.578-3.395 0-5.77-3.432-5.87-3.578a.749.749 0 0 1 0-.844zM103.75 19a3.754 3.754 0 0 0 3.75-3.75V3.75A3.754 3.754 0 0 0 103.75 0h-10A3.754 3.754 0 0 0 90 3.75v11.5A3.754 3.754 0 0 0 93.75 19h10z"
                        transform="translate(354 158.5)"
                      />
                      <path
                        d="M98.75 12c1.379 0 2.5-1.121 2.5-2.5S100.129 7 98.75 7a2.503 2.503 0 0 0-2.5 2.5c0 1.379 1.121 2.5 2.5 2.5"
                        transform="translate(354 158.5)"
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <div className="m-c__p-header--action-item-text">
                Video trực tiếp
              </div>
            </div>
            <div className="m-c__p-bottom-item">
              <div className="m-c__p-header--action-item-icon">
                <svg fill="#45bd62" viewBox="0 0 24 24">
                  <g fillRule="evenodd" transform="translate(-444 -156)">
                    <g>
                      <path
                        d="m96.968 22.425-.648.057a2.692 2.692 0 0 1-1.978-.625 2.69 2.69 0 0 1-.96-1.84L92.01 4.32a2.702 2.702 0 0 1 .79-2.156c.47-.472 1.111-.731 1.774-.79l2.58-.225a.498.498 0 0 1 .507.675 4.189 4.189 0 0 0-.251 1.11L96.017 18.85a4.206 4.206 0 0 0 .977 3.091s.459.364-.026.485m8.524-16.327a1.75 1.75 0 1 1-3.485.305 1.75 1.75 0 0 1 3.485-.305m5.85 3.011a.797.797 0 0 0-1.129-.093l-3.733 3.195a.545.545 0 0 0-.062.765l.837.993a.75.75 0 1 1-1.147.966l-2.502-2.981a.797.797 0 0 0-1.096-.12L99 14.5l-.5 4.25c-.06.674.326 2.19 1 2.25l11.916 1.166c.325.026 1-.039 1.25-.25.252-.21.89-.842.917-1.166l.833-8.084-3.073-3.557z"
                        transform="translate(352 156.5)"
                      />
                      <path
                        fillRule="nonzero"
                        d="m111.61 22.963-11.604-1.015a2.77 2.77 0 0 1-2.512-2.995L98.88 3.09A2.77 2.77 0 0 1 101.876.58l11.603 1.015a2.77 2.77 0 0 1 2.513 2.994l-1.388 15.862a2.77 2.77 0 0 1-2.994 2.513zm.13-1.494.082.004a1.27 1.27 0 0 0 1.287-1.154l1.388-15.862a1.27 1.27 0 0 0-1.148-1.37l-11.604-1.014a1.27 1.27 0 0 0-1.37 1.15l-1.387 15.86a1.27 1.27 0 0 0 1.149 1.37l11.603 1.016z"
                        transform="translate(352 156.5)"
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <div className="m-c__p-header--action-item-text">Ảnh/Video</div>
            </div>
            <div className="m-c__p-bottom-item">
              <div className="m-c__p-header--action-item-icon">
                <svg fill="#f7b929" viewBox="0 0 24 24">
                  <g fillRule="evenodd" transform="translate(-444 -156)">
                    <g>
                      <path
                        d="M107.285 13c.49 0 .841.476.712.957-.623 2.324-2.837 4.043-5.473 4.043-2.636 0-4.85-1.719-5.473-4.043-.13-.48.222-.957.712-.957h9.522z"
                        transform="translate(353.5 156.5)"
                      />
                      <path
                        fillRule="nonzero"
                        d="M114.024 11.5c0 6.351-5.149 11.5-11.5 11.5s-11.5-5.149-11.5-11.5S96.173 0 102.524 0s11.5 5.149 11.5 11.5zm-2 0a9.5 9.5 0 1 0-19 0 9.5 9.5 0 0 0 19 0z"
                        transform="translate(353.5 156.5)"
                      />
                      <path
                        d="M99.524 8.5c0 .829-.56 1.5-1.25 1.5s-1.25-.671-1.25-1.5.56-1.5 1.25-1.5 1.25.671 1.25 1.5m8.5 0c0 .829-.56 1.5-1.25 1.5s-1.25-.671-1.25-1.5.56-1.5 1.25-1.5 1.25.671 1.25 1.5m-.739 4.5h-9.522c-.49 0-.841.476-.712.957.623 2.324 2.837 4.043 5.473 4.043 2.636 0 4.85-1.719 5.473-4.043.13-.48-.222-.957-.712-.957m-2.165 2c-.667.624-1.592 1-2.596 1a3.799 3.799 0 0 1-2.596-1h5.192"
                        transform="translate(353.5 156.5)"
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <div className="m-c__p-header--action-item-text">
                Cảm xúc/Hoạt động
              </div>
            </div>
          </div>
        </div>
        <div className="mid__post">
          <div className="mid__post-header">
            <div className="m__p-header--avt">
              <div className="m__p-header--avt-group">
                <img
                  src="./assets/img/194504189_171660728241982_2683093973331991339_n.jpeg"
                  alt=""
                />
              </div>
              <div className="m__p-header--avt-user">
                <img src="./assets/img/user.png" alt="" />
              </div>
            </div>
            <div className="mid__post-header--name">
              <h6 className="mid__post-header--name-group">
                Ở đây chỉ nói English
              </h6>
              <p className="mid__post-header--name-user">
                Tô Vũ Thuỳ Ling <span className="text-time">· 6 giờ ·</span>
                <span className="icon-earth">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 16 16"
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
            <div className="mid__post-header--icon">
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
                />
              </svg>
            </div>
          </div>
          <div className="mid__post-content">
            <div className="mid__post-content--text">
              <p>
                {" "}
                console.log("🚀 ~ file: index.js ~ line 5 ~ CreatePost ~
                CreatePost", CreatePost)
              </p>
            </div>
            <div className="mid__post-content--img">
              <img
                src="./assets/img/302084215_397244299209182_251060855584160258_n.jpeg"
                alt=""
              />
            </div>
          </div>
          <div className="mid__post-bottom">
            <div className="mid__post-bottom--count">
              <div className="count-reaction">
                <span className="reaction-icon">
                  <img src="./assets/img/reaction/like.png" alt="" />
                </span>
                <span className="reaction-icon">
                  <img src="./assets/img/reaction/haha.png" alt="" />
                </span>
                <span className="reaction-icon">
                  <img src="./assets/img/reaction/love.png" alt="" />
                </span>
                <span
                  className="text-count text-time"
                  style={{ transform: "translate(-0.5rem)" }}
                >
                  654
                </span>
              </div>
              <div className="count-comment-share">
                <span className="text-time">24 bình luận </span>
                <span className="text-time">35 lượt chia sẻ</span>
              </div>
            </div>
            <div className="mid__post-bottom--action">
              <div
                data-reaction="like"
                className="mid__post-bottom--action-reaction"
              >
                <div className="pick__reactions">
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
                    <path d="M96 191.1H32c-17.67 0-32 14.33-32 31.1v223.1c0 17.67 14.33 31.1 32 31.1h64c17.67 0 32-14.33 32-31.1V223.1C128 206.3 113.7 191.1 96 191.1zM512 227c0-36.89-30.05-66.92-66.97-66.92h-99.86C354.7 135.1 360 113.5 360 100.8c0-33.8-26.2-68.78-70.06-68.78c-46.61 0-59.36 32.44-69.61 58.5c-31.66 80.5-60.33 66.39-60.33 93.47c0 12.84 10.36 23.99 24.02 23.99c5.256 0 10.55-1.721 14.97-5.26c76.76-61.37 57.97-122.7 90.95-122.7c16.08 0 22.06 12.75 22.06 20.79c0 7.404-7.594 39.55-25.55 71.59c-2.046 3.646-3.066 7.686-3.066 11.72c0 13.92 11.43 23.1 24 23.1h137.6C455.5 208.1 464 216.6 464 227c0 9.809-7.766 18.03-17.67 18.71c-12.66 .8593-22.36 11.4-22.36 23.94c0 15.47 11.39 15.95 11.39 28.91c0 25.37-35.03 12.34-35.03 42.15c0 11.22 6.392 13.03 6.392 22.25c0 22.66-29.77 13.76-29.77 40.64c0 4.515 1.11 5.961 1.11 9.456c0 10.45-8.516 18.95-18.97 18.95h-52.53c-25.62 0-51.02-8.466-71.5-23.81l-36.66-27.51c-4.315-3.245-9.37-4.811-14.38-4.811c-13.85 0-24.03 11.38-24.03 24.04c0 7.287 3.312 14.42 9.596 19.13l36.67 27.52C235 468.1 270.6 480 306.6 480h52.53c35.33 0 64.36-27.49 66.8-62.2c17.77-12.23 28.83-32.51 28.83-54.83c0-3.046-.2187-6.107-.6406-9.122c17.84-12.15 29.28-32.58 29.28-55.28c0-5.311-.6406-10.54-1.875-15.64C499.9 270.1 512 250.2 512 227z" />
                  </svg>
                </span>
                <span className="icon-sub-text">Thích</span>
              </div>
              <div
                className="mid__post-bottom--action-comment"
                onClick={handleComment}
              >
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M447.1 0h-384c-35.25 0-64 28.75-64 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.98c0 9.836 11.02 15.55 19.12 9.7l124.9-93.68h144c35.25 0 64-28.75 64-63.1V63.1C511.1 28.75 483.2 0 447.1 0zM464 352c0 8.75-7.25 16-16 16h-160l-80 60v-60H64c-8.75 0-16-7.25-16-16V64c0-8.75 7.25-16 16-16h384c8.75 0 16 7.25 16 16V352z" />
                  </svg>
                </span>
                <span>Bình luận</span>
              </div>

              <div className="mid__post-bottom--action-share">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z" />
                  </svg>
                </span>
                <span>Chia sẻ</span>
              </div>
            </div>
          
            <Box sx={{ width: 300, display: "flex", flexWrap: "wrap" }}>
              {state.open ? (
                <Commen />
              ) : null}
            </Box>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreatePost;
