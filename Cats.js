import React from 'react';
import {Card, Col, Row,ListGroup} from 'react-bootstrap';


function Cats (){
    return(
        <Row xs={1} md={4} className="g-4 carousel">
          <Col>
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
          </Col>

          <Col>
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
          </Col>

          <Col>
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
          </Col>

      </Row>
  


    ); 

}

export default Cats;