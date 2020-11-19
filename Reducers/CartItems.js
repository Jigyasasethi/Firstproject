const cartItems = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.payload];
    case 'REMOVE_FROM_CART':
      return state.filter((cartItem) => cartItem.id !== action.payload.id);
  }

  return state;
};
const user = (state = [], action) => {
  switch (action.type) {
    case 'ADD_USER_DETAIL':
      return {
        firstname: action.firstname,
        lastname: action.lastname,
        address: action.address,
        city: action.city,
        State: action.State,
        country: action.country,
      };

    case 'ADD_LOGIN_CREDENTIALS':
      return {
        ...state,
        email: action.email,
        pass: action.pass,
      };
    default:
      return state;
  }
};

export default cartItems;
