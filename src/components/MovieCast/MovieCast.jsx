import { useEffect, useState } from "react";
import { getCast } from "../../services/api";
import { useParams } from "react-router-dom";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const castData = await getCast(movieId);
        setCast(castData);
      } catch (error) {
        console.error("Error fetching cast data:", error);
      }
    };

    fetchCast();
  }, [movieId]);

  const handleImageError = (actorId) => {
    setCast((prevCast) => {
      const updatedCast = prevCast.map((actor) => {
        if (actor.id === actorId) {
          return { ...actor, imageFailed: true };
        }
        return actor;
      });

      const sortedCast = updatedCast.sort((a, b) => {
        if (a.imageFailed && !b.imageFailed) return 1;
        if (!a.imageFailed && b.imageFailed) return -1;
        return 0;
      });

      return sortedCast;
    });
  };

  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {cast.map((actor) => (
          <li key={actor.id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              alt={actor.name}
              onError={() => handleImageError(actor.id)}
            />
            {actor.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
