import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Register = () => {
  const {register , updateProfilePhotoAndName ,user } = useContext(AuthContext)
  const [error , setError] = useState("")
   const handleRegister = event => {
    event.preventDefault()
    const form = event.target
    const email = form.email.value 
    const name = form.name.value 
    const photo = form.photo.value
    const password = form.password.value 
    console.log(email ,photo , name ,password)

    if(password.length < 6){
      setError("password should be 6 character")
      return;
    } 
// register auth 
    register(email , password)
    .then(result =>{
      const loggedUser = result.user
      console.log(loggedUser)
      updatePhotoName(loggedUser,name,photo)
      form.reset()
    })
    .catch((error) =>{
      const errorMessage = error.message;
      console.log(errorMessage)
      setError(errorMessage)
    })
    // update profile photo url and name 
    const updatePhotoName = (currentUser, name, photo) =>{
      updateProfilePhotoAndName(currentUser,name ,photo)
      .then(result =>{
        const loggedUser = result
        // console.log(loggedUser)
       
      })
      .catch((error) =>{
        console.log(error.message)
        setError(error.message)
      })

    }
   }
   return (
      <div className="hero lg:mt-10 lg:mb-10 ">
      <div className="hero-content  flex-col lg:flex-row">
        <div className="text-center w-1/2 h-3/4 lg:text-left">
         
          <img src="https://img.freepik.com/free-vector/my-password-concept-illustration_114360-3864.jpg?w=740&t=st=1684404299~exp=1684404899~hmac=8926aa0c0e9a9da1076afe2933280a4a8785cbca62e33a699b7165459ee660d9" alt="" />
        </div>
        <div className="card  lg:ms-16 w-1/2 max-w-sm shadow-2xl bg-base-100">
          <div className="card-body ">
          <form onSubmit={handleRegister} className="card-body w-full  ">
      <h1 className="text-2xl font-bold bg-gradient-to-br from-rose-600  to-yellow-600 inline-block text-transparent bg-clip-text">Create An Account</h1>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input type="text" name='name' placeholder=" Name" className="input input-bordered" required/>
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="url" name='photo' placeholder="Photo URL" className="input input-bordered" required/>
        </div>

       
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
          </div>
       
        <div className="form-control mt-6">
          <button className="btn  bg-rose-600 border-0 hover:bg-yellow-600 ">Create an Account</button>
        </div>
        <p className='text-red-500'>{error}</p>
        <p>Already have an account ? <Link to="/login" className='text-rose-400 font-bold'>Login</Link></p>
      </form>
          </div>
         
        </div>
      </div>
      
    </div>
   );
};

export default Register;