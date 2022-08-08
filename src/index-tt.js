import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//Basic #1
// import {createStore} from 'redux';
// function reducer(state,action) {
//   if(action.type==='changeState'){
//     return action.payload.newState
//   }
// }
// const store = createStore(reducer);
// const action = {
//   type: 'changeState',
//   payload: {
//     newState: 'New State'
//   }
// }

//Basic #2
// import {combineReducers, createStore} from 'redux';
// function productsReducer(state=[],action) {
// return state;
// }
// function usersReducer(state='',action) {
//   switch (action.type) {
//     case 'updateUser': 
//     return action.payload;
//   }
//   return state
// }
// const allReducers = combineReducers({
//   products: productsReducer,
//   user:usersReducer
// })
// const store = createStore(
//   allReducers,{
//   products:[{name: 'iPhone', price:'$400'},{name: 'Samsung', price:'$390'}],
//   user:'Michel'
// },
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )

// const updateUserAction = {
//   type: 'updateUser',
//   payload: {
//     user: 'John'
//   }
// }
// store.dispatch(updateUserAction)
// console.log(store.getState())


//Basic #3
import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';
import productsReducer from './reducers/products-reducer';
//import usersReducer from './reducers/users-reducer';


const allReducers = combineReducers({
  products: productsReducer,
  //user:usersReducer
})
const store = createStore(productsReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


//store.dispatch(updateUserAction)

ReactDOM.render(
    <Provider store = {store}><App /></Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
