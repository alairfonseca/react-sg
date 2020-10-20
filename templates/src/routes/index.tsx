import React, { FC, lazy, Suspense } from 'react';
import { useAuth } from "../contexts/Auth";

const PrivateRoutes = lazy(() => import('./private'));
const PublicRoutes = lazy(() => import('./public'));

const Routes: FC = () => {
  const { signedIn, loading } = useAuth();

  if (!loading) {
    return (
      <Suspense fallback={<>Carregando...</>}>
        { signedIn ? <PrivateRoutes /> : <PublicRoutes /> }
      </Suspense>
    );
  }

  return <>Carregando...</>;
};

export default Routes;
