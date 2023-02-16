import React from "react";

function InputArea(props) {
  return (
    <div>
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          type="text"
          onChange={props.Input}
          onKeyDown={props.KeyChange}
          value={props.value}
        />
        <button onClick={props.Click}>
          <span>Add</span>
        </button>
      </div>
    </div>
  );
}
export default InputArea;
