import React from 'react';

const Gallery = () => {
   return (
      <div className='pt-6 grid lg:grid-cols-3 sm:grid-cols-2 gap-4 justify-items-center'>
         {/* img 1 */}
         <div className=" w-full  ">
         <img src="https://th.bing.com/th/id/OIP.mz6E6WGV-nJ2TyD8nbW5gwHaHa?pid=ImgDet&rs=1" alt="Shoes" className='h-72 w-full rounded-xl'/>
            </div>
         <div className=" w-full  ">
         <img src="https://th.bing.com/th/id/OIP.2AuOFEtzw-Tdgo9LW-MOJwHaIj?pid=ImgDet&rs=1" alt="Shoes" className='h-72 w-full rounded-xl'/>
            </div>
         <div className=" w-full  ">
         <img src="https://th.bing.com/th/id/OIP.T-RCQaSs9rFXd1N7DG9YrQAAAA?pid=ImgDet&rs=1" alt="Shoes" className='h-72 w-full rounded-xl'/>
            </div>
         <div className=" w-full  ">
         <img src="https://th.bing.com/th/id/OIP.MpMMaPR-MWik-ZfaHjrtiQHaGa?pid=ImgDet&rs=1" alt="Shoes" className='h-72 w-full rounded-xl'/>
            </div>
         <div className=" w-full  ">
         <img src="https://th.bing.com/th/id/OIP.QrzxJWc5bOUCQrZy70sDhQHaFj?pid=ImgDet&rs=1" alt="Shoes" className='h-72 w-full rounded-xl'/>
            </div>
         <div className=" w-full  ">
         <img src="https://th.bing.com/th/id/OIP.PWsaW4XHcxf6VwsE7ht0yQHaGl?pid=ImgDet&rs=1" alt="Shoes" className='h-72 w-full rounded-xl'/>
            </div>
        
      </div>
   );
};

export default Gallery;