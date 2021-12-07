import PropTypes from "prop-types";
import styles from "./StatisticsItem.module.css";
import getRangomColor from "./switch-solor";

const StatisticsItem = ({ label, percentage }) => {
  const color = {
    backgroundColor: getRangomColor(),
  };
  return (
    <li className={styles.item} style={color}>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
  );
};

export default StatisticsItem;

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
