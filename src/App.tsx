import React, { useState } from "react";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState<string>("red");
  const newButtonColor = buttonColor === "red" ? "blue" : "red";
  return (
    <div>
      <button
        onClick={() => setButtonColor(newButtonColor)}
        style={{ backgroundColor: buttonColor }}
      >
        Change to {newButtonColor}
      </button>
    </div>
  );
}

export default App;
