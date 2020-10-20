export interface CurrentUser {
  id?: number;
  name?: string;
  email?: string;
}

export interface CurrentUserState {
  data: CurrentUser;
}
