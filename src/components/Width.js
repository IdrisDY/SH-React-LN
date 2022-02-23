import { useEffect, useState } from "react"

function Width(){
   const[width,setWidth]= useState(window.innerWidth)
   const checkWidth=()=>{
      setWidth(window.innerWidth)
   }
   useEffect(()=>{
      console.log("i dey see u ,y bro")
      window.addEventListener("resize",checkWidth)
   },[])

   return(

      <div>{width} pixels </div>
   )
}
export default Width