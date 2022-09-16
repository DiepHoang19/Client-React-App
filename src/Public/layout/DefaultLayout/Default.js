import React from "react";
import classNames from "classnames/bind";
import styles from "../DefaultLayout/Default.module.scss";
import PropTypes from "prop-types";

const cx = classNames.bind(styles);

function Default({ children }) {
  return (
    <>
      <div className={cx("wrapper")}>
        <div className={cx("container")}>
          <div className={cx("content")}>{children}</div>
        </div>
      </div>
    </>
  );
}
Default.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Default;
