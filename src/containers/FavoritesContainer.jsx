import React from "react";
import Favorites from "../components/Favorites";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFavorites } from "../store/userFavorites";
import axios from "axios";

const FavoritesContainer = () => {
  const { validatedUser } = useSelector((store) => store);

  const dispatch = useDispatch();

  // const deleteHandler = (movieId) => {
  //   axios.delete('/api/auth/favorites', {headers: { authorization: `Bearer ${validatedUser.token}`}, data: { userId: validatedUser.user.id, movieId: movieId }})
  //   .then((res) => res.data)
  // }

  useEffect(() => {
    axios
      .get(`/api/auth`, {
        headers: { authorization: `Bearer ${validatedUser.token}` },
      })
      .then((userFavorites) => {
        let { favorites } = userFavorites.data;
        if (favorites) {
          favorites = favorites.map((favoritePromise, index) => {
            return axios
              .get(
                `https://www.omdbapi.com/?i=${favoritePromise.movieId}&apikey=62e1844`
              )
              .then((res) => res.data);
          });
          Promise.all(favorites).then((values) => {
            dispatch(setFavorites(values));
          });
        }
      });
  }, []);
  return <Favorites/>;
};

export default FavoritesContainer;
