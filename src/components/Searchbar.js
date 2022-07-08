import React, { Component } from 'react';
import styles from './Searchbar.module.css';


class Searchbar extends Component{
    constructor(){
        super();
        this.state={
            value : null,
        }

    }
    ValueDetector = (event) => {
        this.setState ({
            value : event.target.value,
        })
    }
render(){
    return(
        <div className={styles.searchbar}>
            <h1 className={styles.searchcontent}>Search What You Want</h1>
            <div className={styles.inputcontainer}>
                <input type = 'text' className={styles.input} placeholder='Search...' onChange={this.ValueDetector}/>
                {/* {console.log(this.state.value)} */}
            </div>
        </div>
    )
}}
export default Searchbar;