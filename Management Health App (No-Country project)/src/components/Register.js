import React,{useState} from 'react'
import * as Yup from 'yup'
import './styles/Register.css'
import { Link } from 'react-router-dom'
import { Formik,Form } from 'formik'
import ImageBackground from './assets/adsa.png'
import TextField from './TextField'
const Register =() => {

  
 const [errorMessageBackend, seterrorMessageBackend] = useState()
 const [successMessage, setSuccessMessage] = useState()


  const validationSchema = Yup.object({

      name:Yup.string()
      .required('Nombre requerido'),
   
      lastName:Yup.string()
      .required('Apellido requerido'),

      password: Yup.string()
      .min(8, "La contraseña debe contener al menos 8 caracteres.")
      .required("Contraseña requerida."),
  
      password1: Yup.string()
      .min(8, "La contraseña debe contener al menos 8 caracteres.")
      .required("Contraseña requerida."),

      email: Yup.string().email("Email inválido.").required("Campo obligatorio.")
  });


  return (
    <>
      <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
          password1:"",
          name:"",
          lastName:""
        }}
        validationSchema={validationSchema}
        onSubmit={ async (values, { resetForm }) => {
          
          const {email,password,name,lastName,password1} = values
          const data = {email,password,name,lastName}


          if(password === password1){
            fetch('http://localhost:3080/auth/create-user',{
              method:'POST',
              mode:'cors',
              headers:{
                'Content-Type':'application/json'
              },
              body:JSON.stringify(data)
            })
            .then(resp => resp.json())
            .then(respJSON => {
              if(respJSON.msg === 'success'){
                setSuccessMessage('Success')
              }
            })

          }

          
        
          resetForm();
        }}
      >
        {(formik) => (
  
            <Form id='Register_Form'  onSubmit={formik.handleSubmit}>
        
            <label>Nombre</label>
              <TextField
                name="name"
                value={formik.values.name}
                type="text"
              /> 

           <label>Apellido</label>
              <TextField
                name="lastName"
                value={formik.values.lastName}
                type="text"
              /> 
              

              <label>E-mail</label>
              <TextField name="email" value={formik.values.email} type="email" />
              
              
              <label>Contraseña</label>
              <TextField
                name="password"
                value={formik.values.password}
                type="password"
              />

          <label>Reescribir contraseña</label>
              <TextField
                name="password1"
                value={formik.values.password1}
                type="password"
              />

            
              <div style={{width:'45%',borderLeft:'4px solid #41CE12',backgroundColor:'#C2EBB4',textAlign:'center'}}><p style={{color:'green'}}>{successMessage}</p></div>
              <button
              style={{backgroundColor:'#CFCFCF',border:'none',width:'45%',height:'50px',color:'white'}}
                type="submit"
                disabled={!formik.isValid}
              >
                Registrar
              </button>
              <p id='Form_HaveAccount'>Tienes cuenta? <Link id='Form_HaveAccLink' to="/login">Logueate</Link></p>
            </Form>
        )}
      </Formik>
        <img id='Background_Photo' src={ImageBackground}/>
        <div id='Background_Oblong'></div>
        <div id='Background_Oblong2'></div>
      </div>
    </>
  )
}

export default Register