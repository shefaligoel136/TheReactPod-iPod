import React from 'react';
import './Screen.css'
import $ from 'jquery';
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.css';


class Music extends React.Component{

    componentDidMount(){
        $("#firstLook").hide();

        document.getElementsByClassName("screen-menu")[0].classList.remove("has-menu") // this helps in disabling the touchpad
        $(".has-menu-songs").show("slide", {direction: "right" }, 1500) // this shows the song sub menu
        $(".screen-menu").hide("slide", {direction: "left" }, 1000) // this hides the main menu

        // this adds the music screen in the main screen
        $(".areaNeeded").append(`<div class='musicScreen'>
                                         <div  class = 'header'>
                                                <span> Music </span> 
                                                <i class='fa fa-battery-three-quarters'></i> 
                                        </div>
         </div>`)
        $(".has-menu-songs").addClass("has-menu");  // this enables the touchpad for the sub song menu
        
    }

    componentWillUnmount(){
        // this removes the music screen in the main screen
        $(".musicScreen").remove();
        $(".has-menu-songs").remove("has-menu");       
    }

    render(){
        return (
            <div>
                {this.showSongsMenu}
            </div>
        )
    }
}

export default Music;