import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AuthProvider from 'contexts/AuthContext';
import RoutingProvider from 'contexts/RoutingContext';
import ModalProvider from 'contexts/ModalContext';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RoutingProvider>
      <AuthProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </AuthProvider>
    </RoutingProvider>
  </React.StrictMode>
);
