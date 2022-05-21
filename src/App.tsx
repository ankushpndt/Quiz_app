import "./Pages/App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { Home } from "./Pages/Home";
import { Quiz } from "./Pages/Quiz";
import { Login } from "./Pages/Login";
import { Signup } from "./Pages/Signup";
import { useAuth } from "./Contexts/AuthContext";
import { Leaderboard } from "./Pages/Leaderboard";
import { ToastContainer } from "react-toastify";
import { PageNotFound } from "./Pages/PageNotFound";
import { ShowResults } from "./Pages/ShowResults";
import { useTheme } from "./Contexts/ThemeContext";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
export const App = () => {
	const { userLogout, token } = useAuth();
	const { theme, changeTheme } = useTheme();
	return (
		<div className={`${theme === "dark" ? "dark__theme" : "light__theme"}`}>
			<div className={`${theme === "dark" ? "routes" : "routes__light"}`}>
				<NavLink
					className={`${theme === "dark" ? "route" : "route__light"}`}
					to="/"
					style={({ isActive }) => {
						return { fontWeight: isActive ? "bold" : "normal" };
					}}
				>
					Home
				</NavLink>
				{token && (
					<NavLink
						className={`${theme === "dark" ? "route" : "route__light"}`}
						to="/leaderboard"
						style={({ isActive }) => {
							return { fontWeight: isActive ? "bold" : "normal" };
						}}
					>
						Leaderboards
					</NavLink>
				)}

				{!token && (
					<NavLink
						className={`${theme === "dark" ? "route" : "route__light"}`}
						to="/login"
						style={({ isActive }) => {
							return { fontWeight: isActive ? "bold" : "normal" };
						}}
					>
						Login
					</NavLink>
				)}
				{!token && (
					<NavLink
						className={`${theme === "dark" ? "route" : "route__light"}`}
						to="/signup"
						style={({ isActive }) => {
							return { fontWeight: isActive ? "bold" : "normal" };
						}}
					>
						Sign Up
					</NavLink>
				)}
				{token && (
					<button
						style={{
							backgroundColor: "transparent",
							border: "none",
							color: `${theme === "dark" ? "white" : "black"}`,
							cursor: "pointer",
							fontSize: "1rem",
						}}
						onClick={userLogout}
					>
						Logout
					</button>
				)}
				<button
					onClick={() => changeTheme()}
					style={{
						backgroundColor: "transparent",
						border: "none",
						cursor: "pointer",
					}}
				>
					{theme === "dark" ? (
						<WbSunnyIcon sx={{ color: "white" }} />
					) : (
						<DarkModeIcon />
					)}
				</button>
			</div>
			<Routes>
				<Route
					path="/"
					element={
						<PrivateRoute>
							<Home />
						</PrivateRoute>
					}
				/>
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/quiz/:category" element={<Quiz />} />
				<Route
					path="/leaderboard"
					element={
						<PrivateRoute>
							<Leaderboard />
						</PrivateRoute>
					}
				/>
				<Route path="/results/:category" element={<ShowResults />} />
				<Route path="/*" element={<PageNotFound />} />
			</Routes>
			<ToastContainer autoClose={2000} theme="dark" />
		</div>
	);
};
