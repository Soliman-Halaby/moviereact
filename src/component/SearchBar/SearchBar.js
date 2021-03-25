import React from 'react';
import Loupe from "../../assets/logos/loupe.svg";
import SearchEngine from "../searchEngine/searchEngine.js";
import "./SearchBar.css";

class SearchBar extends React.Component {
    constructor(props) {
      super(props)
      this.state = { 
          search: '',
          formatedString: ''
        }
    }
    
    changeSearchStatement = (event) => {
        this.setState({
            search: event.target.value.replace(' ', '+')
        })
    }

    render() {
      console.log(SearchEngine(this.state.search));
      return (
        <React.Fragment>
            <div className="inputContainer">
                <img className="iconLoupe" src={Loupe} alt="loupe"></img>
                <div className="form__group">
                    <input
                    type="text"
                    class="form__field"
                    placeholder="Name"
                    id="name"
                    name="search"
                    type="text"
                    onChange={this.changeSearchStatement}
                    ></input>
                </div>
            </div>
        </React.Fragment>
        
      )
    }
  }
export default SearchBar;