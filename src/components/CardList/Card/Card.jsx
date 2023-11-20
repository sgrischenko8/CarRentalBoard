import css from './Card.module.css';
import { FavoriteBtn } from '../../FavoriteBtn/FavoriteBtn';
import { Button } from 'src/components/Button/Button';
import { CarImage } from 'src/components/CarImage/CarImage';
import { useState } from 'react';

import { Modal } from 'src/components/Modal/Modal';
import { capitalize } from 'src/utils/capitalize';

export const Card = ({ car }) => {
  const {
    _id,
    img,
    make,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    id,
  } = car;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <article className={css.card_container}>
      <FavoriteBtn id={_id} />
      <CarImage make={make} model={model} img={img} />
      <div className={css.card_flex_container}>
        <h3>{capitalize(make)}</h3>&nbsp;
        <span className={css.card_color_text}>{model}</span>,&nbsp;
        <span>{year}</span>&nbsp;
        <span>{rentalPrice}</span>
      </div>
      <div className={css.card_tags_container}>
        <div>
          <span>{address.split(', ')[1]}</span>|
          <span>{address.split(', ')[2]}</span>|<span>{rentalCompany}</span>
        </div>
        <div>
          <span className={css.card_capitalize_text}>{capitalize(type)}</span>|
          <span>{id}</span>|<span>{model}</span>
        </div>
      </div>
      <Button width={'100%'} height={44} onClick={() => setIsModalOpen(true)}>
        Learn more
      </Button>
      {isModalOpen && (
        <Modal onClose={toggleModal} car={car} capitalize={capitalize}></Modal>
      )}
    </article>
  );
};
