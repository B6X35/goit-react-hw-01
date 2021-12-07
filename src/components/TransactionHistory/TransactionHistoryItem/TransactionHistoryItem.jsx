import styles from "./TransactionHistoryItem.module.css";
import PropTypes from "prop-types";

const TransactionHistoryItem = (props) => {
  return (
    <tr className={styles["tablet-tr"]}>
      <td className={styles.td}>{props.type}</td>
      <td className={styles.td}>{props.amount}</td>
      <td className={styles.td}>{props.currency}</td>
    </tr>
  );
};

export default TransactionHistoryItem;

TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
