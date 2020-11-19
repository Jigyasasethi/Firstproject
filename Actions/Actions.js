import store from './Store';
export const _addLoginCredentials = (values) => {
  store.dispatch({
    type: 'ADD_LOGIN_CREDENTIALS',
    email: values.email,
    pass: values.pass,
  });
};
