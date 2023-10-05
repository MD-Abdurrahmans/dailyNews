import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Navbar from "../../components/header/Navbar";
import Marquee from "react-fast-marquee";
import LeftNav from "../../components/leftNave/LeftNav";
import RightNav from "../../components/rightNave/RightNav";
import { useEffect, useState } from "react";
import News from "../../components/news/News";

const Home = () => {

const [newses,setNews] = useState(null)
 

  useEffect(()=>{
    fetch('../../../public/data/news.json')
    .then(result => result.json()) 
    .then(data => setNews(data))
    .catch((error)=>{console.log(error)})
  }
  ,[]
  )
        


// console.log(newses)



    return (
        <div>
            <Header></Header>

{/* markdown que slider */}

  <div className="flex bg-slate-300 p-4">
  <button className="bg-[#D72050] text-white px-6 py-1  ">Latest</button>
     <Marquee pauseOnHover={true} >
     <Link>  I can be a React component, multiple React components, or just some text.</Link>
   </Marquee>
     <Marquee >
     <Link>  raj component, multiple React components, or just some text.</Link>
   </Marquee>
  </div>
            <Navbar></Navbar>


{/* main content */}



  
  <div className="grid grid-cols-1 md:grid-cols-4">


 <div className="border    ">
     <LeftNav></LeftNav>
 </div>

 <div className="border col-span-2">

     <h1>Dragon News Home</h1>
     <div className="grid grid-cols-1 gap-6">
     {
        newses?.map(news=> <News key={news.id} news={news} ></News> )
     }
     </div>
 </div>

 <div className="border col-span-1 ">

  <RightNav></RightNav>
 </div>



  </div>





        </div>
    );
};

export default Home;