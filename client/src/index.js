// libraries
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

// assets
import "./asset/scss/argon-dashboard-react.scss";
import "./index.css";

// component
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="shoppy-auth.us.auth0.com"
      clientId={
        process.env.NODE_ENV === "development"
          ? "pwvXkV7QSR9T7KbwcpQt5aYqUD2r3wwA"
          : "wmJoBJQUzcorhhTwRYM5slECcUfBaKEq"
      }
      redirectUri={
        process.env.NODE_ENV === "development"
          ? "http://localhost:3000/"
          : "https://shoppyapp.live/"
      }
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
