import { useDispatch, useSelector } from "react-redux";
import Todo from "../todo/todo";

function Todolist({ editTodo, deleteTodo, todoFinished,} ) {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todo);
  // # OnFinished Funtion
  function onFinished(todo, isFinished) {
    todoFinished(todo,isFinished)
  }

  // OnDelete Funtion
  function onDelete(todo) {
  deleteTodo(todo);
  }

  // OnEdit Funtion
  function onEdit(todo, todoText) {
    editTodo(todo, todoText);
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
