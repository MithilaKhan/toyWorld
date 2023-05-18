import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider} from "react-router-dom";
import './index.css'
import router from './Routes/Routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='m-3 mt-0'>
 <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  </div>
 
)
