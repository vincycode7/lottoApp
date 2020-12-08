import React, { Component } from "react";
import "./LottoBoard.css";
import LottoBall from "./LottoBall";

class LottoBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ballNums: Array.from({ length: this.props.nLottoBalls }).fill(null),
    };
    // this.state = { ballNums: [...this.genRandLottoNum()] };
    this.genRandLottoNum = this.genRandLottoNum.bind(this);
    this.resetBallNull = this.resetBallNull.bind(this);
  }
  static defaultProps = {
    nLottoBalls: 6,
    lottoMaxNum: 40,
    lottoMinNum: 1,
    boardTitle: "Lotto",
  };

  resetBallNull() {
    this.setState((currState) => ({
      ballNums: currState.ballNums.map((n) => null),
    }));
  }

  genRandLottoNum() {
    this.setState((currState) => ({
      ballNums: currState.ballNums.map(
        (n) => Math.floor(Math.random() * this.props.lottoMaxNum) + 1
      ),
    }));
  }
  render() {
    if (!this.state.ballNums) {
      this.genRandLottoNum();
    }

    return (
      <div className="LottoBoard">
        <p className="LottoBoard-text">{this.props.boardTitle}</p>
        <div className="LottoBoard-ball">
          {this.state.ballNums.map((num) => {
            return <LottoBall ballNum={num} />;
          })}
        </div>
        <div>
          <button onClick={this.genRandLottoNum} className="LottoBoard-btn">
            Generate
          </button>
          <button onClick={this.resetBallNull} className="LottoBoard-btn">
            Reset Balls
          </button>
        </div>
      </div>
    );
  }
}

export default LottoBoard;
