import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const SubCategories = () => {
  const {user} = useContext(AuthContext)
   const [ frozen , setFrozen] = useState([])
   const [donalduck , setDonaluck] =useState([])
   const [disney , setDisney] = useState([])

   // {sellerName ,sellerEmail,toyName,price,quantity,photo,subCategory,rating,description}
   useEffect(()=>{
      fetch("https://toy-marketplace-server-side-rho.vercel.app/addToy?subCategory=Frozen")
      .then(res => res.json())
      .then(data => {
        //  console.log(data);
         setFrozen(data)
      })
   } , [])
   
   useEffect(()=>{
      fetch("https://toy-marketplace-server-side-rho.vercel.app/addToy?subCategory=donald duck")
      .then(res => res.json())
      .then(data => {
        //  console.log(data);
         setDonaluck(data)
      })
   } , [])

   useEffect(()=>{
      fetch("https://toy-marketplace-server-side-rho.vercel.app/addToy?subCategory=Disney")
      .then(res => res.json())
      .then(data => {
        //  console.log(data);
         setDisney(data)
      })
   } , [])

const handleViewDetails =()=>{
    if(!user?.email){
      Swal.fire(
        
        "You have to log in first to view details"
        
      )
    }

}


   return (
      <Tabs>
    <TabList className="text-center text-2xl text-yellow-600 font-semibold">
      <Tab>Frozen</Tab>
     
      <Tab>Donald Duck</Tab>
      <Tab>Disney</Tab>
    </TabList>

    <TabPanel>
     <div className='grid lg:grid-cols-3 sm:grid-cols-1 lg:mt-6 gap-4 justify-items-center'>
     {
      frozen.map(froz=><div key={froz._id} className="card w-3/4 h-3/4 bg-base-100 p-5 shadow-2xl">
      <figure><img src={froz.photo} className='w-full h-full' alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">
          Name :{froz.toyName}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>Price :{froz.price} </p>
        <p>Rating :{froz.rating} </p>
        <div className="card-actions justify-end">
          <div >
          <Link
          
          to={`/viewDetails/${froz._id}`}><button onClick={handleViewDetails} className='btn bg-gradient-to-br from-yellow-500  to-rose-600 border-0 ps-8 pe-8'>View Details</button></Link>
          </div>
          
        </div>
      </div>
    </div>)
     }
     </div>
    </TabPanel>


    <TabPanel>
    <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-4 justify-items-center'>
     {
      donalduck.map(donal=><div key={donal._id} className="card w-3/4 h-3/4  bg-base-100 shadow-2xl">
      <figure><img src={donal.photo} alt="Shoes" className='w-full h-full' /></figure>
      <div className="card-body">
        <h2 className="card-title">
          Name :{donal.toyName}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>Price :{donal.price} </p>
        <p>Rating :{donal.rating} </p>
        <div className="card-actions justify-end">
          <div >
          <Link to={`/viewDetails/${donal._id}`}><button onClick={handleViewDetails} className='btn bg-gradient-to-br from-yellow-500  to-rose-600 border-0 ps-8 pe-8'>View Details</button></Link>
          </div>
          
        </div>
      </div>
    </div>)
     }
     </div>
    </TabPanel>


    <TabPanel>
    <div className='grid lg:grid-cols-3 sm:grid-cols-1 mt-14 gap-4 justify-items-center'>
     {
      disney.map(disne=><div key={disne._id} className="card  w-3/4 h-3/4 bg-base-100 shadow-2xl">
      <figure><img src={disne.photo} alt="Shoes" className='w-full h-full'/></figure>
      <div className="card-body">
        <h2 className="card-title">
          Name :{disne.toyName}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>Price :{disne.price} </p>
        <p>Rating :{disne.rating} </p>
        <div className="card-actions justify-end">
          <div >
         
          <Link to={`/viewDetails/${disne._id}`}><button onClick={handleViewDetails} className='btn bg-gradient-to-br from-yellow-500  to-rose-600 border-0 ps-8 pe-8'>View Details</button></Link>
          </div>
          
        </div>
      </div>
    </div>)
     }
     </div>
    </TabPanel>
  </Tabs>
   );
};

export default SubCategories;