import React from 'react';
import styles from './results.module.css'

const Results = ({ results }) => {
    return (
        <div style={{borderTop:"3px solid #000", width:"100vw", display:"flex", justifyContent:"space-around", alignItems:"center", height:"100%", paddingTop:50}}>
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
