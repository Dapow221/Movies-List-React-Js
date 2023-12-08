import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, findMoviesById } from "../stores/actions";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";

function MovieCard() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.data);
  const { id } = useParams()

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  useEffect(() => {
    dispatch(findMoviesById(id))
  })

  return (
    <div className="row">
      {movies.map((el) => (
        <div className="col-lg-6 col-xl-3 mb-4" key={el.id} style={{ marginBottom: '10px' }}>
          <Link to={'/movies/' + el.id}>
            <div className="card bg-dark text-white h-100">
              <img src={el.imgUrl} className="card-img-top" alt={el.title} />
              <div className="card-body">
                <p className="card-text">{el.title}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default MovieCard;
