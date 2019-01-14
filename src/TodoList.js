import React, {Component} from 'react';
import './index.css'
import axios from 'axios';
import {connect} from 'react-redux';
class TodoList extends Component{
  constructor(props){
    super(props);
    this.state=this.props.todos
   }

  handleTodoItem(v){
    var i=0;
  for( i = 0; i < this.state.value.length; i++){
    if(this.state.value[i] === v){
      if(v.isCompleted){
        this.props.setStatus(false,i);
        //this.state.value[i]={data:v.data,isCompleted:false}
      }
      else{
      //  this.state.value[i]={data:v.data,isCompleted:true}
      //console.log(this.props[i])
        this.props.setStatus(true,i);
      }
        break;
    }
  }
  this.setState(
      {value:this.state.value}
  )

}

render(){

  console.log(this.props.todos)

return(
  <div className='container' align='left'>
  {this.props.todos.value.map((v,c) => {
      return <div>
              <h3 className="font">
                 <button className="allbutton" onClick={this.handleTodoItem.bind(this, v)}>
                   {v.isCompleted ? 'Completed':'To do'}
                 </button>
               {v.title}
              </h3>
           </div>
         })}
 </div>
);
}
}
const mapDispatchToProps=(dispatch)=>{
  return{
    setStatus:(isCompleted,i)=>{
      dispatch({
        type: "ChangeTodoStatus",
        payload:isCompleted,
        index: i
      });
    }
  };
};
export default connect(null,mapDispatchToProps)(TodoList);
