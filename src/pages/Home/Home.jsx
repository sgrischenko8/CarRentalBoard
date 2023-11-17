// import styles from './Home.module.css';
// import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFavorites } from "src/redux/favoritesSlice";
import { selectFavorites } from "src/redux/selectors";
import imgHero from "src/images/Car-Hero-w-1024x427.jpg";

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
      <section className={"hero-section"}></section>
      <img
        src={imgHero}
        alt="a series of cars"
        className={"hero-img"}
        width={256}
        height={106}
      ></img>
      <h1 style={{ textAlign: "center" }}>Rentik</h1>
    </>
  );
};

export default Home;
