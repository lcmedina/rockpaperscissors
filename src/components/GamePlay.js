import { RockBtn, PaperBtn, ScissorsBtn, Placeholder } from "./Buttons";

const GamePlay = ({ handleReset, userChoice, computerChoice, outcome, compReady, outcomeReady }) => { 
    return ( 
        <div id="play">
            <div id="userChoice">
                <h1>YOU PICKED</h1>
                {userChoice === "rock" ? <RockBtn /> : null}
                {userChoice === "paper" ? <PaperBtn /> : null}
                {userChoice === "scissors" ? <ScissorsBtn /> : null}
            </div>
            <div className="outcome">
                { outcomeReady ? 
                    <>
                    <h1>{ outcome }</h1>
                    <button id="play-again" onClick={handleReset}>PLAY AGAIN</button>
                    </>
                    : null}
            </div>
            <div id="computerChoice">
                <h1>THE HOUSE PICKED</h1>
                { compReady ? null : <Placeholder />}
                {computerChoice === "rock" ? <RockBtn /> : null}
                {computerChoice === "paper" ? <PaperBtn /> : null}
                {computerChoice === "scissors" ? <ScissorsBtn /> : null}
            </div>
        </div>
     );
}
 
export default GamePlay;