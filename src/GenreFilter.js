import { Component } from "react";

export default class GenreFilter extends Component {
  constructor(props) {
    super(props);
    this.state = { genres: ["ALL", "DOCUMENTARY", "COMEDY", "HOROR", "CRIME"] };
  }

  render() {
    return (
      <div className="genreFilter">
        {this.state.genres.map((genre) => (
          <a key={genre} href="/filter">
            {genre}{" "}
          </a>
        ))}
      </div>
    );
  }
}
