import { useState,useEffect, useContext } from "react";
import CardItem  from "../components/CardItem";
import CreditCardForm from "../components/CreditCardForms";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from "react-router-dom";
import { DropdownsContext } from "../context/authContext";

const Farmacia = () => {
  
  const [items, setItems] = useState([])
  

  useEffect(() => {
    fetch('http://localhost:3080/drug/get-drugs')
    .then(resp=> resp.json())
    .then(respJSON=> setItems(respJSON.msg))
   
  }, [])

  if(!items) return 'loading' 
  
  return (
    <div>


    <div style={{display:'flex',width:'95%',position:'relative',left:'2%',justifyContent:'end'}}><Link to='pago' style={{border:'none',background:'none'}}><p style={{fontSize:'30PX'}}><AiOutlineShoppingCart/></p></Link> </div>



    <div style={{display:'flex',flexWrap:'wrap',width:'100%',justifyContent:'start'}}>

      {items.map(item =>(
        <CardItem name={item.name} price={item.price} id={item._id}/>
      ))}

    </div>

    
    </div>
  );
};

export default Farmacia;
