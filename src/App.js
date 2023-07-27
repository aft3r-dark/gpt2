import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import PhotoWithPopup from './components/PhotoWithPopup';
const App = () => {
  return (
    // <Router>
      // <Navbar />
      
      
    <>
    <PhotoWithPopup prop1 = "./pictures/EricaAboutUs.png"></PhotoWithPopup>
    <PhotoWithPopup prop1 = "./pictures/MarcusAboutUs.png"></PhotoWithPopup>
    <PhotoWithPopup prop1 = "/pictures/RowanAboutUs.png"></PhotoWithPopup>
    <PhotoWithPopup prop1 = "/pictures/EricaAboutUs.png"></PhotoWithPopup>
    <PhotoWithPopup prop1 = "/pictures/MariamAboutUs.png"></PhotoWithPopup>
    <PhotoWithPopup prop1 = "/pictures/JacobAboutUs.png"></PhotoWithPopup>
    </>
    
  );
};

export default App;
