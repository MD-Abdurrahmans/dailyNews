import { FaShareAlt,FaRegBookmark,FaStar,FaStarHalfAlt,FaEye } from "react-icons/fa";
import Rating from'react-rating';
import { Link } from "react-router-dom";
const News = ({news}) => {

    const {image_url,thumbnail_url,title,_id,author,details,rating,total_view
    } = news || {};
// console.log('y',author.name)
    return (
        <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
{/* author info */}
<div className="flex items-center justify-between bg-slate-200 p-6">
   
   <div className="flex "> 
    <div className="mr-4">
    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={author.img} />
        </div>
      </label>
    </div>

    <div>
    <h1>{author.name}</h1>
      <h1>{author.published_date}</h1>
    </div>
   </div>
  
  <div className="flex">
 
 <FaRegBookmark className="text-2xl mr-2"/>
 <FaShareAlt className="text-2xl"/>

  </div>
    </div>


{/* image and description */}
  <div className="relative m-0 p-4 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">

     <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
     {title}
    </h4>
    <img
      src={image_url}
    />
  </div>


  <div className="p-6">
  
    <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">

        {details.length>500?<>{details.slice(0,500) } <Link 
        to={`/newsDetails/${_id}`}
        className="text-blue-600" > Read more</Link></>  : details }
    </p>
  </div>



  <div className="flex items-center justify-between p-6">
   
 <div>
    <h1>
    <Rating
      initialRating={rating.number}
  emptySymbol={<FaStarHalfAlt className="text-[#FF8C47]" />}
  fullSymbol={<FaStar className="text-[#FF8C47]"/>}
/>
    </h1>
 </div>

<div className="flex items-center ">
    <FaEye className="mr-2"/> <p>{total_view}</p>
</div>
  </div>


</div>
    );
};

export default News;
