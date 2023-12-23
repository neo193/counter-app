import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
  };

  handleIncrement = () => {
    this.setState((prevState) => ({
      value: prevState.value + 1,
    }));
  };

  handleDecrement = () => {
    this.setState((prevState) => ({
      value: prevState.value - 1,
    }));
  };

  handleReset = () => {
    this.setState(() => ({
      value: 0,
    }));
  };

  getBadgeClasses() {
    var classes = "badge m-2 bg-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  counterDisplay() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }

  render() {
    return (
      <div className="d-flex container mt-2">
        <span
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 25,
            width: "150px",
            height: "40px",
          }}
          className={this.getBadgeClasses()}
        >
          {this.counterDisplay()}
        </span>
        <button
          style={{ width: "60px", height: "40px" }}
          className="btn btn-secondary m-2"
          onClick={this.handleIncrement}
        >
          +
        </button>
        <button
          style={{ width: "60px", height: "40px" }}
          className="btn btn-secondary m-2"
          onClick={this.handleDecrement}
          disabled={this.state.value === 0}
        >
          -
        </button>
        <button
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "60px",
            height: "40px",
          }}
          className="btn btn-danger m-2"
          onClick={() => this.props.onDelete(this.props.id)}
        >
          Delete
        </button>
        <button
          style={{ width: "60px", height: "40px" }}
          className="btn btn-warning m-2"
          onClick={this.handleReset}
          hidden={this.state.value === 0}
        >
          Reset
        </button>
      </div>
    );
  }
}

export default Counter;
