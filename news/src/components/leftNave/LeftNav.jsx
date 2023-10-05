import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {

    const [categories,setCategories] = useState(null)

    useEffect(()=>{

        fetch('../../../public/data/categories.json')
        .then(result => result.json())
        .then(data => setCategories(data))
        .catch((error)=>{console.log(error)})

    },[])


    return (
        <div>
             <h1 className="font-bold">All Caterogy  </h1>
          
             <div className="space-y-4 px-16 mt-6">
               
             <h2 className="bg-slate-300 p-2 font-bold">National News</h2>
            
     
 
 {

 categories?.map(cat=> <Link className="block"  key={cat.id}>{cat.name}</Link>)
   
 }

     



             </div>
        </div>
    );
};

export default LeftNav;