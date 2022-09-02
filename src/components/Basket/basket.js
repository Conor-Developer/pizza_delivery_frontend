import React from "react";

function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;

  return (
    <aside className="cart">
      <h2>Cart Items</h2>
      <div>{cartItems.length === 0 && <div>Cart is Empty</div>}</div>
      {cartItems.map((item) => (
        <div key={item.id} className="row">
          <div>
            {item.type} - {item.size}
          </div>
          <div>
            <button onClick={() => onAdd(item)} className="add">
              +
            </button>
            <button onClick={() => onRemove(item)} className="remove">
              -
            </button>
          </div>
          <div>
            {item.qty} x ${item.price}
          </div>
        </div>
      ))}
    </aside>
  );
}

export default Basket;
