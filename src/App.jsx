import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import NameSection from "./components/NameSection";

function App() {
  const [count, setCount] = useState(0);
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      {/* ---------------------------------------------------------- */}
      <h1 className="print-hidden"> Resume App </h1>

      <button className="print-hidden" onClick={handlePrint}>
        Print Resume
      </button>

      <div className="App">
        <NameSection />
        <EducationSection />
        <ExperienceSection />
      </div>
    </>
  );
}

export default App;
