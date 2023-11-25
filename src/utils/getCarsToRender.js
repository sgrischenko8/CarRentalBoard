export const getCarsToRender = (cars, filter) => {
 

  if (Object.values(filter).every((el) => el === 0 || el === '')) {
    return cars;
  }
  let filteredByBrandCars = [...cars];
  if (filter.brand) {
    filteredByBrandCars = cars.filter((car) =>
      car.make.toLowerCase().includes(filter.brand.toLowerCase()),
    );
  }

  let filteredByPriceCars = [...filteredByBrandCars];
  if (filter.rentalPrice) {
    filteredByPriceCars = filteredByBrandCars.filter(
      (car) => +car.rentalPrice.replace('$', '') <= filter.rentalPrice,
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
};
