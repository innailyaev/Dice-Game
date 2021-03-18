import react from 'react';
import "./GameBoard.css";
import GameActions from "./GameActions";
import Player from "./Player";


class GameBoard extends react.Component{

    constructor(props){
        super();
        this.state={
            scoreToWin:100,
            dice:[],
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

    render(){
        return(
            <div className="GameBoard">
                <div className="leftSide">
                    <div className="player"><Player name="PLAYER 1" totalScore={this.state.players[0].totalScore} currentScore={this.state.players[1].currentScore}/></div>
                    <div className="GameActions"><GameActions/></div>

                </div>
                <div className="rightSide">
                <div className="player"><Player name="PLAYER 2" totalScore={this.state.players[1].totalScore} currentScore={this.state.players[1].currentScore}/></div>
                </div>

            </div>
        )
    }
}

export default GameBoard;