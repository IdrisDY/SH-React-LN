import React from "react"
const UpdatedFunc= OriginalFunc => {
   class NewFunc extends React.Component{
      constructor(props){
         super(props)
      }
     

      render(){
         return(
            <div>  i dey ur side {OriginalFunc} {this.props.name} </div>
         )
      }
   } return NewFunc
}
export default UpdatedFunc