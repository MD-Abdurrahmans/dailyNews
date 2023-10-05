
import { FaGoogle,FaGithub,FaFacebookF,FaTwitter,FaInstagram } from "react-icons/fa";

import image1 from'./../../../public/assets/qZone1.png'
import image2 from'./../../../public/assets/qZone2.png'
import image3 from'./../../../public/assets/qZone3.png'
import { useContext } from "react";
import { authContext } from "../contexProvider/ContexProvider";
import AllContext from "../allContext/AllContext";
const RightNav = () => {

  const {signInWithGoogle,signInWithGithub}   =  AllContext()


 const handleSocialLogin=(login)=>{

    login()
    .then((result)=>{console.log(result.user)})
    .catch((error)=>{console.log(error)})
  
 }


    return (
       
        <>
        <div className="space-y-8">


        <div className="w-full overflow-hidden  ">

<forms className="w-full p-4 ">
<h1 className="text-4xl px-4 ">Login With </h1>

<div className="hover:border rounded-lg hover:border-blue-600 text-blue-700 m-4">

<button onClick={()=>handleSocialLogin(signInWithGoogle)}  className="text-black btn w-full"> <FaGoogle/>Google</button>
</div>


<div className="hover:border rounded-lg border-opacity-0 border-blue-600  hover:border-blue-600 text-blue-700 m-4">

<button onClick={()=>handleSocialLogin(signInWithGithub)}  className="text-black btn   w-full"> <FaGithub/>Github</button>
</div>


</forms>
</div>


{/* find us on  */}


<form className="border mx-8">

<div className="flex items-center p-4 w-full">
   <div className="bg-slate-300 rounded-full p-2 mr-4" ><FaFacebookF/></div> 
    <h1>Facebook</h1>
</div>
<div className="flex items-center p-4 w-full">
   <div className="bg-slate-300 rounded-full p-2 mr-4" ><FaTwitter/></div> 
    <h1>Twitter</h1>
</div>
<div className="flex items-center p-4 w-full">
   <div className="bg-slate-300 rounded-full p-2 mr-4" ><FaInstagram/></div> 
    <h1>Instagram</h1>
</div>

</form>



{/* q zone  */}

<div className="bg-slate-300  ">
<h1 className="text-2xl  p-4 font-semibold">Q-Zone</h1>
 <div className="grid   grid-cols-1 place-items-center gap-6">

<div>
    <img src={image1} alt="" />
</div>
<div>
    <img src={image2} alt="" />
</div>
<div>
    <img src={image3} alt="" />
</div>
 </div>
</div>



        </div>
        
        </>

    );
};

export default RightNav;