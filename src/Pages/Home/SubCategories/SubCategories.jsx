import React, { useEffect, useState } from 'react';

const SubCategories = () => {
   const [ categories , setCategories] = useState([])
   useEffect(()=>{
      fetch("http://localhost:5000/addToy")
      .then(res => res.json())
      .then(data => {
         console.log(data);
         setCategories(data)
      })
   })
   return (
      <div>
         
      </div>
   );
};

export default SubCategories;