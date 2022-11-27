import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import AllPets from './AllPets';
import Dogs from './Dogs';
import Cats from './Cats';
import AboutUS from './AboutUs';
import MyAccount from './MyAccount';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './Login';
import Register from './Register';



function App() {
  return (  
<>
<Header/>
<BrowserRouter>



<Routes>

  <Route>

    <Route index element={<Home />} /> {/* Main Page */}
    <Route path="Home" element={<Home />} />{/* Main Page */}

    <Route path="AllPets" element={<AllPets />} />{/* Main Page */}

    <Route path="Dogs" element={<Dogs />} />{/* All Books*/}

    <Route path="Cats" element={<Cats />} />{/* New Books Page */}

    <Route path='AboutUs' element={<AboutUS/>}/>{/* Top 10 Page */}

    <Route path='MyAccount' element={<MyAccount/>}/>{/*Login Page */}

    <Route path='Login' element={<Login/>}/>{/*Login Page */}

    <Route path='Register' element={<Register/>}/>{/*Login Page */}





  </Route>

</Routes>

</BrowserRouter>
    
<Footer/>
      
    


</>
  );
}

export default App;
