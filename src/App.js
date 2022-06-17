import React from "react";
import Navbar from "./components/Navbar.js"
import Banner from "./components/Banner.js";
import Cards from './components/Cards';
import styles from  './index.css';
import Searchbar from "./components/Searchbar.js";
import Aboutus from "./components/Aboutus.js";
function App(){
    return(
        <div className={styles.Conatainer}>
        <Navbar />
        <Banner />
        <Cards />
        <Searchbar />
        <Aboutus />
        </div>
    );
}
export default App;