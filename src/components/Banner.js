import React from 'react';
import styles from "./Banner.module.css"
const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.textcontainer}>
                <h1>
                Botostart
                </h1>
                <p> We're learning <span> React.js </span></p>
            </div>
        </div>
    );
}



export default Banner;