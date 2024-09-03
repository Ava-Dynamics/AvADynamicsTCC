import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import SuperTokens, { SuperTokensWrapper } from "supertokens-auth-react";
import EmailPassword from "supertokens-auth-react/recipe/emailpassword";
import Session from "supertokens-auth-react/recipe/session";

const root = ReactDOM.createRoot(document.getElementById("root"));
const superInfo = {
  // learn more about this on https://supertokens.com/docs/emailpassword/appinfo
  appName: "score",
  apiDomain: process.env.REACT_APP_BACKEND,
  websiteDomain: process.env.REACT_APP_URL,
  apiBasePath: "/auth",
  websiteBasePath: "/auth",
};

console.log(superInfo); 


SuperTokens.init({
  appInfo: superInfo,
  recipeList: [
      EmailPassword.init(),
      Session.init()
  ]
});

root.render(
  <React.StrictMode>
    <SuperTokensWrapper>  
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SuperTokensWrapper>
  </React.StrictMode>,
);

reportWebVitals();
