import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const uuid: any = { id: "1", username: "2", password: "3" };

if (!localStorage.getItem("passport")) {
  localStorage.setItem("passport", JSON.stringify(uuid));
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
