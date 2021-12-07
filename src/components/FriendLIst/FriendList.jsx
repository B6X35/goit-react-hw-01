import './FriendList.css'
import FriendListItem from './FriendListItem/FriendListItem'
import PropTypes from "prop-types";

const FriendList = (props) => {
    const element = props.friends.map(prop => <FriendListItem key={prop.id} {...prop} />)
    return (
        <ul className="friend-list">
            {element}
        </ul>
    )
}

export default FriendList;

FriendList.defaultProps = {
    id: '0',
  };

FriendList.propTypes = {
    id: PropTypes.string.isRequired,
}