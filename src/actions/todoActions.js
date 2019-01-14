export function addTodo(todoTitle){
  return{
    type: "AddtodoItem",
    payload:todoTitle
  };
}

export function changeStatus(todoStatus,index){
  return{
    type: "ChangeTodoStatus",
    payload:todoStatus,
    index: index
  };
}
