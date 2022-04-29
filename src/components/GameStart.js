const GameStart = ({ handlePaper, handleScissors, handleRock }) => {
    return ( 
        <div className="game">
          <div className="paperbg">
            <div className="paper" onClick={handlePaper}>
              <img src="./images/icon-paper.svg" alt="paper" />
            </div>
          </div>
          <div className="scissorsbg">
            <div className="scissors" onClick={handleScissors}>
              <img src="./images/icon-scissors.svg" alt="scissors" />
            </div>
          </div>
          <div className="rockbg">
            <div className="rock" onClick={handleRock}>
              <img src="./images/icon-rock.svg" alt="rock" />
            </div>
          </div>
       </div>
     );
}
 
export default GameStart;