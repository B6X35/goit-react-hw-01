import PropTypes from "prop-types";
import './StatisticsItem.css';
import getRangomColor from './switch-solor'

const StatisticsItem = ({ label, percentage }) => {
    const color = {
    backgroundColor: getRangomColor(),
    }    
  return (
    <li className="item" style={color}>
      <span className="label-stat">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
};

export default StatisticsItem;



StatisticsItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}