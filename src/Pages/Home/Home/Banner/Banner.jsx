import React from 'react';
import "./Banner.css"
const Banner = () => {
   return (
      <div className='bannerBgImg grid lg:grid-cols-2 sm:grid-cols-1'>

      {/* title */}
      <div className='grid text-5xl text-center lg:my-auto lg:gap-y-6'>
      <h1 className='   font-bold text-rose-500 pt-6 '> " WE </h1>
      <p className=' text-yellow-500    font-bold'>Distribute Toys to</p>
      <p className= "font-bold  text-rose-600">Your Home "</p> 
      </div>


      <div className='my-auto mx-auto  sm:mb-10'>
      <div className="carousel w-96">
  <div id="slide1" className="carousel-item relative w-96 h-80 bg-cover">
    <img src="https://th.bing.com/th/id/OIP.5_rFn3YpTRIRO_ibQMIctQHaFD?pid=ImgDet&rs=1" className="w-96 rounded-2xl h-full" />
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
      <a href="#slide3" className="btn btn-circle bg-rose-700 hover:bg-yellow-500">❮</a> 
      <a href="#slide2" className="btn btn-circle ms-5  bg-rose-700 hover:bg-yellow-500">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-96 h-80">
    <img src="https://i.ebayimg.com/images/g/BNcAAOSwNmddbS6j/s-l640.jpg" className="w-96 h-full rounded-2xl" />
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide1" className="btn btn-circle  bg-rose-700 hover:bg-yellow-500">❮</a> 
      <a href="#slide3" className="btn btn-circle ms-5  bg-rose-700 hover:bg-yellow-500">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-96 h-80">
    <img src="https://th.bing.com/th/id/OIP.Onk518gi43nZBL8rF2OrFAHaHa?pid=ImgDet&rs=1" className="w-96 h-full rounded-2xl" />
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide2" className="btn btn-circle  bg-rose-700 hover:bg-yellow-500">❮</a> 
      <a href="#slide1" className="btn btn-circle ms-5  bg-rose-700 hover:bg-yellow-500">❯</a>
    </div>
  </div> 
 
</div>
      </div>
   </div>
   );
};

export default Banner;