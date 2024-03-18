import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  /* const handleChange = (e) => {
    setText(e.target.value);
  }; */

  return (
    <div>
      <h1>{text}</h1>
      <input type="text" onChange={(e) => setText(e.target.value)} />
    </div>
  );
}
export default App;
