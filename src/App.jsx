import "./App.css";
import imgHero from "./images/Car-Hero-w-1024x427.jpg";

function App() {
  return (
    <div>
      <nav>
        <a href="/">about</a>
        <a href="/catalog">catalog</a>
        <a href="/favorites">favorites</a>
      </nav>
      <section className={"hero-section"}></section>
      <img
        src={imgHero}
        alt="a series of cars"
        className={"hero-img"}
        width={256}
        height={106}
      ></img>
      <h1 style={{ textAlign: "center" }}>Car Rental</h1>
    </div>
  );
}

export default App;
