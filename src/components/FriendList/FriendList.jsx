import styles from "./FriendList.module.css";
import FriendListItem from "./FriendListItem";
import PropTypes from "prop-types";

const FriendList = (props) => {
  const elements = props.friends.map((prop) => (
    <FriendListItem key={prop.id} {...prop} />
  ));
  return <ul className={styles["friend-list"]}>{elements}</ul>;
};

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};
