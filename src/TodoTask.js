import React, {Component} from 'react';
import './index.css';
import TodoList from './TodoList.js';
//import axios from 'axios';
import {connect} from 'react-redux';
import {addTodo} from './actions/todoActions';

class TodoTask extends Component{
  constructor(props) {
     super(props);
     this.state ={
       todo: this.props.todos.todo,
       textvalue : "",
     }

     this.handleAddTodoItem = this.handleAddTodoItem.bind(this)
     this.handleChange = this.handleChange.bind(this)
   }





   handleChange(e) {
     this.setState({
       textvalue:e.target.value
     })
   }






   handleAddTodoItem() {
    this.props.setName(this.state.textvalue);

     this.setState(
     this.state
  );

   }





   render() {
       return (
         <div className='list'>
           <input type="text" placeholder="Add Task" className="text" onChange={ this.handleChange } />
           <button name='button' className="addbutton" onClick={this.handleAddTodoItem}>Add Todo Item</button>
          { <TodoList todos={this.state} />}
         </div>
       );
     }
}



const mapStateToProps=(state)=>{
  return{
    todos:state.todos
  };
};
const mapDispatchToProps=(dispatch)=>{
  return{
    setName:(name)=>{
      dispatch(addTodo(name));
    }
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(TodoTask);
//export default TodoTask;
