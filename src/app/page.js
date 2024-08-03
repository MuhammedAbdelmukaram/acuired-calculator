"use client"
import { useState } from 'react';
import styles from './page.module.css';
import Header from "@/app/components/header";
import Calculator from "@/app/components/calculator";
import Results from "@/app/components/results";
import { motion } from "framer-motion";

const Home = () => {
    const [results, setResults] = useState({
        totalRevenue: '',
        customersAcquired: '',
        revenuePerCall: ''
    });

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.0 }}
        >
            <main className={styles.main}>
                <div className={styles.gradientContainer}>
                    <div className={`${styles.gradient} ${styles.gradient1}`}></div>
                    <div className={`${styles.gradient} ${styles.gradient2}`}></div>
                </div>

                <Header/>

                <div className={styles.wrapper}>
                    <div className={styles.upperSection}>
                        <Calculator setResults={setResults}/>
                    </div>

                    <div className={styles.lowerSection}>
                        <Results results={results}/>
                    </div>
                </div>
            </main>
        </motion.div>
    );
};

export default Home;
