import React, { Component } from 'react';
import './stylesheet.css';

class Home extends Component {
    render() {
        return (
            <div >
                <div class="parent">
                    <div class="title">TITLE</div>
                    <button class="login-btn">Log in</button>
                    <button class="sign-up-btn">Sign up</button>
                </div>
            </div>
        );
    }
}

export default Home;
