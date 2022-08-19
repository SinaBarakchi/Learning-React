import React, { Component } from "react";
import Card from "./Card";
import Nokia from '../images/Nokia.jpg';
import Samsung from '../images/Samsung.jpg';
import Xiaomi from '../images/Xiaomi.jpg';
import Iphone from '../images/Iphone.jpg';
import styles from './Cards.module.css';
class Cards extends Component {
    constructor(){
        super();
        this.state = {
            Phonedata : [
                {id : 1 , module : 'Nokia', image : Nokia , prize : '200$-300'},
                {id : 2 ,module : 'Samsung', image : Samsung , prize : '300$-800'},
                {id : 3 ,module : 'Xiaomi', image : Xiaomi , prize : '250$-750'},
                {id : 4 ,module : 'Iphone', image : Iphone , prize : '500$-1300'},
            ]

        }
    }
    render(){ 
    return(
        <div className={styles.cardcontainer}>
        {/* <Card module = 'Nokia' pic={Nokia} prize='200$-300$'/> 
        <Card module = 'Samsung' pic={Samsung} prize='300$-800$'/>
        <Card module = 'Xiaomi' pic={Xiaomi} prize='250$-750$'/>
        <Card module = 'Iphone' pic={Iphone} prize='500$-1300$'/> */}
        {this.state.Phonedata.map(phone => <Card key={phone.id} module ={phone.module} pic={phone.image} prize={phone.prize} />)}
        </div>
    )


    }
}
export default Cards;