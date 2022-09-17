import { Avatar, Button, Comment, Form, Input, List, Tooltip } from "antd";
import moment from "moment";
import React, { useState, createElement } from "react";
import { SendOutlined } from "@ant-design/icons";
import {
  DislikeFilled,
  DislikeOutlined,
  LikeFilled,
  LikeOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";

const CommentList = ({ comments }) => (
  <List
    style={{ marginLeft: -150 }}
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? "replies" : "reply"}`}
    itemLayout="horizontal"
    renderItem={(props) => <Comment {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <div style={{ display: "flex" }}>
    <Form.Item>
      <Input
        style={{ marginLeft: -120, width: 400, borderRadius: "50px" }}
        onChange={onChange}
        value={value}
      />
    </Form.Item>
    <Form.Item>
      <Button
        style={{
          borderRadius: "50px",
          marginLeft: 30,
        }}
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
        icon={<SendOutlined />}
      >
        Comment
      </Button>
    </Form.Item>
  </div>
);

function Commen() {
  const [comments, setComments] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [value, setValue] = useState("");

  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState("");

  const like = () => {
    setLikes(1);
    setDislikes(0);
    setAction("liked");
  };

  const dislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction("disliked");
  };

  const actions = [
    <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {createElement(action === "liked" ? LikeFilled : LikeOutlined)}
        <span className="comment-action">{likes}</span>
      </span>
    </Tooltip>,
    <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={dislike}>
        {React.createElement(
          action === "disliked" ? DislikeFilled : DislikeOutlined
        )}
        <span className="comment-action">{dislikes}</span>
      </span>
    </Tooltip>,
    <span key="comment-basic-reply-to">Reply to</span>,
  ];

  const handleSubmit = () => {
    if (!value) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setValue("");
      setComments([
        ...comments,
        {
          author: "Commnent",
          avatar:
            "https://img.freepik.com/free-vector/man-look-graphic-chart-business-analytics-concept-big-data-processing-icon_39422-761.jpg",
          content: <p>{value}</p>,
          datetime: moment("2022-09-17").fromNow(),
        },
      ]);
    }, 1000);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <Comment
        style={{ marginLeft: -150 }}
        actions={actions}
        author={<a>Han Solo</a>}
        avatar={
          <Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
        }
        content={
          <p>
            We supply a series of design principles, practical patterns and high
            quality design resources (Sketch and Axure), to help people create
            their product prototypes beautifully and efficiently.
          </p>
        }
        datetime={
          <Tooltip title="2016-11-22 11:22:33">
            <span>8 hours ago</span>
          </Tooltip>
        }
      />
      {comments.length > 0 && <CommentList comments={comments} />}
      <Comment
        avatar={
          <Avatar
            style={{ marginLeft: -150 }}
            src="https://img.freepik.com/free-vector/man-look-graphic-chart-business-analytics-concept-big-data-processing-icon_39422-761.jpg"
            alt="Commnent"
          />
        }
        content={
          <Editor
            onChange={handleChange}
            onSubmit={handleSubmit}
            submitting={submitting}
            value={value}
          />
        }
      />
    </>
  );
}

export default Commen;
