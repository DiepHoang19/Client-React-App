import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);
function Button({
    to,
    href,
    onClick,
    children,
    outline = false,
    small = false,
    large = false,
    primary = false,
    text = false,
    disabled = false,
    rounded = false,
    className,
    rightIcon,
    leftIcon,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,

        ...passProps,
    };

    // Remove event listener when button id disabled
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        text,
        disabled,
        rounded,
        [className]: className,
    });
    return (
        <>
            <Comp className={classes} {...props}>
                {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
                <span className={cx('title')}> {children}</span>
                {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
            </Comp>
        </>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
    outline: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    primary: PropTypes.bool,
    text: PropTypes.bool,
    disabled: PropTypes.bool,
    rounded: PropTypes.bool,
    className: PropTypes.string,
    rightIcon: PropTypes.node,
    leftIcon: PropTypes.node,
};

export default Button;
