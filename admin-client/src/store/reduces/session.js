const initialState = {
  isLogin: false,
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...state, isLogin: true };
    case "LOGOUT_SUCCESS":
      return { ...state, isLogin: false };
    default:
      return state;
  }
};

export default sessionReducer;
