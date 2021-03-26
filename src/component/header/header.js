import React from "react";
import "./header.css";
import Logo from "../../assets/logos/logo.svg";
import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
// import logo from '../../assets/logos/logo.png;';
// import iconHeart from './images/heart-red.svg';

function Header(props) {
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="logo">
          <NavLink to="/">
            <img className="logoImg" src={Logo} alt="test" />
          </NavLink>
        </div>
        <div className="searchBar">
          <SearchBar />
          {/* <SearchResult /> */}
        </div>
      </div>
      <div className="choseType">
        <div className="elementType">
          <button class="element select">
            <span>Action</span>
          </button>
          <button class="element">
            <span>Aventure</span>
          </button>
          <button class="element">
            <span>Animation</span>
          </button>
          <button class="element">
            <span>Comédie Musicale</span>
          </button>
          <button class="element">
            <span>Crime</span>
          </button>
          <button class="element">
            <span>Documentaire</span>
          </button>
          <button class="element">
            <span>Drame</span>
          </button>
          <button class="element">
            <span>Famille</span>
          </button>
          <button class="element">
            <span>Fantastique</span>
          </button>
          <button class="element">
            <span>Film TV</span>
          </button>
          <button class="element">
            <span>Guerre</span>
          </button>
          <button class="element">
            <span>Horreur</span>
          </button>
          <button class="element">
            <span>Mystérieux</span>
          </button>
          <button class="element">
            <span>Populaire</span>
          </button>
          <button class="element">
            <span>Histoire</span>
          </button>
          <button class="element">
            <span>Romantique</span>
          </button>
          <button class="element">
            <span>Science Fiction</span>
          </button>
          <button class="element">
            <span>Thriller</span>
          </button>
          <button class="element">
            <span>Western</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
