import { useState } from "react";

function App() {
  //
  // STATE
  //

  const userData = {
    userName: "Killer",
    userAge: 17,
    userEmail: "killer@killer.com",
  };

  const [count, setCount] = useState(0);
  const [fun, setFun] = useState(true);
  const [user, setUser] = useState(userData);

  const handleCountChange = (operator) => {
    switch (operator) {
      case "+":
        setCount(count + 1);
        break;
      case "-":
        setCount(count - 1);
        break;
      case "reset":
        setCount(0);
        break;
    }
  };

  const handleNameChange = () => {
    setUser((prevData) => ({ ...prevData, userName: "Bob" }));
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => handleCountChange("-")}>Decrement</button>
      <button onClick={() => handleCountChange("reset")}>Reset</button>
      <button onClick={() => handleCountChange("+")}>Increment</button>
      <h1>{fun ? "Yes, we're having fun!" : "No fun is being had 😩"}</h1>
      <button onClick={() => setFun(!fun)}>Change fun status</button>
      <p>{user.userName}</p>
      <p>{user.userAge}</p>
      <p>{user.userEmail}</p>
      <button onClick={handleNameChange}>Change username to Bob</button>
    </div>
  );
}
export default App;
