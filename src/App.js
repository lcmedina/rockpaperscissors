import { useState } from 'react';
import './App.css';
import GamePlay from './components/GamePlay';
import GameStart from './components/GameStart';
import Header from './components/Header';

function App() {
  const [userChoice, setUserChoice] = useState("start")
  const [score, setScore] = useState(0)

  const handlePaper = () => setUserChoice("paper")
  const handleScissors = () => setUserChoice("scissors")
  const handleRock = () => setUserChoice("rock")
  const handleReset = () => setUserChoice("start")

  if (userChoice !== "start") {
    return (
      <div className="App">
        <Header score={score} />
        <GamePlay handleReset={handleReset} />
      </div>
    );
  } else {
    return (
      <div className="App">
        <Header score={score} />
        <GameStart 
        handlePaper={handlePaper}
        handleScissors={handleScissors}
        handleRock={handleRock} />
      </div>
    );
  }
}

export default App;
