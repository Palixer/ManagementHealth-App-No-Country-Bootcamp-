import React from 'react'
import { PROFILE } from '../../config/routes/paths';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import {useAuthContext} from '../../context/authContext';


const PublicRoute = () => {
    const {isAuthenticated} = useAuthContext();
    const location = useLocation();

    if(isAuthenticated){
        return <Navigate to={PROFILE} state={{location}}/>;
    }
  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default PublicRoute