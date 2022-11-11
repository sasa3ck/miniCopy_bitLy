import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style/sass/index.sass";
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import "../node_modules/font-awesome/css/font-awesome.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
