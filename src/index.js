import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { FavouriteContextProvider } from "./components/context/FavouriteContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <App />

);
