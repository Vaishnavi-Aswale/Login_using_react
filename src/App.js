import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import ViaEmail from './components/via_email/ViaEmail'
import ViaOtp from './components/via_otp/ViaOtp';

function App() {
  return (
    <>
    <Router>
    <Switch>
    <Route exact path='/' component= {ViaEmail}/>
    <Route exact path='/ViaOtp' component= {ViaOtp}/>
    </Switch>
    {/* <ViaEmail/>
    <ViaOtp/> */}
    </Router>
    </>
  );
}

export default App;
