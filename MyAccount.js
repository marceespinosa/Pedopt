import {Button, Form, Card } from 'react-bootstrap';
import './App.css';

function MyAccount(){
    return (
    <div className='carousel'>
        <br />
        <Card className="bg-transparent">
              <Card.Img className='myaccount' variant="top" src="THOR.jpg" />
                <Card.Title className='myaccount'>Welcome Back!</Card.Title>
                <Card.Body>
                <Card className = 'login' style={{width: '50rem'}}>
            <h1 className='title'>Reset Password here!</h1>
        
         <Form className = " bg-transparent">
                <Form.Group className = "mb-3" controlId="formBasicEmail">
                    <Form.Label><h5 class="font-weight-bold">Password</h5></Form.Label>
                    <Form.Control  type ="password" placeholder='Enter Old Password'/>
                </Form.Group>

                <Form.Group className = "mb-3" controlId="formBasicEmail">
                    <Form.Label><h5 class="font-weight-bold">New Password</h5></Form.Label>
                    <Form.Control type ="password" placeholder='Enter New Password'/>
                </Form.Group>

                <Form.Group className = "mb-3" controlId="formBasicEmail">
                    <Form.Label><h5 class="font-weight-bold">Re-Enter New Password</h5></Form.Label>
                    <Form.Control type ="password" placeholder='Re-Enter New Password'/>
                </Form.Group>

                <Button variant="outline-success"type="submit">Reset!</Button>
            </Form>
   
        </Card>    

                </Card.Body>
            </Card>


      
        <br/>
    </div>
    )
} export default MyAccount;