import react from 'react';
import "./GameAction.css";

class ScoreInput extends react.Component{

    constructor(props){
        super();
        
    }

    handleChange=(e)=>{
        let value=e.target.value;
        if(value===''){
            value=100;
        }
            
        this.props.inputChange(value);
    }

    render(){
        return(
            <>
                <input id="scoreInput" className="scoreInput" type="text" placeholder='FINAL SCORE' onChange={this.handleChange}/>
            </>
        )
    }
}

export default ScoreInput;