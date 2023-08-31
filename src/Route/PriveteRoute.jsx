import React, { useContext } from 'react';
import { AuthContact } from '../Component/Authprovider/Authprovider';
import Loading from '../Component/Loading/Loading';
import { Navigate } from "react-router-dom";
const PrivetRoute = (children) => {
     const {user,loading}=useContext(AuthContact);

      if(loading){
           return <Loading></Loading>
      } 

     if(user){
      return  children
     
      }

     return <Navigate to="/login" replace={true} />

}

export default PrivetRoute;