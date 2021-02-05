import React from 'react';
import Touchpad from './components/Touchpad';
import $ from 'jquery';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
class Ipod extends React.Component{

    // used thisextra component so as to make code look more neat
   componentDidMount(){
        $(".has-menu-songs").hide();
   }

    render(){
        return(
            <div style={ styles.areaNeeded }>
                < Touchpad />
            </div>
        )
    }
}

const styles = {
    areaNeeded : {
        height:"600px",
        width: "350px",
        display: "inline-block",
        border: "1px solid gray",
        marginTop: "50px",
        borderRadius: "4%",
        boxShadow: "inset 0 0 2.4em #555",
        background: "linear-gradient(180deg, #e3e3e3 0%, #d6d6d6 100%)",
        WebkitBoxReflect: "below 0px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(50%, transparent), to(rgba(250, 250, 250, 0.3)))"

    }
}

export default Ipod;