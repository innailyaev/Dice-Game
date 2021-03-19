import react from 'react';
import "./GameAction.css";

class ScoreInput extends react.Component{

    constructor(props){
        super();
        this.state={
            inputValue:null,
        }
    }

    handleChange=(e)=>{
        let value=e.target.value;
        console.log("value",value);
        this.props.inputChange(value);
    }

    render(){
        return(
            <>
                <input className="scoreInput" type="text" placeholder="FINAL SCORE" value={this.props.finalScore} onChange={this.handleChange}/>
            </>
        )
    }
}

export default ScoreInput;