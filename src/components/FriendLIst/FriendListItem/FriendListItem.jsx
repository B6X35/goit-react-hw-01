import "./FriendListItem.css";
import PropTypes from "prop-types";


const FriendListItem = ({isOnline, avatar, name}) => {
    const onlineStatus = () => {
        if(isOnline){
            return 'online'
        } else {
            return 'offline'
        }
    }
    return (
        <li className="item-friend">
            <span className={onlineStatus()}>{isOnline}</span>
            <img className="avatar-friend" src={avatar} alt="User avatar" width="48" />
            <p className="name-friend">{name}</p>
        </li>
    )
}

export default FriendListItem;

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};