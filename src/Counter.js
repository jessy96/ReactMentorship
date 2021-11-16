import { PureComponent } from "react";
import MyButton from "./MyButton";

export default class Counter extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { counterValue: "0" };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  render() {
    return (
      <div id="counter">
        <h4>Counter</h4>
        <h4 id="counterValue">{this.state.counterValue}</h4>
        <div id="controlButtons">
          <MyButton name="increment" onClick={this.increment} />
          <MyButton name="decrement" onClick={this.decrement} />
        </div>
      </div>
    );
  }

  increment() {
    let counterValue = this.state.counterValue;
    counterValue++;
    this.setState({ counterValue: counterValue });
  }

  decrement() {
    let counterValue = this.state.counterValue;
    counterValue--;
    this.setState({ counterValue: counterValue });
  }
}
