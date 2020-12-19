import './App.css';
import { Button, Nav, Navbar, NavbarBrand, NavLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Technologies from './Technologies';
import Studies from './Studies';
import About from'./About';
import un from './assets/Union 1.svg'
import Customers from './Customers';
import Services from './Services';
import Footer from './Footer'
import WorkFlow from './Workflow'
import Form from './Form'

function App() {
  return (
    <>
  <div className="header">
    <Navbar Navbar bg="primary" variant="white">
      <div className="container">
        <NavbarBrand href="#" style={{color:"white"}}>LOGO</NavbarBrand>
        <Nav className="ml-auto justify-content-end">
          <NavLink href="#" style={{color:"white"}}>About</NavLink>
          <NavLink href="#" style={{color:"white"}}>Services</NavLink>
          <NavLink href="#" style={{color:"white"}}>Case studies</NavLink>
          <NavLink href="#" style={{color:"white"}}>Testimonials</NavLink>
          <NavLink href="#" style={{color:"white"}}>Contact</NavLink>
          <NavLink href="#"><Button>Login</Button></NavLink>
        </Nav>
      </div>
    </Navbar> 
  </div>

  <div className="firstpage">
      <h2>Web Design</h2>
      <h2>Web Development</h2>
      <h2>by SB</h2>
      <img src={un} className="im" alt="xyz"/>
  </div>
  <div >
    <About />
  </div>
  <div >
    <Services />
  </div>
  <div >
    <WorkFlow />
  </div>
  <div className="technologies">
    <h2 style={{marginTop: "10%"}}>Core Technologies</h2>
    <Technologies />
  </div>
  <div >
    <Customers />
  </div>
  
  <div className="Studies">
    <Studies />
  </div>
  <div >
    <Form />
  </div>
  <div>
    <Footer />
  </div>
  
  
      </>
  );
}

export default App;
