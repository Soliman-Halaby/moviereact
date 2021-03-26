import React from "react";
import "./Rating.css";

import starhalf from "../../assets/icons/star-half-alt-solid.svg";
import starregular from "../../assets/icons/star-regular.svg";
import starsolid from "../../assets/icons/star-solid.svg";
import staroflife from "../../assets/icons/star-of-life-solid.svg";

export default class Rating extends React.Component {
  render() {
    const rate = Math.round((this.props.rate / 2) * 2) / 2;
    const position = this.props;
    return (
      <React.Fragment>
        <div className={this.props.position}>{this.starRate(rate)}</div>
      </React.Fragment>
    );
  }

  starRate(grade) {
    const items = [];
    let rate = grade;
    if (rate == 0) {
      for (let i = 0; i < 5; i++) {
        items.push(<img className="staroflife" src={staroflife}></img>);
      }
    } else {
      for (let i = 0; i < 5; i++) {
        if (rate >= 1) {
          items.push(<img className="star" src={starsolid}></img>);
          rate = rate - 1;
        } else if (rate == 0.5) {
          rate = 0;
          items.push(<img className="star" src={starhalf}></img>);
        } else {
          items.push(<img className="star" src={starregular}></img>);
        }
      }
    }
    return items;
  }
}
