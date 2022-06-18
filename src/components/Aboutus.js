import React from 'react';
import styles from './Aboutus.module.css';
import apple from '../images/Apple_logo_black.svg'
import samsung from '../images/samsung_logo.png'
import xiaomi from '../images/logo-Xiaomi.jpg'
const Aboutus = () => {
        return (
            <footer className={styles.aboutus}>
                <h1>Who supports us?</h1>
                <div className={styles.supporters}>
                    <img src ={apple}  alt='apple'/>
                    <img src ={samsung}  alt='samsung'/>
                    <img src ={xiaomi}  alt='xiaomi'/>
                </div>
                <p className={styles.copyright}>&copy;All rights reserved 2022</p>
            </footer>
        );
    }

export default Aboutus;