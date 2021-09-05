// Hooks
import { useEffect } from "react";

// Components
import Header from "./components/header";
import Banner from "./components/banner";
import "./styles/app.css";
import Cases from "./components/cases";

function App() {
  useEffect(() => {
    let vh = window.innerHeight * 0.1;
    // document.documentElement.style.setProperty("--vh", `${vh}px`);
  });
  return (
    <div className="App">
      <Header />
      <Banner />
      <Cases />
    </div>
  );
}

export default App;
