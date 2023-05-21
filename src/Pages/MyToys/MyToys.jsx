import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import UseTitle from '../../useTitle';

const MyToys = () => {
   
   const {user} = useContext(AuthContext)
   const [toys, setToys] = useState([])

   UseTitle("My Toy")

   useEffect(()=>{
      fetch(`https://toy-marketplace-server-side-rho.vercel.app/myToys?sellerEmail=${user?.email}`)
      .then(res =>res.json())
      .then(data =>{
         console.log(data);
         setToys(data)
      })
   } ,[user])

   const handleDelete =(id)=>{
      Swal.fire({
         title: 'Are you sure?',
         text: "You won't be able to revert this!",
         icon: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Yes, delete it!'
       }).then((result) => {
         if (result.isConfirmed) {
            fetch(`https://toy-marketplace-server-side-rho.vercel.app/allToy/${id}` ,{
         method:"DELETE"
       })
       .then(res => res.json())
       .then(data => {console.log(data)
         if(data.deletedCount> 0){
            Swal.fire(
               'Deleted!',
               'Your file has been deleted.',
               'success'
             )
             const remaining =toys.filter(toy => toy._id !== id)
             setToys(remaining)
         }})
          
         }
       })
       
   }

const handleAscending =()=>{
   fetch(`https://toy-marketplace-server-side-rho.vercel.app/toys/${user.email}/lowPrice`)
   .then(res => res.json())
   .then(data =>{
      console.log(data);
      setToys(data)
   })
}

const handleDeAscending=()=>{
   fetch(`https://toy-marketplace-server-side-rho.vercel.app/toys/${user.email}/highPrice`)
   .then(res => res.json())
   .then(data =>{
      console.log(data);
      setToys(data)
   })
}


   return (
      <div>
         <div className='lg:ms-96 m-16 mb-0'>
         <button onClick={handleAscending} className='btn bg-gradient-to-br from-yellow-500  to-rose-600 border-0 ps-8 pe-8 me-6 '>Low Price</button>
         <button onClick={handleDeAscending} className='btn bg-gradient-to-br from-yellow-500  to-rose-600 border-0 ps-8 pe-8'>High Price</button>
         </div>
         <div className="overflow-x-auto  p-20  pt-16">
  <table className="table  w-full">
    {/* head */}
    <thead>
      <tr>
        <th>Serial No.</th>
        <th>Seller Name</th>
        <th>Toy Name</th>
        <th>Sub Category</th>
        <th>Price</th>
        <th>Rating</th>
        <th>Available Quantity</th>
        <th>Description</th>
        <th></th>
        <th></th>
        
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
      toys.map((toy ,index) => <tr className='' key={toy._id}>
        
         <td>{index + 1}</td>
         <td>{toy.sellerName}</td>
         <td>{toy.toyName}</td>
         <td className='text-center'>{toy.subCategory}</td>
         <td className='text-center'>{toy.price}</td>
         <td className='text-center'>{toy.rating}</td>
         <td className='text-center'>{toy.quantity}</td>
         <td>{toy.description}</td>
         <td><Link to={`/updateToy/${toy._id}`}><button className='btn bg-gradient-to-br from-yellow-500  to-rose-600 border-0 ps-6 pe-6'>Edit</button></Link></td>
         <td><button onClick={()=>handleDelete(toy._id)} className='btn bg-gradient-to-br from-yellow-500  to-rose-600 border-0 ps-6 pe-6'>Delete</button></td>
       </tr>)
     }
     
          </tbody>
  </table>
</div>
      </div>
   );
};

export default MyToys;