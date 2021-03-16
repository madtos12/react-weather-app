import React from "react";
import "./App.css";
import Weather from "./Weather";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather />
      <Footer />
    </div>
  );
}
