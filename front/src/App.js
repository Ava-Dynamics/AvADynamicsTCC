import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Hero from "./components/hero/Hero";
import "./index.css";
import Courses from "./pages/courses";
import DashboardPage from "./pages/dashboardPage";
import Privacy from "./pages/privacy";
import Score from "./pages/score";
import UserMedals from "./pages/userMedals";
import CommunityPage from "./pages/communityPage";

function App() {
  const navigate = useNavigate();
  const path = window.location.pathname;
  useEffect(() => {
    if (localStorage.getItem("isLogged") === "true" && path === "/") {
      return navigate("/dashboard");
    }

    if (path === "/privacy") return navigate("/privacy");
    if (
      localStorage.getItem("isLogged") !== "true" &&
      path !== "/" &&
      path !== "/privacy"
    ) {
      return navigate("/");
    }
  }, [navigate, path]);

  return (
    <Routes>
      <Route path="/" index element={<Hero />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/score" element={<Score />} />
      <Route path="/medals" element={<UserMedals />} />
      <Route path="/community" element={<CommunityPage />} />
    </Routes>
  );
}

export default App;
