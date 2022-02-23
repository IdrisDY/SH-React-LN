import {useState} from "react"
const Statehook=()=>{
   const [Fullname, setName]=useState({fname:'',lname:''})
   const {fname,lname}= Fullname
   const handleChange=(e)=>{
      const{name,value}=e.target
      setName({[name]:value})
      console.log({...Fullname})
   }
   return(
      <div>
         <div>
            <span> FirstName</span>
            <input type = "text" name="fname" onChange={handleChange}/>
         </div>
         <div>
            <span> LastName</span>
            <input type = "text" name="lname" onChange={handleChange}/>
         </div>
         <div>
            my first name is {fname}
            my last name is {lname}
         </div>
      </div>
   )
}
export default Statehook 