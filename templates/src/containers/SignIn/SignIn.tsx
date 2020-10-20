import React, { FC } from 'react';
// import { connect } from 'react-redux';
// import { AppState } from '../../store';
// import { signIn } from '../../state/currentUser/currentUserOperations';
import { Props } from './types';

import SignInForm from './SignInForm';
import { useAuth } from '../../contexts/Auth';

const SignIn: FC<Props> = props => {
  const { user, signIn } = useAuth();

  return (
    <div>
      {user ? user?.name : 'Sign In'}
      <SignInForm signIn={signIn} />
    </div>
  );
}

export default SignIn;
// const mapState = (state: AppState) => ({});

// const mapDispatch = {
//   signIn,
// };

// export default connect(mapState, mapDispatch)(SignIn);