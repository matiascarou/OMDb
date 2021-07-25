import axios from "axios";

const ArrayPromisifier = (arr) => {
  if (arr.length) {
    arr = arr.map((favoritePromise, index) => {
      return axios
        .get(
          `https://www.omdbapi.com/?i=${favoritePromise.movieId}&apikey=62e1844`
        )
        .then((res) => res.data);
    });
    return Promise.all(arr).then((result) => result)
  }
};

export default ArrayPromisifier;
