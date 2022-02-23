import React, {useState, useEffect } from "react";
const GitP =()=>{
   const [users,setUsers]=useState([])
   const url = "https://api.github.com/users"
   const fetchUser = async()=>{
      const request = await fetch(url)
      const resp = request.json()
      setUsers(resp)
      console.log(resp)
      console.log(users)
   }
   useEffect(()=>{
fetchUser()
   })
   return(
<div>
<ul>
   {users.map((user)=> {
      const {id,login,html_url}=user;
     return( <li key={id}>
         <div>
            <h4> {login} </h4>
            <a href={html_url}></a>
         </div>
      </li>
     )
   })}
</ul>
</div>
   )

}
export default GitP