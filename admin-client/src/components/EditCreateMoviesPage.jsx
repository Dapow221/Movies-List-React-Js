import Sidenav from "./SideNav";
import Footer from "./Footer";
import Header from "./Header";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postMovies } from "../store/actions";
import { Link, useNavigate } from 'react-router-dom'
import { fetchGenres } from "../store/actions";

export default function AddEditMovies() {
  const genres = useSelector((state) => state.movies.dataGenres)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchGenres())
  }, [])

  const navigate = useNavigate()
  const [ movieAdd, setMoviesAdd ] = useState({
    title: '',
    genreId: '',
    synopsis: '',
    trailerUrl: '',
    rating: 0,
    imgUrl: '',
    slug: '',
    cast: [
      {
        name: '',
        profilePict: ''
      },
      {
        name: '',
        profilePict: ''
      }
    ]
  })


  function changeHandler(e) {
    const { name, value } = e.target

    setMoviesAdd({
        ...movieAdd,
        [ name ] : value
    })
  }

  function submitHandler(e) {
    e.preventDefault()
    dispatch(postMovies(movieAdd, navigate))
  }

  function changeHandlerCasts(e, index) {
    const { name , value } = e.target
    const dataCasts = [...movieAdd.cast]
    dataCasts[index] = {
      ...dataCasts[index],
      [name] : value
    }

    setMoviesAdd({
      ...movieAdd,
      cast: dataCasts
    })

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
                        Create Movie
                      </h1>
                    </div>
                    <div className="col-12 col-xl-auto mb-3">
                      <Link className="btn btn-sm btn-light text-dark" to='/movies'>
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
                <form onSubmit={submitHandler}>
                  <div className="col-lg-8">
                    <div className="card mb-4">
                      <div className="card-header text-dark">Title</div>
                      <div className="card-body">
                        <input
                          name="title"
                          value={movieAdd.title}
                          onChange={changeHandler}
                          className="form-control"
                          id="title-create-from"
                          type="text"
                          placeholder="Enter movie title..."
                        />
                      </div>
                    </div>
                    <div className="card mb-4">
                      <div className="card-header text-dark">Slug</div>
                      <div className="card-body">
                        <input
                          name="slug"
                          value={movieAdd.slug}
                          onChange={changeHandler}
                          className="form-control"
                          id="title-create-from"
                          type="text"
                          placeholder="Enter movie slug..."
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
                          value={movieAdd.genreId}
                          onChange={changeHandler}
                        >
                          <option selected value=''>Select Genre</option>
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
                          className="form-control"
                          id="title-create-from"
                          type="text"
                          placeholder="Enter movie synopsis..."
                          name="synopsis"
                          value={movieAdd.synopsis}
                          onChange={changeHandler}
                        />
                      </div>
                    </div>
                    <div className="card mb-4">
                      <div className="card-header text-dark">Trailer Url</div>
                      <div className="card-body">
                        <input
                          className="form-control"
                          id="title-create-from"
                          type="text"
                          placeholder="Enter movie trailer..."
                          name="trailerUrl"
                          value={movieAdd.trailerUrl}
                          onChange={changeHandler}
                        />
                      </div>
                    </div>
                    <div className="card mb-4">
                      <div className="card-header text-dark">Rating</div>
                      <div className="card-body">
                        <input
                          className="form-control"
                          id="title-create-from"
                          type="text"
                          placeholder="Enter movie rating..."
                          name="rating"
                          value={movieAdd.rating}
                          onChange={changeHandler}
                        />
                      </div>
                    </div>
                    <div className="card mb-4">
                      <div className="card-header text-dark">Image</div>
                      <div className="card-body">
                        <input
                          className="form-control"
                          id="title-create-from"
                          type="text"
                          placeholder="Enter movie image..."
                          name="imgUrl"
                          value={movieAdd.imgUrl}
                          onChange={changeHandler}
                        />
                      </div>
                    </div>
                    <div className="card mb-4">
                      <div className="card-header text-dark">Casts</div>
                      <div className="card-body">
                        <input
                          className="form-control"
                          id="title-create-from"
                          type="text"
                          placeholder="Enter your name"
                          name="name"
                          value={movieAdd.cast[0].name}
                          onChange={(e) => changeHandlerCasts(e, 0)}
                        />
                      </div>
                      <div className="card-body">
                        <input
                          className="form-control"
                          id="title-create-from"
                          type="text"
                          placeholder="Enter your profile"
                          name="profilePict"
                          value={movieAdd.cast[0].profilePict}
                          onChange={(e) => changeHandlerCasts(e, 0)}
                        />
                      </div>
                    </div>
                    <div className="card mb-4">
                      <div className="card-header text-dark">Casts</div>
                      <div className="card-body">
                        <input
                          className="form-control"
                          id="title-create-from"
                          type="text"
                          placeholder="Enter your name"
                          name="name"
                          value={movieAdd.cast[1].name}
                          onChange={(e) => changeHandlerCasts(e, 1)}
                        />
                      </div>
                      <div className="card-body">
                        <input
                          className="form-control"
                          id="title-create-from"
                          type="text"
                          placeholder="Enter your profile"
                          name="profilePict"
                          value={movieAdd.cast[1].profilePict}
                          onChange={(e) => changeHandlerCasts(e, 1)}
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



