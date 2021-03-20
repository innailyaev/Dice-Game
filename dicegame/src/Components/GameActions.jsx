import react from 'react';
import GameButton from "./GameButton";
import Dice from "./Dice";
import ScoreInput from "./ScoreInput";
import sound from "./0004526.mp3";

class GameActions extends react.Component{

    constructor(props){
        super();
        this.state={
            shake:''
        }  
    }

    ChangeDice= ()=>{
        this.setState({shake:''})
        setTimeout(
            ()=> {
                this.setState({shake:'shake 0.5s'})
            },25)

        let audio =new Audio(sound);
        let diceNum1=Math.floor(Math.random() * 6) + 1;
        let diceNum2=Math.floor(Math.random() * 6) + 1;
        this.props.changeDice(diceNum1,diceNum2);
        audio.play();
    }

    inputChange=(value)=>{
        this.props.inputScore(value);
    }
    render(){

        return (
            <div className="actionDiv">
                <div>
                    <GameButton sign="far fa-plus-square" text="NEW GAME" btnClickFunction={this.props.newGame} /> 
                </div>
                <div>
                    <Dice diceNumber={this.props.diceNumber[0]} animation={this.state.shake}/>
                    <Dice diceNumber={this.props.diceNumber[1]} animation={this.state.shake}/>
                </div>
                <div className="downButtons">
                    <GameButton sign="fas fa-sync" text="ROLL DICE" btnClickFunction={this.ChangeDice}/>
                    <GameButton sign="far fa-caret-square-down" text="HOLD" btnClickFunction={this.props.hold}/>
                </div>
                <ScoreInput inputChange={this.inputChange}/>
            </div>
        )
    }
}

export default GameActions;