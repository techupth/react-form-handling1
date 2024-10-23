import "./App.css";
import { useState } from "react";
function App() {
  const [greedingInput, setGreedingInput] = useState("");
  const [greedingText, setGreedingText] = useState("Greeting Message");

  const updatGreeding = () => {
    setGreedingInput(event.target.value);
  };

  const handClick = () => {
    setGreedingText(greedingInput);
  };

  return (
    <div className="App">
      <div className="greeting-container">{greedingText}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          value={greedingInput}
          onChange={updatGreeding}
        />
      </div>

      <div className="buttons">
        <button onClick={handClick}>Update text</button>
      </div>
    </div>
  );
}

export default App;
