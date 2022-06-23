import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
// import GoogleLoginBtn from "./GoogleLoginBtn";
import TextField from "../components/TextField";

const Signup = () => {


  const validate = Yup.object({
    firstName: Yup.string()
      .matches(
        /^[a-z ,.'-]+$/i,
        "El nombre no puede contener números ni símbolos."
      )
      .max(20, "El nombre excede la cantidad de caracteres.")
      .min(2, "El nombre es demasiado corto.")
      .required("Campo obligatorio."),
    lastName: Yup.string()
      .matches(
        /^[a-z ,.'-]+$/i,
        "El apellido no puede contener números ni símbolos."
      )
      .max(20, "El apellido excede la cantidad de caracteres.")
      .min(2, "El apellido es demasiado corto.")
      .required("Campo obligatorio."),
    email: Yup.string().email("Email inválido.").required("Campo obligatorio."),
    password: Yup.string()
      .min(8, "La contraseña debe contener al menos 8 caracteres.")
      .required("Contraseña requerida."),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "La contraseña no coincide.")
      .required("Campo obligatorio."),
  });

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validate}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        resetForm();
      }}
    >
      {(formik) => (
        <div>
          <h1>Crear Cuenta</h1>
          <Form>
            <TextField placeholder="Nombre" name="firstName" type="text" />
            <TextField placeholder="Apellido" name="lastName" type="text" />
            <TextField placeholder="Email" name="email" type="email" />
            <TextField
              placeholder="Contraseña"
              name="password"
              type="password"
            />
            <TextField
              placeholder="Confirmar Contraseña"
              name="confirmPassword"
              type="password"
            />
            <button 
            type="submit" 
            disabled={!formik.isValid}>
              Registrarse
            </button>
            <p>o</p>
            <span>Iniciar Sesión con Google</span>
            <div>{/* <GoogleLoginBtn /> */}</div>
            <p>Ya tienes una cuenta?</p> <Link to="/login">Iniciar Sesión</Link>
          </Form>
        </div>
      )}
    </Formik>
  );
};
export default Signup;
