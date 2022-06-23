import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Consultas from "./components/Consultas";
import ConsultasId from "./components/ConsultasId";
import ConsultaText from "./components/ConsultaText";
import CreditCardForm from "./components/CreditCardForms";
import Register from "./components/Register";
import PrivateRoute from "./components/router/PrivateRoute";
import PublicRoute from "./components/router/PublicRoute";
import {
  CONSULTAS,
  CONSULTASID,
  FARMACIA,
  HOME,
  LOGIN,
  LOGOUT,
  NOT_FOUND_PAGE,
  PROFESIONALES,
  PROFILE,
  CONSULTASTEXT,
  SIGNUP,
  PAGO,
} from "./config/routes/paths";
import { AuthContextProvider } from "./context/authContext";
import NavBar from "./layouts/NavBar";
import Farmacia from "./views/Farmacia";
import Home from "./views/Home";
import Login from "./views/Login";
import Logout from "./views/Logout";
import NotFoundPage from "./views/NotFoundPage";
import Profesionales from "./views/Profesionales";
import Profile from "./views/Profile";

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({ loggedIn: false });
  return (
    <AuthContextProvider value={{ user, setUser }}>
      <BrowserRouter>
        <NavBar />

         <Routes>
          <Route element={<PublicRoute />}>
            <Route path={LOGIN} element={<Login />}></Route>
            <Route path={SIGNUP} element={<Register />}></Route>
            <Route path={NOT_FOUND_PAGE} element={<NotFoundPage />}></Route>
          </Route>

          <Route element={<PrivateRoute />}>
            <Route path={HOME} element={<Home />}></Route>
            <Route path={FARMACIA} element={<Farmacia />}></Route>
            <Route path={PAGO} element={<CreditCardForm />}></Route>
            <Route path={PROFILE} element={<Profile />}></Route>
            <Route path={PROFESIONALES} element={<Profesionales />}></Route>
         
           <Route path={CONSULTAS} element={<Consultas />}>
            </Route>
            <Route path={CONSULTASID} element={<ConsultasId/>}></Route>
            <Route path={CONSULTASTEXT} element={<ConsultaText/>}></Route>

            <Route path={LOGOUT} element={<Logout />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
