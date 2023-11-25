import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from './Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { setFavorites } from 'src/redux/favoritesSlice';
import { selectFavorites } from 'src/redux/selectors';
import { setFilter } from 'src/redux/filterSlice';
import { useGetAllCarsQuery } from 'src/redux/carsSlice';

export const Layout = () => {
  const dispatch = useDispatch();
  const persistedFavorites = useSelector(selectFavorites);
  if (!persistedFavorites?.favorites) {
    // initiation persist form
    dispatch(setFavorites([]));
  }

  let carsQuantity;

  const { data: allCars } = useGetAllCarsQuery();
  if (allCars) {
    carsQuantity = allCars.length;
  }

  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">About</NavLink>
            </li>
            <li>
              <NavLink
                to="/catalog"
                state={{ carsQuantity }}
                onClick={() => dispatch(setFilter({}))}
              >
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
      <footer>&copy; copyright</footer>
    </div>
  );
};
