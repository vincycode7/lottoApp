import React, { Component } from "react";
import "./LottoBall.css";

class LottoBall extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static defaultProps = { ballNum: 7 };
  render() {
    return (
      <div
        className="LottoBall"
        style={{
          backgroundColor: this.props.ballColor
            ? this.props.ballColor
            : "tomato",
        }}
      >
        {this.props.ballNum}
      </div>
    );
  }
}

export default LottoBall;
