import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import './styles/ConsultasText.css'
import Swal from 'sweetalert2'
const ConsultaText = () => {

  const id = useParams()

  const [professional, setProfessional] = useState()
  const [text, setText] = useState('Escriba su consulta aqui')

  console.log(text)

  const borrarTexto = (e)=>{
    e.preventDefault()
   setText('')
  }

  const submitText = (e)=>{
e.preventDefault()
    Swal.fire({
      icon: 'success',
      title: 'Su consulta ha sido enviada',
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
    <div >
         { professional ?
          <div style={{width:'300px',height:'100px',border:'2px solid #00EE76',position:'relative',left:'20%'}}>
            <p style={{marginBottom:'0',fontWeight:600,marginTop:'0',marginLeft:'10%',paddingTop:'10px'}}>{professional.data.name} {professional.data.lastname}</p>
            <p style={{marginBottom:'0',color:'#999999',marginLeft:'10%'}}>{professional.data.professional} {professional.data.specialty}</p>
         
            <div style={{display:'flex',marginLeft:'10%'}} id=''>
                <p style={{color:'#999999'}} id='Valoraciones'>Valoraciones</p>
                <div  style={{display:'flex'}}>
                    <p>⭐</p>
                    <p>⭐</p>
                    <p>⭐</p>
                    <p>⭐</p>
                    <p>⭐</p>
                </div>
            </div>
    




     
 


          </div>
        : 'error' }

     
         <div style={{width:'100%',display:'flex',justifyContent:'center',marginTop:'1%'}}>
          <div id='Consulta_ContainerBackground'>
           <form style={{width:'90%',position:'relative',left:'5%',marginTop:'4%'}}>
              <div>
               <textarea id="w3review" name="w3review" style={{width:'100%',height:'500px'}}>{text}</textarea>
             </div>
             <div style={{width:'100%',marginTop:'10px',paddingBottom:'10px',display:'flex',justifyContent:'space-between'}}>
               <button id='Delete_Text' onClick={borrarTexto}>Borrar</button>
               <button id='Submit_Text' onClick={submitText} type='submit'>Enviar</button>
             </div>
            </form> 
          </div>
        </div>
    </div>
  )
}

export default ConsultaText