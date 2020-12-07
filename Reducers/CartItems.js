import React from 'react';
import {combineReducers} from 'redux';

const cartItems = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.payload];
    case 'REMOVE_FROM_CART':
      return state.filter((cartItem) => cartItem.id !== action.payload.id);
  }

  return state;
};
const userreducer = (
  state = {username: '', password: '', email: '', phone: ''},
  action,
) => {
  switch (action.type) {
    case 'ADD_USER_DETAIL':
      return {
        username: action.payload.username,
        password: action.payload.password,
        email: action.payload.email,
        phone: action.payload.phone,
      };

    case 'ADD_LOGIN_CREDENTIALS':
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
      };
    default:
      return state;
  }
};

const reducers = combineReducers({
  cartItems: cartItems,
  userred: userreducer,
});
export default reducers;
