import { useState, useEffect } from "react";
import "./styles.css";

const Counter1 = () => {
  const [count, setCount] = useState(0);
  const handlePlusOne = () => setCount((prev) => prev + 1);
  const handleMinusOne = () => setCount((prev) => prev - 1);
  useEffect(() => setCount(5), []);
  console.log("Counter 1:", count);

  return (
    <div>
      <button onClick={handlePlusOne}>+1</button>
      <button onClick={handleMinusOne}>-1</button>
      <p>Count: {`${count}`}</p>
    </div>
  );
};

const Counter2 = () => {
  const [count, setCount] = useState(5);
  const handlePlusOne = () => setCount((prev) => prev + 1);
  const handleMinusOne = () => setCount((prev) => prev - 1);
  console.log("Counter 2:", count);

  return (
    <div>
      <button onClick={handlePlusOne}>+1</button>
      <button onClick={handleMinusOne}>-1</button>
      <p>Count: {`${count}`}</p>
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <Counter1 />
      <Counter2 />
    </div>
  );
}
