import { Component } from "react";

class MyButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.name,
      onClick: props.onClick
    };
  }

  render() {
    return (
      <button type="button" onClick={this.state.onClick}>
        {this.state.name}
      </button>
    );
  }
}

export default MyButton;
