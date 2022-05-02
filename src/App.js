import { useState } from 'react';
import './App.css';
import GamePlay from './components/GamePlay';
import GameStart from './components/GameStart';
import Header from './components/Header';


function App() {
  const [userChoice, setUserChoice] = useState("start")
  const [computerChoice, setComputerChoice] = useState("")
  const [score, setScore] = useState(0)

  const compPlay = () => {
    let min = Math.ceil(1);
    let max = Math.floor(9);
    let random = Math.floor(Math.random() * (max - min + 1) + 1)
    
    if (random > 6) {
      setComputerChoice("rock")
    } else if (random > 3) {
      setComputerChoice("paper")
    } else {
      setComputerChoice("scissors")
    }
  }
 
  const handlePaper = () => {
    setUserChoice("paper")
    compPlay()
  }
  const handleScissors = () => {
    setUserChoice("scissors")
    compPlay()
  }
  const handleRock = () => {
    setUserChoice("rock")
    compPlay()
  }
  const handleReset = () => setUserChoice("start")


  if (userChoice !== "start") {
    return (
      <div className="App">
        <Header score={score} />
        <GamePlay handleReset={handleReset} userChoice={userChoice} computerChoice={computerChoice} />
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
