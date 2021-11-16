import "./styles.css";
import Counter from "./Counter";
import Search from "./Search";
import GenreFilter from "./GenreFilter";

export default function App() {
  return (
    <div className="App">
      <Counter />
      <br />
      <br />
      <Search />
      <br />
      <GenreFilter />
    </div>
  );
}
