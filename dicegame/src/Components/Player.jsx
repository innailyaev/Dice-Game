import react from 'react';
import PlayerDetails from "./PlayerDetails";
import CurrentScore from "./CurrentScore"


class Player extends react.Component{

    constructor(props){
        super(); 
    }

    
    render(){
        
            return(
                <>
                    <PlayerDetails name={this.props.name} totalScore={this.props.totalScore}/>
                    <CurrentScore currentScore={this.props.currentScore}/>
                </>
            )  
    }
}


export default Player;