import React from 'react';
import "./Header.css";
import FormOtp from './FormOtp'


const Header=()=>{
    return(
        <>
        <div >
        <div>
            <div className="login-card">
                <div className="text-center" style={{marginTop:"30%", alignItems:"center"}}>
                    <div className="main-hd" style={{marginLeft:"70px"}}>Get Started Now! </div>
                        <div className="cont mrt5"style={{marginLeft:"70px"}}>Hello, let’s start your loan journey with us</div>
        <br/>
            <FormOtp />
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Header;