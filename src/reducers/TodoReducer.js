const TodoReducer = (state={todo:[{todoTitle:'example',isCompleted:false}]}
 ,action) =>{
  switch (action.type) {
      case "AddtodoItem":
      state.todo.push({todoTitle:action.payload,isCompleted:false});
      break;
      case "ChangeTodoStatus":
      state.todo[action.index]={todoTitle:state.todo[action.index].todoTitle,isCompleted:action.payload};
      break;
      default:
      break;
  }
return state;
};

export default TodoReducer;
