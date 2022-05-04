import { useState } from 'react';
import './App.css';
import GamePlay from './components/GamePlay';
import GameStart from './components/GameStart';
import Header from './components/Header';


function App() {
  const [userChoice, setUserChoice] = useState("start")
  const [computerChoice, setComputerChoice] = useState("")
  const [outcome, setOutcome] = useState("")
  const [score, setScore] = useState(0)


  const compare = (userChoice, computerChoice) => {
    if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")) {
        setOutcome("YOU WIN")
        setScore(score + 1)
      } else if (
        (userChoice === "rock" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "rock")) {
          setOutcome("YOU LOSE")
      } else if (userChoice === computerChoice || computerChoice === userChoice){
        setOutcome("DRAW")
      }
  }

  const compChoices = ["rock", "paper", "scissors"]
    // computer picks a random index of the array
    const compPlay = () => {
      let random = Math.floor(Math.random() * compChoices.length)
      setComputerChoice(compChoices[random])
      return compChoices[random]
    }

  // set the user's choice and begin the computer play
  const handlePaper = () => {
    setUserChoice("paper")
    compare("paper", compPlay())
  }
  const handleScissors = () => {
    setUserChoice("scissors")
    compare("scissors", compPlay())
  }
  const handleRock = () => {
    setUserChoice("rock")
    compare("rock", compPlay())
  }
  const handleReset = () => {
    setUserChoice("start")
    setComputerChoice("")
  }


  if (userChoice !== "start") {
    return (
      <div className="App">
        <Header score={score} />
        <GamePlay 
        handleReset={handleReset} 
        userChoice={userChoice} 
        computerChoice={computerChoice}
        outcome={outcome} />
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
