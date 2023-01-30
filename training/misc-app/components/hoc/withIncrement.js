import React from 'react'
//Higer Order Component
const withIncrement= (OriginalComponent) =>{
    //every comonent will have its own copy of state as it is props
       class updatedComponent extends React.Component{
           state={count:0}
           increment=()=>{
               this.setState(prevState=>{
                   return {count:prevState.count+1}
               })
           }
          componentDidMount(){
              //initialize state with ajax //default themes
          }
          render(){
              return(
                  <OriginalComponent  count={this.state.count}
                              increment={this.increment}/>
              )
          }
       }
       return updatedComponent
}
export default withIncrement