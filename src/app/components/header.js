import React from 'react';
import Link from 'next/link';
import styles from './header.module.css';

const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <div className={styles.logoContainer}>
                    <Link href="https://www.acuired.com" legacyBehavior>
                        <a>
                            <img src="/acquiredLogo.svg" alt="Logo" className={styles.logo} />
                        </a>
                    </Link>
                </div>

                {/*<div className={styles.ctaContainer}>
                    <button className={styles.ctaButton}>Book a Call</button>
                </div>*/}
            </div>
        </div>
    );
};

export default Header;
