import { useState } from "react";

function Todo({ tododata, isFinished, changeFinished, onDelete, onEdit }) {
  // UseState for to update the State of the Todo App
  const [finished, setFinished] = useState(isFinished);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEdittext] = useState(tododata);

  // UI Part to display JSX- Javascript Like Xmal
  // Containes Event handler, Conditional rendering
  // inline Style, Event listener

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        gap: "20px",
        marginTop:'15px'
      }}
    >
      <input
        type="checkbox"
        checked={finished}
        onChange={(e) => {
          setFinished(e.target.checked);
          changeFinished(e.target.checked);
        }}
      />

      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEdittext(e.target.value)}
        />
      ) : (
        tododata
      )}
      <button
        onClick={() => {
          setIsEditing(!isEditing);
          onEdit(editText);
        }}
      >
        {" "}
        {!isEditing ? "Edit" : "Save"}{" "}
      </button>

      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default Todo;
