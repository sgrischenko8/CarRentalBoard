import css from './Loader.module.css';
import { CarIcon } from '../CarIcon/CarIcon';

export const Loader = () => {
  return (
    <div className={css.loader_container}>
      <CarIcon fill={'#3470ff'} fillTire={'black'} />
    </div>
  );
};
