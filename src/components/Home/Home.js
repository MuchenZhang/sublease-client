import React, { Component } from 'react';
import './stylesheet.css';

class Home extends Component {
    render() {
        return (
            <div >
                <div class="parent">
                    <div class="title">TITLE</div>
                    <div class="login-btn">Log in</div>
                    <div class="sign-up-btn">Sign up</div>
                </div>
            </div>
        );
    }
}

export default Home;
