import react from 'react';
import "./GameBoard.css"

class CurrentScore extends react.Component{

    constructor(props){
        super(); 
    }

    render(){
        
            return(
                <div className="currentScore">
                    Current<br></br>
                    {this.props.currentScore}
                </div>
            )  
    }
}


export default CurrentScore;