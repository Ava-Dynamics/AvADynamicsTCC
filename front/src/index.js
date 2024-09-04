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
    EmailPassword.init({
      signInAndUpFeature: {
          signUpForm: {
              formFields: [{
                  id: "name",
                  label: "Nome completo",
                  placeholder: "Seu primeiro e último nome",
              }, {
                  id: "cpf",
                  label: "CPF",
                  placeholder: "000.000.000-00",
              }, {
                  id: "job",
                  label: "Trabalho atual",
                  placeholder: "Programador/Autonomo",
                  optional: true
              }]
          }
        }
    }),
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
