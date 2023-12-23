import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 1 },
      { id: 4, value: 0 },
    ],
  };

  handleAddMore = () => {
    const { counters } = this.state;

    const lastCounter =
      counters.length > 0 ? counters[counters.length - 1] : null;

    const newCounter = {
      id: lastCounter ? lastCounter.id + 1 : 1,
      value: 0,
    };

    this.setState({
      counters: [...counters, newCounter],
      total: 0,
    });
  };

  handleDelete = (counterId) => {
    const newCounters = this.state.counters.filter(
      (counter) => counter.id !== counterId
    );
    this.setState({ counters: newCounters });
  };

  render() {
    return (
      <div>
        <nav
          className="navbar bg-dark border-bottom border-body"
          data-bs-theme="dark"
        >
          <div className="container">
            <span className="navbar-brand mb-0 h1">Navbar</span>
          </div>
        </nav>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            id={counter.id}
            onDelete={this.handleDelete}
            value={counter.value}
            selected={true}
          />
        ))}
        <div className="d-flex flex-column container mt-2">
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
            onClick={this.handleAddMore}
          >
            Add More
          </button>
        </div>
      </div>
    );
  }
}

export default Counters;
