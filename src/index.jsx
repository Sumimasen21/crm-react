import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import App from "./App.jsx";
import HomePage from "./components/Pages/HomePage/HomePage.jsx";
import TablePage from "./components/Pages/TablePage/TablePage.jsx";
import EditPage from "./components/Pages/EditPage/EditPage.jsx";
import NotFoundPage from "./components/Pages/NotFoundPage/NotFoundPage..jsx";
import "./assets/styles/bootstrap.min.css";
import "./assets/styles/main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Toaster position="top-center" reverseOrder={false} />
      <App>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/table" element={<TablePage />} />
          <Route path="/edit/:id" element={<EditPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </App>
    </Router>
  </React.StrictMode>,
);
