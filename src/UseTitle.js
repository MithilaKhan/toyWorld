import { useEffect } from "react";


const UseTitle = (title) => {
   useEffect(()=>{
      document.title=`${title}-ToyWorld`
      },[title])
};

export default UseTitle;