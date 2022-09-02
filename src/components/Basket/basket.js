import React from "react";

function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce(
    (accumulator, currentItem) =>
      accumulator + currentItem.price * currentItem.qty,
    0
  );
  const deliveryPrice = 5;
  const totalPrice = itemsPrice + deliveryPrice;

  return (
    <aside className="cart">
      <h2 className="cartTitle">Cart Items</h2>
      <div className="cartTitle">
        {cartItems.length === 0 && <div>Cart is Empty</div>}
      </div>
      {cartItems.map((item) => (
        <div key={item.id} className="row">
          <div className="itemAndSize">
            {item.type} - {item.size}
          </div>
          <div className="cartContainer">
            <div className="quantity">
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>
            </div>
            <div className="quantityPrice">
              {item.qty} x £{item.price}
            </div>
          </div>
        </div>
      ))}
      {cartItems.length !== 0 && (
        <div className="summaryContainer">
          <div className="priceInfo">
            <div className="summary sumText">Sub Total:</div>
            <div className="price1 price">£{itemsPrice.toFixed(2)}</div>
          </div>
          <div className="priceInfo">
            <div className="summary sumText">Delivery Price:</div>
            <div className="price2 price">£{deliveryPrice.toFixed(2)}</div>
          </div>
          <div className="priceInfo">
            <div className="summary sumText sumTotal">Total Price:</div>
            <div className="price3 price total">£{totalPrice.toFixed(2)}</div>
          </div>
          <div className="checkoutContainer">
            <button className="checkout">Checkout</button>
          </div>
        </div>
      )}
    </aside>
  );
}

export default Basket;
