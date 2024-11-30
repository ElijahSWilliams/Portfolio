import { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import SideBar from "../Sidebar/Sidebar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="page">
      <SideBar />
    </div>
  );
}

export default App;
