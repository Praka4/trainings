import React, { useState } from "react";
import "./App.css"; // Ensure this CSS file exists

const App = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="app-container">
      <div className="calculator-container">
        <div className="calculator">
          <h2>Calculator</h2>
          <input type="text" value={input} readOnly className="display" />
          <div className="buttons">
            {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => (item === "=" ? handleCalculate() : handleClick(item))}
                >
                  {item}
                </button>
              )
            )}
            <button className="clear" onClick={handleClear}>
              C
            </button>
          </div>
        </div>
      </div>
      
      {/* Embedded Chatbot */}
      <div className="chatbot-container">
        <iframe
          src="https://www.chatbase.co/chatbot-iframe/vzBXQHbbmH9T9IHOHuD1j"
          width="100%"
          style={{ height: "100%", minHeight: "700px" }}
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
};

export default App;
