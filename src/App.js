import React, { Component } from "react";

export class App extends Component {
  state = {
    n1: "",
    n2: "",
    res: ""
  };

  handleChange1 = (event) => {
    this.setState({
      n1: Number(event.target.value)
    });
  };

  handleChange2 = (event) => {
    this.setState({
      n2: Number(event.target.value)
    });
  };
  
  div = () => {
    const { n1, n2 } = this.state;
    this.setState({
      res: this.state.n1 / this.state.n2
    });
  };

  mult = () => {
    this.setState({
      res: this.state.n1 * this.state.n2
    })
  }

  menos = () => {
    this.setState({
      res: this.state.n1 - this.state.n2
    })
  }

  soma = () => {
    this.setState({
      res: this.state.n1 + this.state.n2
    })
  }

  apagar = () => {
    this.setState({
      n1: '',
      n2: '',
      res: ''
    })
  }


  render() {
    return (
      <div>
        <h1>Calc App</h1>
        <input onChange={this.handleChange1} value={this.state.n1}/>
        <input onChange={this.handleChange2} value={this.state.n2}/>
        <button onClick={this.div}>/</button>
        <button onClick={this.mult}>*</button>
        <button onClick={this.menos}>-</button>
        <button onClick={this.soma}>+</button>
        <button onClick={this.apagar}>c</button>
        <h2>{this.state.res}</h2>
      </div>
    );
  }
}

export default App;
