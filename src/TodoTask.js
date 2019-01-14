import React, {Component} from 'react';
import './index.css';
import TodoList from './TodoList.js';
import axios from 'axios';
import {createStore} from 'redux';
import logger from 'react-redux';
import {connect} from 'react-redux';

class TodoTask extends Component{
  constructor(props) {
     super(props);
     this.state = {
       value: [{data:null,isCompleted:null}],
       textvalue : "",
       test:"",
     }
     this.handleAddTodoItem = this.handleAddTodoItem.bind(this)
     this.handleChange = this.handleChange.bind(this)
   }




   componentDidMount() {
     //console.log(this.props.todos);
      axios
        //.get("https://jsonplaceholder.typicode.com/users")
        .get("http://localhost/hostevents/public/api/admin/countries",{
          headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjEyYzczNzk4ZjU0YWFlNWJlMTY5MjRmZGU4NjQxMGI3NTQ0YjU4NmZmNTg4NGRkNjczOWI1ZmU0MGFkMDdlYTcwNWFhZTBlZTNkNmY0NGVkIn0.eyJhdWQiOiIyIiwianRpIjoiMTJjNzM3OThmNTRhYWU1YmUxNjkyNGZkZTg2NDEwYjc1NDRiNTg2ZmY1ODg0ZGQ2NzM5YjVmZTQwYWQwN2VhNzA1YWFlMGVlM2Q2ZjQ0ZWQiLCJpYXQiOjE1NDcxODcxNjAsIm5iZiI6MTU0NzE4NzE2MCwiZXhwIjoxNTQ3MjczNTYwLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.XgXbkUOBG9wxQ9YaGQac_ec1XBIEu6Xq9mpVU8S7bxq0jI109KTU9fw2WPKdQZ98Z8XujQOh8y-_4tRDe69kSrIHEuBmXRHlpvo0_dsS_woeGm0Gkmli4Th07t9GbLZE2ApIdHAb6eFxK-wVasjq3vfu3W9AhuiRXt3U5NLn1PaESpqn1QEV-FQ8H7UnPxYkBDUbldslcwkJu4DeNdSr2KAZYLocKg5lYKQz22mqDNiK7MxEgJMp8bD9D2SWzFXwUkq7kL8EZWRIA7qhjrmaoPtedWi7SqADUrPMLiaVQkx2VybaTvgeftaST0L0Vsf9WY1bZUjZxuFNaBHdqDDvhj4janSTrm2QjX9GeeajQ0zZPhmMv6ciaPlmQ_JQ0vtfpjY_STSlPebsr4Y4goziSl35Jgjo2dtMmisN8XZOVKopzTvsaHM9bf7Qgq7vjo9-laulS5qDYEXlUI4Kj6KnywnIOIAoOhBCJv6qrUvbzwVmJWNxvsRDaoITxPHgWnBJplI41SENkiJlUIRGXy6KWt1Fqf7x5xwfnsaOYcBJUdGnsl5oUxxNJkWFHu4OONnOAe1gKgZlH1nAhG-EYZpkA-EocaYqzpWLm5tGATOAm8snioz42RiURDSF2r56m4wPCcIdHVPUhp_aF16cxjqQwAkVM95DvhEUpYmEh45mxw4'
          },
        })
        .then(response => {
          // create an array of contacts only with relevant data
          const newValue = response.data.data.data.map(c => {
            return {
              data: c.name,
            };
          });
          // create a new "State" object without mutating
          // the original State object.
          const newState = Object.assign({}, this.state, {
            value: newValue
          });

          // store the new state object in the component's state
          this.setState(newState);
        })
        .catch(error => console.log(error));
    }











   handleChange(e) {
     this.setState({
       textvalue:e.target.value
     })
   }










   handleAddTodoItem() {
//      const payload = {
//   name: this.state.textvalue,
//   code: 'SWL',
// }
     // axios({
     //   method: 'post',
     //   url: "http://localhost/hostevents/public/api/admin/countries",
     //   data: payload, // you are sending body instead
     //   headers:{
     //     'Accept': 'application/json',
     //     'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjEyYzczNzk4ZjU0YWFlNWJlMTY5MjRmZGU4NjQxMGI3NTQ0YjU4NmZmNTg4NGRkNjczOWI1ZmU0MGFkMDdlYTcwNWFhZTBlZTNkNmY0NGVkIn0.eyJhdWQiOiIyIiwianRpIjoiMTJjNzM3OThmNTRhYWU1YmUxNjkyNGZkZTg2NDEwYjc1NDRiNTg2ZmY1ODg0ZGQ2NzM5YjVmZTQwYWQwN2VhNzA1YWFlMGVlM2Q2ZjQ0ZWQiLCJpYXQiOjE1NDcxODcxNjAsIm5iZiI6MTU0NzE4NzE2MCwiZXhwIjoxNTQ3MjczNTYwLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.XgXbkUOBG9wxQ9YaGQac_ec1XBIEu6Xq9mpVU8S7bxq0jI109KTU9fw2WPKdQZ98Z8XujQOh8y-_4tRDe69kSrIHEuBmXRHlpvo0_dsS_woeGm0Gkmli4Th07t9GbLZE2ApIdHAb6eFxK-wVasjq3vfu3W9AhuiRXt3U5NLn1PaESpqn1QEV-FQ8H7UnPxYkBDUbldslcwkJu4DeNdSr2KAZYLocKg5lYKQz22mqDNiK7MxEgJMp8bD9D2SWzFXwUkq7kL8EZWRIA7qhjrmaoPtedWi7SqADUrPMLiaVQkx2VybaTvgeftaST0L0Vsf9WY1bZUjZxuFNaBHdqDDvhj4janSTrm2QjX9GeeajQ0zZPhmMv6ciaPlmQ_JQ0vtfpjY_STSlPebsr4Y4goziSl35Jgjo2dtMmisN8XZOVKopzTvsaHM9bf7Qgq7vjo9-laulS5qDYEXlUI4Kj6KnywnIOIAoOhBCJv6qrUvbzwVmJWNxvsRDaoITxPHgWnBJplI41SENkiJlUIRGXy6KWt1Fqf7x5xwfnsaOYcBJUdGnsl5oUxxNJkWFHu4OONnOAe1gKgZlH1nAhG-EYZpkA-EocaYqzpWLm5tGATOAm8snioz42RiURDSF2r56m4wPCcIdHVPUhp_aF16cxjqQwAkVM95DvhEUpYmEh45mxw4'
     //   },
     // })
    // this.state.value.push({data:payload.name,isCompleted:false});
    this.props.setName(this.state.textvalue);
     this.setState(
     this.state
  );

   }










   render() {
    //   let { data } = this.state;
       return (
         <div className='list'>
           <input type="text" placeholder="Add Task" className="text" onChange={ this.handleChange } />
           <button name='button' className="addbutton" onClick={this.handleAddTodoItem}>Add Todo Item</button>
          { <TodoList todos={this.props.todos}/>}

         </div>
       );
     }
}

const mapStateToProps=(state)=>{
  console.log(state.todos)
  return{
    todos:state.todos
  };
};
const mapDispatchToProps=(dispatch)=>{
  return{
    setName:(name)=>{
      dispatch({
        type: "AddtodoItem",
        payload:name
      });
    }
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(TodoTask);
//export default TodoTask;
