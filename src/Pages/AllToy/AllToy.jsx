import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const AllToy = () => {
  //  const allToys = useLoaderData()
   const [searchText, setSearchText] = useState("");
   const [toys , setToys] = useState([])
   // const toyInfo = {sellerName ,sellerEmail,toyName,price,quantity,photo,subCategory,rating,description}
  //  console.log(allToys);

  useEffect(()=>{
    fetch("http://localhost:5000/addToy")
    .then(res => res.json())
    .then(data =>{
      console.log(data);
      setToys(data)
    })
  } ,[])

   const handleSearch = () =>{
   fetch(`http://localhost:5000/searchToy/${searchText}`)
   .then(res => res.json())
   .then(data =>setToys(data))
   }
   return (

      <div className=''>
         <div className='text-center p-16'>
            <h1 className='text-4xl font-bold text-rose-500 '>All Toy</h1>
            <div className="form-control lg:ms-96 lg:ps-24 mt-8 ">
  <div className="input-group ">
  <input
   onChange={(e) => setSearchText(e.target.value)}
   type="text" placeholder="search" className="input w-full max-w-xs" />
    <button onClick={handleSearch} className="btn btn-square">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div>
</div>
         </div>
 <div className="overflow-x-auto  p-20  pt-0">
  <table className="table  w-full">
    {/* head */}
    <thead>
      <tr>
        <th>Serial No.</th>
        <th>Seller Name</th>
        <th>Toy Name</th>
        <th>Sub Category</th>
        <th>Price</th>
        <th>Available Quantity</th>
        <th></th>
        
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
      toys.map((toy ,index) => <tr key={toy._id}>
         <td>{index + 1}</td>
         <td>{toy.sellerName}</td>
         <td>{toy.toyName}</td>
         <td>{toy.subCategory}</td>
         <td>{toy.price}</td>
         <td>{toy.quantity}</td>
         <td><button className='btn bg-gradient-to-br from-yellow-500  to-rose-600 border-0 ps-8 pe-8'>View Details</button></td>
       </tr>)
     }
     
          </tbody>
  </table>
</div>
      </div>
     
   );
};

export default AllToy;