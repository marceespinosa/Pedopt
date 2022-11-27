import React from 'react';
import {Card, Col, Row, ListGroup} from 'react-bootstrap';

function Dogs (){
    return(
    <Row xs={1} md={4} className="g-4 carousel">
          <Col>
            <Card className='addcard'>
              <Card.Img className = 'addimage' variant="top" src="THOR.jpg" />
              <Card.Body>
                <Card.Title className='title'>THOR</Card.Title>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item >Dog</ListGroup.Item>
                  <ListGroup.Item>Chihuahua</ListGroup.Item>
                  <ListGroup.Item>Friendly pet </ListGroup.Item>
                  <ListGroup.Item>1year</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className='dogs' >
              <Card.Img variant="top" src="THORPUPPY.jpg" />
              <Card.Body>
              <Card.Title className='title'>Thor</Card.Title>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Dog</ListGroup.Item>
                  <ListGroup.Item>Chihuahua</ListGroup.Item>
                  <ListGroup.Item>Friendly pet </ListGroup.Item>
                  <ListGroup.Item>4Months</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>

          <Col>
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
          </Col>


          <Col>
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
          </Col>

          <Col>
            <Card className='dogs'>
              <Card.Img variant="top" src="FLASH.jpg" />
              <Card.Body>
              <Card.Title className='title'>Flash</Card.Title>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Dog</ListGroup.Item>
                  <ListGroup.Item>Chihuahua</ListGroup.Item>
                  <ListGroup.Item>Friendly pet </ListGroup.Item>
                  <ListGroup.Item>3Years</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className='dogs'>
              <Card.Img variant="top" src="TACOPUPPY.jpg" />
              <Card.Body>
              <Card.Title className='title'>Taco</Card.Title>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Dog</ListGroup.Item>
                  <ListGroup.Item>Chihuahua</ListGroup.Item>
                  <ListGroup.Item>Friendly pet </ListGroup.Item>
                  <ListGroup.Item>8months</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
      </Row>

     
    ) 

}

export default Dogs;