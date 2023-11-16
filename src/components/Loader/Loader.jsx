import carIcon from "/car.svg";
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.loader_container}>
      <img
        src={carIcon}
        alt="loader"
        height={100}
        width={100}
        className={css.loader}
      />
    </div>
  );
};

export default Loader;
