import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Blogs from "../Pages/Blogs/Blogs";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddToy from "../Pages/AddToy/AddToy";
import AllToy from "../Pages/AllToy/AllToy";
import ViewDetails from "../Shared/VIewDetails/ViewDetails";
import MyToys from "../Pages/MyToys/MyToys";
import Update from "../Pages/MyToys/Update";
import PrivateRouter from "./PrivateRouter";


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
        element:<PrivateRouter><AddToy/></PrivateRouter>
       },
       {
        path:"/allToy" ,
        element:<AllToy/> 
        
       },
       {
        path:"viewDetails/:id" ,
        element:<PrivateRouter><ViewDetails/></PrivateRouter> 
        
       },
       {
        path:"/myToys" ,
        element:<PrivateRouter><MyToys/></PrivateRouter> ,
        
       },
       {
        path:"/updateToy/:id" ,
        element:<Update/> ,
        loader:({params})=>fetch(`https://toy-marketplace-server-side-rho.vercel.app/allToy/${params.id}`)
       }
     ],
   },
 ]);
 export default router