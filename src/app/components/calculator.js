import React, { useState, useEffect } from 'react';
import styles from './calculator.module.css';

const Calculator = ({ setResults }) => {
    const [formData, setFormData] = useState({
        calls: '',
        closeRate: '0',
        aov: '',
        ltv: ''
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

    const handleSliderChange = (e) => {
        setFormData({
            ...formData,
            closeRate: e.target.value
        });
    };

    const handleCalculate = () => {
        const { calls, closeRate, aov, ltv } = formData;

        const parsedCalls = parseInt(calls);
        const parsedCloseRate = parseFloat(closeRate) / 100; // Convert percentage to decimal
        const parsedAov = parseFloat(aov);
        const parsedLtv = parseFloat(ltv);

        // Calculate number of closed deals
        const closedDeals = parsedCalls * parsedCloseRate;

        // Calculate Total Revenue
        const totalRevenue = closedDeals * parsedAov * parsedLtv;

        setResults({
            totalRevenue: totalRevenue.toFixed(2),
            closedDeals: closedDeals.toFixed(2),
            revenuePerCall: (totalRevenue / parsedCalls).toFixed(2)
        });
    };

    const handleReset = () => {
        setFormData({
            calls: '',
            closeRate: '0',
            aov: '',
            ltv: ''
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
                <p className={styles.header}>Salesman's Calculator</p>
            </div>

            <div className={styles.twoInputs}>
                <div>
                    <label htmlFor="calls" className={styles.label}>Calls</label>
                    <input
                        type="number"
                        id="calls"
                        name="calls"
                        value={formData.calls}
                        onChange={handleChange}
                        placeholder="0"
                        className={styles.input}
                    />
                </div>

                <div>
                    <label htmlFor="aov" className={styles.label}>AOV (Average Order Value)</label>
                    <input
                        type="number"
                        id="aov"
                        name="aov"
                        value={formData.aov}
                        onChange={handleChange}
                        placeholder="$ 0.00"
                        className={styles.input}
                    />
                </div>
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
            </div>

            <div className={styles.twoInputs}>

            </div>

            <div className={styles.closeRateWrapper}>
                <label htmlFor="closeRate" className={styles.label}>Close Rate (%)</label>
                <input
                    type="range"
                    id="closeRateSlider"
                    name="closeRate"
                    min="0"
                    max="100"
                    step="0.01"
                    value={formData.closeRate}
                    onChange={handleSliderChange}
                    className={styles.slider}
                />
                <div className={styles.inputCloseRateWrapper}>
                    <input
                        type="number"
                        step="0.01"
                        id="closeRate"
                        name="closeRate"
                        value={formData.closeRate}
                        onChange={handleChange}
                        className={styles.inputCloseRate}
                    />
                    <span className={styles.inputCloseRateSuffix}>%</span>
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
