import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = () => {
   const {user , loading} =useContext(AuthContext)
   const location = useLocation();
   if(user){
      return children ;
   }

   if(loading){
      return <progress className="progress w-56"></progress> ;
   }
   return<Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRouter;