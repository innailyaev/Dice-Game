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
        console.log("value", typeof value);
        if(value===''){
            value=100;
        }
            
        this.props.inputChange(value);
    }

    render(){
        return(
            <>
                <input className="scoreInput" type="text" placeholder='FINAL SCORE' onChange={this.handleChange}/>
            </>
        )
    }
}

export default ScoreInput;