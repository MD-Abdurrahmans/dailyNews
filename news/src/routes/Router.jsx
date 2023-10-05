
import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layouts/root/Root";
import Home from "../pages/home/Home";
import NewsDetails from "../pages/newDetails/NewsDetails";
import Login from "../pages/login/Login";
  
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
      element:<NewsDetails></NewsDetails> 
    },
    {
      path:'/login',
      element:<Login></Login> 
    },
   ]
 },
     

])



export default router