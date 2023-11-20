import css from './SearchForm.module.css';
import { Button } from 'src/components/Button/Button';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
    formData.mileageMin =
      +event.target.mileageMin.value.replace(',', '.') * 1000;
    formData.mileageMax =
      +event.target.mileageMax.value.replace(',', '.') * 1000;

    dispatch(setFilter(formData));
  };

  const onChageHandler = (value, stateValue, setValue) => {
    if (value.includes('.')) {
      return;
    }
    if (!stateValue) {
      if (isNaN(value)) {
        return;
      }
    }
    if (isNaN(value.replace(',', ''))) {
      return;
    }

    if (!stateValue || stateValue === '0') {
      setValue((+value / 1000).toString().slice(0, 5).replace('.', ','));
      return;
    }

    let modify = value.replace(',', '.');

    let decrModify = '';
    let incrModify = '';
    if (stateValue.length > value.length) {
      decrModify = (+modify / 10).toString().slice(0, 5).replace('.', ',');
      if (decrModify.indexOf(',') === 1) {
        decrModify = decrModify.slice(0, 5);
      }
    } else {
      if (+modify > 9.9999) {
        return;
      }
      incrModify = (+modify * 10).toString().slice(0, 5).replace('.', ',');
      if (incrModify.indexOf(',') === 2) {
        incrModify = incrModify + '0';
      }
    }

    setValue(stateValue.length > value.length ? decrModify : incrModify);
  };

  return (
    <form className={css.catalog_search_form} onSubmit={handleSubmit}>
      <label className={css.catalog_brand_label}>
        Car brand
        <Select
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
            className={css.catalog_mileage_input}
            onChange={(e) =>
              onChageHandler(e.target.value, mileageFrom, setMileageFrom)
            }
            value={mileageFrom}
          />
          <label htmlFor="mileage-from">From</label>
          <input
            name="mileageMax"
            width={160}
            onChange={(e) =>
              onChageHandler(e.target.value, mileageTo, setMileageTo)
            }
            value={mileageTo}
          />
          <label htmlFor="mileage-to">To</label>
        </div>
      </fieldset>
      <button type="submit">ok</button>
      {/* <Button
        onClick={() => {
          return;
        }}
        width={136}
        height={48}
      >
        Search
      </Button> */}
    </form>
  );
};
