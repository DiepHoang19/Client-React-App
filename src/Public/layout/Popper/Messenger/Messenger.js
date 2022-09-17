
import "tippy.js/dist/tippy.css";
import classNames from "classnames/bind";
import styles from "./Messenger.module.scss";
import { useState } from "react";
import PropTypes from "prop-types";
import Tippy from "@tippyjs/react/headless"
import Message from "./Message/Message";
import MessengerItem from "./MessengerItem";


const cx = classNames.bind(styles);

const defaultFn = () => {};

function Messenger({
  children,
  items = [],
  hideOnClick = false,
  onChange = defaultFn,
}) {
  const [history, setHistory] = useState([
    {
      data: items,
    },
  ]);
  const current = history[history.length - 1];

  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MessengerItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };

  const handleBackMenu = () => {
    setHistory((prev) => prev.slice(0, 1));
  };

  return (
    <>
      <Tippy
        trigger="click"
        offset={[100, -30]}
        interactive
        placement="bottom-end"
        render={(attrs) => (
          <div className={cx("nav_user-container")}>
            <Message />
          </div>
        )}
        onHide={handleBackMenu}
      >
        {children}
      </Tippy>
    </>
  );
}

Messenger.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array,
  hideOnClick: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Messenger;
