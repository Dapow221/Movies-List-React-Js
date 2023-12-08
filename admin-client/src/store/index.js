import { legacy_createStore as createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";

import moviesReducer  from "./reduces/movies";
import sessionReducer from "./reduces/session";

const rootReducer = combineReducers({
    movies: moviesReducer,
    session: sessionReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export default store

