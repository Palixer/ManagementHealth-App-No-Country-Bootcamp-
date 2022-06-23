import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';
import Swal from 'sweetalert2'

const ConsultasId =() => {
  const id = useParams()
  // const [selectedDay, setSelectedDay] = useState();



  // const footer = selectedDay ? (
  //   <p>You selected {format(selectedDay, 'PPP')}.</p>
  // ) : (
  //   <p>Please pick a day.</p>
  // );

  const [professional, setProfessional] = useState()

    const crearConsulta = (e)=>{
      e.preventDefault()
      Swal.fire({
        icon: 'success',
        title: 'Se ha creado con exito la consulta',
        text: 'Aguarde a la respuesta',
      })
      
    }
    
    
    useEffect(() => {

        if(id){
            console.log(id.id)
            fetch(`http://localhost:3080/professional/getProfessionalsId/${id.id}`)
            .then(resp => resp.json())
            .then(resp => setProfessional(resp))
        }

        console.log(professional)

    
    }, [id])

    if(!professional) return 'Cargando'



  return (
    <div>

      { professional ?
          <div style={{width:'300px',height:'100px',border:'2px solid #00EE76',position:'relative',left:'20%'}}>
            <p style={{marginBottom:'0',marginTop:'0',paddingTop:'10px',paddingLeft:'7%'}}>{professional.data.name} {professional.data.lastname}</p>
            <p style={{marginBottom:'0',color:'#999999',paddingLeft:'7%'}}>{professional.data.professional} {professional.data.specialty}</p>
         
            <div style={{display:'flex'}} id=''>
                <p style={{color:'#999999',paddingLeft:'7%'}} id='Valoraciones'>Valoraciones</p>
                <div  style={{display:'flex'}}>
                    <p>⭐</p>
                    <p>⭐</p>
                    <p>⭐</p>
                    <p>⭐</p>
                    <p>⭐</p>
                </div>
            </div>


            <form style={{marginTop:'30px'}} >
              
              <input style={{width:'100%'}} type='date'/>
              <select style={{width:'100%',marginTop:'20px'}}>
                <option>8:00 a 9:00</option>
                <option>9:00 a 10:00</option>
                <option>10:00 a 11:00</option>
                <option>12:00 a 13:00</option>
                <option>13:00 a 14:00</option>
                <option>14:00 a 15:00</option>
                <option>15:00 a 16:00</option>
                <option>17:00 a 18:00</option>
                <option>19:00 a 20:00</option>
                <option>20:00 a 21:00</option>
                <option>21:00 a 22:00</option>
              </select>
                 <button onClick={crearConsulta} style={{marginTop:'20px',padding:'10px',width:'100%',border:'none',color:'white',backgroundColor:'#B632F4'}} type='submit'>Enviar fecha</button>
              </form> 

    


          </div>
        : 'error' }
    </div>
  )
}

export default ConsultasId