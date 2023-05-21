import React from 'react';
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";
import UseTitle from '../../useTitle';

const ref = React.createRef();
const Blogs = () => {

   UseTitle("Blog")
   return (

      <div>
         
  <div className='font-bold text-4xl text-center pt-10 text-rose-600'>Questions & Answers </div>
<div className='grid lg:grid-cols-2 sm:grid-cols-1 p-24' ref={ref}>
         <div className='grid grid-cols-1'>
<h1  className='mb-6'>
   <p className='text-yellow-600 font-semibold text-2xl'><span className='text-rose-700 '>Q.</span>What is an access token and refresh token? How do they work and where should we store them on the client-side?</p>
   <p className='text-rose-500'><span className='text-purple-700 font-semibold text-xl'>Ans.</span>An access token and a refresh token are commonly used in authentication and authorization systems to secure and manage user sessions. <br/>
   The access token is used to authenticate and authorize the client when making requests to protected API endpoints. <br/>
   A refresh token is a credential used to obtain a new access token without requiring the user to reauthenticate.<br /> Access tokens should be stored securely on the client-side, but they should not be stored in local storage or cookies</p>
</h1>


<h1 className='mb-6'>
   <p className='text-yellow-500 font-semibold text-2xl '><span className='text-rose-700 '>Q.</span>Compare SQL and NoSQL databases?</p>
   <p className='text-rose-500'><span className='text-yellow-700 font-semibold text-xl'>Ans.</span>SQL databases use a structured, tabular data model based on tables with predefined schemas <br />
   On the other hand NoSQL databases use various data models such as key-value, document, columnar, or graph.</p>
</h1>


<h1  className='mb-6'>
   <p className='text-yellow-500 font-semibold text-2xl'><span className='text-rose-700 '>Q.</span>What is express js? What is Nest JS ??</p>
   <p className='text-rose-500'><span className='text-yellow-700 font-semibold text-xl'>Ans.</span>Express.js is a minimalist, unopinionated web framework for Node.js. It provides a set of features and utilities to build web applications <br /> Nest.js is a progressive, opinionated web framework for building efficient and scalable server-side applications with Node.js and TypeScript  </p>
</h1>


<h1  className=''>
   <p className='text-yellow-500 font-semibold text-2xl'><span className='text-rose-700 '>Q.</span>What is MongoDB aggregate and how does it work??</p>
   <p className='text-rose-500'><span className='text-yellow-700 font-semibold text-xl'>Ans.</span>In MongoDB, the aggregate method is a powerful feature that allows us to perform advanced data processing and analysis operations on our data. It is used to construct complex queries and transformations on collections by combining multiple stages into a pipeline.</p>
</h1>
         </div>

         <div className='grid grid-cols-1 my-auto'>
<img src="https://img.freepik.com/free-vector/questions-concept-illustration_114360-1513.jpg?w=740&t=st=1684684510~exp=1684685110~hmac=1b5257e377289bf4d0bf225b52e97137ef4f1e7625830fbf3b4527916e88c905" alt="" />
         </div>
      </div>
      <div className='text-center lg:mb-12'>
      <Pdf targetRef={ref} filename="Blog.pdf">
        {({ toPdf }) => <button onClick={toPdf} className='bg-rose-500 p-4 text-center rounded-lg'>Generate Pdf</button>}
      </Pdf>
      </div>
      
      </div>
      
   );
};

export default Blogs;