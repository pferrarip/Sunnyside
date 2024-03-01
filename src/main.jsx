import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Container from "./components/Container.jsx";
import "./index.css";
import Bottom from "./components/Bottom.jsx";
import Footer from "./components/Footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>
    <Container/>
    <Bottom/>
    <Footer/>
  </React.StrictMode>
);
