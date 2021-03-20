import react from 'react';
import "./GameAction.css";




class GameButton extends react.Component{

    constructor(props){
        super();
    }

    
    render(){
        return(
            <>
                <button className="btn" onClick={this.props.btnClickFunction}><i className={this.props.sign}></i>{this.props.text}</button>
            </>
        )
    }
}

export default GameButton;