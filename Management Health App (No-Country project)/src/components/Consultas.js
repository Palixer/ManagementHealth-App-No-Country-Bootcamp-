import React, { useEffect,useState } from 'react'
import Navbar from './Navbar'
import { Link, useLocation } from 'react-router-dom'
import './styles/Consultas.css'
import {useParams} from 'react-router-dom';
import { Icon } from '@iconify/react';

const Consultas =() => {
    const id = useParams()
   const [professionals, setProfessionals] = useState()

   const location = useLocation()
   
    useEffect(() => {

        fetch('http://localhost:3080/professional/getProfessionals')
        .then(resp => resp.json())
        .then(respJSON=> setProfessionals(respJSON.data))


        

     
    },[])

    console.log(id)


    if(!professionals) return 'Cargando profesionales'

    
  return (
    <>


<h1 style={{position:'relative',width:'90%',left:'8%',marginTop:'20px'}}>Pedi una consulta con alguno de los profesionales</h1>

<div style={{'display':'flex',marginTop:'20PX',justifyContent:'center',flexWrap:'wrap'}}>

    {professionals.map(item => (
        <div key={item._id} id='Card_Background'>

        <div id='Card_Name'>
        
            <h1 id='Card_h1'>{item.name} {item.lastname}</h1>
            <p id='Card_professional'>{item.professional}</p>
        
            <div id='Card_StarsContainer'>
                <p id='Valoraciones'>Valoraciones</p>
                <div id='Stars'>
                <Icon icon="ant-design:star-filled" color="#ffc700" />
                <Icon icon="ant-design:star-filled" color="#ffc700" />
                <Icon icon="ant-design:star-filled" color="#ffc700" />
                <Icon icon="ant-design:star-filled" color="#ffc700" />
               <Icon icon="ant-design:star-filled" color="#BDBDBD" />
                </div>
            </div>
        
        
        </div>
        
        <div id='Card_description'>
        
        <p id='Card_descriptionTitle'>Días y horarios de atención</p>
        
        <p id='Card_time'>{item.time1}</p>
        <p id='Card_time2'>{item.time2}</p>
        
        <p id='Card_Ubicación'>Ubicación</p>
        <p id='Card_direccion'>Dirección : {item.geoLocation}</p>
        
        
            <Link to={`/profile/consultas/${item._id}`} id='Card_ConsultaDigital'>
            <Icon icon="bxs:calendar" style={{marginLeft:'5px',fontSize:'16px',marginRight:'5px',color:"#B632F4"}}  />
            <p style={{marginBottom:'0',fontSize:'10px'}}>Reservar consulta digital</p>
            </Link>
        
        
        </div>
        
        <div id='Card_Buttons'>
        <Link to={`/profile/consultasText/${item._id}`} id='Card_Enviar'>Enviar Consulta</Link>
        <Link to={`/profile/consultas/${item._id}`} id='Card_DigitalButton'>Consulta digital</Link>

        </div>
        
        </div>
        
        
    ))}
</div>
    </>
  )
}

export default Consultas