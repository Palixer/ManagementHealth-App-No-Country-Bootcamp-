
import { useContext } from "react";
import { Card } from "react-bootstrap";
import barbijos from '../assets/images/Barbijos.jpg';
import { DropdownsContext } from "../context/authContext";
import './CardItem.css'
import paracetamol from '../assets/images/Paracetamol.jpg'
import remedio from '../assets/images/Remedio.jpg'
import Termometro from '../assets/images/Termometro.jpg'
import TensioMetro from '../assets/images/Tensiometro.jpg'
import SillaRuedas from '../assets/images/Silla-de-ruedas.jpg'


function CardItem ({image, name, price, buttonAdd,id}){


  const {itemCart,setCart,userInfo,setUserInfo} = useContext(DropdownsContext);
  console.log(userInfo)
  const date = new Date()
 
   switch (name){
    case 'Silla con ruedas':
    image = SillaRuedas
    break;

    case 'Barbijos.Caja 50 u':
      image = barbijos
    break;
  
    case 'Termometro':
    image = Termometro;
      break;

    case 'Remedio para gripe':
    image = remedio;
      break;

    case 'Paracetamol.Caja 20u':
    image = paracetamol;
    break;

    case 'Tensiometro':
    image = TensioMetro;
    break;
  }

  console.log(itemCart)

    return (
      
       <Card style={{ width: '28rem',marginLeft:'7%',marginBottom:'1%'}}>
         <Card.Img variant="top" src={image} />
         <div id='Card_Body'>
         <Card.Body>
          <div id='FlexContent'>
            <div>
           <Card.Title>{name}</Card.Title>
           <Card.Text>
           ${price}
           </Card.Text>
           </div>

           <button onClick={() => setCart({drug:id,Paciente:userInfo.data._id,created:date.toLocaleString()}) } id="Card_AddToCart">Agregar</button>
           </div>
         </Card.Body>
         </div>
       </Card>
);
};
export default CardItem;