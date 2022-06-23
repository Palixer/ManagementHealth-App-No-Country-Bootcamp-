import { createContext, useCallback, useContext, useMemo, useState } from "react";
import PropTypes from 'prop-types';

const MY_AUTH_APP = "MY_AUTH_APP_1";

export const AuthContext = createContext();

export const DropdownsContext = createContext();
export function AuthContextProvider({ children }) {

  const [itemCart, setCart] = useState([])
  const [userInfo, setUserInfo] = useState([])
  const [stateZona, setZona] = useState('Seleccione')
  const [stateProfesion, setStateProfesion] = useState('Seleccione')
  const [stateEspecialidad, setStateEspecialidad] = useState('Seleccione')

  const [isAuthenticated, setIsAuthenticated] = useState(
    window.localStorage.getItem(MY_AUTH_APP) ?? false
  );

  const login = useCallback(function () {
    window.localStorage.setItem(MY_AUTH_APP, true);
    setIsAuthenticated(true);
  }, []);
  
  const logout = useCallback(function () {
    localStorage.removeItem(MY_AUTH_APP);
    setIsAuthenticated(false);
  }, []);

  const value = useMemo(
    ()=>({
        login,
        logout,
        isAuthenticated
    }),
    [login, logout, isAuthenticated]
  );

  return <AuthContext.Provider value={value}><DropdownsContext.Provider value={{stateZona,setZona,stateProfesion,setStateProfesion,stateEspecialidad,setStateEspecialidad,itemCart,setCart,setUserInfo,userInfo}}>{children}</DropdownsContext.Provider></AuthContext.Provider>
}

AuthContextProvider.propTypes = {
    children:PropTypes.object
};

export function useAuthContext(){
  return useContext(AuthContext);
}
