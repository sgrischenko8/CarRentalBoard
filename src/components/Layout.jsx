import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";
// import css from "./Layout.module.css";
import Loader from "./Loader/Loader";

const Layout = () => {
  return (
    <div>
      <header>
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
      <footer>Copyright</footer>
    </div>
  );
};

export default Layout;
