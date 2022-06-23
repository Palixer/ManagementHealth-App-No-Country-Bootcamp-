import { Form, Formik } from "formik";
import { useContext } from "react";
// import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import img from "../assets/medica-home-logo.png";
import TextField from "../components/TextField";
import { DropdownsContext, useAuthContext } from "../context/authContext";

const Login = () => {
  // const EMAIL = "gabriel@mail.com";
  // const CONTRASENA = 12345678;

  const { login } = useAuthContext();
  const navigate = useNavigate();
  const { state } = useLocation();
  const {setUserInfo} = useContext(DropdownsContext)

   function handleClick() {
    setTimeout(() => {
      login();
      navigate(state?.location?.pathname ?? "/");
    }, 2000);

   }

  const validate = Yup.object({
    email: Yup.string().email("Email inválido.").required("Campo obligatorio."),
    password: Yup.string()
      .min(8, "La contraseña debe contener al menos 8 caracteres.")
      .required("Contraseña requerida."),
  });
  return (
    <>
      <div>
        <h1>Hacemos de su salud y bienestar</h1>
        <h1>nuestra prioridad.</h1>
      </div>
      <div>
        <img src={img} alt="medica-imagen"></img>
      </div>
      
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validate}
        onSubmit={ async (values, { resetForm }) => {
          
          const {email,password} = values
          const data = {email,password}

            fetch('http://localhost:3080/auth/logIn',{
              method:'POST',
              mode:'cors',
              headers:{
                'Content-Type':'application/json'
              },
              body:JSON.stringify(data)
            })
            .then(resp => resp.json())
            .then(respJSON =>setUserInfo(respJSON))
          
        
          resetForm();
        }}
      >
        {(formik) => (
          <div>
            <h1>Iniciar Sesión para continuar</h1>
            <Form onSubmit={formik.handleSubmit}>
              <TextField placeholder="Email" name="email" value={formik.values.email} type="email" />

              <TextField
                placeholder="Contraseña"
                name="password"
                value={formik.values.password}
                type="password"
              />
              <button
               onClick={handleClick}
                type="submit"
                disabled={!formik.isValid}
              >
                Iniciar Sesión
              </button>
              <p>No tienes una cuenta?</p>
              <Link to="/signup">Registrarse</Link>
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
};
export default Login;
