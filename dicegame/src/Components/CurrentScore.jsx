import react from 'react';
import "./GameBoard.css"

class CurrentScore extends react.Component{

    constructor(props){
        super(); 
    }

    
    render(){
        
            return(
                <div className="currentScore">
                    <p>Current</p>
                    {this.props.currentScore}
                </div>
            )  
    }
}


export default CurrentScore;