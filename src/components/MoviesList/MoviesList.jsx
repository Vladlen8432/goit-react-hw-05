import { Link, useLocation } from "react-router-dom";

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <div>
      <ul>
        {movies.map(({ id, title, name, original_title, poster_path }) => (
          <li key={id}>
            <Link state={{ from: location }} key={id} to={`/movies/${id}`}>
              <img
                src={
                  (poster_path = `https://image.tmdb.org/t/p/w300/${poster_path}`)
                }
                alt={title || name || original_title}
              />
              <h2>{title || name || original_title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
