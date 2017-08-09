import React, { Component } from 'react';
import Header from './templates/Header';
import Footer from './templates/Footer';
import Nav from './templates/Nav';
import '../styles/components/Home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Nav />
                <div className="Home">
                    当前, 一片虚无... 只有<strong>您</strong>在! :-) 敬请期待.<br />
                    Now, nothing here but.. <strong>YOU</strong>! :-) Have fun and wait.
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;