import './App.css';
import GameBoard from "./Components/GameBoard.jsx";
import "./Components/diceWhite.png"

function App() {
  return (
    <div className="App">
      <div className="titleImage"><h1>Dice Game</h1><div className="diceImg"></div></div>
     <GameBoard/>
     <div className="whiteDiceImg"></div>
    </div>
  );
}

export default App;
