import css from './Modal.module.css';
import styled from '../Button/Button.module.css';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { CarImage } from '../CarImage/CarImage';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, car, capitalize }) => {
  const {
    make,
    model,
    img,
    year,
    address,
    type,
    id,
    fuelConsumption,
    engineSize,
    description,
    accessories,
    functionalities,
    rentalConditions,
    mileage,
    rentalPrice,
  } = car;

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.code === 'Escape') {
        onClose();
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (
      e.target.nodeName === 'DIV' &&
      e.target?.className.includes('overlay')
    ) {
      onClose();
    }
  };

  const getRentalConditions = () => {
    const array = [
      ...rentalConditions.split('\n'),
      mileage / 1000,
      rentalPrice.split('$')[1] + '$',
    ];
    return array;
  };

  const getOneCondition = (el) => {
    if (typeof el === 'string' && el.startsWith('Minimum age:')) {
      return (
        <>
          {el.split(': ')[0] + ': '}
          <span>{el.split(': ')[1]}</span>
        </>
      );
    }
    if (typeof el === 'number') {
      return (
        <>
          {'Mileage: '}
          <span>{el.toString().replace('.', ',')}</span>
        </>
      );
    }
    if (el.includes('$')) {
      return (
        <>
          {'Price: '}
          <span>{el}</span>
        </>
      );
    }
    return el;
  };

  return createPortal(
    <div className={css.overlay} onMouseDown={handleBackdropClick}>
      <div className={css.modal}>
        <button className={css.modal_close_btn} onClick={() => onClose()}>
          +
        </button>
        <CarImage make={make} model={model} img={img} isInModal={true} />
        <div className={css.modal_flex_column_container}>
          <div>
            <div className={css.modal_flex_container}>
              <h3>{make}</h3>&nbsp;
              <span className={css.modal_color_text}>{model}</span>,&nbsp;
              <span>{year}</span>&nbsp;
            </div>
            <div className={css.modal_tags_container}>
              <div>
                <span>{address.split(', ')[1]}</span>|
                <span>{address.split(', ')[2]}</span>|<span>{`Id: ${id}`}</span>
                |<span>{`Year: ${year}`}</span>|
                <span
                  className={css.modal_capitalize_text}
                >{`Type: ${capitalize(type)}`}</span>
              </div>
              <div>
                <span>{`Fuel Consumption: ${fuelConsumption}`}</span>|
                <span>{`Engine Size: ${engineSize}`}</span>
              </div>
            </div>
            <p className={css.modal_text}>{description}</p>
          </div>
          <div>
            <h4 className={css.modal_undertitle}>
              Accessories and functionalities:
            </h4>
            <div className={css.modal_tags_container}>
              <ul>
                {accessories.map((el, index) => (
                  <li key={index}>
                    <span>{el}</span>
                    {index !== accessories.length - 1 && '|'}
                  </li>
                ))}
              </ul>
              <ul>
                {functionalities.map((el, index) => (
                  <li key={index}>
                    <span>{el}</span>
                    {index !== functionalities.length - 1 && '|'}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <h4 className={css.modal_undertitle}>Rental Conditions:</h4>
            <ul className={css.modal_wrap_container}>
              {getRentalConditions().map((el, index) => (
                <li key={index}>{getOneCondition(el)}</li>
              ))}
            </ul>
          </div>
          <a
            className={styled.btn_bgc}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '168px',
              height: '44px',
            }}
            href="tel:+380730000000"
            title="Call +380730000000"
          >
            Rental car
          </a>
        </div>
      </div>
    </div>,
    modalRoot,
  );
};
