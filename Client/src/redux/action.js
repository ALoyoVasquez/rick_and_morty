import axios from "axios";

export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER = "FILTER";
export const ORDER = "ORDER";
export const GET_FAV = 'GET_FAV';

const URL = "http://localhost:3001/rickandmorty/fav";
// export const addFav = (character) => {
//   return { type: ADD_FAV, payload: character };
// };

// ACTION | addFav
export const addFav = (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav";

  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, character);
      // .then(({ data }) => {
      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

// export const removeFav = (id) => {
//   return { type: REMOVE_FAV, payload: id };
// };
// ACTION | removeFav
export const removeFav = (id) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;

  return async (dispatch) => {
    try {
      const { data } = await axios.delete(endpoint);
      // .then(({ data }) => {
      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    } catch (error) {
      console.log({ error: error.message });
    }
  };
};

export const filterCards = (gender) => {
  return { type: FILTER, payload: gender };
};

export const orderCards = (orden) => {
  return { type: ORDER, payload: orden };
};
