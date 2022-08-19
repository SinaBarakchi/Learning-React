import React, { Component } from 'react';
import Banner from ".//Banner.js";
import Cards from './Cards';
import Searchbar from "./Searchbar.js";
import Aboutus from './Aboutus.js';
class Landing extends Component {
    render() {
        return (
            <div>
                <Banner />
                <Cards />
                <Searchbar />
                <Aboutus />
            </div>
        );
    }
}

export default Landing;