import { useEffect } from "react";
import { themeChange } from "theme-change";
import "./App.css";
import Header from "./components/header";
import Home from "./pages/home";

function App() {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Home />
    </div>
  );
}

export default App;
