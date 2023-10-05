import { Navigate, useLocation } from "react-router-dom";
import AllContext from "../components/allContext/AllContext";

const Private = ({children}) => {

    const {user}  = AllContext();
    const  loc = useLocation();
    // console.log(loc)

    if(user){

        return  children;
    }

    return <Navigate    to='/login'  state={loc.pathname} ></Navigate>
    
};

export default Private;
