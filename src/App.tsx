import React, { useState } from "react";
import "./App.css";

export function replaceCamelWithSpaces(color: string) {
  return color.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [buttonColor, setButtonColor] = useState<string>("MediumVioletRed");
  const [disabled, setDisabled] = useState<boolean>(false);

  const newButtonColor =
    buttonColor === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";

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
