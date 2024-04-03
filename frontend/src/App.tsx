import { useEffect } from "react";
import { themeChange } from "theme-change";
import "./App.css";
import Header from "./components/header";
import Login from "./views/login";

function App() {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Login />
    </div>
  );
}

export default App;
