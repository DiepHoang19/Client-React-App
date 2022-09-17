import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Arrowfb, Darkmodefb, FeedBackfb, Helpfb, Logoutfb, Settingfb } from '~/Public/component/Icons';
import { Link, useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }) {
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
                <MenuItem
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

    const handleLogout = () => {
        localStorage.clear('accessToken');
        setCurrentUser(false);
        navigate('/signin');
    };

    const navigate = useNavigate();

    const [currentUser, setCurrentUser] = useState(true);
    return (
        <>
            <Tippy
                trigger="click"
                offset={[10, -30]}
                interactive
                placement="bottom-end"
                render={(attrs) => (
                    <div className={cx('nav_user-container')}>
                        <div className={cx('user_account')}>
                            <div className={cx('user_account-avt')}>
                                <img src="./assets/img/user.png" alt="aaa" />
                            </div>
                            <span className={cx('user_account-name')}>user name</span>
                        </div>
                        <div className={cx('user_setting-item')}>
                            <div className={cx('user_setting-item-icon')}>
                                <Settingfb />
                            </div>
                            <p className={cx('user_setting-item-text')}>Cài đặt quyền riêng tư</p>
                            <div className={cx('user_setting-item-arrow')}>
                                <Arrowfb />
                            </div>
                        </div>
                        <div className={cx('user_setting-item')}>
                            <div className={cx('user_setting-item-icon')}>
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
                                        d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                                    />
                                </svg>
                            </div>
                            <p className={cx('user_setting-item-text')}>Trợ giúp &amp; hỗ trợ</p>
                            <div className={cx('user_setting-item-arrow')}>
                                <Helpfb />
                            </div>
                        </div>
                        <div className={cx('user_setting-item')}>
                            <div className={cx('user_setting-item-icon')}>
                                <Darkmodefb />
                            </div>
                            <p className={cx('user_setting-item-text')}>Màn hình &amp; trợ năng</p>
                            <div className={cx('user_setting-item-arrow')}>
                                <Arrowfb />
                            </div>
                        </div>
                        <div className={cx('user_setting-item')}>
                            <div className={cx('user_setting-item-icon')}>
                                <FeedBackfb />
                            </div>
                            <p className={cx('user_setting-item-text')}>Đóng góp ý kiến</p>
                        </div>
                        <div className={cx('user_setting-item')} onClick={handleLogout}>
                            <div className={cx('user_setting-item-icon')}>
                                <Logoutfb />
                            </div>
                            <p className={cx('user_setting-item-text')}>
                                {currentUser ? 'Đăng xuất' : <Link to="/signin">Login</Link>}
                            </p>
                        </div>
                    </div>
                )}
                onHide={handleBackMenu}
            >
                {children}
            </Tippy>
        </>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};

export default Menu;
