import "./App.css";
import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const handleEqual = () => {
    if(input.trim() === ""){
      setResult("Error")
    }else{
      if(eval(input) === Infinity){
        setResult("Infinity")
      }
    else if (isNaN(input)) {
      setInput("NaN");
    } else {
      setInput(eval(input));
    }
    setResult(eval(input));
    setInput(input);
  }
  };
  const handleClear = () => {
    setInput("");
    setResult("");
  };

  return (
    <div className="App">
      <h1>React Calculator</h1>

      <div>
        <input type="text" value={input} className="calculator-input" />
        <p>{result}</p>
        <div className="rapper">
          <button
            type="button"
            className="btns"
            value="7"
            onClick={(e) => setInput(input + e.target.value)}
          >7</button>
          <button
            type="button"
            className="btns"
            value="8"
            onClick={(e) => setInput(input + e.target.value)}
          >8</button>
          <button
            type="button"
            className="btns"
            value="9"
            onClick={(e) => setInput(input + e.target.value)}
          >9</button>
          <button
            type="button"
            className="btns"
            value="+"
            onClick={(e) => setInput(input + e.target.value)}
          >+</button>
          <button
            type="button"
            className="btns"
            value="4"
            onClick={(e) => setInput(input + e.target.value)}
          >4</button>
          <button
            type="button"
            className="btns"
            value="5"
            onClick={(e) => setInput(input + e.target.value)}
          >5</button>
          <button
            type="button"
            className="btns"
            value="6"
            onClick={(e) => setInput(input + e.target.value)}
          >6</button>
          <button
            type="button"
            className="btns"
            value="-"
            onClick={(e) => setInput(input + e.target.value)}
          >-</button>
          <button
            type="button"
            className="btns"
            value="1"
            onClick={(e) => setInput(input + e.target.value)}
          >1</button>
          <button
            type="button"
            className="btns"
            value="2"
            onClick={(e) => setInput(input + e.target.value)}
          >2</button>
          <button
            type="button"
            className="btns"
            value="3"
            onClick={(e) => setInput(input + e.target.value)}
          >3</button>
          <button
            type="button"
            className="btns"
            value="*"
            onClick={(e) => setInput(input + e.target.value)}
          >*</button>
          <button
            type="button"
            className="btns"
            value="C"
            onClick={handleClear}
          >C</button>
          <button
            type="button"
            className="btns"
            value="0"
            onClick={(e) => setInput(input + e.target.value)}
          >0</button>
          <button
            type="button"
            className="btns"
            value="="
            onClick={handleEqual}
          >=</button>
          <button
            type="button"
            className="btns"
            value="/"
            onClick={(e) => setInput(input + e.target.value)}
          >/</button>
        </div>
      </div>
    </div>
  );
}

export default App;
