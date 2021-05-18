import React from 'react';
//import { Router } from 'react-router-dom'; // IDK why we got rid of this ??
import {BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';




function App() {
  return (
   
    <Router>
      <div>

        < GlobalStyle />
        <Hero />

      </div>  
    </Router>
  );
}

export default App;
