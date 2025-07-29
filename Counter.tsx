import React, { useState } from "react";
import "./Counter.css";

const COUNTER_LIMIT = 10;

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState<string | null>(null);

  const increase = () => {
    if (count < COUNTER_LIMIT) {
      setCount(count + 1);
      setMessage(null);
    } else {
      setMessage("✅ You've reached the limit!");
    }
  };

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
      setMessage(null);
    }
  };

  return (
    <div className="counter-container">
      <h1>Click Counter</h1>
      <div className="counter-value">{count}</div>
      <div className="button-group">
        <button
          className="counter-btn"
          onClick={decrease}
          disabled={count === 0}
        >
          Decrease
        </button>
        <button
          className="counter-btn"
          onClick={increase}
          disabled={count === COUNTER_LIMIT}
        >
          Increase
        </button>
      </div>
      {message && <div className="counter-message">{message}</div>}
    </div>
  );
};

export default Counter;