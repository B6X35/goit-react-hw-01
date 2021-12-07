import styles from './Statistics.module.css'
import PropTypes from "prop-types";
import StatisticsItem from './StatisticsItem'

const Statistics = (props) => {
    const elements = props.stats.map(prop => <StatisticsItem key={prop.id} {...prop} />)
    return (
        <section className={styles.statistics}>
            {props.title && <h3 className={styles.title}>{props.title}</h3>}
            <ul className={styles.stat}>
                {elements}
            </ul>
        </section>
    )
};

export default Statistics;

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired,
}