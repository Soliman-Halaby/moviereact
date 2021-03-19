import React from 'react';
import './header.css';
import './input.css';
import Logo from '../../assets/logos/logo.png';
import Loupe from '../../assets/logos/loupe.svg';

// import logo from '../../assets/logos/logo.png;';
// import iconHeart from './images/heart-red.svg';

function Header(props) {
    return (
        <div className="header">
            <div className="headerContainer">
                <div className="logo">
                    <img src={Logo} alt='test' />
                </div>
                <div className="inputContainer">
                    <img className="iconLoupe" src={Loupe} alt='loupe' ></img>
                    <div className="form__group">
                        <input type="text" class="form__field" placeholder="Name" id="name" name="name"></input>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
