import { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { themeChange } from "theme-change";
import "./App.css";
import Header from "./components/header";
import Home from "./pages/home";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import { useAuthContext } from "./context/auth-context";

function App() {
  const { authUser } = useAuthContext();

  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Routes>
        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <SignUp />}
        />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
