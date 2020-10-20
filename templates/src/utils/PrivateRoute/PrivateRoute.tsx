import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/Auth/auth';

type Props = {
  component: React.ReactElement | null;
  redirectTo?: string;
  path: string;
};

const PrivateRoute = ({ redirectTo, component, ...rest }: Props) => {
  const { signedIn } = useAuth();

  if (signedIn) {
    return <Route {...rest} element={component} />;
  }

  return <Navigate to={{pathname: redirectTo ? redirectTo! : '/'}} />;
};

export default PrivateRoute;
