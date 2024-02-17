import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [count, setCount] = useState(0);

  const onClick = () => {
    setCount(count + 1);
    console.log(count); // blue
    if (count >= 10) {
      setCount(0);
    }
  };

  const onClickDecrement = () => {
    console.log(count); // blue
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const styling = {
    // Set color based on count
    display: count === 1 ? 'none' : 'inline',
    width: 80 // Set background color based on count
  };

  return (
    <div>
      <button onClick={onClick}>Increment</button>
      <button onClick={onClickDecrement}>Decrement</button>
      <div style={styling}>{count}</div>
    </div>
  );
};

export default App;
