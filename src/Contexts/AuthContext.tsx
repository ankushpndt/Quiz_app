import axios, { AxiosError } from "axios";
import React, { createContext, useContext, useState } from "react";
import { ServerError } from "../types/serverError.type";
import { useNavigate } from "react-router-dom";
import {
	authContext,
	LoginUserDetails,
	SignUpUserDetails,
} from "./AuthContext.type";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const AuthContext = createContext<authContext>({} as authContext);

export const AuthProvider = ({ children }: { children?: React.ReactNode }) => {
	const navigate = useNavigate();

	const localStorageDetails = localStorage?.getItem("login");
	const {
		isUserLoggedIn,
		token: savedToken,
		user: userName,
	} = localStorageDetails
		? JSON.parse(localStorageDetails)
		: {
				isUserLoggedIn: false,
				token: "",
				user: "",
		  };

	const [login, setLogin] = useState<boolean>(isUserLoggedIn);
	const [token, setToken] = useState<string>(savedToken);
	const [error, setError] = useState("");
	const [user, setUser] = useState<string>(userName);
	const [loader, setLoader] = useState(false);
	//signup

	const signUpWithCredentials = async ({
		name,
		email,
		password,
	}: SignUpUserDetails) => {
		try {
			setLoader(true);
			const response = await axios.post(
				"https://quizBackend.ankushpndt.repl.co/user/signup",
				{ name: name, email: email, password: password }
			);

			if (response.data.success === true) {
				const { token, userName } = response?.data;
				setToken(token);
				setLogin(true);
				setUser(userName);
				localStorage.setItem(
					"login",
					JSON.stringify({ isUserLoggedIn: true, token, user: userName })
				);
				setLoader(false);
				toast.success("Signing you up", {
					position: "bottom-center",
				});
			}
			response.data.success === true ? navigate("/") : navigate("/login");
		} catch (error) {
			if (axios.isAxiosError(error)) {
				const serverError = error as AxiosError<ServerError>;
				if (serverError && serverError.response) {
					toast.error(serverError.response.data.message, {
						position: "bottom-center",
					});
					setLoader(false);
					return serverError.response.data;
				}
			}
		}
	};

	const loginWithCredentials = async ({
		email,
		password,
	}: LoginUserDetails) => {
		try {
			setLoader(true);
			const response = await axios.post(
				"https://quizBackend.ankushpndt.repl.co/user/login",
				{
					email: email,
					password: password,
				}
			);
			if (response.data.success === true) {
				const { token, userName } = response?.data;
				setToken(token);
				setLogin(true);
				setUser(userName);
				localStorage.setItem(
					"login",
					JSON.stringify({ isUserLoggedIn: true, token, user: userName })
				);
				setLoader(false);
				toast.success("Logging you in", {
					position: "bottom-center",
				});
			}

			response.data.success === true ? navigate("/") : navigate("/login");
		} catch (error) {
			if (axios.isAxiosError(error)) {
				const serverError = error as AxiosError<ServerError>;
				if (serverError && serverError.response) {
					toast.error(serverError.response.data.message, {
						position: "bottom-center",
					});
					setLoader(false);
					return serverError.response.data;
				}
			}
		}
	};
	const userLogout = async () => {
		localStorage.removeItem("login");
		setLogin(false);
		setToken("");
		setUser("");
		navigate("/login");
	};

	return (
		<AuthContext.Provider
			value={{
				login,
				loginWithCredentials,
				signUpWithCredentials,
				error,
				token,
				userLogout,
				user,
				setError,
				loader,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
export const useAuth = () => useContext(AuthContext);
