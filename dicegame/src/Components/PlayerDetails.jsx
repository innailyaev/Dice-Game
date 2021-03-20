import react from 'react';
import "./Player.css"



class PlayerDetails extends react.Component{

    constructor(props){
        super(); 
    }

    
    render(){
        
            return(
                <div>
                    <p className="playerName">{this.props.name}</p>
                    <div className="totalScore">{this.props.totalScore}</div>
                </div>
            )  
    }
}


export default PlayerDetails;