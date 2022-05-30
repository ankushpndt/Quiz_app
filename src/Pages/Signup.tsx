import { useAuth } from "../Contexts/AuthContext";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { TextField } from "@mui/material";
import { validateForm } from "../Components/ValidateForm";
import "./Account.css";
import { Loader } from "../Components/Loader";
import { useTheme } from "../Contexts/ThemeContext";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
export const Signup = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [errorMessage, setErrorMessage] = useState<string>("");
	const [showPass, setShowPass] = useState(false);
	const { signUpWithCredentials, error, setError, loader } = useAuth();

	const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		validateForm({ name, email, password, setErrorMessage }) &&
			signUpWithCredentials({ name, email, password });
		setError("");
	};
	const { theme } = useTheme();
	return (
		<div className={`${theme === "dark" ? "login" : "login__light"}`}>
			{!loader ? (
				<form
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
					className={`${
						theme === "dark" ? "login__form" : "login__form__light"
					}`}
					onSubmit={submitHandler}
				>
					<h2
						style={{
							color: `${theme === "dark" ? "white" : "rgba(37, 52, 73, 1)"}`,
						}}
					>
						Sign Up
					</h2>
					<br />
					<TextField
						type="text"
						label="Name"
						name="fullName"
						helperText="Enter your name here"
						onChange={(e) => setName(e.target.value)}
						required
						value={name}
						sx={{
							input: {
								color: `${theme === "dark" ? "white" : "rgba(37, 52, 73, 1)"}`,
							},
						}}
						InputLabelProps={{
							style: {
								color: `${theme === "dark" ? "white" : "rgba(37, 52, 73, 1)"}`,
							},
						}}
						FormHelperTextProps={{
							style: {
								color: `${theme === "dark" ? "white" : "rgba(37, 52, 73, 1)"}`,
							},
						}}
					/>

					<br />
					<TextField
						type="text"
						label="Email"
						name="email"
						helperText="Enter your email here"
						onChange={(e) => setEmail(e.target.value)}
						required
						value={email}
						sx={{
							input: {
								color: `${theme === "dark" ? "white" : "rgba(37, 52, 73, 1)"}`,
							},
						}}
						InputLabelProps={{
							style: {
								color: `${theme === "dark" ? "white" : "rgba(37, 52, 73, 1)"}`,
							},
						}}
						FormHelperTextProps={{
							style: {
								color: `${theme === "dark" ? "white" : "rgba(37, 52, 73, 1)"}`,
							},
						}}
					/>
					<br />
					<TextField
						type={showPass ? "text" : "password"}
						label="Password"
						name="password"
						helperText="Enter your password here"
						onChange={(e) => setPassword(e.target.value)}
						required
						value={password}
						sx={{
							input: {
								color: `${theme === "dark" ? "white" : "rgba(37, 52, 73, 1)"}`,
							},
						}}
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<IconButton
										aria-label="toggle password visibility"
										onClick={() => setShowPass(!showPass)}
										onMouseDown={(e) => e.preventDefault()}
										edge="end"
									>
										{showPass ? (
											<VisibilityOff
												sx={{
													color: `${
														theme === "dark" ? "white" : "rgba(37, 52, 73, 1)"
													}`,
												}}
											/>
										) : (
											<Visibility
												sx={{
													color: `${
														theme === "dark" ? "white" : "rgba(37, 52, 73, 1)"
													}`,
												}}
											/>
										)}
									</IconButton>
								</InputAdornment>
							),
						}}
						InputLabelProps={{
							style: {
								color: `${theme === "dark" ? "white" : "rgba(37, 52, 73, 1)"}`,
							},
						}}
						FormHelperTextProps={{
							style: {
								color: `${theme === "dark" ? "white" : "rgba(37, 52, 73, 1)"}`,
							},
						}}
					/>
					<br />
					<div
						className={`${
							theme === "dark" ? "name__error" : "name__error__light"
						}`}
					>
						{errorMessage !== "" && errorMessage}
					</div>
					<div>{error?.message}</div>
					<br />
					<input
						type="submit"
						value="Sign up"
						id={
							theme === "dark"
								? "login__btn__outlined"
								: "login__btn__outlined__light"
						}
					/>
					<br />
					<p>
						<NavLink
							style={{
								textDecoration: "none",
								color: `${theme === "dark" ? "white" : "rgba(37, 52, 73, 1)"}`,
							}}
							to="/login"
						>
							Login instead
						</NavLink>
					</p>
				</form>
			) : (
				<Loader />
			)}
		</div>
	);
};
