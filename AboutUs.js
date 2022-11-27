import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import { Container } from 'react-bootstrap';


function AboutUs (){
    return(
    <div className='background2'>
            <main>
   <Container>
        <Row>
        <Col xs={12} md={8} >
            <br/>
              <h2 className='font-weight-bold'>Are you looking to adopt a pet?</h2>
   
              <h4 className='aboutusimg'>
            We help over 21,000 animal shelters, humane societies,
             SPCAs, pet rescue groups, and pet adoption agencies advertise 
             their homeless pets to millions of adopters a month, all for free.
              And now, we’re a Kinship company too. Haven’t heard of them yet? They’re 
              a coalition of brands, teams, and partners, all using their individual strengths
               to help bring more care to pet care.
               We help over 21,000 animal shelters, humane societies,
             SPCAs, pet rescue groups, and pet adoption agencies advertise 
             their homeless pets to millions of adopters a month, all for free.
              And now, we’re a Kinship company too. Haven’t heard of them yet? They’re 
              a coalition of brands, teams, and partners, all using their individual strengths
               to help bring more care to pet care.
             </h4>
        </Col>
        <Col xs={6} md={4}>
            <br/>
          <img className='aboutus' src = "/paws.jpg" alt= "FIRST "/>
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={8}>
            <br/>
            <img className='aboutusimg' src = "/PETS.jpg" alt= "SECOND "/>
        </Col>   <br/>
        <Col xs={6} md={4}>
            <br/>
            <h4 className='aboutusimg'>
               We help over 21,000 animal shelters, humane societies,
             SPCAs, pet rescue groups, and pet adoption agencies advertise 
             their homeless pets to millions of adopters a month, all for free.
              And now, we’re a Kinship company too. Haven’t heard of them yet? They’re 
              a coalition of brands, teams, and partners, all using their individual strengths
               to help bring more care to pet care.
             </h4>
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={8} >
            <br/>
              <h2 className='font-weight-bold'>They Are Waiting For You!!</h2>
              <h4 className='aboutusimg'> 
            We help over 21,000 animal shelters, humane societies,
             SPCAs, pet rescue groups, and pet adoption agencies advertise 
             their homeless pets to millions of adopters a month, all for free.
              And now, we’re a Kinship company too. Haven’t heard of them yet? They’re 
              a coalition of brands, teams, and partners, all using their individual strengths
               to help bring more care to pet care.
               We help over 21,000 animal shelters, humane societies,
             SPCAs, pet rescue groups, and pet adoption agencies advertise 
             their homeless pets to millions of adopters a month, all for free.
              And now, we’re a Kinship company too. Haven’t heard of them yet? They’re 
              a coalition of brands, teams, and partners, all using their individual strengths
               to help bring more care to pet care.
             </h4>
        </Col>
        <Col xs={6} md={4}>
            <br/>
          <img className='aboutus' src = "/aboutuspaws.jpg" alt= "FIRST "/>
        </Col>
      </Row>

      
      <br/>
  </Container>


      <Row>
        <Col md={{ span: 6, offset: 3 }}><iframe className = "google" width="880" height="487" id="gmap_canvas" src="https://maps.google.com/maps?q=22%20Belmont%20Green&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </Col>
      </Row>
  </main>


 </div>
    ); 

}

export default AboutUs;