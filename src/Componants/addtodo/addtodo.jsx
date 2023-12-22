import { useState } from "react";

function Addtodo({addTodo}) {
  // Usestate for Adding Todo
  const [inputtext,setinputtext]=useState('');
  // UI Part
  return (
    <div>
      <input
        type="text"
        placeholder="Add Your TODO"
        value={inputtext}
        onChange={(e) => setinputtext(e.target.value)}
      />

      <button
        style={{ marginLeft: "15px" }}
        onClick={() => {
          addTodo(inputtext);
          setinputtext("");
        }}
      >
        ADD TODO{" "}
      </button>
    </div>
  );
}

export default Addtodo;
