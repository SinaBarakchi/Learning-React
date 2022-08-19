import React from "react";
import styles from "./Navbar.module.css";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

const Navbar = (props) => {
    return (
        <header className={styles.header}>
            <div className={styles.listcontainer}>
                <ul className={styles.list}>
                    <li><Link to="/homepage">HomePage</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/aboutus">About Us</Link></li>
                </ul>
            </div>
            <div className={styles.logo}>
                    <img src={logo} alt = "cube-logo"/>
            </div>
        </header>

    )
    }
    export default Navbar;