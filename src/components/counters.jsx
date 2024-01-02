import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            id={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            onReset={this.props.onReset}
            value={counter.value}
            selected={true}
          />
        ))}
        <div className="d-flex flex-column mt-2">
          <button
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: 25,
              width: "150px",
              height: "40px",
            }}
            className="btn btn-primary m-2 mt-4"
            onClick={this.props.onAddMore}
          >
            Add More
          </button>
        </div>
      </div>
    );
  }
}

export default Counters;
