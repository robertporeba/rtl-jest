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
        style={{ backgroundColor: disabled ? "gray" : buttonColor }}
      >
        Change to {newButtonColor}
      </button>
      <input
        type={"checkbox"}
        onClick={() => setDisabled((prev) => !prev)}
        id={"disable-button-checkbox"}
      />
      <label htmlFor={"disable-button-checkbox"}>Disable button</label>
    </div>
  );
}

export default App;
