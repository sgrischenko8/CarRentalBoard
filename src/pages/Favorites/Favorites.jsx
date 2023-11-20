import styled from '../Catalog/Catalog.module.css';
import { selectFavorites } from 'src/redux/selectors';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { CardList } from 'src/components/CardList/CardList';

const Favorites = () => {
  const persistedFavorites = useSelector(selectFavorites);
  const favorites = persistedFavorites.favorites;

  let location = useLocation();
  const cars = location.state.allCars;

  let favoriteCars = [];
  if (cars) {
    favoriteCars = cars.filter((el) => favorites.includes(el._id));
  }

  return (
    <>
      {favoriteCars.length > 0 ? (
        <CardList cars={favoriteCars} />
      ) : (
        <p className={styled.catalog_error_message}>
          Your favorites is empty now
        </p>
      )}
    </>
  );
};

export default Favorites;
