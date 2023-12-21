import React, { useReducer } from 'react';
import './App.css';
import TodoContext from './Context/TodoContext.js';
import Addtodo from './Componants/addtodo/addtodo';
import Todolist from './Componants/todolist/todolist';
import TodoDispatchcontext from './Context/todoDispatchcontext.js';
import TodoReducer from './reducers/todoReducer.js';

function App() {
  const [list, dispatch] = useReducer(TodoReducer, []);

  return (
    <TodoContext.Provider value={{list}}>
      <TodoDispatchcontext.Provider value={{ dispatch }}>
        <Addtodo />
        <Todolist />
      </TodoDispatchcontext.Provider>
    </TodoContext.Provider>
  );
}

export default App;
