import react from 'react';
import "./GameAction.css";



class GameButton extends react.Component{

    constructor(props){
        super();
    }


    render(){
        return(
            <>
                <button className="btn" ><i class={this.props.sign}></i>{this.props.text}</button>
            </>
        )
    }
}

export default GameButton;