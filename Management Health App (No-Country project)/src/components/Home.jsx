import React, { useState } from "react";
import image from "../assets/images/Doctora.jpg"

import "../assets/app.css"

const Home = () => {
    const [style, setStyle] = useState("cont");
    const changeStyle = () => {
        console.log("you just clicked");
        setStyle("cont2");
      };


    return(
        <>
            
                <div className="oblongs">
                    <div id='Background_Oblong'></div>
                    <div id='Background_Oblong2'></div>
                </div>

                
                <div>
                <h1 id="lema">Hacemos de nuestra prioridad, su bienestar y salud.</h1>
                </div>

                <a className="contButton" href="/">
                    <div className={style}>
                        <button className="button-signin" onClick={changeStyle}>
                        Registrarse
                        </button>
                    </div>
                </a>

                <div className="img-doctora" >
                    <img className="doctora" src={image} alt="Imagen doctora" />
                </div>
            
        
         </>
        
        
    )
}

export default Home;