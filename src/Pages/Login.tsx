import { useAuth } from "../Contexts/AuthContext";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Account.css";
import { TextField } from "@mui/material";
import { validateForm } from "../Components/ValidateForm";
import { validate } from "../types/ValidateForm.type";
import { LoginUserDetails } from "../Contexts/AuthContext.type";
import { Loader } from "../Components/Loader";
export const Login = () => {
	const { loginWithCredentials, error, setError, loader } = useAuth();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState<string>("");

	const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		validateForm({ email, password, setErrorMessage } as validate) &&
			loginWithCredentials({ email, password });
		setError("");
	};

	return (
		<div className="login">
			{!loader ? (
				<form
					onSubmit={submitHandler}
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						flexDirection: "column",
						margin: "1rem auto",
						padding: "4rem",
						border: "2px solid #f0f0f0",
						width: "20rem",
					}}
				>
					<h2>Login</h2>
					<br />
					<TextField
						id="standard__basic"
						label="Email"
						type="text"
						name="email"
						helperText="Enter your email here"
						onChange={(e) => setEmail(e.target.value)}
						required
						value={email}
					/>

					<br />
					<br />

					<TextField
						id="standard__basic"
						label="Password"
						type="password"
						name="password"
						helperText="Enter your password here"
						onChange={(e) => setPassword(e.target.value)}
						required
						value={password}
					/>
					<br />
					<div className="name__error">
						{errorMessage !== "" && errorMessage}
					</div>
					<div>{error?.message}</div>
					<br />
					{/*Login button*/}
					<input type="submit" value="LOGIN" id="login__btn__outlined" />
					<button
						id="login__btn__outlined"
						onClick={() =>
							loginWithCredentials({
								email: "a@gmail.com",
								password: "12345678",
							} as LoginUserDetails)
						}
						style={{ margin: "1rem 0" }}
					>
						Guest Login
					</button>
					<br />
					<p>
						<NavLink
							style={{
								textDecoration: "none",
								color: "black",
							}}
							to="/signup"
						>
							Create an account
						</NavLink>
					</p>
				</form>
			) : (
				<Loader />
			)}
		</div>
	);
};
