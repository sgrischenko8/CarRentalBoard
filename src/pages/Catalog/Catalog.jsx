import css from './Catalog.module.css';
import { fetchCars } from 'src/redux/operations';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
  selectCars,
  selectLoading,
  selectError,
  selectContactsToRender,
} from 'src/redux/selectors';

import { CardList } from 'src/components/CardList/CardList';
import { SearchForm } from 'src/components/SearchForm/SearchForm';
import { Loader } from 'src/components/Loader/Loader';
import { PaginatedItems } from 'src/components/Paginator/Paginator';

const Catalog = () => {
  const dispatch = useDispatch();
  let location = useLocation();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const cars = useSelector(selectCars);

  const filteredCars = useSelector(selectContactsToRender);
  console.log(filteredCars);

  let pageCount = 3;

  const [currentPage, setCurrentPage] = useState(1);
  const [loadMore, setLoadMore] = useState(false);

  let allCars = [];
  allCars = location.state.allCars ? location.state.allCars : cars;
  if (location.state.allCars) {
    pageCount = Math.ceil(allCars.length / 12);
  }

  useEffect(() => {
    dispatch(fetchCars({ page: currentPage, limit: 12 }));
  }, [dispatch, currentPage]);

  return (
    <>
      <section className={css.catalog_section}>
        {loading && <Loader />}
        <SearchForm cars={loadMore ? allCars : cars} />
        {error && (
          <p className={css.catalog_error_message}>
            Looks like we have technical problems. Please try again or call
            +380730000000
          </p>
        )}
        <CardList cars={loadMore ? filteredCars : cars} />
        <PaginatedItems
          setCurrentPage={setCurrentPage}
          pageCount={loadMore ? 0 : location.state.allCars ? pageCount : 3}
        />
        {cars.length > 0 && (
          <button type="button" onClick={() => setLoadMore(true)}>
            Load more
          </button>
        )}
      </section>
    </>
  );
};

export default Catalog;
