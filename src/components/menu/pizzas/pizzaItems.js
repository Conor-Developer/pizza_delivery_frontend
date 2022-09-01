import React, { Component } from "react";

class PizzaItem extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
    };
  }

  render() {
    return (
      <div className="PizzaItem">
        <img
          style={{ width: 250, height: 250 }}
          alt={this.props.item.type}
          src={this.props.item.image}
        />
        <p className="PizzaName">{this.props.item.type}</p>
        <select className="size" name="size" id={this.props.item.id}>
          <option>Small: £{this.props.item.prices.small}</option>
          <option>Medium: £{this.props.item.prices.medium}</option>
          <option>Large: £{this.props.item.prices.large}</option>
          <option>Extra Large: £{this.props.item.prices.extra_large}</option>
        </select>

        <button className="order">Add</button>
      </div>
    );
  }
}

export default PizzaItem;
