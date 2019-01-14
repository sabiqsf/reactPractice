import React, { Component } from 'react';

class Counter extends Component {
  constructor(props){
    super(props);
    this.state={currentNumber: this.props.initialNumber,};
  }

  increment(){
    this.setState((previousState) => ({
      currentNumber : previousState.currentNumber+1,
    }));
  }

  decrement(){
    if(this.state.currentNumber > this.props.initialNumber){
      this.setState((previousState)=>({
      currentNumber: previousState.currentNumber - 1,
      }));
    }

  }
  render() {
    return (
  <div>
 <b>{this.state.currentNumber}</b>

 <button onClick={() => this.increment()}> Increment </button>
 <button onClick={() => this.decrement()}> Decrement </button>

  </div>

    );
  }
}

export default Counter;
