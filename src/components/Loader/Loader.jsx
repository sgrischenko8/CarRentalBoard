import carIcon from "../../../public/car.svg";
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.loader_container}>
      <img
        src={carIcon}
        alt="loader"
        height="120"
        width="120"
        className={css.loader}
      />
    </div>
  );
};

export default Loader;
