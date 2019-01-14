export default function TodoReducer(state={value:[{title:'example',isCompleted:false}]}
 ,action){
  switch (action.type) {

    case "AddtodoItem":
     state.value.push({title:action.payload,isCompleted:false});
      break;
      case "ChangeTodoStatus":
      state.value[action.index]={title:state.value[action.index].title,isCompleted:action.payload};
      break;
    default:
      return state;
  }
return state;
}
