import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action";

const initialState = {
  myFavorites: [],
  allCharacters : [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV: {
      console.log(state);
      console.log(action);
      return { ...state, myFavorites: [...state.myFavorites, action.payload]
      };
    }

    case REMOVE_FAV: {
      return { ...state, myFavorites: state.myFavorites.filter((char) => char.id !== action.payload) };
    }

    case FILTER: {
      return {...state, myFavorites: state.allCharacters.filter((char) => char.gender !== action.gender)};
    }

    case ORDER: {
      return { ...state, myFavorites: state.allCharacters.filter((char) => char.gender !== action.gender) };
    }

    default:
        return {...state};
  }
};

export default rootReducer;
