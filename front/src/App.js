import { Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Hero from "./components/hero/Hero";
import "./index.css";
import Privacy from "./pages/privacy";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();
  const path = window.location.pathname;
  useEffect(() => {
    if (path === "/dashboard" && localStorage.getItem("user")) {
      return navigate("/dashboard");
    }

    if (path === "/privacy") return navigate("/privacy");

    return navigate("/");
  }, [navigate, path]);

  return (
    <Routes>
      <Route path="/" index element={<Hero />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
