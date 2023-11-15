// import {  useParams } from "react-router-dom";

// import styles from "./MovieDetails.module.css";

const Catalog = () => {
  // useEffect(() => {
  //   async function renderMovieDetails() {
  //     setLoading(true);

  //     try {
  //       const data = await API.fetchMovieDetails(movieId);
  //       const details = {
  //         poster: data.poster_path,
  //         title: data.title,
  //         year: Number.parseInt(data.release_date),
  //         score: data.vote_average ? Math.round(data.vote_average * 10) : 0,
  //         genres: data.genres ? data.genres : [],
  //         descr: data.overview,
  //       };
  //       setMovieDetails(details);
  //     } catch (e) {
  //       console.log(e);
  //       setError("Something goes bad... Please, try later");
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   renderMovieDetails();
  // }, [movieId]);

  return (
    <>
      <p> Additional information</p>
    </>
  );
};

export default Catalog;
