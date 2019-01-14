import React, {Component} from 'react';
import './index.css'
//import axios from 'axios';
import {connect} from 'react-redux';
import {changeStatus} from './actions/todoActions';

class TodoList extends Component{
  constructor(props){
    super(props);
    this.state=this.props.todos;
   }





  handleTodoItem(v){
    var i=0;
  for( i = 0; i < this.state.todo.length; i++){
    if(this.state.todo[i] === v){
      if(v.isCompleted){
        //console.log(this.props.todos.todo[i])
        this.props.setStatus(false,i);
        //this.state.value[i]={data:v.data,isCompleted:false}
      }
      else{
      //  this.state.value[i]={data:v.data,isCompleted:true}
    ///  console.log(this.props.todos.todo[i])
        this.props.setStatus(true,i);
      }
        break;
    }
  }
  this.setState(
    this.state
  )

}











render() {
    return (
  <div className='container' align='left'>
  {this.state.todo.map((v,c) => {
    console.log(v);
      return <div>
              <h3 className="font">
                 <button className="allbutton" onClick={this.handleTodoItem.bind(this, v)}>
                   {v.isCompleted ? 'Completed':'To do'}
                 </button>
               {v.todoTitle}
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
      dispatch(changeStatus(isCompleted,i));
  }
}
};
export default connect(null,mapDispatchToProps)(TodoList);
