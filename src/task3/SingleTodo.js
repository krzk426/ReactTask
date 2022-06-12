import React from "react";
import store from "../store/store";

export default function SingleTodo({ todo }) {
  return (
    <li className="flex">
      <span className="todo-item-content">{todo.content}</span>
      <div className="todo-delete" onClick={() => store.dispatch({ type: "DELETE_TODO", id: todo.id })}>
        X
      </div>
    </li>
  );
}