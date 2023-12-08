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
  
  export const fetchMovies = () => {
    return async function (dispatch) {
      try {
        const response = await fetch("https://movies-server.dapow.online/user/movies");
        const responseBody = await response.json();
  
        dispatch(fetchMoviesSuccess(responseBody));
      } catch (error) {
        console.log(error);
      }
    };
  };
  
  export const findMoviesById = (id) => {
    return async function (dispatch) {
      try {
        const response = await fetch("https://movies-server.dapow.online/user/movies/" + id);
        const responseBody = await response.json();
  
        dispatch(findMoviesByIdSuccess(responseBody));
      } catch (error) {
        console.log(error);
      }
    };
  };
  
  