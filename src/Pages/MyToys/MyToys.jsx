import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyToys = () => {
   
   const {user} = useContext(AuthContext)
   const [toys, setToys] = useState([])

   useEffect(()=>{
      fetch(`http://localhost:5000/myToys?sellerEmail=${user?.email}`)
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
            fetch(`http://localhost:5000/allToy/${id}` ,{
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
   return (
      <div>
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