import React from 'react';
import Loupe from "../../assets/logos/loupe.svg";

import "./SearchBar.css";

const SearchBar = () => {
    return(
        <React.Fragment>
            <div className="inputContainer">
                <img className="iconLoupe" src={Loupe} alt="loupe"></img>
                <div className="form__group">
                    <input
                    type="text"
                    class="form__field"
                    placeholder="Name"
                    id="name"
                    name="name"
                    ></input>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SearchBar;