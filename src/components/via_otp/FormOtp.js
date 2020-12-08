import React, { useState } from 'react'
import {Form, FormGroup, Button,FormText} from 'reactstrap';

import {Link} from "react-router-dom";
import {InputGroup, Dropdown, DropdownButton, FormControl} from 'react-bootstrap'


const FormOtp=()=>{
    

    const[mobile, setMobile]= useState("");
    
    const onSubmit=(event)=>{
        event.preventDefault();
        alert("Sending OTP");
    }
    const validateForm=()=> {
        return mobile.length > 0 ;
      }

    return(
        <>
<Form className="form-control"style={{width:"80%" , border:0,marginTop:"20px", marginLeft:"80px",marginRight:"80px"}}>
    <FormText className="text" >MOBILE NUMBER</FormText>
    <FormGroup>
                
    <InputGroup className="mb-3"   name="mobile"
     onChange={(e) =>  setMobile(e.target.value)} 
     value={mobile}  >

    <DropdownButton style={{color:"#000000",background: "#FFFFFF" }}
      as={InputGroup.Prepend}
      variant="outline-secondary"
      title="India"
      id="input-group-dropdown-1"
    >
      <Dropdown.Item id="1">India</Dropdown.Item>
      <Dropdown.Item href="#">United States</Dropdown.Item>
      <Dropdown.Item href="#">United Kingdom</Dropdown.Item>
      
    </DropdownButton>
    <FormControl aria-describedby="basic-addon1" />
             
  </InputGroup>

    </FormGroup>

      <FormGroup>
          <Button color="primary" size="md" block type="submit" 
          onClick={onSubmit} disabled={!validateForm()}>Get OTP</Button>
      </FormGroup>
      <div className="email-login">Existing user? <Link to="/" className="emailLogin">Login via Email</Link></div>
      
      </Form> 
     
        </>
    )
}

export default FormOtp;