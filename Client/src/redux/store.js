// import {createStore} from 'redux'
// import rootReducer from './reducer'
 
// const store = createStore(rootReducer);
  
// export default store;


import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducer';
import thunkMiddleware from 'redux-thunk'

 const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 
//  window.__REDUX_DEVTOOLS_EXTENSION__(),

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunkMiddleware)),
);

export default store;

// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//   applyMiddleware(thunkMiddleware),
// );