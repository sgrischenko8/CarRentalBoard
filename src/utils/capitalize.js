// function to deal with Chrome capitalize bug
export const capitalize = (string) => {
  if (string === 'SUV' || string === 'HUMMER') {
    const capitalized =
      string.charAt(0).toUpperCase() + string.toLowerCase().slice(1);
    return capitalized;
  }
  return string;
};
