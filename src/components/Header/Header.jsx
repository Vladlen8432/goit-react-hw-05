import { NavLink } from "react-router-dom";
import css from "./header.module.css";

const Header = () => {
  return (
    <div>
      <header className={css.containerHeader}>
        <h1>
          <NavLink className={css.navLinkStyled} to="/">
            Logo✌️
          </NavLink>
        </h1>
        <nav>
          <ul className={css.listStyled}>
            <li>
              <NavLink className={css.navLinkStyled} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={css.navLinkStyled} to="/movies">
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
