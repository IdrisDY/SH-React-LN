import {useState, useEffect } from "react"

const Timer =()=>{
   const[second,getSecond]=useState(0)
   const[isStart,setStart]=useState(false)
   
   useEffect(()=>{
      if(isStart){
      setTimeout(()=>{
getSecond(second+1)
      },1000)
   }})
   const textButton=!isStart? "Start":"Stop"
   return(
      <div>
      <button onClick={()=>setStart(!isStart)}>{textButton}</button>
         <h1> Timer:: {second}</h1>

      </div>
   )
}
export default Timer