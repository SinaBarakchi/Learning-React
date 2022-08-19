import React from "react";
import Navbar from "./components/Navbar.js"
import styles from  './index.css';
import Landing from './components/Landing.js';
import {Route ,  Routes} from 'react-router-dom';
import Products from "./components/Products.js";
import Aboutus from "./components/Aboutus.js";

function App(props){

    
    // console.log(props.history.state);
    return(
        <div className={styles.Conatainer}>
        <Navbar />
        <Routes>
            <Route path="/products" element = {<Products/>}/>
            <Route path="/homepage" element ={<Landing/>}/>
            <Route path="/aboutus" element ={<Aboutus/>}/>
        </Routes>
        
        </div>
    );
}
export default App;