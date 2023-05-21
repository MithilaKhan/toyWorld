import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css"
const Gallery = () => {
   useEffect(()=>{
      Aos.init({duration:2000});
   } ,[])
   return (
      <div className=' w-3/4  mx-auto'>
         <div className='pt-10  grid lg:grid-cols-3 sm:grid-cols-2 gap-4 justify-items-center'>
         {/* img 1 */}
         <div className="card card-compact h-80  w-full bg-base-100 shadow-xl" data-aos="fade-left">
  <figure className=" " ><img src="https://th.bing.com/th/id/OIP.L-gzsPA837jUCD0tvqfi2wAAAA?pid=ImgDet&w=340&h=500&rs=1" alt="Shoes" className='h-full w-full' /></figure>
  <div className="card-body">
    <h2 className="card-title">Donald Duck</h2>
      </div>
      </div>

         {/* img 2 */}
         <div className="card card-compact h-80  w-full bg-base-100 shadow-xl" data-aos="zoom-in">
  <figure className=" " ><img src="https://th.bing.com/th/id/OIP.vrzoVt_Bu8Db70iHi6xolAAAAA?pid=ImgDet&rs=1" alt="Shoes" className='h-full w-full' /></figure>
  <div className="card-body">
    <h2 className="card-title">Cinderella</h2>
      </div>
      </div>

         {/* img 3 */}
         <div className="card card-compact h-80  w-full bg-base-100 shadow-xl" data-aos="fade-right">
  <figure className=" " ><img src="https://th.bing.com/th/id/OIP.a-btGpMCNDXZua6usBpmLQAAAA?pid=ImgDet&rs=1" alt="Shoes" className='h-full w-full' /></figure>
  <div className="card-body">
    <h2 className="card-title">Rupangel</h2>
      </div>
      </div>
         {/* img 4 */}
         <div className="card card-compact h-80  w-full bg-base-100 shadow-xl" data-aos="fade-left">
  <figure className=" " ><img src="https://th.bing.com/th/id/R.a0fe5d55440bab9eaca973344396e22d?rik=EGvpcA6Aisqp1Q&riu=http%3a%2f%2fcdn.shopify.com%2fs%2ffiles%2f1%2f0802%2f7197%2fproducts%2fFigma_308_Elsa_from_Frozen-4_grande.jpg%3fv%3d1468315165&ehk=pvVkHfBeLqrj5o040SvfOlZpn%2fUUR7Q2CMTTXPKuMg8%3d&risl=&pid=ImgRaw&r=0" alt="Shoes" className='h-full w-full' /></figure>
  <div className="card-body">
    <h2 className="card-title">Anna</h2>
      </div>
      </div>
         {/* img 5 */}
         <div className="card card-compact h-80  w-full bg-base-100 shadow-xl" data-aos="zoom-in">
  <figure className=" " ><img src="https://th.bing.com/th/id/OIP.ts063Y3sx8fy4cgDE1WVYAHaJ4?pid=ImgDet&rs=1" alt="Shoes" className='h-full w-full' /></figure>
  <div className="card-body">
    <h2 className="card-title">Snow White</h2>
      </div>
      </div>
         {/* img 6 */}
         <div className="card card-compact h-80  w-full bg-base-100 shadow-xl" data-aos="fade-right">
  <figure className=" " ><img src="https://th.bing.com/th/id/OIP.8CQMUXpbVFau2h9PKR_L-QHaHa?pid=ImgDet&rs=1" alt="Shoes" className='h-full w-full' /></figure>
  <div className="card-body">
    <h2 className="card-title">Moana</h2>
      </div>
      </div>
       
        
         
         
        
      </div>
      </div>
   );
};

export default Gallery;