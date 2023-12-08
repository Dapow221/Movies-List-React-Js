import { legacy_createStore as createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";

import moviesReducer  from "./reducers/movies";

const rootReducer = combineReducers({
    movies: moviesReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export default store

