// import styles from './Home.module.css';
// import { useState, useEffect } from "react";

import imgHero from 'src/images/Car-Hero-w-1024x427.jpg';

const Home = () => {
  return (
    <>
      <section className={'hero-section'}></section>
      <img
        src={imgHero}
        alt="a series of cars"
        className={'hero-img'}
        width={256}
        height={106}
      ></img>
      <h1 style={{ textAlign: 'center' }}>Rentik</h1>
    </>
  );
};

export default Home;
