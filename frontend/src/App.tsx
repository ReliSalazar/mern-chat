import { useEffect } from "react";
import { themeChange } from "theme-change";
import "./App.css";
import Header from "./components/header";

function App() {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <div>
      <Header />
      <h1 className="text-3xl font-bold underline">Title</h1>
    </div>
  );
}

export default App;
