import React from 'react';
import Firebase  from './assets/_Path_3.png';
import  ReactLogo from './assets/React-icon.png';
import  ReduxLogo from './assets/redux-logo.png';
import  AWSLogo1 from './assets/Asw.png';
import AWSLogo2 from './assets/Aws2.png'
import  GcloudLogo  from './assets/Google.png';
import  JSlogo  from './assets/Path 37519.png';
import  NodeLogo from './assets/NodeJS.png';
import './Technologies.css';

function Technologies() {
    return (
        <>
        <p> What is Lorem Ipsum Lorem Ipsum is simply dummy text of 
            the printing and typesetting industry Lorem Ipsum<br></br>has been
             an unknown printer took a galley of specimen book it has</p>
        
        <div className="technologies">
        <ul class="navTechnologies">
            <li><a href="./">Design</a></li>|
            <li><a href="./">Development</a></li>|
            <li><a href="./">Marketing</a></li>
        </ul><br></br>
            <img src={ReactLogo} className="logo" alt="xyz"/>
            <img src={AWSLogo2} className="logo" alt="xyz" style={{backgroundColor:'#0E77FF'}}/>
            <img src={GcloudLogo} className="logo" alt="xyz"/>
            <img src={ReduxLogo} className="logo" alt="xyz"/>
            <img src={JSlogo} className="logo" alt="xyz"/>
            <img src={AWSLogo1} className="logo" alt="xyz"/><br></br>
            <img src={ReduxLogo} className="logo" alt="xyz"/>
            <img src={NodeLogo} className="logo" alt="xyz"/>
            <img src={Firebase} className="logo" alt="xyz"/>
            <img src={ReactLogo} className="logo" alt="xyz"/>
            <img src={JSlogo} className="logo" alt="xyz"/>
        </div>
        </>
    )
}

export default Technologies
