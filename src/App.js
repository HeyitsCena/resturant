import React from 'react';
//import { Router } from 'react-router-dom'; // IDK why we got rid of this ??
import Navbar from "./components/Navbar";
import {BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';




function App() {
  return (
   
    <Router>
      <div>
        < GlobalStyle />
        <Navbar/>
      
      </div>  
    </Router>
  );
}

export default App;
