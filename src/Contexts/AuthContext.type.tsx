import { getMaxListeners } from "process";
import { ServerError } from "../types/serverError.type";

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
	loader: boolean;
};

export type LoginUserDetails = {
	email: string;
	password: string;
};

export type SignUpUserDetails = {
	name: string;
	email: string;
	password: string;
};
