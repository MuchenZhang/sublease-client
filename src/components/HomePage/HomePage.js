import React, { Component } from 'react';
import NavbarComp from '../Navbar/NavbarComp.js';
import Home from '../Home/Home.js';

class HomePage extends Component {
    render() {
        return (
            <div>
                <NavbarComp />
                <Home />
            </div>
        );
    }
}

export default HomePage;
