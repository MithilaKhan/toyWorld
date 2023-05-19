import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Blogs from "../Pages/Blogs/Blogs";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddToy from "../Pages/AddToy/AddToy";
import AllToy from "../Pages/AllToy/AllToy";


const router = createBrowserRouter([
   {
     path: "/",
     element: <Main />,
     errorElement: <ErrorPage />,
     children: [
       {
         path: "/",
         element: <Home />,
       },
       
       {
        path:"blogs" ,
        element: <Blogs/>
       },
       {
        path:"/login" ,
        element:<Login/>
       } ,
       {
        path:"/register" ,
       element:<Register/>
       },
       {
        path: "/addToy" ,
        element:<AddToy/>
       },
       {
        path:"/allToy" ,
        element:<AllToy/> 
        
       }
     ],
   },
 ]);
 export default router