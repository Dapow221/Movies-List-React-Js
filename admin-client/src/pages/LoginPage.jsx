import { useState } from "react";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store/actions";

function LoginPage() {
const dispatch = useDispatch()
const navigate = useNavigate()

const [loginValue, setLogin] = useState({
    email: '',
    password: ''
})

function handlerChange(e) {
    const { name, value } = e.target
    setLogin({
        ...loginValue,
        [name]: value
    })
   
}

const handlerSubmit = (e) => {
    dispatch(login(loginValue, navigate))
    e.preventDefault()
}

  return (
    <div id="layoutAuthentication" className="bg-dark">
      <div id="layoutAuthentication_content">
        <main>
          <div className="container-xl px-4">
            <div className="row justify-content-center">
              <div className="col-xl-5 col-lg-6 col-md-8 col-sm-11">
                <div className="card my-5">
                  <div className="card-body p-5 text-center">
                    <h3 className="fw-light mb-3">Sign In :</h3>
                  </div>
                  <hr className="my-0" />
                  <div className="card-body p-5">
                    <form onSubmit={handlerSubmit}>
                      <div className="mb-3">
                        <label
                          className="text-gray-600 small"
                          htmlFor="emailExample"
                        >
                          Email address
                        </label>
                        <input
                          className="form-control form-control-solid"
                          name="email"
                          type="text"
                          aria-label="Email Address"
                          aria-describedby="emailExample"
                          value={loginValue.email}
                          onChange={handlerChange}
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          className="text-gray-600 small"
                          htmlFor="passwordExample"
                        >
                          Password
                        </label>
                        <input
                          className="form-control form-control-solid"
                          name="password"
                          type="password"
                          value={loginValue.password}
                          onChange={handlerChange}
                          aria-label="Password"
                          aria-describedby="passwordExample"
                        />
                      </div>
                      <div className="d-flex align-items-center justify-content-between mb-0">
                        <button className="btn btn-dark" type="submit">Login</button>
                      </div>
                    </form>
                  </div>
                  <hr className="my-0" />
                  <div className="card-body px-5 py-4">
                    <div className="small text-center text-dark">Welcome</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer/>
    </div>
  );
}

export default LoginPage