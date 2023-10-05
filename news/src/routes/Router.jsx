
import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layouts/root/Root";
import Home from "../pages/home/Home";
import NewsDetails from "../pages/newDetails/NewsDetails";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Private from "./Private";
  
const router =  createBrowserRouter([

 {
    path:'/',
   element:<Root></Root>,
   children:[
    {
      path:'/',
      element:<Home></Home> 
    },
    {
      path:'/newsDetails/:id',
      element:<Private><NewsDetails></NewsDetails> </Private>
    },
    {
      path:'/login',
      element:<Login></Login> 
    },
    {
      path:'/register',
      element:<Register></Register>
    },
   ]
 },
     

])



export default router