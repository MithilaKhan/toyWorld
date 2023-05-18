import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
   const navItems = <>
   <li><Link to="/" className='text-xl'>Home</Link></li>
   <li><Link className='text-xl'>All Toys</Link></li>
    <li><Link className='text-xl'>My Toys</Link></li>
   <li><Link className='text-xl'>Add A Toy</Link></li>
   <li><Link to="blogs" className='text-xl'>Blogs</Link></li>
   </>
   return (
      <div className="navbar bg-base-100 bg-rose-50 rounded-lg p-5 ">
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