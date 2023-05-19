import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ViewDetails = () => {
   const { id } = useParams();
   const [details , setDetails] = useState([])
   // const toyInfo = {sellerName ,sellerEmail,toyName,price,quantity,photo,subCategory,rating,description}
   console.log(details);
   useEffect(()=>{
    fetch(`http://localhost:5000/allToy/${id}`)
    .then(res => res.json())
    .then(data=>{
      console.log(data);
      setDetails(data)
    })
   } ,[])
   return (
      <div className='align-middle  lg:m-40'>
<div className="card card-side my-auto bg-base-100  shadow-2xl border-4 border-rose-300 ">
  <figure><img src={details.photo} alt="Movie"/></figure>
  <div className="card-body ">
    <h2 className="card-title text-2xl font-bold text-yellow-600">TOY NAME : {details.toyName}</h2>
    <p className='text-xl font-semibold text-rose-500'>SELLER NAME : {details.sellerName}</p>
    <p className='text-xl font-semibold text-rose-500'> SELLER Email : {details.sellerEmail}</p>
    <p className='text-xl font-semibold text-rose-500'> PRICE : {details.price}$</p>
    <p className='text-xl font-semibold text-rose-500'>QUANTITY: {details.quantity}</p>
    <p className='text-xl font-semibold text-rose-500'>RATING: {details.rating}</p>
    <p className='text-xl font-semibold text-rose-500'>DESCRIPTION : {details.description}</p>
   
  </div>
</div>
      </div>
      
   );
};

export default ViewDetails;