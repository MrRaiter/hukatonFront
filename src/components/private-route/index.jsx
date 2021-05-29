/* eslint-disable no-restricted-globals */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import { Route, Redirect } from 'react-router-dom';
import axios from 'axios';

const PrivateRoute = ({ children, ...rest }) => {
  let token = localStorage.getItem('token');
  axios.defaults.headers.common.authorization = token || '';

  if (token === 'undefined' || !token) {
    token = null;
  }

  const authenticated = () => {
    if (token === 'undefined' || !token) {
      token = null;
    }
    return token;
  };
  const isAuthenticated = authenticated();
  return (
    <>
      {isAuthenticated && <Route {...rest} render={() => children} />}
      {(!isAuthenticated || location.pathname === '/') && (
        <Redirect to="/login" />
      )}
    </>
  );
};

export default PrivateRoute;
