import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserCard from "./componets/UserCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#121212",
          }}
        >
          <UserCard />
        </div>
      </div>
    </>
  );
}

export default App;
