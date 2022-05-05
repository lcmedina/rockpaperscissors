import { useState } from 'react';
import './App.css';
import GamePlay from './components/GamePlay';
import GameStart from './components/GameStart';
import Header from './components/Header';


function App() {
  const [userChoice, setUserChoice] = useState("start")
  const [computerChoice, setComputerChoice] = useState("")
  const [outcome, setOutcome] = useState("")
  const [compReady, setCompReady] = useState(false)
  const [outcomeReady, setOutcomeReady] = useState(false)
  const [score, setScore] = useState(0)


  const compare = (userChoice, computerChoice) => {
    if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper") &&
      outcomeReady) {
          setCompReady(true)
          setOutcome("YOU WIN")
          setScore(score + 1)
      } else if (
        (userChoice === "rock" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "rock")) {
          setCompReady(true)
          setOutcome("YOU LOSE")
      } else if (userChoice === computerChoice || computerChoice === userChoice){
          setCompReady(true)
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
    setTimeout(() => {
      compare("paper", compPlay())
      setTimeout(() => {
        setOutcomeReady(true)
      }, 500)
    }, 500)
  }
  const handleScissors = () => {
    setUserChoice("scissors")
    setTimeout(() => {
      compare("scissors", compPlay())
      setTimeout(() => {
        setOutcomeReady(true)
      }, 1000)
    }, 1000)
  }
  const handleRock = () => {
    setUserChoice("rock")
    setTimeout(() => {
      compare("rock", compPlay())
      setTimeout(() => {
        setOutcomeReady(true)
      }, 1000)
    }, 1000)
  }
  const handleReset = () => {
    setUserChoice("start")
    setComputerChoice("")
    setCompReady(false)
    setOutcomeReady(false)
  }


  if (userChoice !== "start") {
    return (
      <div className="App">
        <Header score={score} />
        <GamePlay 
        handleReset={handleReset} 
        userChoice={userChoice} 
        computerChoice={computerChoice}
        outcome={outcome}
        outcomeReady={outcomeReady}
        compReady={compReady} />
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
