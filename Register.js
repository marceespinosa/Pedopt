import {Button, Form, Card } from 'react-bootstrap';
import './App.css';

function Register(){
    return (
        <div className='carousel'>  
     <br />
        <Card className = 'login' style={{width: '50rem'}}>
        <h1 className='title'>Register And Be Part Of The Group!!</h1>

        <Form>
            <Form.Group className = "mb-3" controlId="formBasicEmail">
            <Form.Label><h5 class="font-weight-bold">User Name</h5></Form.Label>
                <Form.Control type ="username" placeholder='Please enter a username'/>
            </Form.Group>

            <Form.Group className = "mb-3" controlId="formBasicEmail">
            <Form.Label><h5 class="font-weight-bold">Email</h5></Form.Label>
                <Form.Control type ="email" placeholder='Please enter an emaill'/>
            </Form.Group>

            <Form.Group className = "mb-3" controlId="formBasicEmail">
            <Form.Label><h5 class="font-weight-bold">Password</h5></Form.Label>
                <Form.Control type ="password" placeholder='Please enter a password'/>
            </Form.Group>

           <Form.Group className = "mb-3" controlId="formBasicEmail">
           <Form.Label><h5 class="font-weight-bold">Re-Password</h5></Form.Label>
                <Form.Control type ="password" placeholder='Please re-enter your password'/>
            </Form.Group>

            <Button variant="outline-danger" type="submit">Register!</Button>
        </Form>
   
        </Card>     <br/></div>
    )
} export default Register;