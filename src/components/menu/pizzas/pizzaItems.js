import React, { Component } from "react";

class PizzaItem extends Component {
  constructor() {
    super();
    this.state = {
      type: "",
      price: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const getKeyByValue = (event) => {
      return Object.keys(this.props.item.prices).filter(
        (element) => this.props.item.prices[element] == event
      );
    };

    this.setState({
      type: this.props.item.type,
      price: event.target.value,
      size: getKeyByValue(event.target.value),
    });
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

        <select
          className="size"
          id={this.props.item.id}
          onChange={this.handleChange}
          defaultValue={this.props.item.prices.small}
        >
          <option value={this.props.item.prices.small}>
            Small: £{this.props.item.prices.small}
          </option>
          <option value={this.props.item.prices.medium}>
            Medium: £{this.props.item.prices.medium}
          </option>
          <option value={this.props.item.prices.large}>
            Large: £{this.props.item.prices.large}
          </option>
          <option value={this.props.item.prices.extra_large}>
            Extra Large: £{this.props.item.prices.extra_large}
          </option>
        </select>
        <button onClick={() => this.props.onAdd(this.state)}>Add</button>
      </div>
    );
  }
}

export default PizzaItem;
