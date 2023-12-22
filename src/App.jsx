import { useDispatch } from 'react-redux';
import './App.css';
import Addtodo from './Componants/addtodo/addtodo';
import Todolist from './Componants/todolist/todolist';
import { addTodo, deleteTodo,todoFinished,editTodo } from './actions/todoactions';
import { bindActionCreators } from 'redux';
//Biniding the actionCreators of componante
// Added Redux_Toolkit and Optimized the funtional componant
function App() {

  const dispatch= useDispatch();
  const actions =bindActionCreators({addTodo,deleteTodo,todoFinished,editTodo},dispatch)
  return (
    <>
      <Addtodo addTodo={actions.addTodo} />
        <Todolist deleteTodo={actions.deleteTodo} editTodo={actions.editTodo} todoFinished={actions.todoFinished} />
    </>
  );
}

export default App;
