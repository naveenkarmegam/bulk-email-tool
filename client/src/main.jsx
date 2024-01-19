import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/app/store.js";
import { PersistGate } from "redux-persist/integration/react";

import axios from "axios";
axios.defaults.baseURL = "https://bulk-email-tool-681r.onrender.com";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <App />
    </PersistGate>
  </Provider>
);
