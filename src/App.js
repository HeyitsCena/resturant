import React from 'react';
//import { Router } from 'react-router-dom'; // IDK why we got rid of this ??
import Navbar from "./components/Navbar";
import {BrowserRouter as Router} from 'react-router-dom';




function App() {
  return (
    <Router>
    <Navbar/>
    </Router>
  );
}

export default App;
