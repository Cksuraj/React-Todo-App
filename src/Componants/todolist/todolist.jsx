import Todo from "../todo/todo";
import TodoContext from "../../Context/TodoContext.js";
import { useContext } from "react";
import todoDispatchcontext from "../../Context/todoDispatchcontext.js";

function Todolist() {
  // UseContext for adding Todo in List
  const { list } = useContext(TodoContext);
  const { dispatch } = useContext(todoDispatchcontext);

  // # OnFinished Funtion
  function onFinished(todo, isFinished) {
    dispatch({
      type: "finish_todo",
      payload: { todo, isFinished: isFinished },
    });
  }

  // OnDelete Funtion
  function onDelete(todo) {
    dispatch({ type: "delete_todo", payload: { todo } });
  }

  // OnEdit Funtion
  function onEdit(todo, todoText) {
    dispatch({ type: "edit_todo", payload: { todo, todoText } });
  }

  // JSX part
  // Funtion callbacks, Parameters, map, conditional rendering
  // oneliner arrow funtion  
  return (
    <div>
      {list.length > 0 &&
        list.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            isFinished={todo.finished}
            tododata={todo.tododata}
            changeFinished={(isFinished) => onFinished(todo, isFinished)}
            onDelete={() => onDelete(todo)}
            onEdit={(todoText) => onEdit(todo, todoText)}
          />
        ))}
    </div>
  );
}

export default Todolist;
