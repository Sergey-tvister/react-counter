import "./App.scss";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  const increment = () => {
    dispatch({ type: "INCREMENT", payload: 1 });
  };
  const decrement = () => {
    dispatch({ type: "DECREMENT", payload: 1 });
  };
  return (
    <div className="counter">
      <div className="counter_decrement">
        <button onClick={() => decrement()}>-</button>
      </div>
      <div className="value_counter">
        <p>{count}</p>
      </div>
      <div className="counter_increment">
        <button onClick={() => increment()}>+</button>
      </div>
    </div>
  );
}

export default App;
