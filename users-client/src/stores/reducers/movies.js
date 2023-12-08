const initialState = {
    data: [],
    dataDetail: {}
  };
  
  const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_MOVIES":
        return { ...state, data: action.payload };
      case "GET_MOVIES_BY_ID":
        return { ...state, dataDetail: action.payload };
      default:
        return state;
    }
  };
  
  export default moviesReducer;
  