import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
// import { useAuth } from '../../Context/UserContext';
import {UserContext} from "../../Context/UserContext"

const PrivateRoute = ({ component: Component, ...rest }) => {
  // const { authToken } = useAuth();
  const userToken=localStorage.getItem('userToken')
  const {userData} = useContext(UserContext)
  
  return (
    <Route
      {...rest}
      render={(props) =>
        userToken || userData? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
