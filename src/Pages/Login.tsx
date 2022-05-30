import { useAuth } from "../Contexts/AuthContext";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Account.css";
import { TextField } from "@mui/material";
import { LoginUserDetails } from "../Contexts/AuthContext.type";
import { Loader } from "../Components/Loader";
import { useTheme } from "../Contexts/ThemeContext";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
export const Login = () => {
	const { loginWithCredentials, loader } = useAuth();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPass, setShowPass] = useState(false);
	const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		loginWithCredentials({ email, password });
	};
	const { theme } = useTheme();
	return (
		<div className={`${theme === "dark" ? "login" : "login__light"}`}>
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
					className={`${
						theme === "dark" ? "login__form" : "login__form__light"
					}`}
				>
					<h2
						style={{
							color: `${theme === "dark" ? "white" : "rgba(37, 52, 73, 1)"}`,
						}}
					>
						Login
					</h2>
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
					<br />
					<TextField
						id="standard__basic"
						label="Password"
						type={showPass ? "text" : "password"}
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
					{/* Login button */}
					<input
						type="submit"
						value="Login"
						id={
							theme === "dark"
								? "login__btn__outlined"
								: "login__btn__outlined__light"
						}
					/>
					<button
						id={
							theme === "dark"
								? "login__btn__outlined"
								: "login__btn__outlined__light"
						}
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
								color: `${theme === "dark" ? "white" : "rgba(37, 52, 73, 1)"}`,
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
