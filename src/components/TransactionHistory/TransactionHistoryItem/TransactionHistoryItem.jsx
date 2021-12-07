import './TransactionHistoryItem.css'
import PropTypes from "prop-types";

const TransactionHistoryItem = (props) => {
    return (
        <tr className="tablet-tr">
            <td>{props.type}</td>
            <td>{props.amount}</td>
            <td>{props.currency}</td>
        </tr>
    )
}

export default TransactionHistoryItem;

TransactionHistoryItem.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}