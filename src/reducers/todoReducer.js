// Todo Reducer to perform all the logical action and state changes
// add_todo, edit_todo, delete_todo, finish_todo

function TodoReducer(state, action) {
  if (action.type == "add_todo") {
    let todoText = action.payload.todoText;
    return [
      ...state,
      { id: state.length + 1, tododata: todoText, finished: false },
    ];
  } 
  else if (action.type == "edit_todo"){

    let todo = action.payload.todo;
    let todoText = action.payload.todoText;
    const updatedlist = state.map((t) => {
      if (t.id == todo.id) {
        todo.tododata = todoText;
      }
      return t;
    });
    return updatedlist;
  } 
  else if (action.type == "delete_todo"){

    let todo = action.payload.todo;
    const updatedlist = state.filter((t) => t.id != todo.id);
    return updatedlist;
  } 
  else if (action.type == "finish_todo") {
   
    let todo = action.payload.isFinished;
    let isFinished = action.payload.isFinished;
    const updatedlist = state.map((t) => {
      if (t.id == todo.id) {
        todo.finished = isFinished;
      }
      return t;
    });
    return updatedlist;
  }
   else {
   
    return state;
  }
}

export default TodoReducer;
