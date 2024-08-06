import { NavLink } from "react-router-dom";
import css from "./navigation.module.css";

const Navigation = () => {
  return (
    <div>
      <header className={css.headerItem}>
        <nav>
          <ul className={css.listHeader}>
            <li>
              <NavLink className={css.navLinkHeader} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={css.navLinkHeader} to="/movies">
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navigation;
