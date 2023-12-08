import bg from '../assets/footer-bg.jpg'
import './landing.scss'
import { useDispatch, useSelector } from 'react-redux'
import { findMoviesById } from '../stores/actions';
import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react';


function MoviesDetail() {
  const dispatch = useDispatch()
  const moviesDetail = useSelector((state) => state.movies.dataDetail)
  const { id } = useParams()

  useEffect(() => {
    dispatch(findMoviesById(id))
  }, [])

  return (
    <>
    <div className="landing" style={{backgroundImage: `url(${bg})`}}>
      <div className="container-xl px-4 mt-n10">
        <div className="row">
          <div className="col-md-12">
            <div
              className="card bg-dark text-white h-100"
              style={{ maxWidth: "540px", height: "20rem" }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={moviesDetail.imgUrl}
                    className="img-fluid rounded-start"
                    alt="Movie Poster"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Title: {moviesDetail.title}</h5>
                    <p className="card-text">Genre: {moviesDetail.Genre ? moviesDetail.Genre.name : 'Loading...'}</p>
                    <p className="card-text">Synopsis: {moviesDetail.synopsis}</p>
                    <p className="card-text">Rating: {moviesDetail.rating}</p>
                  </div>
                </div>
                <Link type="button" class="btn btn-success" to={'/'}>Back to homee</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default MoviesDetail;
