import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: props.initialCount,
    };
  }

  changeCount(amount) {
    //this.setState({count: this.state.count + amount})  //this is non function version of updating state. It is used when no previous state is used. Its safer to use function version of updating state.

    this.setState((prevState) => ({ count: prevState.count + amount }));
    //this is function version of updating state.It is used when previous state is used
    //to return object requires parentheses around object expression
  }

  render() {
    //console.log("render Counter Component")
    return (
        //child component here if exist. <component />
      <div>
        <button onClick={() => this.changeCount(-1)}>-</button>
        <span>{this.state.count}</span>
        <button onClick={() => this.changeCount(1)}>+</button>
      </div>
    );
  }
}

//everytime we change the state , react re-renders the application. This is really powerful. This will re- render only that component where the state lie inside and as well as child component that are rendered from that component.  .e.g. Counter component will re-render but App component will not re-render.
