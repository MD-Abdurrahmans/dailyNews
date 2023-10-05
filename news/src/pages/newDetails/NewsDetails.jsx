import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import RightNav from "../../components/rightNave/RightNav";
import { FaArrowLeft } from "react-icons/fa";
import Navbar from "../../components/header/Navbar";

const NewsDetails = () => {

const [newsDetails,setNewsD] = useState(null)

    const detailsId = useParams();
  
    useEffect(()=>{
        fetch('/news.json')
        .then(result => result.json()) 
        .then(data => setNewsD(data))
        .catch((error)=>{console.log(error)})
      }
      ,[]
      )


    const detailsNews =  newsDetails?.find(ndetails=> ndetails._id == detailsId.id)

// console.log(detailsNews)



    return (
      
<>

<Navbar></Navbar>

<div className="grid grid-cols-3 gap-8">


    <div className="col-span-2">
    <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
{/* author info */}


{/* image and description */}
  <div className="relative m-0 p-4 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">

     <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">

    </h4>
    <img
      src={detailsNews?.image_url}
    />
  </div>


  <div className="p-6">
  
    <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">

    {detailsNews?.details}
    </p>

    <p > <Link className="btn bg-[#D72050] mt-6 text-white px-6 py-1  " to='/'><FaArrowLeft/> All news in this category</Link> </p>
  </div>






</div>
    </div>

     <div>
        <RightNav></RightNav>
     </div>
</div>
</>
    );
};

export default NewsDetails;