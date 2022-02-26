const Props = (props)=>{
 // const element = <Props aka ="Sara" />;
 console.log(props)
return(
 <div>
   <h1>Hello {props.name} you are welcome,how can we help you? </h1>
<h2> My phone number is {props.no} </h2>
<h3>  {props.children}
</h3>

 </div>
 )
}
export default Props