import React from 'react';
import styles from './results.module.css'

const Results = ({ results }) => {
    return (
        <div className={styles.resultWrapper} >
            <div className={styles.results}>
                <span className={styles.result}>{results.totalRevenue ? `$${results.totalRevenue}` : 'N/A'}</span>
                <span className={styles.label}>Total Revenue</span>
            </div>

            <div className={styles.results}>
                <span className={styles.result}>{results.closedDeals ? `${results.closedDeals}` : 'N/A'}</span>
                <span className={styles.label}>Closed Deals</span>
            </div>

            <div className={styles.results}>
                <span className={styles.result}>{results.revenuePerCall ? `$${results.revenuePerCall}` : 'N/A'}</span>
                <span className={styles.label}>Revenue per Call</span>
            </div>
        </div>
    );
};

export default Results;
