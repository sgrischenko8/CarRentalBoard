import css from './Loader.module.css';
import { CarIcon } from '../CarIcon/CarIcon';

export const Loader = () => {
  return (
    <div className={css.loader_container}>
      <CarIcon fill={'blue'} fillTire={'black'} stroke={'red'} />
    </div>
  );
};
