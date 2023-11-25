import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectFilter } from 'src/redux/selectors';
import { CardList } from 'src/components/CardList/CardList';
import { SearchForm } from 'src/components/SearchForm/SearchForm';
import { Loader } from 'src/components/Loader/Loader';
import { PaginatedItems } from 'src/components/Paginator/Paginator';
import { Message } from 'src/components/Message/Message';
import { getCarsToRender } from 'src/utils/getCarsToRender';
import { useGetCarsQuery } from 'src/redux/carsSlice';

const Catalog = () => {
  let location = useLocation();
  const filter = useSelector(selectFilter);

  let pageCount = 3;

  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(12);

  const {
    data: cars,
    isLoading,
    error,
  } = useGetCarsQuery({
    page: currentPage,
    limit,
  });
  console.log(cars, 'in catalog');

  let carsQuantity = 0;
  carsQuantity = location?.state?.carsQuantity
    ? location.state.carsQuantity
    : cars?.length;
  if (location?.state?.carsQuantity) {
    pageCount = Math.ceil(carsQuantity / 12);
  }

  // creating array with range of rental prices
  const getRentalPriceRangeOptions = (array) => {
    let rentalPriceArray = [];
    array.map((el) =>
      rentalPriceArray.push(
        Number(el.rentalPrice.slice(1, el.rentalPrice.length)),
      ),
    );

    let maxRange = Math.ceil(Math.max(...rentalPriceArray) / 10) * 10;
    let minRange = Math.ceil(Math.min(...rentalPriceArray) / 10) * 10;

    let rentalPriceRangeArray = [];

    let acc = minRange;

    while (acc <= maxRange) {
      rentalPriceRangeArray.push(acc);
      acc += 10;
    }

    return rentalPriceRangeArray;
  };

  return (
    <>
      <section>
        {isLoading && <Loader />}
        {cars && <SearchForm price={getRentalPriceRangeOptions(cars)} />}
        {error && (
          <Message
            string={
              'Looks like we have technical problems. Please try again or call +380730000000'
            }
          />
        )}
        {!isLoading && cars.length === 0 && (
          <Message string={'No results for such request'} />
        )}
        {cars && (
          <>
            <CardList cars={getCarsToRender(cars, filter)} />
            <PaginatedItems
              setCurrentPage={setCurrentPage}
              pageCount={
                limit !== 12 ? 0 : location?.state?.carsQuantity ? pageCount : 3
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
          </>
        )}
      </section>
    </>
  );
};

export default Catalog;
