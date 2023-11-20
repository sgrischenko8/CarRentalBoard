import css from './CarImage.module.css';

import { useState } from 'react';

import { CarIcon } from 'src/components/CarIcon/CarIcon';
import imgVolvo from 'src/images/volvo_xc60.webp';

export const CarImage = ({ make, model, isInModal }) => {
  const [error, setError] = useState(false);

  return (
    <div
      className={css.card_thumb}
      style={{
        padding: error ? (isInModal ? '80px 173px' : '80px') : 0,
      }}
    >
      {error ? (
        <CarIcon
          fill={'#3470ff50'}
          fillTire={'#00000020'}
          stroke={'#00000020'}
        />
      ) : (
        <img
          src={imgVolvo}
          alt={`${make} ${model}`}
          className={css.card_img}
          width={isInModal ? 461 : 274}
          height={isInModal ? 248 : 268}
          loading="lazy"
          onError={() => {
            setError(true);
          }}
        />
      )}
    </div>
  );
};
