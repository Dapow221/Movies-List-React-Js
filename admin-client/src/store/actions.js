import Swal from "sweetalert2";

export const fetchMoviesSuccess = (payload) => {
  return {
    type: "GET_MOVIES",
    payload,
  };
};

export const findMoviesByIdSuccess = (payload) => {
  return {
    type: "GET_MOVIES_BY_ID",
    payload,
  };
};

export const loginSuccess = () => {
  return {
    type: "LOGIN_SUCCESS",
  };
};

export const logoutSuceess = () => {
  return {
    type: "LOGOUT_SUCCESS",
  };
};

export const fetchGenresSuccess = (payload) => {
  return {
    type: "FETCH_GENRES_SUCESS",
    payload,
  };
};

export const fetchMovies = () => {
  return async function (dispatch) {
    try {
      const response = await fetch("http://localhost:3000/movies", {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      const responseBody = await response.json();

      dispatch(fetchMoviesSuccess(responseBody));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchGenres = () => {
  return async function (dispatch) {
    try {
      const response = await fetch("http://localhost:3000/genres", {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      const responseBody = await response.json();

      dispatch(fetchGenresSuccess(responseBody));
    } catch (error) {
      console.log(error);
    }
  };
};

export const findMoviesById = (id) => {
  return async function (dispatch) {
    try {
      const response = await fetch("http://localhost:3000/movies/" + id, {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      const responseBody = await response.json();

      dispatch(findMoviesByIdSuccess(responseBody));
    } catch (error) {
      console.log(error);
    }
  };
};

export const editMovies = (data, id) => {
  return async function () {
    try {
      const response = await fetch("http://localhost:3000/movies/" + id, {
        method: "put",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token"),
        },
      });
      if (!response.ok) {
        throw { name: "error bang" };
      }
      Swal.fire("Success !", `Success to edit movies`, "success");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "upss ada yang salah ni!!",
        confirmButtonText: "Try Again",
      });
    }
  };
};

export const deletedMovies = (id) => {
  return async function (dispatch) {
    try {
      const response = await fetch("http://localhost:3000/movies" + id, {
        method: "delete",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token"),
        },
      });
      dispatch(fetchMovies());
      Swal.fire("Success !", `Success to delete movies`, "success");
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "upss ada yang salah ni!!",
        confirmButtonText: "Try Again",
      });
    }
  };
};

export const postMovies = (data, navigate) => {
  return async function () {
    try {
      const response = await fetch("http://localhost:3000/movies", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token"),
        },
        body: JSON.stringify(data),
      });
      navigate("/movies");
      Swal.fire("Success !", `Success to post movies`, "success");
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "upss ada yang salah ni!!",
        confirmButtonText: "Try Again",
      });
    }
  };
};

export const register = (data, navigate) => {
  return async function () {
    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const responseBody = await response.json()
      console.log(responseBody)
      if (response.ok) {
        navigate("/login");
      } else {
        throw { name: "error bang" };
      }
      Swal.fire("Success to register!");
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "upss ada yang salah ni!!",
        confirmButtonText: "Try Again",
      });
    }
  };
};

export const login = (data, navigate) => {
  return async function (dispatch) {
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      dispatch(loginSuccess());
      if (response.ok) {
        const responseData = await response.json();
        localStorage.setItem("access_token", responseData.access_token);
        navigate("/");
      } else {
        throw { name: "error bang" };
      }
      Swal.fire("Success !", `Welcome back!`, "success");
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "ups cobaa lagiii!!",
        confirmButtonText: "Try Again",
      });
    }
  };
};

export const logout = (navigate) => {
  return async function (dispatch) {
    try {
      localStorage.clear();
      navigate("/");
      dispatch(logoutSuceess());
      Swal.fire("Success to logout!");
    } catch (error) {
      console.log(error);
    }
  };
};
