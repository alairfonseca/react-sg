export type SignInFunction = (email: string, password: string) => void;

interface DispatchProps {
  // signIn: SignInFunction;
};

interface StateProps {};

export type Props = DispatchProps & StateProps;