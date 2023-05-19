import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider} from "react-router-dom";
import './index.css'
import router from './Routes/Routes';
import AuthProvider from './AuthProvider/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='m-3 mt-0 bg-rose-50 '>
 <React.StrictMode>
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
    
  </React.StrictMode>,
  </div>
 
)
