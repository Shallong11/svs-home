import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import '../../styles/templates/Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <span>-- S <FontAwesome name='heart' style={{ color: 'rgba(255,0,0,0.80)'}} /> S --</span><br/>
                <span>Copyright © 2017 Shallong11. All rights reserved.</span>
            </div>
        );
    }
}

export default Footer;