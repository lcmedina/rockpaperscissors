import { RockBtn, PaperBtn, ScissorsBtn } from "./Buttons";

const GamePlay = ({ handleReset, userChoice, computerChoice, outcome }) => { 
    return ( 
        <div id="play">
            <div id="userChoice">
                {userChoice === "rock" ? <RockBtn /> : null}
                {userChoice === "paper" ? <PaperBtn /> : null}
                {userChoice === "scissors" ? <ScissorsBtn /> : null}
            </div>
            <div className="outcome">
                <h1>{ outcome }</h1>
                <button id="play-again" onClick={handleReset}>PLAY AGAIN</button>
            </div>
            <div id="computerChoice">
                {computerChoice === "rock" ? <RockBtn /> : null}
                {computerChoice === "paper" ? <PaperBtn /> : null}
                {computerChoice === "scissors" ? <ScissorsBtn /> : null}
            </div>
        </div>
     );
}
 
export default GamePlay;