import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { AuthProvider } from "./Contexts/AuthContext";
import { BrowserRouter as Router } from "react-router-dom";
import { QuizProvider } from "./Contexts/QuizContext";
import { LeaderboardProvider } from "./Contexts/LeaderboardContext";
import { ThemeProvider } from "./Contexts/ThemeContext";

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<ThemeProvider>
				<AuthProvider>
					<LeaderboardProvider>
						<QuizProvider>
							<App />
						</QuizProvider>
					</LeaderboardProvider>
				</AuthProvider>
			</ThemeProvider>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);
