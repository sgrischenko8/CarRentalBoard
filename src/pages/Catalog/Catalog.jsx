import { fetchCars } from 'src/redux/operations';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
  selectContactsToRender,
  selectLoading,
  selectError,
} from 'src/redux/selectors';

import { CardList } from 'src/components/CardList/CardList';
import { SearchForm } from 'src/components/SearchForm/SearchForm';
import { Loader } from 'src/components/Loader/Loader';
import { PaginatedItems } from 'src/components/Paginator/Paginator';
import { Message } from 'src/components/Message/Message';

const Catalog = () => {
  const dispatch = useDispatch();
  let location = useLocation();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const cars = useSelector(selectContactsToRender);

  let pageCount = 3;

  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(12);

  let allCars = [];
  allCars = location?.state?.allCars ? location.state.allCars : cars;
  if (location?.state?.allCars) {
    pageCount = Math.ceil(allCars.length / 12);
  }

  useEffect(() => {
    dispatch(fetchCars({ page: currentPage, limit }));
  }, [dispatch, currentPage, limit]);

  return (
    <>
      <section>
        {loading && <Loader />}
        <SearchForm cars={cars} />
        {error && (
          <Message
            string={
              'Looks like we have technical problems. Please try again or call +380730000000'
            }
          />
        )}
        {!loading && cars.length === 0 && (
          <Message string={'No results for such request'} />
        )}
        <CardList cars={cars} />
        <PaginatedItems
          setCurrentPage={setCurrentPage}
          pageCount={
            limit !== 12 ? 0 : location?.state?.allCars ? pageCount : 3
          }
        />
        {limit === 12 && (
          <button
            type="button"
            title="Load more"
            onClick={() => {
              setCurrentPage(1);
              setLimit(undefined);
            }}
          >
            Load more
          </button>
        )}
      </section>
    </>
  );
};

export default Catalog;
