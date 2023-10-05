import { useContext } from "react";
import { authContext } from "../contexProvider/ContexProvider";


const AllContext = () => {
    return useContext(authContext)
};

export default AllContext;
