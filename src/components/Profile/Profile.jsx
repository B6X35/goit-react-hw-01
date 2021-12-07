import "./Profile.css";
import PropTypes from "prop-types";

const Profile = ({avatar, username, tag, location, stats}) => {
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>
      <ul className="stats">
        <li className="stats-box">
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li className="stats-box">
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li className="stats-box">
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;

Profile.defaultProps = {
  name: 'Незнайомець'
};

Profile.propTypes = {

    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }).isRequired

};
