// import { useState, useEffect, useRef } from "react";
// import { useSearchParams } from "react-router-dom";
import Loader from 'src/components/Loader/Loader';
// import styles from "./Movies.module.css";

const Favorites = () => {
  // useEffect(() => {
  //   if (isFirstRender.current) {
  //     isFirstRender.current = false;
  //     setLoading(false);
  //   }
  //   if (search === "") {
  //     return;
  //   }

  //   renderSearchedMovies(search);
  // }, [search]);

  return (
    <>
      <p>Favorites test</p>
      <Loader />
    </>
  );
};

export default Favorites;
