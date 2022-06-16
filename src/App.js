import React from "react";
import Navbar from "./components/Navbar.js"
import Banner from "./components/Banner.js";
import Cards from './components/Cards';
import styles from  './index.css'
function App(){
    return(
        <div className={styles.Conatainer}>
        <Navbar />
        <Banner />
        <Cards />
        </div>
    );
}
export default App;