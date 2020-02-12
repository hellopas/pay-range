import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { LoginContext } from 'context/LoginContext';
import LoginPage from 'components/LoginPage';


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
