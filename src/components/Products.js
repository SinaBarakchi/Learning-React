import React, { Component } from 'react';
import styles from './Products.module.css';
import axios from 'axios';
import Card from './Card';

class Products extends Component {
    constructor(){
        super();
        this.state ={
            Products:[],
        }
    }
    componentDidMount(){
        axios.get('https://fakestoreapi.com/products').then(response => this.setState({Products:response.data}))
    }
    render() {
        const {Products} = this.state;
        return (
            <div>
                <h1 className={styles.producttitle}> PRODUCTS : </h1>
                <div className={styles.cardcontainer}>
                    { Products.length ?
                    Products.map(post => <Card key={post.id} module={post.title} pic={post.image} prize={post.price}/>) :
                    <h1>Loading ...</h1>}
                </div>
            </div>
        );
    }
}

export default Products;