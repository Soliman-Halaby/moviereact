import React from 'react';
import './header.css';

// import logo from '../../assets/logos/logo.png;';
// import iconHeart from './images/heart-red.svg';

function Header(props) {
    return (
        <div className="header">
            <div className="headerContainer">
                <div className="logo">
                    <img src='../../assets/logos/logo.png'></img>
                </div>
                <h2>{props.note}</h2>
            </div>

        </div>
    );
}

export default Header;
