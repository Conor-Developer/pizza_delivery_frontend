import React from "react";

function PizzaItem(props) {
  return (
    <div className="PizzaItem">
      <img
        style={{ width: 250, height: 250 }}
        alt={props.item.type}
        src={props.item.image}
      />
      <p className="PizzaName">{props.item.type}</p>
      <select className="size" name="size" id={props.item.id}>
        <option>Small: £{props.item.prices.small}</option>
        <option>Medium: £{props.item.prices.medium}</option>
        <option>Large: £{props.item.prices.large}</option>
        <option>Extra Large: £{props.item.prices.extra_large}</option>
      </select>

      <button className="order">Add</button>
    </div>
  );
}

export default PizzaItem;
