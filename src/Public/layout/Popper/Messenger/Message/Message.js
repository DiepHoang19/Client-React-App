import React from "react";
import styles from "./Message.module.scss";
import classNames from "classnames/bind";

import { Image } from "antd";
import {
  Threefb,
  ArrowTopfb,
  Camerafb,
  Notefb,
  Searchfb,
} from "../../../../Icon/Icon";

const cx = classNames.bind(styles);

function Message() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("messenger_container-header")}>
        <h3 className={cx("title")}>
          Chat
          <div className={cx("messenger_header-action")}>
            <span className={cx("icon-fb")}>
              <Threefb />
            </span>

            <span className={cx("icon-fb")}>
              <ArrowTopfb />
            </span>
            <span className={cx("icon-fb")}>
              <Camerafb />
            </span>
            <span className={cx("icon-fb")}>
              <Notefb />
            </span>
          </div>
        </h3>
      </div>
      <div className={cx("messenger_search")}>
        <span className={cx("icon-search")}>
          <Searchfb />
        </span>
        <input
          className={cx("input-message")}
          type="text"
          placeholder="Tìm kiếm hộp thoại"
        />
      </div>
      <div className={cx("messenger_chat-lists")}>
        <div className={cx("messenger_chat-item")}>
          <div className={cx("messenger_item-avatar")}>
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo9xqsZF_yYunSeg9vuq2UBWCGuuID6B7T1DCX2UQP&s"
              alt=""
            />
          </div>
          <div className={cx("messenger_item-content")}>
            <span>JavaScript</span>
            <span className={cx("text-unread")}>
              Đã gửi 1 ảnh <span className={cx("text-time")}>·12:24</span>
            </span>
          </div>
          <span className={cx("messenger_item")}>

          </span>
        </div>
      </div>
      <div className={cx("messenger_chat-lists")}>
        <div className={cx("messenger_chat-item")}>
          <div className={cx("messenger_item-avatar")}>
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo9xqsZF_yYunSeg9vuq2UBWCGuuID6B7T1DCX2UQP&s"
              alt=""
            />
          </div>
          <div className={cx("messenger_item-content")}>
            <span>JavaScript</span>
            <span className={cx("text-unread")}>
              Đã gửi 1 ảnh <span className={cx("text-time")}>·12:24</span>
            </span>
          </div>
          <span className={cx("messenger_item")}>
            
          </span>
        </div>
      </div>
      <div className={cx("messenger_chat-lists")}>
        <div className={cx("messenger_chat-item")}>
          <div className={cx("messenger_item-avatar")}>
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo9xqsZF_yYunSeg9vuq2UBWCGuuID6B7T1DCX2UQP&s"
              alt=""
            />
          </div>
          <div className={cx("messenger_item-content")}>
            <span>JavaScript</span>
            <span className={cx("text-unread")}>
              Đã gửi 1 ảnh <span className={cx("text-time")}>·12:24</span>
            </span>
          </div>
          <span className={cx("messenger_item")}>
           
          </span>
        </div>
      </div>
      <div className={cx("messenger_chat-lists")}>
        <div className={cx("messenger_chat-item")}>
          <div className={cx("messenger_item-avatar")}>
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo9xqsZF_yYunSeg9vuq2UBWCGuuID6B7T1DCX2UQP&s"
              alt=""
            />
          </div>
          <div className={cx("messenger_item-content")}>
            <span>JavaScript</span>
            <span className={cx("text-unread")}>
              Đã gửi 1 ảnh <span className={cx("text-time")}>·12:24</span>
            </span>
          </div>
          <span className={cx("messenger_item")}>
           
          </span>
        </div>
      </div>
      <div className={cx("messenger_chat-lists")}>
        <div className={cx("messenger_chat-item")}>
          <div className={cx("messenger_item-avatar")}>
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo9xqsZF_yYunSeg9vuq2UBWCGuuID6B7T1DCX2UQP&s"
              alt=""
            />
          </div>
          <div className={cx("messenger_item-content")}>
            <span>JavaScript</span>
            <span className={cx("text-unread")}>
              Đã gửi 1 ảnh <span className={cx("text-time")}>·12:24</span>
            </span>
          </div>
          <span className={cx("messenger_item")}>
           
          </span>
        </div>
      </div>
    </div>
  );
}

export default Message;
