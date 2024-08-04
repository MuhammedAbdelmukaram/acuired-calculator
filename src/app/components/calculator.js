import React, { useState, useEffect } from 'react';
import styles from './calculator.module.css';

const Calculator = ({ setResults }) => {
    const [formData, setFormData] = useState({
        leads: '',
        callsTaken: '',
        callsClosed: '',
        apv: '',
        ltv: '',
        closeRate: '0'
    });

    useEffect(() => {
        document.documentElement.style.setProperty('--percent', `${formData.closeRate}%`);
    }, [formData.closeRate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleCalculate = () => {
        const { callsClosed, apv, ltv, closeRate } = formData;

        const parsedCallsClosed = parseInt(callsClosed);
        const parsedCloseRate = parseFloat(closeRate) / 100; // Convert percentage to decimal
        const parsedapv = parseFloat(apv);
        const parsedLtv = parseFloat(ltv);

        // Calculate Total Revenue
        const totalRevenue = parsedCallsClosed * parsedapv * parsedLtv;

        setResults({
            totalRevenue: totalRevenue.toFixed(2),
            closedDeals: parsedCallsClosed.toFixed(2),
            revenuePerCall: (totalRevenue / parsedCallsClosed).toFixed(2)
        });
    };

    const handleReset = () => {
        setFormData({
            leads: '',
            callsTaken: '',
            callsClosed: '',
            apv: '',
            ltv: '',
            closeRate: '0'
        });
        setResults({
            totalRevenue: '',
            closedDeals: '',
            revenuePerCall: ''
        });
    };

    return (
        <div className={styles.container}>
            <img
                src="/refreshIcon.png"
                alt="Reset"
                onClick={handleReset}
                className={styles.resetButton}
            />
            <div>
                <p className={styles.header}>Estimated Revenue Calculator</p>
            </div>

            <div className={styles.twoInputs}>
                <div>
                    <label htmlFor="leads" className={styles.label}>Leads</label>
                    <input
                        type="number"
                        id="leads"
                        name="leads"
                        value={formData.leads}
                        onChange={handleChange}
                        placeholder="0"
                        className={styles.input}
                    />
                </div>

                <div>
                    <label htmlFor="callsTaken" className={styles.label}>Calls Taken</label>
                    <input
                        type="number"
                        id="callsTaken"
                        name="callsTaken"
                        value={formData.callsTaken}
                        onChange={handleChange}
                        placeholder="0"
                        className={styles.input}
                    />
                </div>
            </div>

            <div className={styles.twoInputs}>
                <div>
                    <label htmlFor="callsClosed" className={styles.label}>Calls Closed</label>
                    <input
                        type="number"
                        id="callsClosed"
                        name="callsClosed"
                        value={formData.callsClosed}
                        onChange={handleChange}
                        placeholder="0"
                        className={styles.input}
                    />
                </div>

                <div>
                    <label htmlFor="apv" className={styles.label}>APV (Average Placement Value)</label>
                    <input
                        type="number"
                        id="apv"
                        name="apv"
                        value={formData.apv}
                        onChange={handleChange}
                        placeholder="$ 0.00"
                        className={styles.input}
                    />
                </div>
            </div>

            <div className={styles.twoInputs}>
                <div>
                    <label htmlFor="ltv" className={styles.label}>LTV (Lifetime Value)</label>
                    <input
                        type="number"
                        id="ltv"
                        name="ltv"
                        value={formData.ltv}
                        onChange={handleChange}
                        placeholder="0"
                        className={styles.input}
                    />
                </div>

                <div>
                    <label htmlFor="closeRate" className={styles.label}>Close Rate (%)</label>
                    <input
                        type="number"
                        step="0.01"
                        id="closeRate"
                        name="closeRate"
                        value={formData.closeRate}
                        onChange={handleChange}
                        placeholder="0.00"
                        className={styles.input}
                    />
                </div>
            </div>

            <div style={{height:2, backgroundColor:"#d0d0d0", width:"100%", marginBottom:50, marginTop:30, borderRadius:20}}></div>

            <div style={{width:"100%", display:"flex", justifyContent:"flex-end"}}>
                <button onClick={handleCalculate} className={styles.button}>Calculate</button>
            </div>

            <div className={styles.footer}></div>
        </div>
    );
};

export default Calculator;
