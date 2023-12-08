import Footer from "./Footer";
import Sidenav from "./SideNav";
import Header from "./Header";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, deletedMovies, findMoviesById } from "../store/actions";
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router'

export default function MoviesPage() {
  const movies = useSelector((state) => state.movies.data);
  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch(fetchMovies())
  }, []);

  useEffect(() => {
    dispatch(findMoviesById(id))
  }, [])

  function handlerDelete(id) {
    dispatch(deletedMovies(id)) 
  }
  return (
    <>
      <Header />
      <div id="layoutSidenav">
        <Sidenav />
        <div id="layoutSidenav_content">
          <main>
            <header className="page-header page-header-dark bg-dark pb-10">
              <div className="container-xl px-4">
                <div className="page-header-content pt-4">
                  <div className="row align-items-center justify-content-between">
                    <div className="col-auto mt-4">
                      <h1 className="page-header-title">
                        <div className="page-header-icon">
                          <i data-feather="filter"></i>
                        </div>
                        Movies
                      </h1>
                      <div className="page-header-subtitle">
                        This is the movies big data's where you can find the
                        most popular movie in the world.
                      </div>
                    </div>
                    <div className="col-12 col-xl-auto mb-3">
                      <Link to='/movies/add' className="btn btn-sm btn-light text-dark">
                        <i className="me-1" data-feather="plus"></i>
                        ADD MOVIE
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </header>
            <div className="container-xl px-4 mt-n10">
              <div className="card mb-4">
                <div className="card-body">
                  <table id="datatablesSimple">
                    <thead>
                      <tr>
                        <th>Cover Image</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Synopsis</th>
                        <th>Genre</th>
                        <th>Rating</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      { movies.map((movie) => {
                        return (
                          <tr>
                            <td>
                              <img
                                src={movie.imgUrl}
                                style={{ width: "150px" }}
                                alt="Movie Cover"
                              />
                            </td>
                            <td>{movie.title}</td>
                            <td>{movie.authorId}</td>
                            <td>{movie.synopsis}</td>
                            <td>{movie.rating}</td>
                            <td>{movie.genreId}</td>
                            <td>
                              <Link to={'/movies/' + movie.id }  type="button" className="btn btn-primary">Edit</Link>
                              <button type="button" className="btn btn-danger" onClick={() => {handlerDelete(movie.id)}}>Delete</button>
                            </td>
                          </tr>
                        )
                      }) }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
