import React from 'react';
import './Screen.css';
import 'font-awesome/css/font-awesome.min.css';
import $ from 'jquery';
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.css';


class Settings extends React.Component{

    componentDidMount(){
        $("#firstLook").hide();
        $(".has-menu-songs").hide() // this hides the sub song menu
        document.getElementsByClassName("screen-menu")[0].classList.remove("has-menu"); // this helps in disabling the touchpad
        $(".screen-menu").hide("slide", {direction: "left" }, 1000) // this hides the main menu

        // this adds the settings screen in the main screen
        $(".areaNeeded").append(`<div class='settingScreen'> 
                                        <div class = 'header'>
                                            <span> Settings </span>
                                            <i class='fa fa-battery-three-quarters'></i> 
                                         </div>
                                         <div class='setting-text'>
                                            <i class='fa fa-tablet'> <span>iPod.js<span></i>    
                                            <p>Made with <i class='fa fa-heart' id='heart'></i> by Shefali Goel</p>
                                            <hr>
                                        </div>
                                </div>`)
    }

    componentWillUnmount(){
        // this removes the settings screen from the main screen when other page is loaded
        $(".settingScreen").remove()
    }

    

    render(){
        return (
            <div>
               
            </div>
        )
    }
}

export default Settings;