import React from 'react';
import { FaStar } from 'react-icons/fa';

const Reviews = () => {
   return (
      <div>
         <div className="chat chat-start b">
   <div className="chat-bubble chat-bubble-error">
    {/* <div className='grid grid-cols-2 '> */}
  <div className="avatar pt-6 flex">
  <div className=" ms-14 w-24 h-24 ">
    <img src="https://th.bing.com/th/id/OIP.XSZAFm-5JI7nriDLwZqRQQHaE7?pid=ImgDet&rs=1" className=' rounded-full' />
   </div>
   <div className='pt-8 ps-5'>
 <h1>Mr. Mahfuj Khan</h1>
   <p className='text-yellow-400 flex'>
      <FaStar/>
      <FaStar/>
      <FaStar/>
      <FaStar/>
      <FaStar/>
   </p>
  </div>
  </div>

      {/* </div>      */}
 <div className='text-xl p-3'>
           The customer service at this Toy shop is exceptional . <br /> They went above and beyond to help me  find the perfect toy .
            </div>
  
   </div>
</div>

<div className="chat chat-end">
  <div className="chat-bubble chat-bubble-warning">
  <div className="avatar pt-6 flex">
  <div className=" ms-14 w-24 h-24 ">
    <img src="https://th.bing.com/th/id/OIP.XSZAFm-5JI7nriDLwZqRQQHaE7?pid=ImgDet&rs=1" className=' rounded-full' />
   </div>
   <div className='pt-8 ps-5'>
 <h1>Mr. Mahfuj Khan</h1>
   <p className='text-yellow-700 flex'>
      <FaStar/>
      <FaStar/>
      <FaStar/>
      <FaStar/>
      <FaStar/>
   </p>
  </div>
  </div>

      {/* </div>      */}
 <div className='text-xl p-3'>
           The customer service at this Toy shop is exceptional . <br /> They went above and beyond to help me  find the perfect toy .
            </div>
  
  </div>
</div>
      </div>
   );
};

export default Reviews;