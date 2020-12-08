import React, { useState } from 'react'
import Formlogin from './Formlogin';
import "./RightSide.css";


const RightSide= ()=>{   
    
    return(
    <div>
        <div className="container">
            <div className="login-card">
                <div className="text-center" style={{marginTop:"20%", justifyContent:"center"}}>
                    <div className="main-hd" style={{marginLeft:"70px"}}>Get Started Now! </div>
                        <div className="cont mrt5"style={{marginLeft:"70px"}}>Hello, let’s start your loan journey with us</div>
            <br/>
            <Formlogin />
                </div>
            </div>
        </div>
    </div>
    )
}

export default RightSide;