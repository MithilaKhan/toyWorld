import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle } from "react-icons/fa";
const Login = () => {
   const handleLogin = event =>{

   }
   return (
      <div className="hero  ">
  <div className="hero-content  flex-col lg:flex-row">
    <div className="text-center w-1/2 h-3/4 lg:text-left">
     
      <img src="https://img.freepik.com/free-vector/my-password-concept-illustration_114360-3864.jpg?w=740&t=st=1684404299~exp=1684404899~hmac=8926aa0c0e9a9da1076afe2933280a4a8785cbca62e33a699b7165459ee660d9" alt="" />
    </div>
    <div className="card  lg:ms-16 w-1/2 max-w-sm shadow-2xl bg-base-100">
      <div className="card-body w-full">
      
      <form onSubmit={handleLogin} >
              <h1 className="text-3xl/10 font-bold bg-gradient-to-br from-yellow-600  to-rose-600 inline-block text-transparent bg-clip-text">
                Login now!
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn  bg-rose-500 border-0 hover:bg-yellow-600 ">
                  Login
                </button>
              </div>
              {/* <p className="text-red-500">{error}</p> */}
              <p>
                Don't have an account ?
                <Link to="register" className="text-yellow-600 font-bold">
                  Create an Account
                </Link>
              </p>
            </form>
      </div>
      <div className="text-center mb-12">
        <button
         //  onClick={handleGoogleSignIn}
          className="btn bg-gradient-to-br from-pink-600  to-purple-600 border-0 mb-5"
        >
          <FaGoogle />
          <span className="text-black ps-3 font-bold">
            Continue With google
          </span>
        </button>
        <br />
        <button
         //  onClick={handleGithubSignIn}
          className="btn bg-gradient-to-br from-purple-600  to-pink-600 border-0"
        >
          
          <FaGithub />
          <span className="text-black ps-3 font-bold">
            
            Continue With Github
          </span>
        </button>
      </div>
    </div>
  </div>
  
</div>
   );
};

export default Login;