import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { logout } from '../store/actions';

function Sidenav() {
  const isLogin = useSelector((state) => state.session.isLogin);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handlerPage(value) {
    navigate(value);
  }

  function handlerLogout() {
    dispatch(logout(navigate));
  }

  const dataComponents = {
    className: "nav-link collapsed",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#collapseComponents",
    "aria-expanded": "false",
    "aria-controls": "collapseComponents",
  };

  return (
    <div id="layoutSidenav_nav">
      <nav className="sidenav shadow-right sidenav-dark">
        <div className="sidenav-menu">
          <div className="nav accordion" id="accordionSidenav">
            <div className="sidenav-menu-heading">Core</div>
            <a {...dataComponents}>
              <div className="nav-link-icon">
                <FontAwesomeIcon icon="fa-solid fa-table-columns" />
              </div>
              Dashboard
            </a>
            <div className="sidenav-menu-heading">Data</div>

            <Link
              onClick={() => { handlerPage('/movies') }}
              {...dataComponents}
            >
              <div className="nav-link-icon">
                <FontAwesomeIcon icon="fa-solid fa-table-columns" />
              </div>
              Movies
              <div className="sidenav-collapse-arrow"></div>
            </Link>

            <Link 
              onClick={() => { handlerPage('/genres') }}
              {...dataComponents}>
              <div className="nav-link-icon">
                <FontAwesomeIcon icon="fa-solid fa-table-columns" />
              </div>
              Genres
            </Link>

            <div className="sidenav-menu-heading">ACCOUNT</div>

            {isLogin ? (
              <Link
                onClick={() => { handlerLogout() }}
                {...dataComponents}
              >
                <div className="nav-link-icon">
                  <FontAwesomeIcon icon="fa-solid fa-table-columns" />
                </div>
                Logout
              </Link>
            ) : (
              <>
                <Link
                  onClick={() => { handlerPage('/login') }}
                  {...dataComponents}
                >
                  <div className="nav-link-icon">
                    <FontAwesomeIcon icon="fa-solid fa-table-columns" />
                  </div>
                  Login
                </Link>
                <Link
                  onClick={() => { handlerPage('/register/admin') }}
                  {...dataComponents}
                >
                  <div className="nav-link-icon">
                    <FontAwesomeIcon icon="fa-solid fa-table-columns" />
                  </div>
                  Register Admin
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Sidenav;
