const GameStart = ({ handlePaper, handleScissors, handleRock }) => {
    return ( 
        <div id="game">
          <div className="paperbg paper-start">
            <div className="paper" onClick={handlePaper}>
              <img className="choiceImg" src="./images/icon-paper.svg" alt="paper" />
            </div>
          </div>
          <div className="scissorsbg scissors-start">
            <div className="scissors" onClick={handleScissors}>
              <img className="choiceImg" src="./images/icon-scissors.svg" alt="scissors" />
            </div>
          </div>
          <div className="rockbg rock-start">
            <div className="rock" onClick={handleRock}>
              <img className="choiceImg" src="./images/icon-rock.svg" alt="rock" />
            </div>
          </div>
       </div>
     );
}
 
export default GameStart;