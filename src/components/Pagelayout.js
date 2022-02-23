import {useEffect,useState} from 'react'
/*const PageLayout=({children,propChild})=>{
   return(
      <div>
<h1> HOCDAS</h1>
<h1> {propChild} </h1>
{children}
      </div>
   )
}*/
let name="Ade"
const PageLayout=()=>{
   const[cars,setCars]=useState([
      {name:"Honda",year:1990},
      {name:"Volvo",year:1870},
      {function(){return "ade"},year:1870}
])
useEffect(()=>{
   console.log('use effect ran')

 console.log({cars})  
})
return(
   <div> {name}I wannna go</div>
)
}

export default PageLayout