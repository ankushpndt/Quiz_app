import { ServerError } from '../types/serverError.type';
type Error = {
  message: string;
};
export type authContext = {
  loginWithCredentials: ({
    email,
    password,
  }: LoginUserDetails) => Promise<
    | ServerError
    | { success: boolean; message: string; errorMessage: string }
    | undefined
  >;
  userLogout: () => void;
  setError: (value: string) => void;
  signUpWithCredentials: ({
    email,
    password,
    name,
  }: SignUpUserDetails) => Promise<any>;
  login: boolean;
  error: any;
  token: string;
  user: string;
};

export type LoginUserDetails = {
  email: string;
  password: string;
};

export type SignUpUserDetails = {
  // userid: string;
  name: string;
  // userName: string;
  // token: string;
  email: string;
  password: string;
};
