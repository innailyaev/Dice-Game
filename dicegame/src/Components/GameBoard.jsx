import react from 'react';
import "./GameBoard.css";
import GameActions from "./GameActions";
import Player from "./Player";

class GameBoard extends react.Component{
    
    constructor(props){        
        super(props);
        this.state={
            scoreToWin:100,
            rightSide:'#fcd5ce',
            leftSide:'#f1aea6',
            popUpDisplay:'none',
            gifDisplay:'none',
            dice:[0,0],
            playerTurn:1,
            winner:'',
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
            this.state.playerTurn===1? this.setState({playerTurn:2,rightSide:'#f1aea6',leftSide:'#fcd5ce'}) : this.setState({playerTurn:1,leftSide:'#f1aea6',rightSide:'#fcd5ce' }) 
            this.setState({gifDisplay:'block'});
            setTimeout(
                ()=> {
                    this.setState({gifDisplay:'none'})
                   
                },4000)
        }
        else (this.state.playerTurn===1)? this.diceHelpFunction(0,diceNum1,diceNum2): this.diceHelpFunction(1,diceNum1,diceNum2)
    }

    diceHelpFunction=(i,num1,num2)=>{
        let players=this.state.players;
        players[i].currentScore+=num1+num2;
        this.setState({players:players})
    }

    HoldScore=()=>{
        this.state.playerTurn===1?this.holdHelpFunction(0,2,'#fcd5ce','#f1aea6') : this.holdHelpFunction(1,1,'#f1aea6','#fcd5ce');
    }

    holdHelpFunction=(i,turn,str1,str2)=>{
        let players=this.state.players;
        players[i].totalScore+=players[i].currentScore;
        players[i].currentScore=0;
        if(players[i].totalScore>=this.state.scoreToWin){
            this.setState({popUpDisplay:'block',winner:players[i].id})
        }

        this.setState({players:players, playerTurn:turn,leftSide:str1,rightSide:str2});
    }

    NewGame=()=>{
        let inputValue=document.getElementById("scoreInput");
        inputValue.value='';
        let players=this.state.players;
        players.forEach((p)=>{p.currentScore=0;p.totalScore=0});
        this.setState({
            scoreToWin:100,
            rightSide:'#fcd5ce',
            leftSide:'#f1aea6',
            popUpDisplay:'none',
            gifDisplay:'none',
            dice:[0,0],
            playerTurn:1,
            winner:'',
            players:players
        })
    }

    inputScore=(value)=>{
        this.setState({scoreToWin: value});
    }

    closeButton=()=>{
        this.NewGame();
    }


    render(){
        return(
            <div>
                <div className="GameBoard">
                    <div className="leftSide" style={{background: this.state.leftSide}}>
                        <div className="player"><Player name="PLAYER 1" totalScore={this.state.players[0].totalScore} currentScore={this.state.players[0].currentScore}/></div>
                        <div className="GameActions"><GameActions changeDice={this.ChangeDice} diceNumber={this.state.dice} hold={this.HoldScore} newGame={this.NewGame} inputScore={this.inputScore}/></div>
                    </div>
                    <div className="rightSide" style={{background:this.state.rightSide}}>
                        <div className="player"><Player name="PLAYER 2" totalScore={this.state.players[1].totalScore} currentScore={this.state.players[1].currentScore}/></div>
                    </div>
                </div>

                <div id="myPopUpBox" className="PopUp" style={{display:this.state.popUpDisplay}}>
                    <div className="PopUpContent">
                        <span className="close" onClick={this.closeButton}>&times;</span>
                        <div className='mainDiv'><p>Player {this.state.winner}</p></div>
                    </div>
                </div>

                <div className="gifClass" style={{display:this.state.gifDisplay}}><h2>You got 2 sixes</h2><p>Your turn has passed<br></br> to the other player</p></div>
                         
            </div>
            
        )
    }
}

export default GameBoard;