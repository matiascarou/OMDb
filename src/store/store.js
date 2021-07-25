import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movies";
import logger from "redux-logger";
import singleMovieReducer from "./singleMovie";
import paginationCounterReducer from "./paginationCounter";
import totalPagesReducer from "./totalPages";
import searchReducer from "./search";
import validatedUserReducer from "./validatedUser";
import favoritesReducer from "./userFavorites";
import usersReducer from "./users";
import searchUserReducer from "./searchUser";
import singleUserReducer from "./singleUser";

//{serializableCheck: false}

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    movies: moviesReducer,
    singleMovie: singleMovieReducer,
    paginationCounter: paginationCounterReducer,
    totalPages: totalPagesReducer,
    search: searchReducer,
    validatedUser: validatedUserReducer,
    userFavorites: favoritesReducer,
    users: usersReducer,
    searchUser: searchUserReducer,
    singleUser: singleUserReducer,
  },
});

export default store;
