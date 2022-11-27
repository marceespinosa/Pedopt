import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from "react-bootstrap";



function Header() {
  
  return (  
    
      <div>
        <header>
      {/*creating the NAVBAR with the logo of the company*/}
        <Navbar className='Home' >
          <>
          <img alt="" src= "/PetDopt.png" width="185" height="155"></img>
          <Navbar.Brand> </Navbar.Brand>
          <Navbar.Brand> </Navbar.Brand>
          <Navbar.Brand href="home" className='text-white title'> PetDopt</Navbar.Brand>
        
        <Nav className="me-auto">
          <Nav.Link href="home" className='text-white'>Home</Nav.Link>
          <Nav.Link href="AllPets" className='text-white'>All Pets</Nav.Link>
          <Nav.Link href="Dogs"className='text-white'>Dogs</Nav.Link>
          <Nav.Link href="Cats"className='text-white'>Cats</Nav.Link>
          <Nav.Link href="AboutUs"className='text-white'>About Us</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="MyAccount"className='text-white'>My Account</Nav.Link>
          <Nav.Link href="Login"className='text-white'>Login</Nav.Link>
          <Nav.Link href="Register"className='text-white'>Register</Nav.Link>
        </Nav> 
        </> 
      </Navbar>
      </header>
   
    </div>
  
  );
}

export default Header;