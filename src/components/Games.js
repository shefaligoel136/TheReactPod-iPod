import React from 'react';
import './Screen.css';
import 'font-awesome/css/font-awesome.min.css';
import $ from 'jquery';
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.css';

class Games extends React.Component{

    componentDidMount(){
        $("#firstLook").hide();
        $(".has-menu-songs").hide() // this hides the sub song menu
        document.getElementsByClassName("screen-menu")[0].classList.remove("has-menu")  // this helps in disabling the touchpad
        $(".screen-menu").hide("slide", {direction: "left" }, 1000) // this hides the main menu

        // this adds the games screen in the main screen
        $(".areaNeeded").append(`<div class='gameScreen'>
                                    <div  class = 'header'>
                                         <span> Games </span> 
                                         <i class='fa fa-battery-three-quarters'></i> 
                                    </div>
                                    <div class= 'games-icon'>
                                        <p>Games are under construction</p>
                                            <i class='fa fa-spinner fa-spin'></i> 
                                        <p >Coming Soon!</p> 
                                    </div>
                                </div>`)
    }
    componentWillUnmount(){
        // this removes the games screen from the main screen when other page is loaded
        $(".gameScreen").remove()
    }

    render(){
        return (
            <div>
                
            </div>
        )
    }
}



export default Games;