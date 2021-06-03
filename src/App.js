import React from 'react';
//import { Router } from 'react-router-dom'; // IDK why we got rid of this ??
import {BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import {productData} from './components/Products/data';
import Feature from './components/Feature';




function App() {
  return (
   
    <Router>
      
      <div>
        < GlobalStyle />
        <Hero />
        <Products heading='choose your pizza'  data={productData}/>
        <Feature/>

        </div>
    </Router>
  );
}

export default App;
