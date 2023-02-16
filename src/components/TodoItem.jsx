import React from "react";

function TodoItem(props) {
  return (
    <div>
      <li
        onClick={() => {
          props.Delete(props.id);
        }}
        style={{ cursor: "pointer" }}
      >
        {props.text}
      </li>
    </div>
  );
}
export default TodoItem;
