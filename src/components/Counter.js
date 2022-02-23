import { useState } from "react";
import React from "react";
const  Counter=()=>{
   const [count,setCount]=useState(0)
   const [count2,setCount2]=useState(0)

   return(
      <div>
         <div>
         <h1>{`Increase price by ${count}`} </h1>
         <button onClick={()=>setCount(count+1)}> Click Me </button>
         </div>

         <div>
         <h1>{`Decrease price by ${count2}`} </h1>
         <button onClick={()=>setCount2(count2-1)}> Click Me </button>
         </div>
      </div>
   )
}
export default Counter