import React from "react";
import Card from "./Card";
import Nokia from '../images/Nokia.jpg';
import Samsung from '../images/Samsung.jpg';
import Xiaomi from '../images/Xiaomi.jpg';
import Iphone from '../images/Iphone.jpg';
import styles from './Cards.module.css';
const Cards = () =>{

    return(
        <div className={styles.cardcontainer}>
        <Card module = 'Nokia' pic={Nokia} prize='200$-300$'/> 
        <Card module = 'Samsung' pic={Samsung} prize='300$-800$'/>
        <Card module = 'Xiaomi' pic={Xiaomi} prize='250$-750$'/>
        <Card module = 'Iphone' pic={Iphone} prize='500$-1300$'/>
        </div>
    )






}
export default Cards;