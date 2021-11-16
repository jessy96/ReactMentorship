import { Component } from "react";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "What do you want to watch?" };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>FIND YOUR MOVIE</label>
          <br />
          <input
            type="text"
            value={this.state.value}
            onChange={this.onChange}
          />
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }

  onSubmit(event) {
    console.log(this.state.value);
    event.preventDefault();
  }

  onChange(event) {
    this.setState({ value: event.target.value });
  }
}
