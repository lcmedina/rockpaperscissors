const RockBtn = () => {
    return ( 
        <div className="rockbg">
            <div className="rock">
              <img className="choiceImg" src="./images/icon-rock.svg" alt="rock" />
            </div>
          </div>
     );
}

const PaperBtn = () => {
    return ( 
        <div className="paperbg">
            <div className="paper" >
              <img className="choiceImg" src="./images/icon-paper.svg" alt="paper" />
            </div>
          </div>
     );
}

const ScissorsBtn = () => {
    return ( 
        <div className="scissorsbg">
        <div className="scissors">
          <img className="choiceImg" src="./images/icon-scissors.svg" alt="scissors" />
        </div>
      </div>
     );
}
 
export { RockBtn, PaperBtn, ScissorsBtn };