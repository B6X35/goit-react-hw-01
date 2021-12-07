import styles from './Statistics.module.css'
import PropTypes from "prop-types";
import StatisticsItem from './StatisticsItem/StatisticsItem'

const Statistics = (props) => {
    const element = props.stats.map(prop => <StatisticsItem key={prop.id} {...prop} />)
    return (
        <section className={styles.statistics}>
            {props.title && <h3 className={styles.title}>{props.title}</h3>}
            <ul className={styles.stat}>
                {element}
            </ul>
        </section>
    )
};

export default Statistics;

Statistics.defaultProps = {
    id: '0',
    label: 'undefinde',
    percentage: '0',
  };

Statistics.propTypes = {
    title: PropTypes.string,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.string.isRequired,
}