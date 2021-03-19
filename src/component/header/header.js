import React from 'react';
import './header.css';
// import iconHeart from './images/heart-red.svg';

function Header(props) {
    return (
        <div className="header">
            <div className="image">
            </div>
            <h2>{props.note}</h2>
        </div>
    );
}

export default Header;
