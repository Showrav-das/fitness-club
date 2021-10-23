import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/UseAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { users, isLoad } = useAuth();
    if (isLoad) {
        return;
    }
    return (
        <Route
        {...rest}
        render={({ location }) =>
          users?.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;