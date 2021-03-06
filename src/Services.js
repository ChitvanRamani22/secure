import React from 'react';
import './Services.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactComponent as Point } from './assets/Group 35626.svg';
import ListIcon from './assets/Group 35621.png';
import CheckBox from './assets/checkbox.png';

function Services() {
    return (
    <>
    <div className="ourServices">
    <div className="row">
        <div className="col">
            <div className="leftsideServices">
                <h2 style={{color: "rgb(0,156,255)"}}><Point />Our Services</h2>
                <h2 style={{marginLeft:'0%'}}>Transforming your ideas <br></br>into Reality</h2>
                <div className="ourServicesLinks">
                    <a href="./">WebDevelopment </a>
                    <a href="./">MobileDevelopment </a><br></br>
                    <a href="./" style={{backgroundColor:'#0E77FF',color:'white'}}>UI/UXDesigning </a>
                    <a href="./">Branding </a><br></br>
                    <a href="./">CloudTechnology </a>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="rightsideServices">
                <div className="ourServicesList">
                    <img src={ListIcon} alt="xyz"/><h2>     UI/UX Designing</h2> 
                    <p>Lorem ipsum dolor sit amet, conse ctetur adipi scing elit.<br></br> Aliq uam ex odio, is the turpis accu msan congue <br></br>euisque blandit dui Pelle ntesque habitant.</p> 
                    <ul>
                        <li><img src={CheckBox} alt="xyz"/> Lorem ipsum dolor sit amet, conse ctetur adipi scing elit.</li>
                        <li><img src={CheckBox} alt="xyz"/> Lorem ipsum dolor sit amet,</li><br></br>
                        <li><img src={CheckBox} alt="xyz"/> conse ctetur adipi scing elit.</li>
                        <li></li>
                    </ul>  
                </div>
            </div>
        </div>
    </div>
    </div>
    </>
    )
}

export default Services
