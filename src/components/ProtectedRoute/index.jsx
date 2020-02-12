import React, { useContext } from 'react';
import { Route } from 'react-router-dom';

import { LoginContext } from 'context/LoginContext';
import LoginPage from 'components/LoginPage';

/**
 * Renders a <Route /> with either the Login page component (if user is logged out)
 * or the passed in component (if user is logged in).
 *
 * @param {Component} component 
 * @param {Obj} rest - The rest of the props
 */
const ProtectedRoute = ({ component: Component, ...rest }) => {

  const { userInfo }  = useContext(LoginContext);

  return (
    <Route
      render={props => userInfo.loggedIn 
        ? <Component {...props} /> 
        : <LoginPage {...props} /> 
      }
      {...rest}
    />
  );

};


export default ProtectedRoute;
