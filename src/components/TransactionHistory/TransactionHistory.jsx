import styles from './TransactionHistory.module.css'
import TransactionHistoryItem from './TransactionHistoryItem/TransactionHistoryItem'
import PropTypes from "prop-types";

const TransactionHistory = (props) => {
    const element = props.items.map(item => <TransactionHistoryItem key={item.id} {...item} />)
    return (
        <table className={`${styles["transaction-history"]} ${styles['table-global']}`}>
            <thead>
                <tr className={styles.tr}>
                    <th className={styles.th}>Type</th>
                    <th className={styles.th}>Amount</th>
                    <th className={styles.th}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {element}
            </tbody>
        </table>
    )
}

export default TransactionHistory;

TransactionHistory.defaultProps = {
    id: ''
};

TransactionHistory.propTypes = {
    id: PropTypes.string.isRequired,
}