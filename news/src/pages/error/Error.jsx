import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="min-h-screen grid place-items-center ">
             <h1 className="text-center text-red-600 font-bold">page Not found</h1>
           <button className="btn bg-red-700 text-white "><Link to='/'>Go Home</Link></button>
        </div>
    );
};

export default Error;