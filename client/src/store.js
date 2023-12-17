import {combineReducers} from 'redux'

// import {createStore,applyMiddleware} from 'redux' 
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import {composeWithDevTools} from 'redux-devtools-extension'
import { loginUserReducer, registerUserReducer } from './reducers/userReducer';
import {getAllMenusReducer, addMenuReducer, getMenuByIdReducer} from './reducers/menuReducers'
import {cartReducer} from './reducers/cartReducer';
import { placeorderReducer,getUserOrdersReducer } from './reducers/orderReducer';


const finalReducer = combineReducers({
    getAllMenusReducer : getAllMenusReducer,
    cartReducer : cartReducer,
    registerUserReducer : registerUserReducer,
    loginUserReducer:loginUserReducer,
    placeorderReducer:placeorderReducer,
    getUserOrdersReducer:getUserOrdersReducer,
    addMenuReducer:addMenuReducer,
    getMenuByIdReducer:getMenuByIdReducer,
})
const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null

const initialState={
  cartReducer :{
    cartItems : cartItems
  },
  loginUserReducer :{
    currentUser:currentUser
  }
}
const middleware = [thunk];
const composeEnhancers = composeWithDevTools({})
// const store = createStore(finalReducer,initialState,composeEnhancers(applyMiddleware(thunk)))
const store = configureStore({
    reducer: finalReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(...middleware),
    enhancers: [composeEnhancers],
    preloadedState: initialState,
  });
export default store;