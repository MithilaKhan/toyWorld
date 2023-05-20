import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const SubCategories = () => {
   const [ frozen , setFrozen] = useState([])
   const [donalduck , setDonaluck] =useState([])
   const [disney , setDisney] = useState([])

   // {sellerName ,sellerEmail,toyName,price,quantity,photo,subCategory,rating,description}
   useEffect(()=>{
      fetch("http://localhost:5000/addToy?subCategory=Frozen")
      .then(res => res.json())
      .then(data => {
         console.log(data);
         setFrozen(data)
      })
   })
   
   useEffect(()=>{
      fetch("http://localhost:5000/addToy?subCategory=donald duck")
      .then(res => res.json())
      .then(data => {
         console.log(data);
         setDonaluck(data)
      })
   })

   useEffect(()=>{
      fetch("http://localhost:5000/addToy?subCategory=Disney")
      .then(res => res.json())
      .then(data => {
         console.log(data);
         setDisney(data)
      })
   })
   return (
      <Tabs>
    <TabList>
      <Tab>Frozen</Tab>
      <Tab>Disney</Tab>
      <Tab>Donald Duck</Tab>
    </TabList>

    <TabPanel>
     <div className='grid lg:grid-cols-3 lg:mt-6 gap-4 justify-items-center'>
     {
      frozen.map(froz=><div className="card w-3/4 h-3/4 bg-base-100 p-5 shadow-xl">
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
          <Link to={`/viewDetails/${froz._id}`}><button className='btn bg-gradient-to-br from-yellow-500  to-rose-600 border-0 ps-8 pe-8'>View Details</button></Link>
          </div>
          
        </div>
      </div>
    </div>)
     }
     </div>
    </TabPanel>


    <TabPanel>
    <div className='grid lg:grid-cols-3 gap-4 justify-items-center'>
     {
      donalduck.map(donal=><div className="card w-96 bg-base-100 shadow-xl">
      <figure><img src={donal.photo} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">
          Name :{donal.toyName}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>Price :{donal.price} </p>
        <p>Rating :{donal.rating} </p>
        <div className="card-actions justify-end">
          <div >
          <Link to={`/viewDetails/${donal._id}`}><button className='btn bg-gradient-to-br from-yellow-500  to-rose-600 border-0 ps-8 pe-8'>View Details</button></Link>
          </div>
          
        </div>
      </div>
    </div>)
     }
     </div>
    </TabPanel>


    <TabPanel>
    <div className='grid lg:grid-cols-3 gap-4 justify-items-center'>
     {
      disney.map(disne=><div className="card w-96 bg-base-100 shadow-xl">
      <figure><img src={disne.photo} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">
          Name :{disne.toyName}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>Price :{disne.price} </p>
        <p>Rating :{disne.rating} </p>
        <div className="card-actions justify-end">
          <div >
          <Link to={`/viewDetails/${disne._id}`}><button className='btn bg-gradient-to-br from-yellow-500  to-rose-600 border-0 ps-8 pe-8'>View Details</button></Link>
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