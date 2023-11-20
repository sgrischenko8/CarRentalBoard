import { createSelector } from '@reduxjs/toolkit';

export const selectFavorites = (state) => state.favorites;

export const selectAllCars = (state) => state.allCars.items;
export const selectCars = (state) => state.cars.items;
export const selectLoading = (state) => state.cars.isLoading;
export const selectError = (state) => state.cars.error;

export const selectFilter = (state) => state.filter;

export const selectContactsToRender = createSelector(
  [selectAllCars, selectFilter],
  (cars, filter) => {
    if (Object.values(filter).every((el) => el === 0 || el === '')) {
      return cars;
    }
    let filteredByBrandCars = [...cars];
    if (filter.brand) {
      filteredByBrandCars = cars.filter(
        (car) => car.make.toLowerCase() === filter.brand.toLowerCase(),
      );
    }

    let filteredByPriceCars = [...filteredByBrandCars];
    if (filter.rentalPrice) {
      filteredByPriceCars = filteredByBrandCars.filter(
        (car) => +car.rentalPrice.replace('$', '') < filter.rentalPrice,
      );
    }

    let filteredByMinMileageCars = [...filteredByPriceCars];
    if (filter.mileageMin) {
      filteredByMinMileageCars = filteredByPriceCars.filter(
        (car) => car.mileage >= filter.mileageMin,
      );
    }
    let filteredByMaxMileageCars = [...filteredByMinMileageCars];
    if (filter.mileageMax) {
      filteredByMaxMileageCars = filteredByMinMileageCars.filter(
        (car) => car.mileage <= filter.mileageMax,
      );
    }

    return filteredByMaxMileageCars;
  },
);
