
import { useState } from "react"
function Noob(){
  let x =1 
  const Add =()=>{
    x+=1
   
  }


// example of using functions to initialise your state remember it can be fxn ,object or arrays ug?
 const [ time,setTime] = useState(Add())
 console.log(x)
 const tram =()=>{
  setTime(x = x+ 1)
  console.log(time)
 }
 return(
  <>

   <div> Moving slow mo {time} </div>
   <input type = "text" onClick = {tram}/>
     </>
 )
}
export default Noob