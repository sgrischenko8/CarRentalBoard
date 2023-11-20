import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { useEffect } from 'react';
import { Loader } from './Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { setFavorites } from 'src/redux/favoritesSlice';
import { selectFavorites } from 'src/redux/selectors';
import { fetchAllCars } from 'src/redux/operations';
import { selectAllCars } from 'src/redux/selectors';

export const Layout = () => {
  const dispatch = useDispatch();
  const persistedFavorites = useSelector(selectFavorites);
  if (!persistedFavorites?.favorites) {
    // initiation persist form
    dispatch(setFavorites([]));
  }

  const allCars = useSelector(selectAllCars);

  useEffect(() => {
    dispatch(fetchAllCars());
  }, []);

  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">About</NavLink>
            </li>
            <li>
              <NavLink to="/catalog" state={{ allCars }}>
                Catalog
              </NavLink>
            </li>
            <li>
              <NavLink to="/favorites" state={{ allCars }}>
                Favorites
              </NavLink>
            </li>
          </ul>
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
