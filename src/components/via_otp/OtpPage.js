import React from 'react';
import "bootstrap/dist/css/bootstrap.css"
import Header from './Header'
import LeftSide from '../via_email/LeftSide'
import {Row,Col} from 'reactstrap';

const OtpPage=()=>{
    return(
        <>
       
        <Row className="login-bg">
            <Row className="login-card">
                <Col lg={6} md={6} sm={12}><LeftSide/></Col>
                <Col lg={6} md={6} sm={12}><Header/></Col>
            </Row>
        </Row>
        
        
        </>
    )
}

export default OtpPage;