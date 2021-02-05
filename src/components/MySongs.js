import React from 'react';
import './Screen.css';
import './CommonCss.css';
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.css';

// component for my songs option in songs sub menu
class MySongs extends React.Component{

    componentDidMount(){
        // $(".areaNeeded").append(`<div class='mySongsScreen'> 
        //                                 <div class = 'header'>
        //                                     <span> MySongs </span>
        //                                     <i class='fa fa-battery-three-quarters'></i> 
        //                                  </div>
        //                                  <div id='firstLook'>
        //                                  <i class=""><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3AeVVoyTSsus04Pkr5HOWlnkRxVPu7oqZmA&usqp=CAU" alt='music-img'>
        //                                  </img><p>iPod.js</p><span>No songs</span></i>
                                         
        //                                 </div>
        //                         </div>`)
    }

    componentWillUnmount(){
        // $(".mySongsScreen").remove();
    }

    render(){
        return(
            <div className="mySongsScreen">
                <div className = "header">
                    <span>My Songs</span>
                    <i className='fa fa-battery-three-quarters'></i>
                </div>
                <div id='firstLook'>
                    <i><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3AeVVoyTSsus04Pkr5HOWlnkRxVPu7oqZmA&usqp=CAU" alt='music-img'>
                    </img><p>iPod.js</p><span>No songs</span></i>
                </div>
            </div>
        )
    }
}

export default MySongs;