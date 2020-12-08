import React from 'react';
import './RightSide.css';
import Image from 'react-bootstrap/Image';


//leftside image part
const LeftSide= ()=>{
    return(
        <div className="container">
        
        <div style={{marginLeft:"0%"}}>
        <a href='#'><img src="/images/eduvanz-white-logo.png"></img></a>
        </div>
        {/* <img className="img-responsive" src="/images/sign-up.png" ></img> */}
        <Image src="/images/sign-up.png" fluid/>
        
        </div>
    )
}

export default LeftSide;