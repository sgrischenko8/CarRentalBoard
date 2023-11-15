import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";
import css from "./Layout.module.css";
import Loader from "./Loader/Loader";
import imgHero from "src/images/Car-Hero-w-1024x427.jpg";

const Layout = () => {
  return (
    <div>
      <header className={css.header}>
        <nav>
          <ul>
            {["About", "Catalog", "Favorites"].map((el) => (
              <li key={el}>{el}</li>
            ))}
          </ul>
          <NavLink to="/">About</NavLink>

          <NavLink to="catalog">Catalog</NavLink>

          <NavLink to="favorites">Favorites</NavLink>
        </nav>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
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
};

export default Layout;
