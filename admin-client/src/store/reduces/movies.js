const initialState = {
  data: [],
  dataEdit: {},
  dataGenres: [],
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_MOVIES":
      return { ...state, data: action.payload };
    case "GET_MOVIES_BY_ID":
      return { ...state, dataEdit: action.payload };
    case "FETCH_GENRES_SUCESS":
      return { ...state, dataGenres: action.payload };
    default:
      return state;
  }
};

export default moviesReducer;
