import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";

function App({goTo}) {
  
  return (
    <div className="App">
      <Header/>
      <h1 id="title">We are creatives</h1>
      <svg id="arrow" onClick={goTo}  width="36" height="114" xmlns="http://www.w3.org/2000/svg"><g stroke="#FFF" stroke-width="6" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M18 3v100M3 95.484l15 15 15-15"/></g></svg>
    </div>
  );
}

export default App;
