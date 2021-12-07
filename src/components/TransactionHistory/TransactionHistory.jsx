import './TransactionHistory.css'
import TransactionHistoryItem from './TransactionHistoryItem/TransactionHistoryItem'
import PropTypes from "prop-types";

const TransactionHistory = (props) => {
    const element = props.items.map(item => <TransactionHistoryItem key={item.id} {...item} />)
    return (
        <table className="transaction-history">
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
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