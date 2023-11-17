import css from "./Button.module.css";

// eslint-disable-next-line react/prop-types
export const Button = ({ children, onClick, width, height }) => {
  //   const showTitle = () => {
  //     if (children === "+") {
  //       return "Add Contact";
  //     }
  //     if (children?._owner?.child?.return?.type?.name === "UserMenu") {
  //       return "Log Out";
  //     }
  //   };
  return (
    <button
      className={css.btn_bgc}
      type={children === "Search" ? "submit" : "button"}
      onClick={() => onClick()}
      style={{ width, height }}
      //   title={showTitle()}
    >
      {children}
    </button>
  );
};
