
import './Todo.css';
import React,  { useState } from "react";

import { createStore } from 'redux'



function Todo() {
    
    const [text, setText] = useState('');
   
    function todos(state = [], action) {
        switch (action.type) {
            case 'ADD_TODO':
                return state.concat([action.text]);
            default:
                return state;
        }
    }
    
    const store = createStore(todos, 'use redux');

    function add_todo() {
        console.log("dodaje ", text)
        let tmpText= text;
        setText('');
        return {
            type: 'ADD_TODO',
            text: tmpText
        }
    }

    function get_all_todos() {
        console.log("biore ")
        return {
            type: 'DEFAULT',
            text: ''
        }
    }

    console.log(store)



    return (
        <div className="wrapper">
            {store.getState()}
            <div className="turn">
                Todo
                <br />
            </div>
            <div className="flex">
                <input type="text" placeholder="add new todo" value={text} onChange={(e) => setText(e.target.value)}></input>
                <button className="button" onClick={() => { store.dispatch(add_todo()); store.dispatch(get_all_todos()); }}>add</button>
            </div>
        </div >
    );
}

export default Todo;
