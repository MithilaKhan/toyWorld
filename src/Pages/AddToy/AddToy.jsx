import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import UseTitle from '../../useTitle';
import Swal from 'sweetalert2';
const AddToy = () => {
   const {user} = useContext(AuthContext)

UseTitle("Add Toy")

const handleAddToy = event =>{
   event.preventDefault()
   const form = event.target;
   const sellerName =user?.displayName
   const sellerEmail =user?.email
   const toyName =form.toyName.value
   const price =form.price.value
   const quantity=form.quantity.value
   const photo =form.photo.value
   const subCategory =form.subCategory.value
   const rating=form.rating.value
   const description=form.description.value

   const toyInfo = {sellerName ,sellerEmail,toyName,price,quantity,photo,subCategory,rating,description}
   console.log(toyInfo);

   fetch("https://toy-marketplace-server-side-rho.vercel.app/addToy" , {
            method:"POST" ,
            headers:{
               "content-type":"application/json"
            },
            body:JSON.stringify(toyInfo)
   })
   .then(res => res.json())
   .then(data => {
      console.log(data);
      if(data.insertedId ){
        Swal.fire({
          title: 'ADD',
          text: 'Your Toy Added Successfully',
          icon: 'Success',
          confirmButtonText: 'OK'
        })
      }
   })
}

   return (
      <div className='mt-8'>
  <h1 className='text-4xl text-yellow-600  font-bold text-center p-6'>Add A Toy</h1>

<div className="hero min-h-screen bg-rose-50">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:ms-14 lg:text-left w-1/2">
         <img src="https://img.freepik.com/free-vector/launching-concept-illustration_114360-1731.jpg?w=740&t=st=1684688562~exp=1684689162~hmac=d96b14a51688fc6261f17fd370c7ede88f3a59388dbc87e264c6340b4d049182" alt="" />
        </div>
        <div className="card flex-shrink-0 w-1/2  shadow-2xl bg-rose-100">
          <form onSubmit={handleAddToy} className="card-body">
            <div className='grid grid-cols-2 gap-3'>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Seller Name</span>
              </label>
              <input type="text" name='sellerName' defaultValue={user?.displayName} placeholder="Seller Name" className="input input-bordered w-full" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Toy Name</span>
              </label>
              <input type="text" name='toyName' placeholder="Toy Name" className="input input-bordered"   required />
             </div>
            </div>


            <div className='grid grid-cols-2 gap-3'>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Seller Email</span>
              </label>
              <input type="email" name="sellerEmail" placeholder="Seller Email" defaultValue={user?.email}   className="input input-bordered"  required  />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input type="text" name='price' placeholder="Price" className="input input-bordered"   required/>
             </div>
            </div>


            <div className='grid grid-cols-2 gap-3'>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <input type="text" name='quantity' placeholder="Quantity" className="input input-bordered"   required/>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input type="url" name='photo' placeholder="Photo" className="input input-bordered"   required/>
             </div>
            </div>


            <div className='grid grid-cols-2 gap-3'>
            <div className='' >
              <label className="label">
                <span className="label-text">Sub Category</span>
              </label>
              <select className="select select-bordered w-full max-w-xs " name='subCategory' placeholder="sub-category" required>
               <option disabled selected>Frozen</option>
               <option>Disney</option>
               <option>donald duck</option>
               </select>
             
            </div>

             <div className="form-control">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input type="text" name='rating' placeholder="Rating" className="input input-bordered"   required/>
             </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input type="text" name='description' placeholder="Description" className="input input-bordered"   required/>
             </div>
            
            <div className="form-control mt-6">
              <button className="btn bg-gradient-to-br from-yellow-500  to-rose-600 border-0 ps-8 pe-8 font-bold">Post</button>
            </div>
          </form>
        </div>
      </div>
    </div>
      </div>
      
   );
};

export default AddToy;