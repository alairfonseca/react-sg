/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { useAuth } from '../../contexts/Auth';
import { AppState } from '../../store';
import { setUserData, clearReduxStore } from '../../state/currentUser/currentUserOperations';
import { Props } from './types';

const Home: FC<Props> = props => {
  const { signedIn, user, signOut } = useAuth();
  const { setUserData } = props;

  useEffect(() => {
    if (signedIn) {
      setUserData(String(user?.email));
    }
  }, [])

  return (
    <div>
      Seja bem vindo {user?.name}!

      <button onClick={() => {
        signOut();
        props.clearReduxStore();
      }}>
        SAIR
      </button>
    </div>
  );
}

const mapState = (_: AppState) => ({});

const mapDispatch = {
  setUserData,
  clearReduxStore,
};

export default connect(mapState, mapDispatch)(Home);