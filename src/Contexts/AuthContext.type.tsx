import { ServerError } from '../types/serverError.type';
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
  signUpWithCredentials: ({
    email,
    password,
    name,
  }: SignUpUserDetails) => Promise<any>;
  login: boolean;
  error: string;
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
