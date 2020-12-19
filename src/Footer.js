import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
         
          <div className="col">
            <p>Lorem Finaldream rure dolor in reprehenderit in voluptate velit esse cillum dolore e uis nostrud exercitation isi ut aliquip ex ea commodo consequat.</p>
          </div>
          
          <div className="col" style={{marginLeft:'10%'}}>
            <h4>Our Services</h4>
            <ui >
              <li>WEB DEVELOPMENT</li>
              <li>MOBILE DEVELOPEMENT</li>
              <li>CLOUD TECHNOLOGIES</li>
              <li>UI/UX DESIGNS</li>
            </ui>
          </div>
          <div className="col">
            <h4>Our Links</h4>
            <ui >
              <li>TERMS AND CONDITIONS</li>
              <li>PRIVACY POLICY</li>
              <li>IMPRINT</li>
              <li>LEGAL</li>
            </ui>
          </div>
          
          <div className="col">
            <h4>Contact Us</h4>
            <ui>
              <li>Al. Dummyodl 124/23 floor <span style={{marginLeft:'7%'}}>123 Banswara Street, 02-577</span><span style={{marginLeft:'7%'}}> India.</span></li>
              <li>012345678</li>
              <li>XYZ@GMAIL.COM</li>
            </ui>
          </div>
        </div>
        <hr />
        
      </div>
    </div>
  );
}

export default Footer;