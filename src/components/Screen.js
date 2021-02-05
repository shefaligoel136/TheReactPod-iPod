import React from 'react';
import './CommonCss.css';
import './Screen.css';
import 'font-awesome/css/font-awesome.min.css';

// importings all the screen components 

import Settings from './Settings';
import  Games from './Games';
import  Music from './Music';
import  Home from './Home';
import  MySongs from './MySongs';
import  AllSongs from './AllSongs';


// component for screen - mainly contains the menu part and connects other commponents with screen
class Screen extends React.Component{

    componentDidMount(){
       
    }

    render(){
        return(
            <div className = "areaNeeded" >
                <div id="firstLook">
                    <i className="fa fa-react"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt='react-img'>
                    </img><p>iPod.js</p><span>by Shefali Goel</span></i>
                </div>
               
                <div className = "screen-menu has-menu">
                    <div className="menu-header">
                        iPod.js 
                    </div>
                    <div id="home" className="selected">
                       home <i className="fa fa-chevron-right"></i>
                    </div>           
                    <div id="music">
                        music <i className="fa fa-chevron-right"></i>
                    </div>
                    <div id="games">
                        games <i className="fa fa-chevron-right"></i>
                    </div>
                    <div id="settings">     
                       settings <i className="fa fa-chevron-right"></i>
                    </div>
                </div>

                <div className = "has-menu-songs">
                    <div className="menu-header">
                            Music
                        </div>
                        <div id="allSongs" className="selected">
                            All Songs <i className="fa fa-chevron-right"></i>
                        </div>
                        <div id="myAlbum">
                            My Album <i className="fa fa-chevron-right"></i>
                        </div>
                    </div>
                
                    {this.props.selectedOption==='settings'?<Settings /> : " "}
                    {this.props.selectedOption==='games'?<Games /> : " "}
                    {this.props.selectedOption==='music'?<Music /> : " "}
                    {this.props.selectedOption==='home'?<Home /> : " "}
                    {this.props.selectedMusicOption ==='allSongs'?<AllSongs/> : " "}
                    {this.props.selectedMusicOption ==='myAlbum'?<MySongs/> : " "}
            </div>
        )
    }
}



export default Screen;