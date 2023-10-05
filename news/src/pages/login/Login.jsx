import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/header/Navbar";

import AllContext from "../../components/allContext/AllContext";

const Login = () => {
const {userLogin} = AllContext()
const location = useLocation();
const navigateuse = useNavigate();
// console.log('login',location.state)
  const handlelogin =(e)=>{

    e.preventDefault();
 
    const email = e.target.email.value;
    const password = e.target.password.value;

    userLogin(email,password)
    .then(()=>{

       if(location.state){
        navigateuse(location.state)
       }

    })
    .catch((error)=>{console.log(error)})

    e.target.email.value = '';
    e.target.password.value = '';

  }

    return (


      <>

  
   <Navbar></Navbar>

      
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center mb-6 ">
            <h1 className="text-5xl font-bold ">Login your account</h1>
           
          </div>
          <div className="card 
          w-full  shadow-2xl bg-base-100">
            <form onSubmit={handlelogin} className="card-body w-full">

      

           <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email"  
                 
                name="email" placeholder="email" className="input input-bordered w-full"  />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>

      <p>Dont’t Have An Account ?  <Link className="text-pink-600 font-bold"  to='/register'>Register</Link>  </p>
    </form>

          </div>
        </div>
      </div>
      </>

    );
};

export default Login;