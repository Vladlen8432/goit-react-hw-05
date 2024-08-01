import { NavLink, Routes, Route, useLocation } from "react-router-dom";

import MovieCast from "../../components/MovieCast/MovieCast";
import MovieReviews from "../../components/MovieReviews/MovieReviews";

const MovieDetailsPage = () => {
  const location = useLocation();
  const previousLocation = location.state;

  console.log(previousLocation);

  return (
    <div>
      <NavLink to={previousLocation}>Go back</NavLink>
      <h1>Movie Details Page</h1>

      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>

        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="cast" element={<MovieCast />} />
        <Route path="reviews" element={<MovieReviews />} />
      </Routes>
    </div>
  );
};

export default MovieDetailsPage;
