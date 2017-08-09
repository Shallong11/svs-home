import React, { Component } from 'react';
import '../../styles/templates/Header.css';
import Artwork from '../../resources/img/Artwork.png';
import ArtworkDev from '../../resources/img/Artwork-development.jpg';

class Header extends Component {
    constructor(props) {
        super(props);
        if (process.env.NODE_ENV === 'production') {
            this.artwork = Artwork;
        } else {
            this.artwork = ArtworkDev;
        }
    }

    render() {
        return (
            <div className='Header'>
                <img src={this.artwork} alt='SvS' className='Artwork' />
            </div>
        );
    }
}

export default Header;