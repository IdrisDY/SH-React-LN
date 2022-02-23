import { useState,useEffect } from "react"
const Fetch=()=>{
   const[todo,setTodo]= useState(null)
   const[isUnmount,setUnmount]= useState(false)
   
      useEffect(()=>{
        // fetch('https://jsonplaceholder.typicode.com/todos/1')
        // .then(resp=> resp.json())
        // .then(data=> setTodo({...data}))
      },[isUnmount])
      console.log(isUnmount)
      return(
      <div>
         <h1>{todo?.title}</h1>
         <button onClick={()=>setUnmount(!isUnmount)}> Unmount</button>

      </div>
   )
}
export default Fetch