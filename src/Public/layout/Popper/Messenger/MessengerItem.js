
import classNames from 'classnames/bind';
import styles from './Messenger.module.scss';
import PropTypes from 'prop-types';
import Button from "../../../../Public/components/Button/Button"


const cx = classNames.bind(styles);

function MessengerItem({ data, onClick }) {
    const classess = cx('menu-item', {
        separate: data.separate,
    });
    return (
        <Button className={classess} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

MessengerItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default MessengerItem;
