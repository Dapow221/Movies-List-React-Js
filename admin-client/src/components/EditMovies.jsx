import Sidenav from "./SideNav";
import Footer from "./Footer";
import Header from "./Header";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { findMoviesById, editMovies, fetchGenres } from "../store/actions";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"

export default function EditMovies() {
  const moviesById = useSelector((state) => state.movies.dataEdit);
  const genres = useSelector((state) => state.movies.dataGenres)
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const [edit, setEdit] = useState({
    title: "",
    synopsis: "",
    trailerUrl: "",
    rating: 0,
    imgUrl: "",
    genreId: "",
  });

  useEffect(() => {
    dispatch(findMoviesById(id));
    dispatch(fetchGenres())
  }, []);

  useEffect(() => {
    setEdit({
      title: moviesById.title,
      synopsis: moviesById.synopsis,
      trailerUrl: moviesById.trailerUrl,
      rating: moviesById.rating,
      imgUrl: moviesById.imgUrl,
      genreId: moviesById.Genre ? moviesById.Genre.name : 'Loading...'
    });
  }, [moviesById]);

  function handleSubmit(e) {
      e.preventDefault();
      dispatch(editMovies(edit, id))
      navigate("/movies");
  }

  function changeHandler(e) {
    const { name, value } = e.target;

    setEdit({
      ...edit,
      [name]: value,
    });
  }

  return (
    <>
      <Header />
      <div id="layoutSidenav">
        <Sidenav />
        <div id="layoutSidenav_content">
          <main>
            <header className="page-header page-header-compact page-header-light border-bottom bg-white mb-4">
              <div className="container-fluid px-4">
                <div className="page-header-content">
                  <div className="row align-items-center justify-content-between pt-3">
                    <div className="col-auto mb-3">
                      <h1 className="page-header-title">
                        <div className="page-header-icon">
                          <i data-feather="file-plus"></i>
                        </div>
                        Edit Movie
                      </h1>
                    </div>
                    <div className="col-12 col-xl-auto mb-3">
                      <Link to={'/movies'} className="btn btn-sm btn-light text-dark">
                        <i className="me-1" data-feather="arrow-left"></i>
                        Back to All Movies
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </header>
            <div className="container-fluid px-4">
              <div className="row gx-4">
                <form onSubmit={handleSubmit}>
                  <div className="col-lg-8">
                    <div className="card mb-4">
                      <div className="card-header text-dark">Title</div>
                      <div className="card-body">
                        <input
                          value={edit.title}
                          onChange={changeHandler}
                          name="title"
                          className="form-control"
                          id="title-create-from"
                          type="text"
                          placeholder="Enter movie title..."
                        />
                      </div>
                    </div>
                    <div className="card mb-4">
                      <div className="card-header text-dark">Genre</div>
                      <div className="card-body">
                        <select
                          className="form-select"
                          id="genre-create-form"
                          aria-label="Default select example"
                          name="genreId"
                          onChange={changeHandler}
                          value={edit.genreId}
                        >
                          {/* <option selected value="">
                            { edit.genreId }
                          </option> */}
                          { genres.map((el) => {
                            return (
                              <option value={el.id}>{el.name}</option>
                            )
                          })}
                        </select>
                      </div>
                    </div>
                    <div className="card mb-4">
                      <div className="card-header text-dark">Synopsis</div>
                      <div className="card-body">
                        <input
                          value={edit.synopsis}
                          onChange={changeHandler}
                          className="form-control"
                          id="title-create-from"
                          type="text"
                          placeholder="Enter movie synopsis..."
                          name="synopsis"
                        />
                      </div>
                    </div>
                    <div className="card mb-4">
                      <div className="card-header text-dark">Trailer Url</div>
                      <div className="card-body">
                        <input
                          value={edit.trailerUrl}
                          onChange={changeHandler}
                          className="form-control"
                          id="title-create-from"
                          type="text"
                          placeholder="Enter movie trailer..."
                          name="trailerUrl"
                        />
                      </div>
                    </div>
                    <div className="card mb-4">
                      <div className="card-header text-dark">Rating</div>
                      <div className="card-body">
                        <input
                          value={edit.rating}
                          onChange={changeHandler}
                          className="form-control"
                          id="title-create-from"
                          type="text"
                          placeholder="Enter movie rating..."
                          name="rating"
                        />
                      </div>
                    </div>
                    <div className="card mb-4">
                      <div className="card-header text-dark">Image</div>
                      <div className="card-body">
                        <input
                          value={edit.imgUrl}
                          onChange={changeHandler}
                          className="form-control"
                          id="title-create-from"
                          type="text"
                          placeholder="Enter movie image..."
                          name="imgUrl"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="card card-header-actions">
                      <div className="card-header text-dark">
                        Publish
                        <i
                          className="text-muted"
                          data-feather="info"
                          data-bs-toggle="tooltip"
                          data-bs-placement="left"
                        ></i>
                      </div>
                      <div className="card-body">
                        <div className="d-grid">
                          <button className="fw-500 btn btn-dark" type="submit">
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
