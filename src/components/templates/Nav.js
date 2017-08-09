import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import '../../styles/templates/Nav.css';

class Nav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='Nav'>
                <ul>
                    <li><a href='/' alt='SvS Home'><FontAwesome name='home' /> HOME</a></li>
                    <li><a href='https://blog.wslong.me' alt='SvS LOGS'><FontAwesome name='file-text-o' /> LOGS</a></li>
                    <li><a href='#'><FontAwesome name='photo' /> MOMENTS</a></li>
                    <li><a href='#'><FontAwesome name='star-o' /> WORKS</a></li>
                    <li><a href='#'><FontAwesome name='comments' /> CONTACTS</a></li>
                </ul>
            </div>
        );
    }
}

export default Nav;