export interface User {
  name: string;
  email: string;
}

export interface AuthContextData {
  signedIn: boolean;
  user: User | null;
  signIn(email: string, password: string): Promise<void>;
  signOut(): void;
  loading: boolean;
}