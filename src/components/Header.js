const Header = ({ score }) => {
    return ( 
        <div className="header">
        <div className="title">
           <h1>ROCK</h1>
           <h1>PAPER</h1>
           <h1>SCISSORS</h1>
        </div>
        <div className="score">
           <h4>SCORE</h4>
           <h1>{ score }</h1>
        </div>
      </div>
     );
}
 
export default Header;