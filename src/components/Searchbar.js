import React from 'react';
import styles from './Searchbar.module.css';


const Searchbar = () => {

    return(
        <div className={styles.searchbar}>
            <h1 className={styles.searchcontent}>Search What You Want</h1>
            <div className={styles.inputcontainer}>
                <input type = 'text' className={styles.input} placeholder='Search...' />
            </div>


        </div>
    )
}
export default Searchbar;