import React from "react";
import './TodoItem.css'

import { CompleteIcon } from "../TodoIcon/CompleteTodo.js";
import { DeleteIcon } from "../TodoIcon/DeleteTodo.js";

const TodoItem = (props) => {
  const { text, completed, onToggle, onDelete } = props;

  return (
    <li className="TodoItem">
      <div className={`check-container ${completed && "completed"}`}>
        <CompleteIcon
          className={`check ${completed && "completed"}`} onClick={props.onComplete} onComplete= {props.onComplete}
        />
      </div>

      <p className={`todo ${completed && "completed"}`}>{text}</p>
      <div className="closer-container">
        <DeleteIcon className="closer" onClick={props.onDelete} onDelete= {props.onDelete}/>
      </div>

    </li>
  );
};

  export { TodoItem };