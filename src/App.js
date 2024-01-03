import React, { Component } from 'react';
import Navbar from './components/navbar';
import Counters from './components/counters';
import Footer from './components/footer';

class App extends Component {
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

  handleIncrement = (counterID) => {
    const counters = [...this.state.counters];
    const counter = counters.find((c) => c.id === counterID);

    if (counter) {
      counter.value++;
      this.setState({ counters });
    }
  };

  handleDecrement = (counterID) => {
    const counters = [...this.state.counters];
    const counter = counters.find((c) => c.id === counterID);

    if (counter) {
      counter.value--;
      this.setState({ counters });
    }
  };

  handleDelete = (counterId) => {
    const newCounters = this.state.counters.filter(
      (counter) => counter.id !== counterId
    );
    this.setState({ counters: newCounters });
  };

  handleReset = (counterID) => {
    const counters = [...this.state.counters];
    const counter = counters.find((c) => c.id === counterID);

    if (counter) {
      counter.value = 0;
      this.setState({ counters });
    }
  };

  formatTopCount() {
    return this.state.counters.filter((counter) => counter.value > 0).length;
  }
  render() {
    return (<React.Fragment>
      <Navbar formatCount={this.formatTopCount()} />
      <main className='container'>
        <Counters counters={this.state.counters}
          onAddMore={this.handleAddMore}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onReset={this.handleReset} />
      </main>
      <Footer />
    </React.Fragment>)
  }
}

export default App;