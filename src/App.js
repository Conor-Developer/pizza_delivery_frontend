import React from "react";
import { useState } from "react";
import Header from "./components/header/header";
import Pizza from "./components/menu/pizzas/pizzas";
import Footer from "./components/footer/footer";
import Basket from "./components/Basket/basket";
import "./style.css";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find(
      (x) => x.id === product.id && x.price === product.price
    );
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id && x.price === product.price
            ? { ...exist, qty: exist.qty + 1 }
            : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find(
      (x) => x.id === product.id && x.price === product.price
    );
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id && x.price === product.price
            ? { ...exist, qty: exist.qty - 1 }
            : x
        )
      );
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="main">
        <Pizza onAdd={onAdd} />
        <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
