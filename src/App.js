import { useState } from 'react';
import './App.css';
import Header from './components/Header';

function App() {
  const [userChoice, setUserChoice] = useState("start")

  if (userChoice !== "start") {
    return (
      <div className="App">
        <Header />
      <h1>In Play</h1>
      <button onClick={() => setUserChoice("start")}>reset</button>
      </div>
    );
  } else {
    return (
      <div className="App">
        <Header />
       <div className="game">
          <div className="paperbg">
            <div className="paper" onClick={() => setUserChoice("paper")}>
              <img src="./images/icon-paper.svg" alt="paper" />
            </div>
          </div>
          <div className="scissorsbg">
            <div className="scissors" onClick={() => setUserChoice("scissors")}>
              <img src="./images/icon-scissors.svg" alt="scissors" />
            </div>
          </div>
          <div className="rockbg">
            <div className="rock" onClick={() => setUserChoice("rock")}>
              <img src="./images/icon-rock.svg" alt="rock" />
            </div>
          </div>
       </div>
      </div>
    );
  }
}

export default App;
