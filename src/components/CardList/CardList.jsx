import css from './CardList.module.css';

import { Card } from './Card/Card';

export const CardList = ({ cars }) => {
  return (
    <ul className={css.card_list}>
      {cars.map((el, index) => (
        <li key={index}>
          <Card car={el} />
        </li>
      ))}
    </ul>
  );
};
