import React from 'react';

const Footer = () => {
   return (
      <footer >
         <div className="footer  p-10 bg-rose-200 text-base-content" >
         <div>
      <a className="h-16  w-16 rounded-full avatar mx-auto">
    <img src="https://th.bing.com/th/id/R.732c933c2d46acd27a1d41f18b8a00f9?rik=X8eMBAEYZ%2fVRHQ&pid=ImgRaw&r=0" className='rounded-full ' />
  </a>
      <a className="text-4xl/loose mx-auto normal-case italic  hover:not-italic text-4xl font-bold bg-gradient-to-br from-yellow-500  to-rose-600 inline-block text-transparent bg-clip-text">ToyWorld</a>
        <p className='font-semibold text-center'>ToyWorld Industries Ltd.<br/>17/8A Uttora , Dhaka-1207<br/>Providing reliable tech since 1992</p>
      </div> 
      <div>
        <span className="footer-title">Services</span> 
        <a className="link link-hover">Branding</a> 
        <a className="link link-hover">Design</a> 
        <a className="link link-hover">Marketing</a> 
        <a className="link link-hover">Advertisement</a>
      </div> 
      <div>
        <span className="footer-title">Company</span> 
        <a className="link link-hover">About us</a> 
        <a className="link link-hover">Contact</a> 
        <a className="link link-hover">Jobs</a> 
        <a className="link link-hover">Press kit</a>
      </div> 
      <div>
        <span className="footer-title">Social Media</span> 
        <a className="link link-hover" href='https://www.youtube.com/index'>https://www.youtube.com/index</a> 
        <a className="link link-hover" href='https://www.facebook.com'>https://www.facebook.com</a> 
        <a className="link link-hover" href='https://www.google.co.uk'>https://www.google.co.uk</a>
      </div>
         </div>
     
      
  <div className="footer footer-center p-6 font-semibold text-xl bg-rose-300 text-base-content">
    <p>Copyright © 2023 - All right reserved by ToyWorld Industries Ltd</p>
  </div>

    </footer>
   );
};

export default Footer;