interface DispatchProps {
  setUserData(email: string): void;
  clearReduxStore(): void;
}

export type Props = DispatchProps;