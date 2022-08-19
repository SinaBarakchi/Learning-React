import React, { Component } from 'react';
import styles from './Card.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowDown, faCircleArrowUp } from '@fortawesome/free-solid-svg-icons'


class Card extends Component {
    constructor(){
        super();
        this.state ={
            clicknum : 0,
        }
    }
    UpOne = () =>{
        this.setState(prevState => ({
            clicknum : prevState.clicknum + 1,})
        )
    }
    DownOne = () =>{
        if (this.state.clicknum)
        this.setState(prevState => ({
            clicknum : prevState.clicknum - 1,
        }))
    }
    render(){
        const {clicknum} = this.state;
        const {module,pic,prize}=this.props;
        return (
            <div className={styles.Card}>
                <div className={styles.imgcontainer}><img src={pic} alt='phone_image'/></div>
                <div className={styles.cardinfo}>
                    <h3>{module}</h3>
                    <p>{prize}$</p>
                </div>
                <hr/>
                <div className={styles.counter}>
                <FontAwesomeIcon icon={faCircleArrowUp} className = {styles.uparrow} onClick={this.UpOne}/>
                
                <p className={styles.clickcounter}>{clicknum}</p>
                
                <FontAwesomeIcon icon={faCircleArrowDown} className = {clicknum ? styles.downarrow : styles.deactive}  onClick={this.DownOne}/>
                </div>
            </div>
        );
    }
    }

export default Card;