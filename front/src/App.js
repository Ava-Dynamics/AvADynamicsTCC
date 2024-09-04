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
import { getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react/ui";
import * as reactRouterDom from "react-router-dom";
import { EmailPasswordPreBuiltUI } from "supertokens-auth-react/recipe/emailpassword/prebuiltui";
import {
  SessionAuth,
  useSessionContext,
} from "supertokens-auth-react/recipe/session";
import Signup from "./components/register/register";

function App() {
  const navigate = useNavigate();
  const path = window.location.pathname;
  const session = useSessionContext();

  useEffect(() => {
    if (session.doesSessionExist && path === "/") {
      return navigate("/dashboard");
    }

    if (path === "/privacy") return navigate("/privacy");
    // if (
    //   session.doesSessionExist !== "true" &&
    //   path !== "/" &&
    //   path !== "/privacy"
    // ) {
    //   return navigate("/");
    // }
  }, [navigate, path, session]);

  return (
    <Routes>
      <Route path="/" index element={<Hero />} />
      <Route path="/register" index element={<Signup />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route
        path="/dashboard"
        element={
          <SessionAuth>
            <DashboardPage />
          </SessionAuth>
        }
      />
      <Route
        path="/courses"
        element={
          <SessionAuth>
            <Courses />
          </SessionAuth>
        }
      />
      <Route
        path="/score"
        element={
          <SessionAuth>
            <Score />
          </SessionAuth>
        }
      />
      <Route
        path="/medals"
        element={
          <SessionAuth>
            <UserMedals />
          </SessionAuth>
        }
      />
      <Route
        path="/community"
        element={
          <SessionAuth>
            <CommunityPage />
          </SessionAuth>
        }
      />
      {getSuperTokensRoutesForReactRouterDom(reactRouterDom, [
        EmailPasswordPreBuiltUI,
      ])}
    </Routes>
  );
}

export default App;
