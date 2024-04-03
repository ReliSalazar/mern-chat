import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { themeChange } from "theme-change";
import "./App.css";
import Header from "./components/header";
import Home from "./pages/home";
import Login from "./pages/login";
import SignUp from "./pages/signup";

function App() {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
