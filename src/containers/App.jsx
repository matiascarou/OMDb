import React from "react";
import LoginContainer from "./LoginContainer";
import MoviesContainer from "./MoviesContainer";
import SingleMovieContainer from "./SingleMovieContainer";
import NavBarContainer from "./NavBarContainer";
import MainSearchContainer from './MainSearchContainer'
import RegisterContainer from "./RegisterContainer";
import FavoritesContainer from '../containers/FavoritesContainer'
import { Switch, Route } from "react-router-dom";
import SearchSingleUser from "./SearchSingleUser";
import '../../src/index.css'

const App = () => {
  return (
    <div className='appMainDiv'>
      <NavBarContainer />
      <Switch>
        <Route exact path="/" render={() => <MainSearchContainer />} />
        <Route exact path="/users" render={() => <SearchSingleUser />} />
        <Route exact path="/users/login" render={() => <LoginContainer />} />
        <Route exact path="/users/register" render={() => <RegisterContainer />} />
        <Route path="/movies/:id" render={ ({match})  => <SingleMovieContainer match={match} />} />
        <Route path="/favorites" render={ ({match})  => <FavoritesContainer match={match} />} />
        <Route exact path="/movies" render={() => <MoviesContainer />} />
      </Switch>
    </div>
  );
};

export default App