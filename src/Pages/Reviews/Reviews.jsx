import React, { useEffect } from 'react';
import { FaStar, FaStarHalf } from 'react-icons/fa';
import Aos from 'aos';
import "aos/dist/aos.css"
const Reviews = () => {

   useEffect(()=>{
      Aos.init({duration:2000});
   } ,[])

   return (
      <div className='mt-20 grid lg:grid-cols-1 sm:grid-cols-1'>
         <div className="chat chat-start b   h-1/2" >
   <div className="chat-bubble chat-bubble-error" data-aos="fade-left">
    {/* <div className='grid grid-cols-2 '> */}
  <div className="avatar pt-6 flex">
  <div className=" ms-14 w-24 h-24 ">
    <img src="https://th.bing.com/th/id/OIP.XSZAFm-5JI7nriDLwZqRQQHaE7?pid=ImgDet&rs=1" className=' rounded-full' />
   </div>
   <div className='pt-8 ps-5'>
 <h1>Mr. Mahfuj Khan </h1>
   <p className='text-yellow-400 flex'>
      <FaStar/>
      <FaStar/>
      <FaStar/>
      <FaStar/>
     <FaStarHalf/>
   </p>
  </div>
  </div>

      {/* </div>      */}
 <div className='text-xl pb-6'>
           The customer service at this Toy shop is exceptional . <br /> They went above and beyond to help me  find the perfect toy .
            </div>
  
   </div>
</div>

<div className="chat chat-end">
  <div className="chat-bubble chat-bubble-warning" data-aos="fade-right">
  <div className="avatar pt-6 flex">
  <div className=" ms-14 w-24 h-24 ">
    <img src="https://th.bing.com/th/id/OIP.cclxxBMEDhrujI5I44kYPAHaFj?pid=ImgDet&w=700&h=525&rs=1" className=' rounded-full' />
   </div>
   <div className='pt-8 ps-5'>
 <h1> mrs.Afsana Chowdury</h1>
   <p className='text-rose-700 flex'>
      <FaStar/>
      <FaStar/>
      <FaStar/>
      <FaStar/>
      <FaStar/>
   </p>
  </div>
  </div>

      {/* </div>      */}
 <div className='text-xl pb-6'>
           The customer service at this Toy shop is exceptional . <br /> They went above and beyond to help me  find the perfect toy .
            </div>
  
  </div>
</div>
      </div>
   );
};

export default Reviews;