import React from 'react';
import styles from './results.module.css';

const Results = ({ results }) => {
    const formatNumber = (number) => {
        // Convert number to an integer to remove decimals
        const integerNumber = Math.floor(number);
        return integerNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    return (
        <div className={styles.resultWrapper}>
            <div className={styles.results}>
                <span className={styles.result}>
                    {results.totalRevenue ? `$${formatNumber(results.totalRevenue)}` : 'N/A'}
                </span>
                <span className={styles.label}>Total Revenue</span>
            </div>
        </div>
    );
};

export default Results;
