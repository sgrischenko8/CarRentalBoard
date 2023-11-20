import css from './Home.module.css';
import imgHero from 'src/images/Car-Hero-w-1024x427.jpg';

const Home = () => {
  return (
    <>
      <section className={css.hero_section}>
        <img
          src={imgHero}
          alt="a series of cars"
          className={css.hero_img}
          width={1024}
          height={427}
        ></img>
        <h1 className={css.hero_title}>Rentik</h1>
        <div className={css.border}></div>
        <div className={css.flex_container}>
          <p className={css.text}>
            Welcome to <span className={css.colored}>Rentik</span>, where your
            journey begins with unparalleled comfort and convenience. We
            understand that your travel experience is not just about reaching
            your destination; it's about the joy of the journey itself. That's
            why we prioritize your comfort every step of the way.
            <br />
          </p>
          <p className={css.text}>
            Our fleet of meticulously maintained vehicles is designed with your
            needs in mind, ensuring a smooth and enjoyable ride. From spacious
            interiors to cutting-edge technology, we've curated an array of cars
            that redefine comfort on the road. Whether you're embarking on a
            business trip or a family vacation, our diverse selection ensures
            there's a perfect vehicle for every occasion.
          </p>
          <p className={css.text}>
            We truly go beyond just providing cars; we deliver an experience
            tailored to your comfort preferences. Our customer-centric approach
            means that every vehicle undergoes rigorous quality checks,
            promising reliability and peace of mind throughout your journey.
          </p>
          <p className={css.text}>
            Booking with us is seamless and stress-free. Our user-friendly
            website and dedicated customer support are here to assist you at
            every stage, ensuring your reservation process is as comfortable as
            your drive with us. We value your time and strive to make renting a
            car a hassle-free experience.
          </p>
          <p className={css.text}>
            Customer comfort is not just a promise; it's our commitment. From
            the moment you choose Rentik, you're not just renting a car; you're
            investing in a journey marked by comfort, reliability, and
            satisfaction. Thank you for choosing us to be a part of your travel
            story. Safe travels!
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
