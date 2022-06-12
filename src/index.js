import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from "react-redux";
import TickTackToe from './task2/TickTackToe'
import reportWebVitals from './reportWebVitals';
import Counter from './task1/Counter';
import Todo from './task3/Todo';
import store from "./store/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Counter />
    <TickTackToe />

    <Provider store={store}>
      <Todo />
    </Provider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
