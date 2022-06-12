import './Counter.css';
import { useEffect, useState } from "react";


function Counter() {

  const [counter, setCounter] = useState(0);

  return (
    <div className="App-header">
      <p>
        <div className={`number ${counter > 0 ? 'cm-green' : counter < 0 ? 'cm-red' : 'cm-gray'}`}>
        {counter}
        </div>
        <div class="buttons">
          <button onClick={() => setCounter(counter + 1)}>+</button>
          <button onClick={() => setCounter(counter - 1)}>-</button>
        </div>
      </p>
    </div>
  );
}

export default Counter;
