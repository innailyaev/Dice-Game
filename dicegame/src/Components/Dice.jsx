import react from 'react';
import "./GameAction.css"

class Dice extends react.Component{
    constructor(props){
        super();
    }

    render(){
        const url = `https://github.com/pini85/dice-game-starter-pack/blob/master/dice-${this.props.diceNumber}.png?raw=true`;

        return(
            <div className="dice" style={{backgroundImage: `url(${url})`, backgroundSize: 'cover', animation:this.props.animation}}>
        
            </div>
        )
    }
}

export default Dice;