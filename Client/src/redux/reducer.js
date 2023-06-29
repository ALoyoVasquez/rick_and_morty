import { ADD_FAV, REMOVE_FAV, GET_FAV, FILTER, ORDER } from "./action";

const initialState = {
  myFavorites: [],
  allCharacters : [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // case ADD_FAV: {
    //   let copy1 = state.allCharacters;
    //   copy1.push(action.payload) //!ATENTO
    //   return { ...state, myFavorites : copy1, allCharacters : copy1  };
    // }
    case ADD_FAV :
      return { ...state, myFavorites: action.payload, allCharacters: action.payload };
    
    // case REMOVE_FAV: {
    //   let copy2 = state.myFavorites.filter((char) => {
    //     return char.id !== Number(action.payload)
    //     })
    // return { ...state, myFavorites: copy2 }
    // }
    case REMOVE_FAV:
      return { ...state, myFavorites: action.payload };

    case FILTER:
      let copy3 = state.allCharacters.filter((char) => {
          return char.gender === action.payload
      })
      return { ...state, myFavorites: copy3 }

  case ORDER:
      let copy4 = state.allCharacters.sort((a, b) => {
          return action.payload === 'A' ? a.id - b.id : b.id - a.id
      });
      return {...state, myFavorites: copy4  }

  case GET_FAV :
    return{
      ...state, myFavorites: action.payload, allCharacters: action.payload
    }

    default:
        return {...state};
  }
};

export default rootReducer;
