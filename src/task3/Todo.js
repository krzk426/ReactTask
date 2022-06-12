
import './Todo.css';
import React, { useState } from "react";
import store from "../store/store";
import SingleTodo from './SingleTodo';
import { useSelector } from "react-redux";



function Todo() {

    const todos = useSelector((state) => state.todos);
    const [text, setText] = useState('');

    function add_todo() {
        store.dispatch({type: "ADD_TODO", content: text})
        setText('');
    }

    return (
        <div className="wrapper">
            <div className="turn">
                Todo
                <br />
            </div>
            <div className="flex">
                <input type="text" placeholder="add new todo" value={text} onChange={(e) => setText(e.target.value)}></input>
                <button className="button" onClick={() => add_todo() }>add</button>
            </div>

            <ul className="todo-list">
                {todos.length !== 0
                    ? todos.map((todo, index) => {
                        return <SingleTodo key={`todo-${todo.id}`} todo={todo} />;
                    })
                    : "Todos' list is empty!"}
            </ul>
        </div >
    );
}

export default Todo;
