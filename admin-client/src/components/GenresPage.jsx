import Footer from "./Footer";
import Sidenav from "./SideNav";
import Header from "./Header";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGenres } from "../store/actions";

export default function GenresPage() {
  const genres = useSelector((state) => state.movies.dataGenres);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGenres());
  }, []);
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
                        Genres
                      </h1>
                      <div className="page-header-subtitle">
                        This is the movies genres big data's where you can find
                        the most popular movie genre in the world.
                      </div>
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
                        <th>#</th>
                        <th>Genre</th>
                      </tr>
                    </thead>
                    <tbody>
                      {genres.map((el) => {
                        return (
                          <tr>
                            <td>{el.id}</td>
                            <td>{el.name}</td>
                          </tr>
                        );
                      })}
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
