import react from 'react';
import GameButton from "./GameButton";
import Dice from "./Dice";

class GameActions extends react.Component{

    constructor(props){
        super();  
    }

    
    render(){

        return (
            <div className="actionDiv">
                <div>
                    <GameButton sign="far fa-plus-square" text="NEW GAME"/> 
                </div>
                <div>
                    <Dice diceNumber='1'/>
                    <Dice diceNumber='6'/>
                </div>
                <div className="downButtons">
                    <GameButton sign="fas fa-sync" text="ROLL DICE"/>
                    <GameButton sign="far fa-caret-square-down" text="HOLD"/>
                </div>
                
                
                

            </div>
        )
    }
}

export default GameActions;