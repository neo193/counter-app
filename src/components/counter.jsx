import React, { Component } from "react";

class Counter extends Component {
  getBadgeClasses() {
    var classes = "badge m-2 bg-";
    classes += this.props.value === 0 ? "warning" : "primary";
    return classes;
  }

  counterDisplay() {
    const { value } = this.props;
    return value === 0 ? "Zero" : value;
  }

  render() {
    return (
      <div className="d-flex mt-2">
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
          onClick={() => this.props.onIncrement(this.props.id)}
        >
          +
        </button>
        <button
          style={{ width: "60px", height: "40px" }}
          className="btn btn-secondary m-2"
          onClick={() => this.props.onDecrement(this.props.id)}
          disabled={this.props.value === 0}
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
          onClick={() => this.props.onReset(this.props.id)}
          hidden={this.props.value === 0}
        >
          Reset
        </button>
      </div>
    );
  }
}

export default Counter;
