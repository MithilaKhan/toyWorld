import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Navbar = () => {

  const{user , logOut} =useContext(AuthContext)
   const [showName ,setShowName] = useState(false)


   //  signOut 
const handleLogOut =() =>{
  logOut()
.then(() => {
  })
.catch((error) => {
  
});
   }
   const navItems = <>
   <li><Link to="/" className='text-xl'>Home</Link></li>
   <li><Link to="/allToy" className='text-xl'>All Toys</Link></li>
   {
    user&&<li><Link to="/myToys" className='text-xl'>My Toys</Link></li>
   }
   {
    user&&<li><Link to="/addToy" className='text-xl'>Add A Toy</Link></li>
   }
   <li><Link to="blogs" className='text-xl'>Blogs</Link></li>

   <li><Link className=" flex items-center gap-6"
              onMouseEnter={() => setShowName(true)} // Show name on hover
              onMouseLeave={() => setShowName(false)} // Hide name on mouse leave
            >
              <div className=" w-full relative">
                {user && (
                  <img className=" w-12 rounded-full" src={user.photoURL} alt="" />
                )}
                {showName && user && ( // Only show name when hovering over picture and user exists
                  <div className="absolute top-0 left-0 bg-white rounded-md py-1 px-2 shadow-md">
                    {user.displayName}
                  </div>
                )}
              </div>
              {user ? (
                <div>
                  <Link onClick={handleLogOut} variant="secondary">
                    Logout
                  </Link>
                </div>
              ) : (
                <Link to="/login">
                  Login
                </Link>
              )}
            </Link>
            </li>
   </>
   return (
      <div className="navbar  bg-rose-100 rounded-lg p-5 ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100  rounded-box w-52">
      {navItems}
      </ul>
    </div>
    <div className='flex'>
    <div className="h-16  w-16 rounded-full avatar">
    <img src="https://th.bing.com/th/id/R.732c933c2d46acd27a1d41f18b8a00f9?rik=X8eMBAEYZ%2fVRHQ&pid=ImgRaw&r=0" className='rounded-full ' />
  </div>
    <a className="text-4xl/loose normal-case italic ps-2 hover:not-italic text-4xl font-bold bg-gradient-to-br from-yellow-500  to-rose-600 inline-block text-transparent bg-clip-text">ToyWorld</a>
    </div>
   
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-rose-600 font-semibold ">
     {navItems}
    </ul>
  </div>
  <div className="navbar-end">
    <Link to="login"><button className='btn bg-gradient-to-br from-yellow-500  to-rose-600 border-0 ps-8 pe-8'>Login</button></Link>
  </div>
</div>
   );
};

export default Navbar;