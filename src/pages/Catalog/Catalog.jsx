// import {  useParams } from "react-router-dom";
import { useState } from 'react';
import Select from 'react-select';
import css from './Catalog.module.css';
import brands from '../../../public/makes.json';
import { Button } from '../../components/Button/Button';
import { cars } from 'src/advertCars';

const Catalog = () => {
  // useEffect(() => {
  //   async function renderMovieDetails() {
  //     setLoading(true);

  //     try {
  //       const data = await API.fetchMovieDetails(movieId);
  //       const details = {
  //         poster: data.poster_path,
  //         title: data.title,
  //         year: Number.parseInt(data.release_date),
  //         score: data.vote_average ? Math.round(data.vote_average * 10) : 0,
  //         genres: data.genres ? data.genres : [],
  //         descr: data.overview,
  //       };
  //       setMovieDetails(details);
  //     } catch (e) {
  //       console.log(e);
  //       setError("Something goes bad... Please, try later");
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   renderMovieDetails();
  // }, [movieId]);

  const [chosenRentalPrice, setChosenRentalPrice] = useState(null);

  const getOptions = (array) =>
    array.map((item) => {
      return { value: item, label: item };
    });

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
      <section className={css.catalog_section}>
        <form className={css.catalog_search_form}>
          <label className={css.catalog_brand_label}>
            Car brand
            <Select
              name={'brand'}
              placeholder={'Enter the text'}
              options={getOptions(brands)}
              onChange={(e) => {
                console.log(e.target);
              }}
            />
          </label>
          <label className={css.catalog_price_label}>
            Price/ 1 hour
            <select
              name="rentalPrice"
              value={''}
              onChange={(e) => setChosenRentalPrice(e.target.value)}
            >
              <option style={{ display: 'none' }} defaultValue>
                To {chosenRentalPrice}$
              </option>
              {getRentalPriceRangeOptions(cars).map((el) => (
                <option value={el} key={el}>
                  {el}
                </option>
              ))}
            </select>
          </label>
          <fieldset className={css.catalog_mileage_fieldset}>
            <legend>Car mileage / km</legend>
            <div style={{ display: 'flex' }}>
              <input
                name="mileage-from"
                className={css.catalog_mileage_input}
              />
              <input name="mileage-to" width={160} />
            </div>
          </fieldset>
          <Button onClick={getOptions} width={136} height={48}>
            Search
          </Button>
        </form>
      </section>
    </>
  );
};

export default Catalog;
