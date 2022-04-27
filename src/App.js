import './App.css';

function App() {
  return (
    <div className="App">
     <div className="header">
       <div className="title">
          <h1>ROCK</h1>
          <h1>PAPER</h1>
          <h1>SCISSORS</h1>
       </div>
       <div className="score">
          <h4>SCORE</h4>
          <h1>12</h1>
       </div>
     </div>
     <div className="game">
        <div className="paperbg">
          <div className="paper">
            <img src="./images/icon-paper.svg" alt="paper" />
          </div>
        </div>
        <div className="scissorsbg">
          <div className="scissors">
            <img src="./images/icon-scissors.svg" alt="scissors" />
          </div>
        </div>
        <div className="rockbg">
          <div className="rock">
            <img src="./images/icon-rock.svg" alt="rock" />
          </div>
        </div>
     </div>
    </div>
  );
}

export default App;
