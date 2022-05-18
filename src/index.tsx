import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Auth } from "aws-amplify";

Auth.configure({
  region: "ap-southeast-2",
  userPoolId: "ap-southeast-2_FBYiCdS2a",
  userPoolWebClientId: "654u2ahdk16bq5oiu6k2a682tj",
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
