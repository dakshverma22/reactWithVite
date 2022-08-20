import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Daksh</h1>
      <p>This react app is created by vite </p>
    </div>
  );
}

export default App;
