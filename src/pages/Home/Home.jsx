// import styles from './Home.module.css';
// import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFavorites } from "src/redux/favoritesSlice";
import { selectFavorites } from "src/redux/selectors";

const Home = () => {
  const dispatch = useDispatch();
  const persistedFavorites = useSelector(selectFavorites);
  if (!persistedFavorites?.favorites) {
    // initiation persist form
    dispatch(setFavorites(["initialValues"]));
  }
  console.log(persistedFavorites);
  return (
    <>
      <p>About rent</p>
    </>
  );
};

export default Home;
