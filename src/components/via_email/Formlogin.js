import React ,{useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import {Link} from "react-router-dom";
import "./RightSide.css";

const Formlogin=()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    
    const onSubmit=(event)=>{
        event.preventDefault();
        alert("Logged in");
    }
    const validateForm=()=> {
        return email.length > 0 && password.length > 0;
      }
    return(
       
        
    <Form className="form-control"style={{ border:0 , marginLeft:"40px", marginRight:"40px",marginTop:"15px"}}>
        <FormGroup>
            <Label >Email ID/Mobile NO.</Label>
            <Input className="inputfont" type="email" name="email" 
             onChange={(e) => setEmail(e.target.value)} value={email}  
             placeholder="Email ID/Mobile NO." />
        </FormGroup>
        <FormGroup>
            <Label >Password</Label>
            <Input className="inputfont" type="password" name="password" 
            onChange={(e) => setPassword(e.target.value)} value={password}  
            placeholder="Enter Password" />
            
            <div className="mrt20 text-right">
                <a href='#'>Forgot Password?</a>
            </div>
            
            <Button color="primary" size="lg" block type="submit" 
             onClick={onSubmit} disabled={!validateForm()}>Login</Button>
        </FormGroup>

            <Link to="/ViaOtp">Login via OTP</Link>
            </Form> 
      
    )
}

export default Formlogin;