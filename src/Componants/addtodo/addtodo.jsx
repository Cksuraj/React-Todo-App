import { useContext, useState } from "react";
import todoDispatchcontext from "../../Context/todoDispatchcontext.js";

function Addtodo() {
  // Usestate for Adding Todo
  const [inputtext, setinputtext] = useState("");
  const { dispatch } = useContext(todoDispatchcontext);

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
          dispatch({ type: "add_todo", payload: { todoText: inputtext } });
          setinputtext("");
        }}
      >
        ADD TODO{" "}
      </button>
    </div>
  );
}

export default Addtodo;
