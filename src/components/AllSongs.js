import React from 'react';
import './Screen.css';
import 'font-awesome/css/font-awesome.min.css';  // for font awesome icons
import $ from 'jquery'; // for jquery
import ReactAudioPlayer from 'react-audio-player';
import 'jquery-ui-bundle';  // for more functional jquery
import 'jquery-ui-bundle/jquery-ui.css';

class AllSongs extends React.Component{

    componentDidMount(){
        document.getElementsByClassName("has-menu-songs")[0].classList.remove("has-menu");
        $(".has-menu-songs").hide("slide", {direction: "left" }, 1000)
        // $(".areaNeeded").append(`<div class='allSongs'> 
                                                   
        //                         </div>`)
    }

    // componentWillUnmount(){
    //     $(".allSongs").remove();
    // }

    render(){
        return(
            <div className="allSongs">
                <div className = 'header'>
                    <span> All Songs </span>
                        <i className='fa fa-battery-three-quarters'></i>
                </div>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP8ILtQ3qMQXzLisUN6Y07Ekgp3xXxb3oQNA&usqp=CAU&ec=45771800" alt="music-img"></img>
                </div>

               <ReactAudioPlayer //for the music player
                    id="reactAudio"
                    src=" https://www.learningcontainer.com/wp-content/uploads/2020/02/Sample-OGG-File.ogg"
                    autoPlay
                    controls
                />  
            </div>
        )
    }
}

export default AllSongs;