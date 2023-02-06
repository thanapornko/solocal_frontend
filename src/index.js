import React from "react";
import ReactDOM from "react-dom/client";
import "react-toastify/dist/ReactToastify.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";
import App from "./App";
import AuthContextProvider from "./contexts/AuthContext";
import LayoutContextProvider from "./contexts/LayoutContext";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  // <React.StrictMode>
  <AuthContextProvider>
    <LayoutContextProvider>
      <App />
    </LayoutContextProvider>
  </AuthContextProvider>

  // </React.StrictMode>
);
