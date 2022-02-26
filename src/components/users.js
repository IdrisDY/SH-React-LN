import React,{render, useEffect, useState} from "react";
const Users = ()=>{
   const[value,setValue]=useState(0)
   useEffect(()=>{
      document.title= `${value} users`
   })
   return(
<>
    {value>0?<div> we have {value} users</div>:<div> No users</div>}
    
    <button onClick={()=>setValue(value+1)
    }> Click here</button>
    </>
   )
   
}
export default Users