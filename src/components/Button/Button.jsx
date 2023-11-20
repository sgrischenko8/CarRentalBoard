import css from './Button.module.css';

export const Button = ({ children, onClick, width, height }) => {
  return (
    <button
      className={css.btn_bgc}
      type={children === 'Search' ? 'submit' : 'button'}
      onClick={() => onClick()}
      style={{ width, height }}
      title={children}
    >
      {children}
    </button>
  );
};
