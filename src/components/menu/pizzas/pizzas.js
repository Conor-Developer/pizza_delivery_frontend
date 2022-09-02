import React, { Component } from "react";
import PizzaItem from "./pizzaItems";

class Pizza extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      pizza: [],
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch("http://localhost:8080/api/v1/pizza")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          loading: false,
          pizza: data,
        });
      });
  }

  render() {
    const pizzaItems = this.state.pizza.map((item) => (
      <PizzaItem key={item?.id} item={item} onAdd={this.props.onAdd} />
    ));
    return <div className="PizzaContainer">{pizzaItems}</div>;
  }
}

export default Pizza;
