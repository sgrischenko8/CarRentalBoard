import css from './Message.module.css';

export const Message = ({ string }) => {
  return <p className={css.message}>{string}</p>;
};
