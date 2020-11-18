// libraries
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

// assets
import "./asset/scss/argon-dashboard-react.scss";
import "./index.css";

// component
import App from "./App";
import { store, persistor } from "./redux/store";

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
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
