import styles from "./FriendListItem.module.css";
import PropTypes from "prop-types";


const FriendListItem = ({isOnline, avatar, name}) => {
    const onlineStatus = isOnline ? styles['online'] : styles['offline']
    return (
        <li className={styles.item}>
            <span className={onlineStatus}>{isOnline}</span>
            <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={styles.name}>{name}</p>
        </li>
    )
}

export default FriendListItem;

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};