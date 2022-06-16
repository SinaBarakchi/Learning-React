import React from 'react';
import styles from './Card.module.css'
// import styled from 'styled-components'


const Card = (props) => {
    
        return (
            <div className={styles.Card}>
                <div className={styles.imgcontainer}><img src={props.pic} alt='phone_image'/></div>
                <div className={styles.cardinfo}>
                    <h3>{props.module}</h3>
                    <p>{props.prize}</p>
                </div>
            </div>
        );
    }

export default Card;