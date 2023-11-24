import css from './SearchForm.module.css';
import { Button } from 'src/components/Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'src/redux/filterSlice';

import Select from 'react-select';
import { brands } from 'src/brands';

import { reactSelectStyle } from './reactSelectStyle';
import { capitalize } from 'src/utils/capitalize';

export const SearchForm = ({ cars }) => {
  const dispatch = useDispatch();

  const [chosenRentalPrice, setChosenRentalPrice] = useState('');
  const [mileageFrom, setMileageFrom] = useState('');
  const [mileageTo, setMileageTo] = useState('');

  // creating object in the form necessary for the work of the select.
  const getOptions = (array) =>
    array.map((item) => {
      return { value: capitalize(item), label: capitalize(item) };
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

  const handleSubmit = (event) => {
    event.preventDefault();
    let formData = {};
    if (event.target.rentalPrice.value !== 'To $') {
      formData.rentalPrice = +event.target.rentalPrice.value
        .replace('$', '')
        .match(/\d+/)[0];
    }
    formData.brand = event.target.brand.value;

    const mileageMin = +event.target.mileageMin.value.replaceAll(',', '');
    const mileageMax = +event.target.mileageMax.value.replaceAll(',', '');

    if (mileageMin <= mileageMax) {
      formData.mileageMin = mileageMin;
      formData.mileageMax = mileageMax;
    }
    dispatch(setFilter(formData));
  };

  // function for transforming usual input "4500" in format "4,500"
  const onChageHandler = (value, setValue) => {
    if (isNaN(value.replaceAll(',', ''))) {
      const removerdLastSymbol = value.slice(0, -1);
      setValue(removerdLastSymbol);
      return;
    }
    if (value.length > 10) {
      return;
    }
    let number = 0;
    if (value.includes(',')) {
      let text = value.replaceAll(',', '');
      number = +text;
    } else {
      number = +value;
    }
    const res = number.toLocaleString('ja-JP');
    setValue(res);
  };

  return (
    <form className={css.catalog_search_form} onSubmit={handleSubmit}>
      <label className={css.catalog_brand_label}>
        Car brand
        <Select
          isClearable={true}
          name={'brand'}
          placeholder={'Enter the text'}
          options={getOptions(brands)}
          styles={reactSelectStyle}
        />
      </label>
      <label className={css.catalog_price_label}>
        Price/ 1 hour
        <Select
          name={'rentalPrice'}
          value={{
            value: `To ${chosenRentalPrice}$`,
            label: `To ${chosenRentalPrice}$`,
          }}
          placeholder={'To $'}
          options={getOptions(getRentalPriceRangeOptions(cars))}
          onChange={(e) => {
            setChosenRentalPrice(e.value);
          }}
          styles={reactSelectStyle}
        />
      </label>
      <fieldset className={css.catalog_mileage_fieldset}>
        <legend>Car mileage / km</legend>
        <div style={{ display: 'flex', position: 'relative' }}>
          <input
            name="mileageMin"
            id="mileageMin"
            className={css.catalog_mileage_input}
            onChange={(e) => onChageHandler(e.target.value, setMileageFrom)}
            value={mileageFrom}
          />
          <label htmlFor="mileageMin">From</label>
          <input
            id="mileageMax"
            name="mileageMax"
            width={160}
            onChange={(e) => onChageHandler(e.target.value, setMileageTo)}
            value={mileageTo}
          />
          <label htmlFor="mileageMax">To</label>
        </div>
      </fieldset>

      <Button
        onClick={() => {
          return false;
        }}
        width={136}
        height={48}
      >
        Search
      </Button>
    </form>
  );
};
