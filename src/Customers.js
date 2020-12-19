import React from 'react';
import './Customers.css';
import ellipse from './assets/Ellipse.png';
import grp from './assets/Group 2.png' ;
import  rea from './assets/image.jpg';
import grop from './assets/Group 3.png';
import group from './assets/Group 4.png'
const Customers = () => {
    return ( <div className="box">
        <img src={grp} className="dot" alt="xyz"/>
<img src={ellipse} className="iml" alt="xyz"/>

    
<img src={group} className="gr" alt="xyz"/> 
 
<h3><span>SELECTED CUSTOMERS </span>Check what our client <br></br>say about us</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ex <br></br>turpis accumsan congue. Quisque blandit dui Pellentesque habitant<br></br> morbi tristique senectus et netus et malesuada fames ac turpis<br></br> egestas. In convallis porta mauris non aliquam.</p>
<img src={rea} className="l" alt="xyz"/>
<img src={grop} className="lia" alt="xyz"/>
</div>

    );
}
 
export default Customers;