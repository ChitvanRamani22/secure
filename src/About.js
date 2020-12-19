import React from 'react';
import './About.css';
import Abs from './assets/Abs.png';
import { ReactComponent as Point} from './assets/Group 35626.svg';


function About() {
    return (
        <>
        <div className="side">
            <img src={Abs} alt="xyz"/>
            <div className="aboutus">
            <h2 style={{color: "rgb(0,156,255)"}}><Point />  ABOUT US</h2>
            <h2 ><strong>Great Digital Agency</strong></h2>
            <p style={{marginLeft: "0%"}}><strong>Our products are fully custom-made, built with the 
               <br></br> latest technologies and cloud-architectures.</strong></p>
            <p style={{marginLeft: "0%"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam<br></br> ex odio, turpis accumsan congue. Quisque blandit dui Pellentesque <br></br>habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.<br></br> In convallis porta mauris non aliquam.</p>
            </div><br></br>
            <div className="our">
                    <a href="./" >Get Started  </a>
                    
                </div>
        </div>
        
        </>
    )
}

export default About
