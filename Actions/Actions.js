import store from './Store';
export const _addUserDetails = (values) => {
  store.dispatch({
    type: 'ADD_USER_DETAIL',
    username: values.username,
    password: values.password,
    email: values.email,
    phone: values.phone,
  });
};
export const _addLoginCredentials = (values) => {
  store.dispatch({
    type: 'ADD_LOGIN_CREDENTIALS',
    email: values.email,
    pass: values.pass,
  });
};
export const _addUsername = (values) => {
  store.dispatch({
    type: 'DISPLAY_USERNAME',
    email: values.email,
  });
};
