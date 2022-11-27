import React,{useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel, CarouselItem, Card, CardGroup, ListGroup} from "react-bootstrap";

function Home() {
  /*Creating the controlled carousel index */
  const [index, setIndex] =useState(0);
  const handleSelect = (selectedIndex) =>{ setIndex (selectedIndex); };

  return ( 
  
   <div className='background2'>
      <main>
    {/*creating the controlled carousel of pictures from pets (cats, dogs and quotes underneath) */}
    <Carousel activeIndex={index} onSelect={handleSelect} variant = "dark" className= "text-center background2">
      <CarouselItem>
        <img className = "carimg" src = "/BLACKCAT.jpg" alt= "FIRST SLIDE"/>
      </CarouselItem>
      <CarouselItem>
        <img className = "carimg" src = "/CORGI2.jpg" alt= "Second SLIDE"/>
      </CarouselItem>
      <CarouselItem>
        <img className = "carimg" src = "/DOBERMAN.jpg" alt= "Third SLIDE"/>
      </CarouselItem>
      <CarouselItem>
        <img className = "carimg" src = "/CAT1.jpg" alt= "fourth SLIDE"/>
      </CarouselItem>
      <CarouselItem>
        <img className = "carimg" src = "/CAT2.jpg" alt= "FIFTH SLIDE"/>
      </CarouselItem>
      <CarouselItem>
        <img className = "carimg" src = "/CHRISTMASTACO.png" alt= "sixth SLIDE"/>
      </CarouselItem>
      </Carousel>
      <br />

{/*Creating the card for quotes underneath */}
    <Card className = "card-quotes">
    <Card.Body>
      <blockquote className ="bloquequote mb-0, display-2 , text-center" >
        <h1>
          {''}
          READY TO ADOPT?
          {''}
        </h1>
      </blockquote>
    </Card.Body>
    </Card>  
<br />
    <Card className = "card-quotes">
    <Card.Body>
      <blockquote className ="bloquequote mb-0, display-2 , text-center">
        <h1 class="font-weight-bold , text-center">
          
          Wanted - Chosen - Loved - Adopted
        
        </h1>
      </blockquote>
    </Card.Body>
    </Card>
<br />

{/*Creating carousel and cards */}
<Carousel onSelect={handleSelect}>
      <CarouselItem>
      <CardGroup className='card-carousel'>
      <Card className='dogs'>
              <Card.Img variant="top" src="BLACKCAT.jpg" />
              <Card.Body>
              <Card.Title className='title'>Wiskers</Card.Title>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Cat</ListGroup.Item>
                  <ListGroup.Item>Chihuahua</ListGroup.Item>
                  <ListGroup.Item>Friendly pet </ListGroup.Item>
                  <ListGroup.Item>1year</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
      <Card className='dogs' >
              <Card.Img variant="top" src="CAT1.jpg" />
              <Card.Body>
              <Card.Title className='title'>Lola</Card.Title>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Cat</ListGroup.Item>
                  <ListGroup.Item>Chihuahua</ListGroup.Item>
                  <ListGroup.Item>Friendly pet </ListGroup.Item>
                  <ListGroup.Item>2years</ListGroup.Item>
                </ListGroup>
              </Card.Body>
      </Card>
            <Card className='dogs'>
              <Card.Img variant="top" src="CAT2.jpg" />
              <Card.Body>
              <Card.Title className='title'>Twinky</Card.Title>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Cat</ListGroup.Item>
                  <ListGroup.Item>Chihuahua</ListGroup.Item>
                  <ListGroup.Item>Friendly pet </ListGroup.Item>
                  <ListGroup.Item>3years</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
    </CardGroup>
 </CarouselItem>

<CarouselItem>
  <CardGroup className='card-carousel'>

    <Card className='dogs'>
              <Card.Img variant="top" src="CHRISTMASTACO.pNg" />
              <Card.Body>
              <Card.Title className='title'>TACO</Card.Title>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Dog</ListGroup.Item>
                  <ListGroup.Item>Chihuahua</ListGroup.Item>
                  <ListGroup.Item>Friendly pet </ListGroup.Item>
                  <ListGroup.Item>2Years</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
  
      <Card className='dogs'>
              <Card.Img variant="top" src="CORGI2.jpg" />
              <Card.Body>
              <Card.Title className='title'>Toby</Card.Title>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Dog</ListGroup.Item>
                  <ListGroup.Item>Chihuahua</ListGroup.Item>
                  <ListGroup.Item>Friendly pet </ListGroup.Item>
                  <ListGroup.Item>7Years</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
            <Card className='dogs'>
              <Card.Img variant="top" src="DOBERMAN.JPG" />
              <Card.Body>
              <Card.Title className='title'>Manny</Card.Title>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Dog</ListGroup.Item>
                  <ListGroup.Item>Chihuahua</ListGroup.Item>
                  <ListGroup.Item>Friendly pet </ListGroup.Item>
                  <ListGroup.Item>3Years</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
    </CardGroup>
  </CarouselItem>



</Carousel>
<br />
 </main>

 </div>
 
  );
}

export default Home;