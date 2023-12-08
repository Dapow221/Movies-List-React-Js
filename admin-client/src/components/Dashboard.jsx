import Sidenav from "./SideNav";
import FooterBar from "./Footer";
import Header from "./Header";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchGenres, fetchMovies } from "../store/actions";

function DashboardPage() {
  const genres = useSelector((state) => state.movies.dataGenres)
  const movies = useSelector((state) => state.movies.data)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchGenres())
    dispatch(fetchMovies())
  }, [])

  return (
    <>
    <Header/>
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
                      <div className="page-header-icon"><i data-feather="activity"></i></div>
                      Dashboard
                    </h1>
                    <div className="page-header-subtitle">Overview and content summary</div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div className="container-xl px-4 mt-n10">
            <div className="row">
              <div className="col-xxl-4 col-xl-12 mb-4">
                <div className="card h-100">
                  <div className="card-body h-100 p-5">
                    <div className="row align-items-center">
                      <div className="col-xl-8 col-xxl-12">
                        <div className="text-center text-xl-start text-xxl-center mb-4 mb-xl-0 mb-xxl-4">
                          <h1 className="text-dark">Welcome to Movie Database!</h1>
                          <p className="text-gray-700 mb-0">
                            Movie Database is the world's most popular and authoritative source for movie content.
                            Find ratings for the latest and most popular movies.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-xl-3 mb-4">
                <div className="card bg-dark text-white h-100">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="me-3">
                        <div className="text-white-75 small">Total Movies</div>
                        <div className="text-lg fw-bold">{ movies.length}</div>
                      </div>
                      <i className="feather-xl text-white-50" data-feather="calendar"></i>
                    </div>
                  </div>
                  <div className="card-footer d-flex align-items-center justify-content-between small">
                    <a
                      className="text-white stretched-link"
                    >
                      View Data
                    </a>
                    <div className="text-white"><i className="fas fa-angle-right"></i></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xl-3 mb-4">
                <div className="card bg-danger text-white h-100">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="me-3">
                        <div className="text-white-75 small">Total Genres</div>
                        <div className="text-lg fw-bold">{ genres.length }</div>
                      </div>
                      <i className="feather-xl text-white-50" data-feather="dollar-sign"></i>
                    </div>
                  </div>
                  <div className="card-footer d-flex align-items-center justify-content-between small">
                    <a
                      className="text-white stretched-link"
                    >
                      View Data
                    </a>
                    <div className="text-white"><i className="fas fa-angle-right"></i></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main> 
        <FooterBar />
      </div>
    </div>
    </>
  );
}

export default DashboardPage;
