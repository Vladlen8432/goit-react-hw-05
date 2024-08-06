import { NavLink } from "react-router-dom";

import Navigation from "../Navigation/Navigation";
import css from "./header.module.css";

const Header = () => {
  return (
    <div className={css.containerHeader}>
      <header className={css.headerItem}>
        <h1 className={css.mainLogo}>
          <NavLink className={css.logoStyled} to="/">
            TOP MOVIES
          </NavLink>
        </h1>
        <Navigation />
      </header>
    </div>
  );
};

export default Header;
