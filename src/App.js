import "./App.css";
import LottoBoard from "./LottoBoard";

function App() {
  return (
    <div className="App">
      <LottoBoard
        boardTitle="Lotto"
        nLottoBalls={6}
        lottoMinNum={1}
        lottoMaxNum={40}
      />
      <LottoBoard
        boardTitle="Mini Daily"
        nLottoBalls={4}
        lottoMinNum={1}
        lottoMaxNum={40}
      />
      <LottoBoard
        boardTitle="Max Daily"
        nLottoBalls={10}
        lottoMinNum={1}
        lottoMaxNum={100}
      />
      <LottoBoard
        // boardTitle="Max Daily"
        nLottoBalls={10}
        lottoMinNum={1}
        lottoMaxNum={100}
      />
    </div>
  );
}

export default App;
