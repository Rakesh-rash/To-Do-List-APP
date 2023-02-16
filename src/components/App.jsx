import React from "react";
import { useState } from "react";
import TodoItem from "./TodoItem";
import InputArea from "./InputArea";

function App() {
  const [item, setItem] = useState("");
  const [Items, SetElement] = useState([]);

  function handleChange(event) {
    const element = event.target.value;
    setItem(element);
  }
  function MakeChange(event) {
    SetElement((prev) => {
      return [...prev, item];
    });
    setItem("");
  }
  function MakeKeyChange(event) {
    if (event.key === "Enter") {
      SetElement((prev) => {
        return [...prev, item];
      });
      setItem("");
    }
  }
  function DeleteItem(id) {
    SetElement((prev) => {
      return prev.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <InputArea
        Input={handleChange}
        Click={MakeChange}
        KeyChange={MakeKeyChange}
        value={item}
      />

      <div>
        <ul>
          {Items.map((todoItem, index) => {
            return (
              <TodoItem
                key={index}
                id={index}
                text={todoItem}
                Delete={DeleteItem}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
