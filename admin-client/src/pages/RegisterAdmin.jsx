import Footer from "../components/Footer"
import { useState } from "react"
import { register } from "../store/actions"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

export default function Register () {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [registerValue, setRegister] = useState({
      username: '',
      email: '',
      password: '',
      phoneNumber: '',
      address: ''
    })

    function handlerChange(e) {
      const { name, value } = e.target

      setRegister({
        ...registerValue,
        [name]: value
      })
    }

    function handlerSubmit(e) {
      e.preventDefault()
      dispatch(register(registerValue, navigate))
    }

    return (
        <div id="layoutAuthentication" className="bg-dark">
      <div id="layoutAuthentication_content">
        <main>
          <div className="container-xl px-4">
            <div className="row justify-content-center">
              <div className="col-lg-7">
                <div className="card shadow-lg border-0 rounded-lg mt-5">
                  <div className="card-header justify-content-center text-dark">
                    <h3 className="fw-light my-4">Create Account</h3>
                  </div>
                  <div className="card-body">
                    <form onSubmit={handlerSubmit}>
                      <div className="mb-3">
                        <label className="small mb-1" htmlFor="register-username">
                          Username
                        </label>
                        <input
                          className="form-control"
                          id="register-username"
                          type="text"
                          placeholder="Enter Username"
                          name="username"
                          value={registerValue.username}
                          onChange={handlerChange}
                        />
                      </div>

                      <div className="mb-3">
                        <label className="small mb-1" htmlFor="register-email">
                          Email
                        </label>
                        <input
                          className="form-control"
                          id="register-email"
                          type="email"
                          aria-describedby="emailHelp"
                          placeholder="Enter email address"
                          name="email"
                          value={registerValue.email}
                          onChange={handlerChange}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="small mb-1" htmlFor="register-password">
                          Password
                        </label>
                        <input
                          className="form-control"
                          id="register-password"
                          type="password"
                          placeholder="Enter password"
                          name="password"
                          value={registerValue.password}
                          onChange={handlerChange}
                        />
                      </div>

                      <div className="mb-3">
                        <label className="small mb-1" htmlFor="register-number">
                          Phone Number
                        </label>
                        <input
                          className="form-control"
                          id="register-number"
                          type="text"
                          placeholder="Enter Phone Number"
                          name="phoneNumber"
                          value={registerValue.phoneNumber}
                          onChange={handlerChange}
                        />
                      </div>

                      <div className="mb-3">
                        <label className="small mb-1" htmlFor="register-address">
                          Address
                        </label>
                        <input
                          className="form-control"
                          id="register-address"
                          type="text"
                          placeholder="Enter Address"
                          name="address"
                          value={registerValue.address}
                          onChange={handlerChange}
                        />
                      </div>

                      <div className="d-flex align-items-center justify-content-between mb-0">
                        <input className="btn btn-dark" type="submit" value="Create Account" />
                      </div>
                    </form>
                  </div>
                  <div className="card-footer text-center">
                    <div className="small text-dark">
                      Have an account?{' '}
                      <a
                        href="#"
                        style={{ color: 'red' }}
                      >
                        Go to login
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
    )
}