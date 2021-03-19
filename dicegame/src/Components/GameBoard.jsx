import react from 'react';
import "./GameBoard.css";
import GameActions from "./GameActions";
import Player from "./Player";


class GameBoard extends react.Component{

    constructor(props){
        console.log("constructor");
        super();
        this.state={
            scoreToWin:100,
            finalScore:null,
            rightSide:'lightblue',
            leftSide:'',
            dice:[1,1],
            playerTurn:1,
            players:[
                {
                    id:1,
                    currentScore:0,
                    totalScore:0,
                },
                {
                    id:2,
                    currentScore:0,
                    totalScore:0,
                }
            ]
        }
    }

    ChangeDice=(diceNum1,diceNum2)=>{
        let players=this.state.players;
        this.setState({
            dice:[diceNum1,diceNum2]
        })
        if(diceNum1===6 && diceNum2===6){
            players.forEach((p)=>p.currentScore=0);
            this.setState({players:players})
            this.state.playerTurn===1? this.setState({playerTurn:2,leftSide:'lightblue',rightSide:'white'}) : this.setState({playerTurn:1,leftSide:'white',rightSide:'lightblue' }) 
        }
        else (this.state.playerTurn===1)? this.diceHelpFunction(0,diceNum1,diceNum2): this.diceHelpFunction(1,diceNum1,diceNum2)
    }

    diceHelpFunction=(i,num1,num2)=>{
        let players=this.state.players;
        players[i].currentScore+=num1+num2;
        this.setState({players:players})
    }

    HoldScore=()=>{
        console.log("hi i'm hold youe score");
        this.state.playerTurn===1?this.holdHelpFunction(0,2,'lightblue','white') : this.holdHelpFunction(1,1,'white','lightblue');


    }

    holdHelpFunction=(i,turn,str1,str2)=>{
        let players=this.state.players;
        players[i].totalScore+=players[i].currentScore;
        players[i].currentScore=0;
            this.setState({players:players, playerTurn:turn,leftSide:str1,rightSide:str2});
        if(players[i].totalScore>=this.state.scoreToWin){
            console.log("player",players[i].id,"hi you won");
        }
    }

    NewGame=()=>{
        let players=this.state.players;
        players.forEach((p)=>{p.currentScore=0;p.totalScore=0});
        this.setState({
            scoreToWin:100,
            rightSide:'lightblue',
            leftSide:'',
            dice:[1,1],
            playerTurn:1,
            players:players
        })
    }

    inputScore=(value)=>{
        console.log("im from board game",value);
    }

    render(){
        console.log("rander");
        return(
            <div className="GameBoard">
                <div className="leftSide" style={{backgroundColor:this.state.rightSide}}>
                    <div className="player"><Player name="PLAYER 1" totalScore={this.state.players[0].totalScore} currentScore={this.state.players[0].currentScore}/></div>
                    <div className="GameActions"><GameActions changeDice={this.ChangeDice} diceNumber={this.state.dice} hold={this.HoldScore} newGame={this.NewGame} scoreToWin={this.state.finalScore} inputScore={this.inputScore}/></div>
                </div>
                <div className="rightSide" style={{backgroundColor:this.state.leftSide}}>
                <div className="player"><Player name="PLAYER 2" totalScore={this.state.players[1].totalScore} currentScore={this.state.players[1].currentScore}/></div>
                </div>

            </div>
        )
    }
}

export default GameBoard;