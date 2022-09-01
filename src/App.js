import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Pizza from "./components/menu/pizzas/pizzas";
import Footer from "./components/footer/footer";
import Basket from "./components/Basket/basket";
import "./style.css";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Pizza />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
