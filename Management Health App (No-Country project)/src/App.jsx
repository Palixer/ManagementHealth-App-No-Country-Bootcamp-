import React from "react";
import images from "./images";
import './assets/styles.css';
import NavBar from "./layouts/NavBar";
import Home from "./components/Home"
import ImageSlider from "./components/ImageSlider";
import Farmacia from "./components/Farmacia";

const App = () => {
  return (

    <>
    <div className="App">
      
    
        <NavBar />
       
        
        
       { /*<!--<ImageSlider images={images} />--!>*/}
    </div>
    </>
    
  );
}
  
export default App;
