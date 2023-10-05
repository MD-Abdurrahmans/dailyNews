import { Navigate, useLocation } from "react-router-dom";
import AllContext from "../components/allContext/AllContext";

const Private = ({children}) => {

    const {user,loading }  = AllContext();
    const  loc = useLocation();
    // console.log(loc)

 if(loading){
    return  <div className= "h-[100vh]  flex justify-center items-center  " >
         <span className="loading loading-infinity w-[180px] h-[180px] "></span>
    </div>
 }

    if(user){

        return  children;
    }

    return <Navigate    to='/login'  state={loc.pathname} ></Navigate>
    
};

export default Private;
