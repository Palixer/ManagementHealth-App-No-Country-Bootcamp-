import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useEffect, useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import "./CreditCardForms.css";
import swal from "sweetalert";
import { DropdownsContext } from "../context/authContext";

const CreditCardForm = () => {

const [drug, setDrug] = useState()
  const {itemCart} = useContext(DropdownsContext)
  console.log(itemCart)
  useEffect(() => {
    const data = itemCart;
    fetch(`http://localhost:3080/drug/get-drugsById/${data.drug}`)
    .then(resp => resp.json())
    .then(respJSON => setDrug(respJSON.msg))
  }, [])

  
  const handleClick = (e)=>{
    e.preventDefault();
    return swal("Compra realizada con éxito!","Gracias por confiar en Management Health", "success")
  }
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");

  if(!drug) return 'loading'

  return (
    <div style={{display:'flex',width:'100%',justifyContent:'space-around',marginTop:'50px'}}>

      <div style={{display:'flex'}}>
      <Cards
        number={number}
        name={name}
        expiry={expiry}
        cvc={cvc}
        focused={focus}
      ></Cards>

      <form>
        <input
          style={{marginLeft:'10px'}}
          type="tel"
          name="number"
          placeholder="Número de tarjeta"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        ></input>

        <input
          style={{marginTop:'10px',marginLeft:'10px'}}
          type="text"
          name="name"
          placeholder="Nombre y Apellido como figura en la tarjeta"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        ></input>
        <input
                style={{marginTop:'10px',marginLeft:'10px'}}
          type="text"
          name="expiry"
          placeholder="MM/AA Expiración"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        ></input>
        <input
          style={{marginTop:'10px',marginLeft:'10px'}}
          type="tel"
          name="cvc"
          placeholder="CVC"
          value={cvc}
          onChange={(e) => setCvc(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        ></input>

      </form>
      </div>
      <div>
        <div style={{border:'1px solid GRAY',borderRadius:'10px'}}>
      <table style={{width:'200px'}}>
  <thead>
    <h1 style={{fontSize:'14px',paddingTop:'10px',paddingLeft:'10px',width:'200px',textAlign:'center'}}>Resumen Pedido</h1>
    <tr>
      <th style={{paddingLeft:'30px',fontWeight:'normal'}}>Nombre</th>
      <th style={{paddingLeft:'30px',fontWeight:'normal'}}>Cantidad</th>
      <th style={{paddingLeft:'35px',paddingRight:'30px',fontWeight:'normal'}}>Precio</th>
    </tr>
    <hr style={{marginTop:'0',marginBottom:'0',marginLeft:'30px',width:'100%'}}/>
  </thead>
  <tbody>
    <tr >
      <td style={{paddingLeft:'30px',paddingTop:'10px',paddingBottom:'10px'}}>{drug.name}</td>
      <td style={{paddingLeft:'50px',paddingTop:'10px',paddingBottom:'10px'}}>(x1)</td>
      <td style={{paddingLeft:'40px',paddingTop:'10px',paddingBottom:'10px'}}>${drug.price}</td>
    </tr>
    <hr style={{marginTop:'0',marginBottom:'0',marginLeft:'30px',width:'100%'}}/>

    <tr >
      <td style={{paddingLeft:'30px',paddingTop:'10px',paddingBottom:'10px',fontWeight:'bolder',textAlign:'center'}} colSpan={2}>Precio TOTAL</td>
      <td style={{paddingLeft:'40px',paddingTop:'10px',paddingBottom:'10px',fontWeight:'bolder'}}>${drug.price}</td>
    </tr>
  </tbody>
</table>
</div>

<button onClick={handleClick} style={{marginTop:'5px',width:'100%',height:'56px',border:'none',backgroundColor:'#B632F4',borderRadius:'4px',color:'white'}}>PROCEDER A PAGAR</button>
      </div>
    </div>





  );
};

export default CreditCardForm;
