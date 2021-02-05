import React from 'react';
import './Screen.css'
import $ from 'jquery';
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.css';


class Home extends React.Component{


    componentDidMount(){
        $("#firstLook").hide();
        $(".has-menu-songs").hide() // this hides the sub song menu
        document.getElementsByClassName("screen-menu")[0].classList.remove("has-menu") // this helps in disabling the touchpad
        $(".screen-menu").hide("slide", {direction: "left" }, 1000) // this hides the main menu

        // this adds the home screen in the main screen
        $(".areaNeeded").append(`<div class='homeScreen'> 
                                    <div class = 'header'>
                                         <span> Home </span> 
                                         <i class='fa fa-battery-three-quarters'></i> 
                                    </div>
                                    <img src='https://i.pinimg.com/originals/7a/1d/4f/7a1d4fbae95e4e66e2d5d3376f593e7f.jpg' alt='earphone-photo'>
                                </div>`)
    }

    componentWillUnmount(){
        // this removes the home screen from the main screen when other page is loaded
        $(".homeScreen").remove()
    }

    render(){
        return (
                <div>

                </div>
        )
    }
}


export default Home;