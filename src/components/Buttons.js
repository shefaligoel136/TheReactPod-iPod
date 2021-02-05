import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './Button.css'

// contains the buttons component for touch pad
const Buttons = (props) =>{
    
        return(
            <div className="buttons-container">
                <div className="menu-button" onClick={props.menuButtonClicked}>
                    <i className="fa fa-bars" ></i>
                </div>
            
                <div className="backward" >
                    <i className="fa fa-backward"></i>
                </div>

                <div className="forward" >
                    <i className="fa fa-forward"></i>
                </div>

                <div className="play" >
                    <i className="fa fa-play"></i>
                </div>
            </div>
            
        )
}

export default Buttons;