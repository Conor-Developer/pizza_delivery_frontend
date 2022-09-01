import React from "react";
import Header from "./components/header/header";
import Pizza from "./components/menu/pizzas/pizzas";
import Footer from "./components/footer/footer";
import "./style.css";

function App() {
  return (
    <div>
      <Header />
      <Pizza />
      <Footer />
    </div>
  );
}

export default App;
