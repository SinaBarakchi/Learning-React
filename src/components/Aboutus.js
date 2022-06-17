import React from 'react';
import styles from './Aboutus.module.css';
const Aboutus = () => {
        return (
            <footer className={styles.aboutus}>
                <h1>Who supports us?</h1>
                <div className={styles.supporters}>
                    <i className='fa fa-apple'>apple</i>
                    <i className='fa fa-samsung'>samsung</i>
                    <i className='fa fa-xiaomi'>xiaomi</i>
                </div>
                <p className={styles.copyright}>All rights reserved 2022</p>
            </footer>
        );
    }

export default Aboutus;