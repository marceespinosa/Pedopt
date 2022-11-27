import {Button, Form, Card } from 'react-bootstrap';
import './App.css';

function Login(){
    return (
        <div className='carousel'>  
     <br />
        <Card className = 'login' style={{width: '50rem'}}>
            <h1 className='title'> Hello! Login Here!</h1>
        
        <Form className = " bg-transparent">
            <Form.Group className = "mb-3" controlId="formBasicEmail">
                <Form.Label><h5 class="font-weight-bold">User Name</h5></Form.Label>
                <Form.Control  type ="username" placeholder='Enter UserName'/>
            </Form.Group>

            <Form.Group className = "mb-3" controlId="formBasicEmail">
            <Form.Label><h5 class="font-weight-bold">Email</h5></Form.Label>
                <Form.Control type ="email" placeholder='Enter Email'/>
            </Form.Group>

            <Form.Group className = "mb-3" controlId="formBasicEmail">
            <Form.Label><h5 class="font-weight-bold">Password</h5></Form.Label>
                <Form.Control type ="password" placeholder='Enter Password'/>
            </Form.Group>
            <Button variant="outline-success"type="submit">Login!</Button>
        </Form>
   
        </Card>     <br/></div>
    )
} export default Login;