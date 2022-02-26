
import { useState } from "react"
function Noob(){
 const [ time,setTime] = useState(0,2)
 const tram =()=>{
  setTime(time + 1)
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