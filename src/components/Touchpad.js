import React from 'react';
import Screen from './Screen';
import './CommonCss.css';
import $ from 'jquery';
import Buttons from './Buttons';
import ZingTouch from 'zingtouch';


// this is the main component and handles all the working
class Touchpad extends React.Component{

    constructor(){
        super();
        this.state = {
           onWhat : "home", // onwhat tells that- on which component on the touch pad we are hovering on
           pressed : " " ,    // pressed tells that- on which component on the main or sub menu we want to go on
           menu: false  // if he user presses menu at the first time when he sees the ipod, nothing should happen
        }
        
    }


    componentDidMount(){
        
        var touchArea = document.getElementById('touch-wheel');
        var myRegion = new ZingTouch.Region(touchArea);
        const context=this;
        
        // form here the zingtouch function starts
            myRegion.bind(touchArea, 'rotate', function(e){
                if(document.getElementsByClassName("screen-menu")[0].classList.contains("has-menu")){ // this zingtouch will work only if the main-menu is visible on screen
                let distance = e.detail.angle; // tells the angle on which the mouse is hovering
                
                if(distance>0 && distance<90){
                    context.setState({
                        onWhat : "home"
                    })
                    // to show hovering this jquery is used
                    $("#settings, #music, #games").removeClass('selected')
                    $('#'+context.state.onWhat).addClass('selected');

                    // console.log(context.state.onWhat);

                }else if(distance>90 && distance<180){
                    context.setState({
                        onWhat : "settings"
                    })
                    // to show hovering this jquery is used
                    $("#home, #music, #games").removeClass('selected')
                    $('#'+context.state.onWhat).addClass('selected');
                    // console.log(context.state.onWhat);
                }
                else if(distance>180 && distance<240){
                    context.setState({
                        onWhat : "games"
                    })
                    // to show hovering this jquery is used
                    $("#home, #settings, #music").removeClass('selected')
                    $('#'+context.state.onWhat).addClass('selected');
                    // console.log(context.state.onWhat);

                }else if(distance>240 && distance < 360){
                    context.setState({
                        onWhat : "music"
                    })
                    // to show hovering this jquery is used
                    $("#home, #games, #settings").removeClass('selected')
                    $('#'+context.state.onWhat).addClass('selected');
                    // console.log(context.state.onWhat);
                }   
            }else if(document.getElementsByClassName("has-menu-songs")[0].classList.contains("has-menu")){ // this zingtouch will work only if the sub-song-menu is visible on screen
                    let distance = e.detail.angle;
                    
                    if(distance>0 && distance<180){
                        context.setState({
                            onWhat : "allSongs"
                        })
                        // to show hovering this jquery is used
                        $("#myAlbum").removeClass('selected')
                        $('#'+context.state.onWhat).addClass('selected');

                        // console.log(context.state.onWhat);
                    }else if(distance>180 && distance<360){
                        context.setState({
                            onWhat : "myAlbum"
                        })
                        // to show hovering this jquery is used
                        $("#allSongs").removeClass('selected')
                        $('#'+context.state.onWhat).addClass('selected');
                        // console.log(context.state.onWhat);
                    }
                } 
            }
        );
 }

 // this function is called when the user selects an option and want to go into it 
    onPress = () =>{
        this.setState({
            pressed : this.state.onWhat,
            menu : true
        })

        // if the user is on the page and opens the menu and click for the option - which is on his screen already, the menu option will hide
        // and touch pad will be disabled again
        if(this.state.onWhat == this.state.pressed){
            $('.screen-menu').hide("slide", {direction: "left" }, 1000);
            $('.screen-menu').removeClass('has-menu');
        }
        // console.log(this.state.pressed == 'music')
        // if user is on music screen, open the menu again then first he'll see the sub song menu.
        if(this.state.pressed === "music" && this.state.onWhat === this.state.pressed){
            $(".has-menu-songs").show("slide", {direction: "right" }, 1500);
            
        }
        
    }


    // menu button is to look for other menu options.
    menuButtonClicked = () =>{
        // $(".has-menu-songs").hide("slide", {direction: "right" }, 1000)

        // if(document.getElementById("music").classList.contains("selected")){
        //     $(".has-menu-songs").show("slide", {direction: "right" }, 1000)
        // }else{
        //     $(".has-menu-songs").hide("slide", {direction: "right" }, 1000)
        // }
        if(! this.state.menu === false){
        let screenMenuList = document.getElementsByClassName("screen-menu")[0].classList
        if(!screenMenuList.contains("has-menu")){
             $('.screen-menu').addClass('has-menu');
             $('.screen-menu').show("slide", {direction: "left" }, 1000)
        }   
        else{
            $('.screen-menu').removeClass('has-menu');
            $('.screen-menu').hide("slide", {direction: "left" }, 1000)
        }
        let songMenuList = document.getElementsByClassName("has-menu-songs")[0].classList
        if(!songMenuList.contains("has-menu")){
             $('.has-menu-songs').addClass('has-menu');
             $('.has-menu-songs').show("slide", {direction: "left" }, 1000)
        }   
        else{
            $('.has-menu-songs').removeClass('has-menu');
            $('.has-menu-songs').hide("slide", {direction: "left" }, 1000)
        }
    }
         
}


    render(){
        return(
            <div>
                < Screen 
                    selectedOption={this.state.pressed}
                    selectedMusicOption = {this.state.pressed}
                />     
                <div className = "areaNeeded-1" >
                        <div id="touch-wheel" style={styles.wheel}>
                            <Buttons
                                menuButtonClicked={this.menuButtonClicked}
                            />
                            <div id = "ok-button" style={styles.wheelOnClick}  onClick = {this.onPress}>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}


// css for pouchpad and press button.
const styles = {
    wheel : {
        borderRadius: "100%",
        // border: "1px solid black",
        width: "250px",
        height: "220px",
        margin: "12%",
        marginLeft: "10%",
        marginTop: "12%",
        backgroundColor: "white",
        boxShadow: "inset 0 0 0.1em #555",
    },

    wheelOnClick : {
        borderRadius : "100%" ,
        boxShadow: "inset 0 0 0.7em #555",
        background: "linear-gradient(180deg, #e3e3e3 0%, #d6d6d6 100%)",
        height: "100px",
        width : "100px",
        left:"76px",
        bottom: "11.5%",
        color: "white",
        position:"relative",
        cursor: "pointer"
    }

}


export default Touchpad;