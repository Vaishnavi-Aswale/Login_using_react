import React from 'react';
import "bootstrap/dist/css/bootstrap.css"
import {Row,Col} from 'reactstrap';
import RightSide from './RightSide'
import LeftSide from './LeftSide'
import '../via_otp/Header.css'
const ViaEmail=()=>{
    return(
        <>
        <Row className="login-bg">
        <Row className="login-card">
        <Col lg={6} md={6} sm={12}><LeftSide/></Col>
        <Col lg={6} md={6} sm={12}><RightSide/></Col>
        </Row>
        </Row>
        </>
    )
}

export default ViaEmail;