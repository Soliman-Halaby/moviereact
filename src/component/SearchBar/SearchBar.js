import React from 'react';
import Loupe from "../../assets/logos/loupe.svg";
import SearchEngine from "../searchEngine/searchEngine.js";
import "./SearchBar.css";

class SearchBar extends React.Component {
    constructor(props) {
      super(props)
      this.state = { 
          search: '',
          formatedString: '',
          used: false
        }
    }
    
    changeSearchStatement = (event) => {
        this.setState({
            used: true,
            search: event.target.value.replace(' ', '+')
        })
    }

    render() {
      const {used} = this.state
      if (used) {
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
                    onChange={this.changeSearchStatement}
                    ></input>
                    <SearchEngine movieName= {this.state.search} />
                </div>
            </div>
          </React.Fragment> 
        )
      } else {
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
                    onChange={this.changeSearchStatement}
                    ></input>
                </div>
            </div>
          </React.Fragment>
        )
      }
    }
  }
export default SearchBar;