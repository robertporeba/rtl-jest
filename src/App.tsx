import React, { useState } from "react";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState<string>("red");
  const [disabled, setDisabled] = useState<boolean>(false);

  const newButtonColor = buttonColor === "red" ? "blue" : "red";
  return (
    <div>
      <button
        disabled={disabled}
        onClick={() => setButtonColor(newButtonColor)}
        style={{ backgroundColor: buttonColor }}
      >
        Change to {newButtonColor}
      </button>
      <input type={"checkbox"} onClick={() => setDisabled((prev) => !prev)} />
    </div>
  );
}

export default App;
