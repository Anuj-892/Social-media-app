import React from "react";
import ReactDOM from "react-dom/client";
import AuthProvider from './context/AuthContext';
import App from "./App";
import './styles.scss'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
        <App />
    </AuthProvider>
  </React.StrictMode>
);