
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from "react-bootstrap";

function Footer() {
  /*Creating the controlled carousel index */
  

  return (  
   <div>
    
<footer class = " Home py-5 my-10 ">
  
        <div class= " px-7 px-lg-5">
         <p class = " m-0 text-center text-white">
    {/*Creating the card for quotes underneath */}
    <Card className = " p-3 mb-3 text-white bg-transparent">
        <Card.Body className= "blockquote mb-0, display-3, text-center">
        <h5 class="font-weight-bold">
          Contact Infomarmation
         </h5>
        <p> 
            Email: petdopt@gov.ie
            <br />
            Phone Number: 0873383945
            <br />
            Location: 22 Belmont Green, Stillorgan
        </p>
        </Card.Body>
    </Card> 
    <br />
    
          <h6 class="font-weight-bold">Copyright &copy; PetDopt</h6>  

         </p>
        </div>



    </footer>
   
  </div>
  



  );
}

export default Footer;