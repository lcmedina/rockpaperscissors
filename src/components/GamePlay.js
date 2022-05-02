import { RockBtn, PaperBtn, ScissorsBtn } from "./Buttons";

const GamePlay = ({ handleReset, userChoice, computerChoice }) => { 
    return ( 
        <div id="play">
            <div id="userChoice">
                {userChoice === "rock" ? <RockBtn /> : null}
                {userChoice === "paper" ? <PaperBtn /> : null}
                {userChoice === "scissors" ? <ScissorsBtn /> : null}
            </div>
            <div id="computerChoice">
                {computerChoice === "rock" ? <RockBtn /> : null}
                {computerChoice === "paper" ? <PaperBtn /> : null}
                {computerChoice === "scissors" ? <ScissorsBtn /> : null}
            </div>
        <button onClick={handleReset}>reset</button>
        </div>
     );
}
 
export default GamePlay;